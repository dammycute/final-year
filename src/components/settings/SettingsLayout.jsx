import { Outlet } from "react-router-dom";
import SettingsNavigation from "./SettingsNavigation";
import "./settings.css";

const SettingsLayout = () => {
  return (
    <div className="p-2 bg-[#F0F6FF] w-full">
      <h2 className="font-bold text-[#9A93B3] mb-3">Settings</h2>
      <div className="bg-white setting_grid">
        <SettingsNavigation />
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsLayout;
