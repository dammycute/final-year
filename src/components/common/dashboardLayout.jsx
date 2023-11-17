import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";

const dashboardLayout = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default dashboardLayout;
