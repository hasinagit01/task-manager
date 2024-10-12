import React, { useState, useMemo } from 'react';
import TaskCard from './TaskCard';
import { Combobox } from './ui/combobox';
import { Label } from './ui/label';

const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');

  const statusOptions = [
    { label: 'Toutes les tâches', value: 'all' },
    { label: 'Tâches actives', value: 'active' },
    { label: 'Tâches terminées', value: 'completed' },
  ];

  const priorityOptions = [
    { label: 'Toutes les priorités', value: 'all' },
    { label: 'Basse', value: 'low' },
    { label: 'Moyenne', value: 'medium' },
    { label: 'Haute', value: 'high' },
  ];

  const sortOptions = [
    { label: 'Date croissante', value: 'asc' },
    { label: 'Date décroissante', value: 'desc' },
  ];

  const filteredAndSortedTasks = useMemo(() => {
    return tasks
      .filter(task => {
        const statusMatch = 
          statusFilter === 'all' || 
          (statusFilter === 'active' && !task.completed) || 
          (statusFilter === 'completed' && task.completed);
        
        const priorityMatch = 
          priorityFilter === 'all' || 
          task.priority === priorityFilter;

        return statusMatch && priorityMatch;
      })
      .sort((a, b) => {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      });
  }, [tasks, statusFilter, priorityFilter, sortOrder]);

  return (
    <div className="container mx-auto px-4">
      <div className="mb-4 flex space-x-4">
        <div className="flex-1">
          <Label htmlFor="statusFilter">Filtrer par statut</Label>
          <Combobox
            id="statusFilter"
            options={statusOptions}
            value={statusFilter}
            onChange={setStatusFilter}
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="priorityFilter">Filtrer par priorité</Label>
          <Combobox
            id="priorityFilter"
            options={priorityOptions}
            value={priorityFilter}
            onChange={setPriorityFilter}
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="sortOrder">Trier par date</Label>
          <Combobox
            id="sortOrder"
            options={sortOptions}
            value={sortOrder}
            onChange={setSortOrder}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAndSortedTasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={() => onToggleTask(task.id)}
            onDelete={() => onDeleteTask(task.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
