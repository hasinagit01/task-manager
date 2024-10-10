import React, { createContext, useState, useContext } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, ...updatedTask } : task));
  };

  const changeTaskStatus = (id, newStatus) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: newStatus } : task));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask, changeTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);