/* eslint-disable react/prop-types */

import profilepicture from "../../assets/icons/profilepicture.svg";

const Header = ({ email, username }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      {/* Header Section */}
      <div className="flex flex-col">
        <h1 className="text-ml font-bold text-[#535862]">Hi, {name}</h1>
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
          <p className="text-sm font-semibold text-[#1A1B2D]">{username}</p>
          <p className="text-sm font-semibold text-[#535763]">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
