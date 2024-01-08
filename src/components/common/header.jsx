import logo from "../../../assets/images/Icon.svg";
import bell from "../../../assets/images/notification.svg";
import avatar from "../../../assets/images/avatar.png";
import { useState, useEffect } from "react";

const Header = () => {
  const userId = localStorage.getItem("user_id");
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://pm-api.cyclic.app/user/get-user/${userId}`,

          {
            headers: {
              Authorization: token,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const data = await response.json();
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const user = localStorage.getItem("userId");
    console.log(user);

    fetchUserData();
  }, [userId]);

  return (
    <>
      {/* Header */}
      <header className="bg-white p-2 shadow-lg flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-[2.85rem]" />
        </div>
        {/* Search Input */}
        <div className="contain flex gap-12">
          <div className="relative flex items-center text-sm">
            <div className="absolute left-3 top-3">
              <i className="bi bi-search gray-400"></i>
            </div>
            <input
              type="text"
              placeholder="Search for anything"
              className="pl-16 pr-16 py-2 border rounded-lg focus:outline-none"
            />
          </div>
          {/* User Details */}
          <div className="flex items-center">
            <div className="mr-6">
              <img src={bell} className="w-6" alt="" />
            </div>
            <div className="flex flex-col text-sm">
              <span className="font-semibold">{`${
                userData?.firstName || "Yashie"
              } ${userData?.lastName || "Glory"}`}</span>
              <span className="text-gray-400">Okhlaoma, USA</span>
            </div>
            <img
              src={avatar}
              alt="User Avatar"
              className="w-8 ml-4 rounded-full"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
