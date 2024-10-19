import BandwidthChart from "../Charts/BandwidthChart";
import UserConsumptionChart from "../Charts/UserConsumptionChart";
import useFetchData from "../../hooks/useFetchData";
import { colors } from "../../constants/colors"; // Adjust the path as necessary
import Header from "./Header";
import UserStatePie from "../Charts/UserStatePie";

const Dashboard = () => {
  const { bandwidthData, userConsumptionData, userStateData, userInfo } =
    useFetchData();

  const { userName, userEmail } = userInfo;

  return (
    <div className="flex-1 p-4 bg-white">
      {/* Header Section */}
      <Header email={userEmail} username={userName} />

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
