import { Dashboard, Settings, Projects } from "pages";

export const mainRoutes = [
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "settings",
    element: <Settings />
  },
  { 
    path: "projects",
    element: <Projects />
  }
];

export const settingsRoutes = [
  {
    path: "/",
    element: <GeneralSettings />
  },
  {
    path: "password", 
    element: <PasswordSetting />
  },
  {
    path: "notifications",
    element: <Notification />
  }
];

export const projectRoutes = [
  {
    path: "/", 
    element: <ProjectList />
  },
  {
    path: "create",
    element: <ProjectCreate /> 
  },
  {
    path: ":projectId/tasks/*",
    element: <TaskPage />
  }
];