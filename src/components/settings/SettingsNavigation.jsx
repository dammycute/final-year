import { NavLink } from "react-router-dom";
import { IconRight } from "react-day-picker";

const SettingsNavigation = () => {
  const links = [
    {
      label: "General Settings",
      href: ".",
    },
    {
      label: "Password Settings",
      href: "password",
    },
    {
      label: "Notification",
      href: "notification",
    },
  ];
  return (
    <div className="settings_nav h-full pt-4 px-3 shadow-lg shadow-gray-500">
      {links.map((link) => {
        return (
          <NavLink
            key={link.label}
            to={link.href}
            end
            className="flex justify-between items-center mx-2 py-2 px-auto text-sm"
            style={({ isActive }) =>
              isActive
                ? { color: "#0C7FDA", fontWeight: "bold" }
                : { color: "inherit" }
            }
          >
            {link.label}
            <IconRight className="w-3" />
          </NavLink>
        );
      })}
    </div>
  );
};

export default SettingsNavigation;
