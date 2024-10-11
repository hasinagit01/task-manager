# Guide d'utilisation de l'application de gestion de tâches

Ce guide explique en détail les différents composants de notre application de gestion de tâches et comment ils fonctionnent ensemble.

## Structure de l'application

Notre application est composée des éléments suivants :

1. App.jsx : Le composant principal qui structure l'application
2. TaskContext.jsx : Gère l'état global de l'application
3. TaskForm.jsx : Formulaire pour ajouter de nouvelles tâches
4. TaskList.jsx : Affiche la liste des tâches avec des filtres
5. TaskItem.jsx : Représente une tâche individuelle
6. Header.jsx : En-tête de l'application
7. Footer.jsx : Pied de page de l'application

## Composants en détail

### 1. App.jsx

Ce composant est la racine de notre application. Il utilise le TaskProvider pour fournir le contexte à tous les composants enfants.