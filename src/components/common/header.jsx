import logo from "../../assets/images/icon.svg";
import bell from "../../assets/images/notification.svg";
import avatar from "../../assets/images/avatar.png";

const Header = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-white p-4 hind shadow-lg flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-100 h-11" />
        </div>
        {/* Search Input */}
        <div className="contain flex gap-12">
          <div className="relative flex items-center">
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
              <img src={bell} className="h-6" alt="" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">John Doe</span>
              <span className="text-gray-400">Okhlaoma, USA</span>
            </div>
            <img
              src={avatar}
              alt="User Avatar"
              className="w-50 h-10 ml-4 rounded-full"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
