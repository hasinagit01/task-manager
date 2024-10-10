import React, { useState } from 'react';
import TaskItem from '../components/TaskItem';
import { useTasks } from '../context/TaskContext';

const TaskList = () => {
  const { tasks, deleteTask, editTask, changeTaskStatus } = useTasks();
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('dueDate');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.category === filter;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sort === 'dueDate') return new Date(a.dueDate) - new Date(b.dueDate);
    if (sort === 'priority') return b.priority.localeCompare(a.priority);
    if (sort === 'status') return a.status.localeCompare(b.status);
    return 0;
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Liste des tâches</h2>
      <div className="mb-4 space-x-2">
        <select onChange={(e) => setFilter(e.target.value)} className="border rounded px-2 py-1">
          <option value="all">Toutes les catégories</option>
          <option value="Personnel">Personnel</option>
          <option value="Travail">Travail</option>
          <option value="Études">Études</option>
          <option value="Autres">Autres</option>
        </select>
        <select onChange={(e) => setSort(e.target.value)} className="border rounded px-2 py-1">
          <option value="dueDate">Trier par date limite</option>
          <option value="priority">Trier par priorité</option>
          <option value="status">Trier par statut</option>
        </select>
      </div>
      <div className="space-y-4">
        {sortedTasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onDelete={deleteTask} 
            onEdit={editTask} 
            onStatusChange={changeTaskStatus} 
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;