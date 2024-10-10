import React from 'react';

const About = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">À propos</h2>
      <p className="mb-4">
        Bienvenue dans notre gestionnaire de tâches ! Cette application a été conçue pour vous aider à organiser et gérer efficacement vos tâches quotidiennes.
      </p>
      <p className="mb-4">
        Avec notre application, vous pouvez :
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Ajouter de nouvelles tâches avec des détails tels que la description, la date limite, la priorité et la catégorie</li>
        <li>Modifier et supprimer des tâches existantes</li>
        <li>Filtrer les tâches par catégorie</li>
        <li>Trier les tâches par date limite, priorité ou statut</li>
        <li>Suivre facilement le statut de vos tâches</li>
      </ul>
      <p>
        Nous espérons que cette application vous aidera à rester organisé et productif. N'hésitez pas à nous contacter si vous avez des questions ou des suggestions d'amélioration !
      </p>
    </div>
  );
};

export default About;