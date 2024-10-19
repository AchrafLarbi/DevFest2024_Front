import Sidebar from "./SideBar";

import { Outlet } from "react-router-dom";

function Index() {
  return (
    <div className="flex bg-white h-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Index;
