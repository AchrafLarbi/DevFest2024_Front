import { useState, useEffect } from "react";
import apiService from "../services/apiService";

const useFetchData = () => {
  const [bandwidthData, setBandwidthData] = useState([]);
  const [userConsumptionData, setUserConsumptionData] = useState([]);
  const [userStateData, setUserStateData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const bandwidth = await apiService.fetchBandwidthData();
      const consumption = await apiService.fetchUserConsumptionData();
      const state = await apiService.fetchUserState();
      setBandwidthData(bandwidth);
      setUserConsumptionData(consumption);
      setUserStateData(state);
    };
    fetchData();
  }, []);

  return { bandwidthData, userConsumptionData, userStateData };
};

export default useFetchData;
