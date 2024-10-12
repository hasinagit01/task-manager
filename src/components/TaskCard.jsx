import React from 'react';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card';
import { Checkbox } from './ui/checkbox';

const TaskCard = ({ task, onToggle, onDelete }) => {
  const formatDate = (date) => {
    if (!date) return 'Non définie';
    try {
      const dateObj = new Date(date);
      return dateObj.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
    } catch (error) {
      console.error('Invalid date:', date);
      return 'Date invalide';
    }
  };

  return (
    <Card className="bg-white shadow-lg rounded-lg p-6 mb-4">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{task.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{task.description}</p>
        <p className="text-sm text-gray-500 mb-2">
          Date d'échéance : {formatDate(task.dueDate)}
        </p>
        <p className="text-sm text-gray-500 mb-2">
          Priorité : {task.priority}
        </p>
        <div className="flex items-center space-x-2">
          <Checkbox
            id={`task-${task.id}`}
            checked={task.completed}
            onCheckedChange={() => onToggle(task.id)}
          />
          <label htmlFor={`task-${task.id}`}>
            {task.completed ? 'Terminée' : 'En cours'}
          </label>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => onDelete(task.id)} variant="destructive">
          Supprimer
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
