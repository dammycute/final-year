import { NavLink, useNavigate } from "react-router-dom";
import { IconRight } from "react-day-picker";
const SettingsNavigation = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the logout action
    localStorage.removeItem("user_id");
  localStorage.removeItem("token");

    // Navigate to the register page
    navigate("/login");
  };

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
    <div className="settings_nav pt-4 px-3 shadow-lg shadow-gray-500 flex flex-col justify-between">
      <div>
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
      <p className="text-[#EB5757] mb-10 ml-5" onClick={handleLogout}>
        Logout
      </p>
    </div>
  );
};

export default SettingsNavigation;
