// import { useState } from 'react'
import './App.css'
import Register from './components/auth/register'
import Activation from './components/auth/activate'
import Dashboard from './components/dashboard/dashboard.jsx'
import Login from './components/auth/login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectList from './components/projects/project-list'
import ProjectCreate from './components/projects/create'
import Null from '../null'
import CreateTask from './components/tasks/create-task'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/activate" element={<Activation/>} /> 
        <Route exact path="/login" element={<Login/>} /> 
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/projects" element={<ProjectList/>} />
        <Route exact path="/create" element={<ProjectCreate/>} />
        <Route exact path="/create-task" element={<CreateTask/>} />
      </Routes>
    </Router>
  );
}

export default App
