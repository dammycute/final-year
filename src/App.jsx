import "./App.css";
import Register from "./components/auth/register";
import Activation from "./components/auth/activate";
import Dashboard from "./components/dashboard/dashboard.jsx";
import DashboardLayout from "./components/common/dashboardLayout.jsx";
import Login from "./components/auth/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectList from "./components/projects/project-list";
import ProjectCreate from "./components/projects/create";
import CreateTask from "./components/tasks/create-task";
import SetPassword from "./components/auth/set-password";
import RecoverEmail from "./components/auth/recover-email";
import { Provider } from "react-redux";
import store from "./components/utils/store.js";
// import TaskList from "./components/tasks/task-list";
import TaskPage from "./components/tasks/task";
import RecoverCode from "./components/auth/recover-code.jsx";
import GeneralSettings from "./components/settings/Settings.jsx";
import SettingsLayout from "./components/settings/SettingsLayout.jsx";
import PasswordSetting from "./components/settings/PasswordSetting.jsx";
import Notification from "./components/settings/Notification.jsx";
import ProjectLayout from "./components/projects/ProjectLayout.jsx";
import ProtectedRoute from "./components/utils/protect.jsx";

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

          <Route exact path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />

            <Route exact path="settings" element={<SettingsLayout />}>
              <Route index element={<GeneralSettings />} />
              <Route path="password" element={<PasswordSetting />} />
              <Route path="notification" element={<Notification />} />
            </Route>

              <Route exact path="projects" element={<ProjectLayout />}>
                <Route index element={<ProjectList />} />
                <Route path="create" element={<ProjectCreate />} />
                <Route exact path=":projectId/tasks">
                  <Route index element={<TaskPage />} />
                  <Route path="create-task" element={<CreateTask />} />
                </Route>
              </Route>

              {/* <Route exact path="/task-" element={<TaskList/>} /> */}
            </Route>
          {/* </ProtectedRoute> */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
