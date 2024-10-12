import React from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <TaskManager />
      </div>
    </TaskProvider>
  );
}

export default App;
