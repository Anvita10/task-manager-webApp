import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardContent, Typography, Button, Box, TextField } from '@mui/material';
import { toggleTaskStatus, deleteTask } from '../redux/tasksSlice';

const TaskCard = ({ task, onUpdateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);
  const dispatch = useDispatch();

  const handleToggleStatus = () => {
    dispatch(toggleTaskStatus(task.id));
  };

  const handleSaveUpdate = () => {

    onUpdateTask(updatedTask);
    console.log("TaskCard Props:", { task, onUpdateTask })
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{padding:2}}>
      <Card>
        <CardContent>
          {isEditing ? (
            <>
              <TextField
                label="Title"
                name="title"
                value={updatedTask.title}
                onChange={handleChange}
              />
              <TextField
                label="Description"
                name="description"
                value={updatedTask.description}
                onChange={handleChange}
                multiline
              />
              <TextField
                label="Due Date"
                name="dueDate"
                type="date"
                value={updatedTask.dueDate}
                onChange={handleChange}
              />
              <Box sx={{ marginTop: 2 }}>
                <Button onClick={handleSaveUpdate}>Save</Button>
              </Box>
            </>
          ) : (
            <>
              <Typography variant="h6">{task.title}</Typography>
              <Typography variant="body2">{task.description}</Typography>
              <Typography variant="caption" color="text.secondary">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </Typography>

              <Box sx={{ marginTop: 2, display: 'flex', gap: 1 }}>
                <Button
                  size="small"
                  variant="contained"
                  color={task.completed ? 'success' : 'warning'}
                  onClick={handleToggleStatus}
                >
                  {task.completed ? 'Completed' : 'Mark Complete'}
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    console.log("Deleting task with ID:", task.id); // Debug log
                    dispatch(deleteTask(task.id)); // Dispatch action with the task ID
                  }}
                >
                  Delete
                </Button>

                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  onClick={() => setIsEditing(true)} // Trigger editing mode
                >
                  Edit
                </Button>
              </Box>
            </>
          )}
        </CardContent>
      </Card>

    </Box>
  );
};

export default TaskCard;



