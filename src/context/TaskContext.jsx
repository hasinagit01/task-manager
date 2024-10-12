import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

export const TaskContext = createContext();

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback((task) => {
    setTasks(prevTasks => [...prevTasks, { ...task, id: Date.now() }]);
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }, []);

  const value = useMemo(() => ({
    tasks,
    addTask,
    toggleTask,
    deleteTask
  }), [tasks, addTask, toggleTask, deleteTask]);

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};
