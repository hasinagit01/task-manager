import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Accueil</Link></li>
          <li><Link to="/tasks" className="hover:underline">Tâches</Link></li>
          <li><Link to="/add-task" className="hover:underline">Ajouter une tâche</Link></li>
          <li><Link to="/about" className="hover:underline">À propos</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;