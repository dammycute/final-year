// import { useState } from 'react'
import "./App.css";
import Register from "./components/auth/register";
import Activation from "./components/auth/activate";
import Dashboard from "./components/dashboard/dashboard.jsx";
import Login from "./components/auth/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectList from "./components/projects/project-list";
import ProjectCreate from "./components/projects/create";
import Null from "../null";
import CreateTask from "./components/tasks/create-task";
import SetPassword from "./components/auth/set-password";
import RecoverEmail from "./components/auth/recover-email";
import { Provider } from "react-redux";
import store from './components/utils/store.js';
import TaskList from "./components/tasks/task-list";
import TaskPage from "./components/tasks/task";
import RecoverCode from "./components/auth/recover-code.jsx";



function App() {
  return (
    <Provider store={store}>
      <Router>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/activate" element={<Activation />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/set-password" element={<SetPassword />} />
        <Route exact path="/set-new-password" element={<SetPassword />} />
        {/* <Route exact path="/set-password" element={<Recov} />  */}
        <Route exact path="/recover-password" element={<RecoverEmail />} />
        <Route exact path="/recover-password-otp" element={<RecoverCode />} />
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/projects" element={<ProjectList />} />
        <Route exact path="/create" element={<ProjectCreate />} />
        <Route exact path="/create-task" element={<CreateTask />} />
        {/* <Route exact path="/task-" element={<TaskList/>} /> */}
        <Route exact path="/task" element={<TaskPage/>} />
      </Routes>
    </Router>
    </Provider>
    
  );
}

export default App;
