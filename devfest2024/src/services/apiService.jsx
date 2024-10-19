const totalUsers = 37;
const connectedUsers = 11;
const disconnectedUsers = 26;

const apiService = {
  fetchBandwidthData: async () => {
    return [
      { name: "00", allocated: 40, cir: 20, maxAllocated: 100, mir: 30 },
      { name: "01", allocated: 30, cir: 20, maxAllocated: 100, mir: 40 },
    ];
  },

  fetchUserConsumptionData: async () => {
    return [
      { name: "00", maxBandwidth: 100, totalConsumption: 30 },
      { name: "01", maxBandwidth: 100, totalConsumption: 45 },
    ];
  },

  fetchUserState: async () => {
    return [
      {
        label: "Total users",
        value: totalUsers,
        percentage: 100,
      },
      {
        label: "Connected users",
        value: connectedUsers,
        percentage: (connectedUsers / totalUsers) * 100,
      },
      {
        label: "Disconnected users",
        value: disconnectedUsers,
        percentage: (disconnectedUsers / totalUsers) * 100,
      },
    ];
  },
  fetchUserInfo: async () => {
    const storedUsername = localStorage.getItem("user");
    const storedUserEmail = localStorage.getItem("userEmail");

    return { userName: storedUsername, userEmail: storedUserEmail };
  },
};

export default apiService;
