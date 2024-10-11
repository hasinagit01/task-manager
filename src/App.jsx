import React from 'react';
import { TaskProvider } from './context/TaskContext';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

function App() {
  return (
    <TaskProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          <TaskForm />
          <TaskList />
        </main>
        <Footer />
      </div>
    </TaskProvider>
  );
}

export default App;