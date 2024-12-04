import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    filter: 'all', // 'all', 'completed', 'pending', 'overdue'
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: uuidv4(), ...action.payload });
    },
    // Edit task (update task)
    editTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload; // Update task in the array
      }
    },
    
    deleteTask: (state, action) => {
      // Filter out the task with the matching id from the tasks array
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
      
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTaskStatus, setFilter } = tasksSlice.actions;

export default tasksSlice.reducer;
