/* eslint-disable react/prop-types */

import { ResponsiveLine } from "@nivo/line";

const BandwidthChart = ({ data }) => {
  const formattedData = [
    {
      id: "Allocated size",
      data: data.map(({ name, allocated }) => ({ x: name, y: allocated })),
    },
    {
      id: "CIR",
      data: data.map(({ name, cir }) => ({ x: name, y: cir })),
    },
    {
      id: "Max allocated size",
      data: data.map(({ name, maxAllocated }) => ({
        x: name,
        y: maxAllocated,
      })),
    },
    {
      id: "MIR",
      data: data.map(({ name, mir }) => ({ x: name, y: mir })),
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg ">Bandwidth consumption</h3>
        <select className="border rounded px-2 py-1 text-sm">
          <option>IP: 10.10.10.10</option>
        </select>
      </div>
      <div style={{ height: 200 }}>
        <ResponsiveLine
          data={formattedData}
          margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: false,
            reverse: false,
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Time",
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
          colors={["#3B82F6", "#10B981", "#EF4444", "#8B5CF6"]} // Colors for the lines
          lineWidth={2}
          enablePoints={false} // Disable dots on the lines
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
          <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
          Allocated size
        </span>
        <span className="flex items-center">
          <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>CIR
        </span>
        <span className="flex items-center">
          <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>Max
          allocated size
        </span>
        <span className="flex items-center">
          <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>MIR
        </span>
      </div>
    </div>
  );
};

export default BandwidthChart;
