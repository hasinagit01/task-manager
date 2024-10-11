import React, { useState, useMemo } from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';
import { Button } from "@/components/ui/button";

const categories = ['Travail', 'Personnel', 'Courses', 'Autre'];
const priorities = ['Basse', 'Moyenne', 'Haute'];

const TaskList = () => {
  const { tasks } = useTaskContext();
  const [filters, setFilters] = useState({
    status: 'all',
    category: 'all',
    priority: 'all',
    date: ''
  });

  const filteredTasks = useMemo(() => {
    console.log('Filtering tasks:', tasks); // Log pour déboguer
    return tasks.filter(task => {
      const statusMatch = 
        filters.status === 'all' ? true :
        filters.status === 'active' ? !task.completed :
        task.completed;
      
      const categoryMatch = 
        filters.category === 'all' || task.category === filters.category;

      const priorityMatch =
        filters.priority === 'all' || task.priority === filters.priority;

      const dateMatch =
        !filters.date || task.dueDate === filters.date;

      return statusMatch && categoryMatch && priorityMatch && dateMatch;
    });
  }, [tasks, filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  console.log('Filtered tasks:', filteredTasks); // Log pour déboguer

  return (
    <div className="mt-4">
      {/* Filtres... */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Tâches :</h3>
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))
        ) : (
          <p>Aucune tâche à afficher.</p>
        )}
      </div>
    </div>
  );
};

export default TaskList;