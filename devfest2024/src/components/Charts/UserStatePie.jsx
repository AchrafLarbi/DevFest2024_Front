/* eslint-disable react/prop-types */
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const getColor = (label) => {
  switch (label) {
    case "Total users":
      return "#3B82F6";
    case "Connected users":
      return "#10B981";
    case "Disconnected users":
      return "#EF4444";
    default:
      return "#3B82F6";
  }
};

const UserStatePie = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {data.map(({ label, value, percentage }) => (
        <div
          key={label}
          className="bg-white p-6 rounded-lg shadow flex items-center justify-between"
        >
          <div>
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-3xl ">{value}</p> {/* Bold value */}
          </div>
          <div style={{ width: 60, height: 60 }}>
            <CircularProgressbar
              value={percentage}
              text=""
              styles={buildStyles({
                pathColor: getColor(label),
                trailColor: "#3B82F6",
              })}
              background={false} // Background not needed
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserStatePie;
