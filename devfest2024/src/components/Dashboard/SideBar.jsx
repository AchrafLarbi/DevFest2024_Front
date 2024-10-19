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
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove tokens from localStorage
    localStorage.removeItem("access token");
    localStorage.removeItem("refresh token");

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div className="bg-white w-64 min-h-screen p-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-16">
          <img src={smartband} alt="Logo" className="w-12 h-12 rounded-full" />
          <h1 className="text-2xl font-bold mt-2" style={{ color: "#535862" }}>
            Smartband
          </h1>
        </div>
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center space-x-3 bg-white px-4 py-2 rounded-md text-[#BDBDBD] hover:text-blue-600 group"
          >
            <Home size={20} />
            <span className="relative flex-1">
              Overview
              <span className="absolute right-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 text-blue-600">
                •
              </span>
            </span>
          </a>
          {[
            { icon: Server, label: "Nodes" },
            { icon: Share2, label: "Topology" },
            { icon: Sliders, label: "Traffic shaping" },
            { icon: Brain, label: "AI model" },
            { icon: Settings, label: "Settings" },
          ].map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              className="relative flex items-center space-x-3 px-4 py-2 rounded-md text-[#BDBDBD] hover:text-blue-600 group"
            >
              <Icon size={20} />
              <span className="relative flex-1">
                {label}
                <span className="absolute right-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 text-blue-600">
                  •
                </span>
              </span>
            </a>
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
