import { Outlet } from "react-router-dom";

const ProjectLayout = () => {
  return (
    <div className="w-full overflow-hidden bg-lightblue py-3 px-8 ">
      <Outlet />
    </div>
  );
};

export default ProjectLayout;
