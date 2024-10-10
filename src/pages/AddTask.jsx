import React from 'react';
import TaskForm from '../components/TaskForm';
import { useTasks } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleAddTask = (taskData) => {
    addTask(taskData);
    navigate('/tasks');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Ajouter une tâche</h2>
      <TaskForm onSubmit={handleAddTask} />
    </div>
  );
};

export default AddTask;