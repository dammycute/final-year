import { NavLink } from "react-router-dom";
import home from "../../../assets/images/Home.svg";
import edit from "../../../assets/images/edit.svg";
import setting from "../../../assets/images/Setting.svg";

const Sidebar = () => {
  const dashboardLinks = [
    {
      title: "Dashboard",
      href: ".",
      img: home,
      alt: "home-link",
      end: true,
    },
    {
      title: "Project",
      href: "projects",
      img: edit,
      alt: "project-link",
    },
    {
      title: "Setting",
      href: "settings",
      img: setting,
      alt: "setting-link",
    },
  ];

  return (
    // side bar
    <div className="bg-white text-gray-400 px-4 py-12 text-sm">
      <div className="w-[12rem]">
        {dashboardLinks.map((link) => {
          return (
            <NavLink
              key={link.title}
              to={link.href}
              end={link.end}
              className="flex gap-6 py-2 pl-2 rounded-md items-center transition"
              style={({ isActive }) =>
                isActive
                  ? { color: "#0C7FDA", backgroundColor: "#E9F5FE" }
                  : { backgroundColor: "transparent" }
              }
            >
              <img src={link.img} alt={link.alt} className="w-6" />
              <span>{link.title}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
