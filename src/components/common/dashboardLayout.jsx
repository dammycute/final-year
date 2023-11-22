import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";

const dashboardLayout = () => {
  return (
    <div className="h-[100dvh] w-[100dvw]">
      <Header />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default dashboardLayout;
