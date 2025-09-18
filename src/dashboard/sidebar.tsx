import React, { useState } from 'react';
import { 
  BarChart3, 
  ShoppingCart, 
  Package, 
  Users, 
  FileText, 
  Percent, 
  Settings, 
  HelpCircle, 
  Link2,
  Search,
  Bell,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  MoreHorizontal,
  DollarSign,
  Eye,
  ShoppingBag,
  LogOut
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { path } from 'framer-motion/client';
import { NavLink } from 'react-router-dom';

// Sidebar Component
const Sidebar = ({ activeItem, setActiveItem }: { activeItem: string, setActiveItem: (item: string) => void }) => {
  const menuItems = [
    { id: 'dashboard', icon: BarChart3, label: 'Dashboard', path: '/dashboard',active: true },
    { id: 'orders', icon: ShoppingCart, label: 'Orders', path: '/dashboard/orders' },
    { id: 'products', icon: Package, label: 'Products', path: '/dashboard/products' },
    { id: 'customers', icon: Users, label: 'Customers', path: '/dashboard/customers' },
    { id: 'reports', icon: FileText, label: 'Reports', path: '/dashboard/reports' },
    { id: 'discounts', icon: Percent, label: 'Discounts', path: '/dashboard/discounts' },
    { id: 'integrations', icon: Link2, label: 'Integrations', path: '/dashboard/integrations' },
    { id: 'help', icon: HelpCircle, label: 'Help', path: '/dashboard/help' },
    { id: 'settings', icon: Settings, label: 'Settings', path: '/dashboard/settings' },
    { id:"Logout", icon:LogOut, label: 'Logout',path:'/login' }
  ];

  return (
    <div className="w-64 h-full bg-white border-r border-gray-200 shadow-sm">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 bg-orange-500 rounded-lg">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
            </div>
          </div>
          <span className="text-xl font-bold text-gray-900">Kapee</span>
        </div>
      </div>
    
      <nav className="px-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          return (
            <NavLink
              to={item.path}
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 mb-1 rounded-lg text-left transition-colors ${
                isActive
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};
export default Sidebar;