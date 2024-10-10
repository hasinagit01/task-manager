import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TaskList from './pages/TaskList';
import AddTask from './pages/AddTask';
import About from './pages/About';
import Contact from './pages/Contact';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <TaskProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </TaskProvider>
  );
}

export default App;