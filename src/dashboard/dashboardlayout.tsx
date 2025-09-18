import { useState } from "react";
import DashboardNav from "./dashboardnav";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardNav />
        <main className="flex-1 overflow-auto">
          <Outlet/>
        </main>
      </div>
    </div>
  );
};
export default DashboardLayout;