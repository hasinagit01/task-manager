import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestionnaire de tâches</h1>
        <nav>
          <Button variant="ghost" className="text-white mr-2">Accueil</Button>
          <Button variant="ghost" className="text-white mr-2">Tâches</Button>
          <Button variant="ghost" className="text-white">À propos</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;