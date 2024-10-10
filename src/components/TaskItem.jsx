import React, { useState } from 'react';
import TaskForm from './TaskForm';

const TaskItem = ({ task, onDelete, onEdit, onStatusChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (updatedTask) => {
    onEdit(task.id, updatedTask);
    setIsEditing(false);
  };

  if (isEditing) {
    return <TaskForm initialData={task} onSubmit={handleEdit} />;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
      <p className="mb-2">{task.description}</p>
      <div className="flex justify-between text-sm text-gray-600">
        <span>Date limite : {task.dueDate}</span>
        <span>Priorité : {task.priority}</span>
        <span>Statut : {task.status}</span>
        <span>Catégorie : {task.category}</span>
      </div>
      <div className="mt-4 space-x-2">
        <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-3 py-1 rounded">
          Modifier
        </button>
        <button onClick={() => onDelete(task.id)} className="bg-red-500 text-white px-3 py-1 rounded">
          Supprimer
        </button>
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="À faire">À faire</option>
          <option value="En cours">En cours</option>
          <option value="Terminée">Terminée</option>
        </select>
      </div>
    </div>
  );
};

export default TaskItem;