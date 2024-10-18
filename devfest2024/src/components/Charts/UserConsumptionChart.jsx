/* eslint-disable react/prop-types */

import { ResponsiveLine } from "@nivo/line";

const UserConsumptionChart = ({ data }) => {
  const formattedData = [
    {
      id: "Max Bandwidth",
      data: data.map(({ name, maxBandwidth }) => ({
        x: name,
        y: maxBandwidth,
      })),
    },
    {
      id: "Total Consumption",
      data: data.map(({ name, totalConsumption }) => ({
        x: name,
        y: totalConsumption,
      })),
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg  mb-4">Total User Consumption</h3>
      <div style={{ height: 200 }}>
        <ResponsiveLine
          data={formattedData}
          margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: 0,
            max: "auto",
            stacked: false,
            reverse: false,
            tickValues: [0, 30, 50, 70],
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Users",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Bandwidth (Mbps)",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          colors={["#EF4444", "#F59E0B"]}
          lineWidth={2}
          enablePoints={false}
          enableGridX={false}
          enableGridY={true}
          pointSize={10}
          useMesh={true}
          animate={true}
          motionConfig="gentle"
          tooltip={(point) => (
            <div
              style={{
                padding: "10px",
                background: "white",
                border: "1px solid #ccc",
              }}
            >
              <strong>{point.point.serieId}</strong>: {point.point.data.y}
            </div>
          )}
        />
      </div>
      <div className="flex justify-between mt-4 text-sm">
        <span className="flex items-center">
          <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>Maximum
          Bandwidth
        </span>
        <span className="flex items-center">
          <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>Total
          Consumption
        </span>
      </div>
    </div>
  );
};

export default UserConsumptionChart;
