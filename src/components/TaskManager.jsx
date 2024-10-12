import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const TaskManager = () => {
  const { tasks, toggleTask, deleteTask } = useTaskContext();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Gestionnaire de tâches</h1>
      <TaskForm />
      <TaskList tasks={tasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
    </div>
  );
};

export default TaskManager;
