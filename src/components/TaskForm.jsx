import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Button } from "@/components/ui/button";

const INITIAL_FORM_STATE = {
  title: '',
  description: '',
  category: 'Autre',
  dueDate: '',
  priority: 'Moyenne'
};

const categories = ['Travail', 'Personnel', 'Courses', 'Autre'];
const priorities = ['Basse', 'Moyenne', 'Haute'];

const TaskForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const { addTask } = useTaskContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    console.log('Submitting task:', formData); // Log pour déboguer
    addTask({ ...formData, completed: false });
    setFormData(INITIAL_FORM_STATE);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Titre de la tâche"
        className="w-full p-2 border rounded"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description de la tâche"
        className="w-full p-2 border rounded"
      />
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        {priorities.map(prio => (
          <option key={prio} value={prio}>{prio}</option>
        ))}
      </select>
      <Button type="submit">Ajouter la tâche</Button>
    </form>
  );
};

export default TaskForm;