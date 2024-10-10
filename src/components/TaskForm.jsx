import React, { useState } from 'react';

const TaskForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || {
    title: '',
    description: '',
    dueDate: '',
    priority: 'Moyenne',
    status: 'À faire',
    category: 'Personnel',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block mb-1">Titre</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="description" className="block mb-1">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        ></textarea>
      </div>
      <div>
        <label htmlFor="dueDate" className="block mb-1">Date limite</label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="priority" className="block mb-1">Priorité</label>
        <select
          id="priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="Basse">Basse</option>
          <option value="Moyenne">Moyenne</option>
          <option value="Haute">Haute</option>
        </select>
      </div>
      <div>
        <label htmlFor="status" className="block mb-1">Statut</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="À faire">À faire</option>
          <option value="En cours">En cours</option>
          <option value="Terminée">Terminée</option>
        </select>
      </div>
      <div>
        <label htmlFor="category" className="block mb-1">Catégorie</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="Personnel">Personnel</option>
          <option value="Travail">Travail</option>
          <option value="Études">Études</option>
          <option value="Autres">Autres</option>
        </select>
      </div>
      <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 rounded">
        {initialData ? 'Modifier la tâche' : 'Ajouter la tâche'}
      </button>
    </form>
  );
};

export default TaskForm;