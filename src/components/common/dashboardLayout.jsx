import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";

const dashboardLayout = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex w-full h-full">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default dashboardLayout;
