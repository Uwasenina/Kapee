import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  DollarSign,
  TrendingDown,
  ShoppingBag,
  TrendingUp,
  Eye,
  MoreHorizontal,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  Pie,
  PieChart,
  Cell,
  BarChart,
  Bar,
} from "recharts";

function Dashboard() {
  const [dashboard, setDashboard] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch dashboard data from backend
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/dashboard"); // adjust URL if needed
        setDashboard(res.data);
      } catch (err) {
        console.error("Failed to load dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  if (loading) return <div className="p-6 text-center">Loading dashboard...</div>;
  if (!dashboard) return <div className="p-6 text-red-600">Failed to load dashboard data.</div>;

  // ✅ Extract data from backend response
  const { totalStats, revenueData, categoryData, conversionData, monthlyTarget } = dashboard;

  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Total Sales */}
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-orange-600" />
              </div>
              <span className="font-medium text-gray-500">Total Sales</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">
              ${totalStats?.totalSales?.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Total Orders */}
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                <ShoppingBag className="w-5 h-5 text-blue-600" />
              </div>
              <span className="font-medium text-gray-500">Total Orders</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">
              {totalStats?.totalOrders?.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Total Products */}
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg">
                <Eye className="w-5 h-5 text-purple-600" />
              </div>
              <span className="font-medium text-gray-500">Total Products</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">
              {totalStats?.totalProducts?.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Analytics */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="p-6 bg-white border rounded-lg shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Revenue Analytics</h3>
            <div className="px-3 py-1 text-sm text-white bg-orange-500 rounded-md">Last 7 Days</div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <XAxis dataKey="_id" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Line type="monotone" dataKey="revenue" stroke="#f97316" strokeWidth={3} />
                <Line type="monotone" dataKey="orders" stroke="#fed7aa" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Target */}
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="mb-6 text-lg font-semibold">Monthly Target</h3>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">
              {monthlyTarget?.progress?.toFixed(1)}%
            </div>
            <p className="mt-2 text-gray-600">
              ${monthlyTarget?.revenue?.toLocaleString()} / $
              {monthlyTarget?.target?.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Conversion Rate */}
        <div className="p-6 bg-yellow-100 shadow rounded-xl">
          <h2 className="mb-4 text-lg font-bold">Conversion Rate</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart
              data={conversionData.labels.map((label: string, idx: number) => ({
                name: label,
                value: conversionData.data[idx],
              }))}
            >
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Bar dataKey="value" fill="#FFD93D" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Categories */}
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="mb-4 text-lg font-semibold">Top Categories</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="count"
                nameKey="_id"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={2}
              >
                {categoryData.map((entry: any, index: number) => (
                  <Cell key={index} fill={["#f97316", "#fb923c", "#fdba74", "#fed7aa"][index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Traffic Sources (optional placeholder) */}
        <div className="p-6 text-center text-gray-500 bg-white border rounded-lg shadow-sm">
          Traffic data can be added later if available
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
