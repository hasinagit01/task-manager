import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Button } from "@/components/ui/button";

const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask } = useTaskContext();

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg mb-4">
      <div>
        <h3 className={`text-lg ${task.completed ? 'line-through text-gray-500' : ''}`}>{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
        <p className="text-sm text-gray-600">Catégorie: {task.category}</p>
        <p className="text-sm text-gray-600">Date: {task.dueDate}</p>
        <p className="text-sm text-gray-600">Priorité: {task.priority}</p>
      </div>
      <div>
        <Button onClick={() => toggleTask(task.id)} variant="outline" className="mr-2">
          {task.completed ? 'Annuler' : 'Terminer'}
        </Button>
        <Button onClick={() => deleteTask(task.id)} variant="destructive">
          Supprimer
        </Button>
      </div>
    </div>
  );
};

export default TaskItem;