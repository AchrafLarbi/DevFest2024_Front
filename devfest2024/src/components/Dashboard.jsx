import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import {
  Home,
  Server,
  Share2,
  Sliders,
  Brain,
  Settings,
  LogOut,
} from "lucide-react";

const bandwidthData = [
  { name: "00", allocated: 40, cir: 20, maxAllocated: 100, mir: 30 },
  { name: "01", allocated: 30, cir: 20, maxAllocated: 100, mir: 40 },
  { name: "02", allocated: 45, cir: 20, maxAllocated: 100, mir: 50 },
  { name: "03", allocated: 35, cir: 20, maxAllocated: 100, mir: 55 },
  { name: "04", allocated: 50, cir: 20, maxAllocated: 100, mir: 60 },
];

const userConsumptionData = [
  { name: "00", maxBandwidth: 100, totalConsumption: 30 },
  { name: "01", maxBandwidth: 100, totalConsumption: 45 },
  { name: "02", maxBandwidth: 100, totalConsumption: 60 },
  { name: "03", maxBandwidth: 100, totalConsumption: 75 },
  { name: "04", maxBandwidth: 100, totalConsumption: 50 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <svg
              className="w-8 h-8 text-blue-600 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-xl font-bold">SmartBand</span>
          </div>
          <div className="flex items-center">
            <span className="mr-4">Hi Amine, Welcome to SmartBand!</span>
            <img
              src="/api/placeholder/40/40"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-2">
            <nav className="space-y-2">
              <a
                href="#"
                className="flex items-center space-x-3 text-blue-600 bg-blue-100 px-4 py-2 rounded-md"
              >
                <Home size={20} />
                <span>Overview</span>
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
                  className="flex items-center space-x-3 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-md"
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Main content */}
          <div className="col-span-10 space-y-6">
            {/* User stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: "Total users", value: 37, color: "blue" },
                { label: "Connected users", value: 11, color: "green" },
                { label: "Disconnected users", value: 26, color: "red" },
              ].map(({ label, value, color }) => (
                <div
                  key={label}
                  className="bg-white p-6 rounded-lg shadow flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm text-gray-500">{label}</p>
                    <p className="text-3xl font-semibold">{value}</p>
                  </div>
                  <div
                    className={`w-16 h-16 rounded-full border-4 border-${color}-500`}
                  ></div>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">
                    Bandwidth consumption
                  </h3>
                  <select className="border rounded px-2 py-1">
                    <option>IP: 10.10.10.10</option>
                  </select>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={bandwidthData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Line
                      type="monotone"
                      dataKey="allocated"
                      stroke="#3B82F6"
                    />
                    <Line type="monotone" dataKey="cir" stroke="#10B981" />
                    <Line
                      type="monotone"
                      dataKey="maxAllocated"
                      stroke="#EF4444"
                    />
                    <Line type="monotone" dataKey="mir" stroke="#8B5CF6" />
                  </LineChart>
                </ResponsiveContainer>
                <div className="flex justify-between mt-4 text-sm">
                  <span className="flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    Allocated size
                  </span>
                  <span className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    CIR
                  </span>
                  <span className="flex items-center">
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    Max allocated size
                  </span>
                  <span className="flex items-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                    MIR
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">
                  Total user consumption
                </h3>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={userConsumptionData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Line
                      type="monotone"
                      dataKey="maxBandwidth"
                      stroke="#EF4444"
                    />
                    <Line
                      type="monotone"
                      dataKey="totalConsumption"
                      stroke="#F59E0B"
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="flex justify-between mt-4 text-sm">
                  <span className="flex items-center">
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    Maximum size of bandwidth
                  </span>
                  <span className="flex items-center">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                    Total user consumption
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Log out button */}
        <div className="mt-8">
          <button className="flex items-center text-blue-600 hover:text-blue-800">
            <LogOut size={20} className="mr-2" />
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
