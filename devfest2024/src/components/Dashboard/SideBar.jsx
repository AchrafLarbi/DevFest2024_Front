import {
  Home,
  Server,
  Share2,
  Sliders,
  Brain,
  Settings,
  LogOut,
} from "lucide-react";
import smartband from "../../assets/icons/smartband.svg";
import { useNavigate, Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("access token");
    localStorage.removeItem("refresh token");

    navigate("/login");
  };

  // Define the links
  const links = [
    { icon: Home, label: "Overview", path: "/" },
    { icon: Server, label: "Nodes", path: "/nodes" },
    { icon: Share2, label: "Topology", path: "/topology" },
    { icon: Sliders, label: "Traffic shaping", path: "/Traffic" },
    { icon: Brain, label: "AI model", path: "/Model" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="bg-white w-64 min-h-screen p-4 flex flex-col justify-between border border-r-[1px] border-grey">
      <div>
        <div className="flex items-center mt-3 mb-10">
          <img src={smartband} alt="Logo" className="w-12 h-12 rounded-full mr-2" />
          <h1 className="text-2xl font-bold mt-2" style={{ color: "#535862" }}>
            SmartBand
          </h1>
        </div>
        <nav className="space-y-2">
          {links.map(({ icon: Icon, label, path }) => (
            <Link
              key={label}
              to={path}
              className={`relative flex items-center space-x-3 px-4 py-2 rounded-md ${
                location.pathname === path
                  ? "bg-blue-100 text-blue-600"
                  : "text-[#BDBDBD] hover:text-blue-600"
              }`}
            >
              <Icon size={20} />
              <span className="relative flex-1">
                {label}
                {location.pathname === path && (
                  <span className="absolute right-0 text-blue-600">•</span>
                )}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      <div>
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 px-4 py-2 rounded-md w-full text-gray-600 hover:text-blue-600 hover:underline"
        >
          <LogOut size={20} />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
