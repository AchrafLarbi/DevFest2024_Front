/* eslint-disable react/prop-types */
import React from "react";
import Sidebar from "./SideBar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Index({ email, username }) {
  return (
    <div className="flex bg-white h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header email={email} username={username} />
        <Outlet />
      </div>
    </div>
  );
}

export default Index;
