/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import profilepicture from "../../assets/icons/profilepicture.svg";

const Header = () => {
  const [userData, setUserData] = useState({ username: "", email: "" });

  // Fetch username and email from local storage
  useEffect(() => {
    const storedUsername = localStorage.getItem("user");
    const storedEmail = localStorage.getItem("userEmail");

    if (storedUsername && storedEmail) {
      setUserData({
        username: storedUsername,
        email: storedEmail,
      });
    }
  }, []);

  return (
    <div className="flex justify-between items-center m-6 w-[95%]">
      <div className="flex flex-col">
        <h1 className="text-ml font-bold text-[#535862]">
          Hi {userData.username || "User"},
        </h1>
        <h1 className="text-2xl font-bold text-[#303841]">
          Welcome to SmartBand!
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <img
          src={profilepicture}
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-[#1A1B2D]">
            {userData.username || "Username"}
          </p>
          <p className="text-sm font-semibold text-[#535763]">
            {userData.email || "Email"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
