import { ChevronDown, Search, Bell } from "lucide-react";

const DashboardNav = () => {
  return (
    <div className="px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            <input
              type="text"
              placeholder="Search stock, order, etc"
              className="py-2 pl-10 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-80"
            />
          </div>
          
          <div className="relative">
            <Bell className="w-6 h-6 text-gray-400 cursor-pointer" />
            <div className="absolute w-3 h-3 bg-red-500 rounded-full -top-1 -right-1"></div>
          </div>
          
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full">
              <span className="text-sm font-medium text-white">NY</span>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">Nina Yvonne</div>
              <div className="text-xs text-gray-500">Admin</div>
            </div>
        

          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
