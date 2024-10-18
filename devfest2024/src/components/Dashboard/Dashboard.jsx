import BandwidthChart from "../Charts/BandwidthChart";
import UserConsumptionChart from "../Charts/UserConsumptionChart";
import useFetchData from "../../hooks/useFetchData";
import { colors } from "../../constants/colors"; // Adjust the path as necessary
import profilepicture from "../../assets/icons/profilepicture.svg";
import UserStatePie from "../Charts/UserStatePie";

const Dashboard = () => {
  const { bandwidthData, userConsumptionData, userStateData } = useFetchData();
  return (
    <div className="flex-1 p-4 bg-white">
      <div className="flex justify-between items-center mb-6">
        {/* Header Section */}
        <div className="flex flex-col">
          <h1 className="text-ml font-bold text-[#535862]">Hi, Amine</h1>
          <h1 className="text-2xl font-bold text-[#303841]">
            Welcome to SmartBand!
          </h1>
        </div>
        {/* Profile Picture Section */}
        <div className="flex items-center space-x-4">
          <img
            src={profilepicture}
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-[#1A1B2D]">
              Benbakreti Amine
            </p>
            <p className="text-sm font-semibold text-[#535763]">
              @Amine.benbakreti22
            </p>
          </div>
        </div>
      </div>

      {/* User Stats Section */}

      <UserStatePie data={userStateData} colors={colors} />

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <BandwidthChart data={bandwidthData} colors={colors} />
        <UserConsumptionChart data={userConsumptionData} colors={colors} />
      </div>
    </div>
  );
};

export default Dashboard;
