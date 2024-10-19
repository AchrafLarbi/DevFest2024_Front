import BandwidthChart from "../Charts/BandwidthChart";
import UserConsumptionChart from "../Charts/UserConsumptionChart";
import useFetchData from "../../hooks/useFetchData";
import { colors } from "../../constants/colors";
import UserStatePie from "../Charts/UserStatePie";

const Dashboard = () => {
  const { bandwidthData, userConsumptionData, userStateData } = useFetchData();

  return (
    <div className="flex-1 p-4 bg-white">
      <UserStatePie data={userStateData} colors={colors} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <BandwidthChart data={bandwidthData} colors={colors} />
        <UserConsumptionChart data={userConsumptionData} colors={colors} />
      </div>
    </div>
  );
};

export default Dashboard;
