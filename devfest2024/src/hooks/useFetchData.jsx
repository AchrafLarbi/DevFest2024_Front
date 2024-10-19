import { useState, useEffect } from "react";
import apiService from "../services/apiService";

const useFetchData = () => {
  const [bandwidthData, setBandwidthData] = useState([]);
  const [userConsumptionData, setUserConsumptionData] = useState([]);
  const [userStateData, setUserStateData] = useState([]);
  const [userInfo, setUserInfo] = useState({ userName: "", userEmail: "" }); // Initialize with empty strings

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bandwidth = await apiService.fetchBandwidthData();
        const consumption = await apiService.fetchUserConsumptionData();
        const state = await apiService.fetchUserState();
        const user = await apiService.fetchUserInfo(); // Fetch user info here

        setBandwidthData(bandwidth);
        setUserConsumptionData(consumption);
        setUserStateData(state);
        setUserInfo(user); // Update userInfo state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return { bandwidthData, userConsumptionData, userStateData, userInfo };
};

export default useFetchData;
