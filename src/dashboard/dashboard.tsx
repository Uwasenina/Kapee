import { label } from "framer-motion/client";
import { DollarSign,TrendingDown,ShoppingBag,TrendingUp,Eye, MoreHorizontal } from "lucide-react"
import { ResponsiveContainer,LineChart,XAxis,YAxis,Line, Pie ,PieChart,Cell, BarChart, Bar} from "recharts";
function Dashboard () {
  // Sample data for charts
  const revenueData = [
    { date: '12 Aug', revenue: 8000, orders: 4000 },
    { date: '13 Aug', revenue: 9000, orders: 4500 },
    { date: '14 Aug', revenue: 11000, orders: 5000 },
    { date: '15 Aug', revenue: 12000, orders: 5500 },
    { date: '16 Aug', revenue: 13000, orders: 6000 },
    { date: '17 Aug', revenue: 12000, orders: 5800 },
    { date: '18 Aug', revenue: 14521, orders: 6200 },
    { date: '19 Aug', revenue: 13000, orders: 5900 },
  ];

  const categoryData = [
    { name: 'Electronics', value: 1200000, color: '#f97316' },
    { name: 'Fashion', value: 950000, color: '#fb923c' },
    { name: 'Home & Kitchen', value: 750000, color: '#fdba74' },
    { name: 'Beauty & Personal Care', value: 500000, color: '#fed7aa' },
  ];

  const trafficData = [
    { name: 'Direct Traffic', value: 40, color: '#f97316' },
    { name: 'Organic Search', value: 30, color: '#fb923c' },
    { name: 'Social Media', value: 15, color: '#fdba74' },
    { name: 'Referral Traffic', value: 10, color: '#fed7aa' },
    { name: 'Email Campaigns', value: 5, color: '#fef3e2' },
  ];

  const countryData = [
    { country: 'United States', percentage: 36 },
    { country: 'United Kingdom', percentage: 24 },
    { country: 'Indonesia', percentage: 17.5 },
    { country: 'Russia', percentage: 15 },
  ];
  const conversionData = {
    labels: ["Product Views", "Add to Cart", "Checkout", "Purchases", "Abandoned"],
    datasets: [
      {
        label: "Users",
        data: [25000, 12000, 8500, 6200, 3000],
        backgroundColor: "#FFD93D",
      },
    ],
  };

  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-orange-600" />
              </div>
              <span className="font-medium text-gray-500">Total Sales</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">$983,410</div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-green-500">+3.34%</span>
              <span className="text-sm text-gray-500">vs last week</span>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                <ShoppingBag className="w-5 h-5 text-blue-600" />
              </div>
              <span className="font-medium text-gray-500">Total Orders</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">58,375</div>
            <div className="flex items-center gap-1">
              <TrendingDown className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-500">-2.88%</span>
              <span className="text-sm text-gray-500">vs last week</span>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg">
                <Eye className="w-5 h-5 text-purple-600" />
              </div>
              <span className="font-medium text-gray-500">Total Visitors</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">237,782</div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-green-500">+8.02%</span>
              <span className="text-sm text-gray-500">vs last week</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Revenue Analytics */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Revenue Analytics</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-200 rounded-full"></div>
                <span className="text-sm text-gray-600">Order</span>
              </div>
              <div className="px-3 py-1 text-sm text-white bg-orange-500 rounded-md">Last 8 Days</div>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <XAxis 
                  dataKey="date" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6b7280' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6b7280' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#f97316" 
                  strokeWidth={3}
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="orders" 
                  stroke="#fed7aa" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4">
            <span className="text-2xl font-bold text-gray-900">$14,521</span>
          </div>
        </div>

        {/* Monthly Target */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Monthly Target</h3>
            <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer" />
          </div>
          
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#fed7aa"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#f97316"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${85 * 2.51} ${(100 - 85) * 2.51}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">85%</div>
                  <div className="text-sm font-medium text-green-500">+8.02% from last month</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="mb-2 text-lg font-semibold text-gray-900">Great Progress!</div>
            <div className="mb-4 text-sm text-gray-600">
              Our achievement increased by <span className="font-semibold text-orange-600">$200,000</span>,
              let's reach 100% next month.
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-sm text-gray-500">Target</div>
                <div className="text-lg font-semibold text-gray-900">$610,000</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Revenue</div>
                <div className="text-lg font-semibold text-gray-900">$519,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Active Users */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Active User</h3>
            <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer" />
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="text-2xl font-bold text-gray-900">2,758</div>
              <div className="text-sm text-gray-500">Users</div>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-500">+8.02%</span>
                <span className="text-sm text-gray-500">from last month</span>
              </div>
            </div>
            
            <div className="space-y-3">
              {countryData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{item.country}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 bg-orange-500 rounded-full" 
                        style={{ width: `${(item.percentage / 36) * 100}%` }}
                      ></div>
                    </div>
                    <span className="w-8 text-sm font-medium text-gray-900">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conversion Rate */}
        <div className="p-6 bg-yellow-100 shadow opacity-90 rounded-xl">
          <h2 className="mb-4 text-lg font-bold">Conversion Rate</h2>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart
              data={conversionData.labels.map((label, idx) => ({
                name: label,
                value: conversionData.datasets[0].data[idx],
              }))}
            >
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Bar dataKey="value" fill={conversionData.datasets[0].backgroundColor} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Top Categories */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Top Categories</h3>
            <span className="text-sm text-orange-600 cursor-pointer">See All</span>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-24 h-24">
                <PieChart width={96} height={96}>
                  <Pie
                    data={categoryData}
                    cx={48}
                    cy={48}
                    innerRadius={25}
                    outerRadius={40}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs text-gray-500">Total Sales</div>
                    <div className="text-sm font-bold text-gray-900">$3,400,000</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              {categoryData.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <span className="text-sm text-gray-600">{category.name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    ${(category.value / 1000).toFixed(0)}k
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Traffic Sources</h3>
            <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer" />
          </div>
          
          <div className="space-y-4">
            <div className="h-20">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={trafficData}
                    cx="50%"
                    cy="50%"
                    outerRadius={35}
                    dataKey="value"
                  >
                    {trafficData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="space-y-3">
              {trafficData.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: source.color }}
                    ></div>
                    <span className="text-sm text-gray-600">{source.name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{source.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;