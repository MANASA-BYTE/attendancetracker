/*import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import axios from "axios";

const WeeklyReport = () => {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/weekly_report")
      .then((res) => {
        const raw = res.data;
        const formatted = Object.entries(raw).map(([date, value]) => ({
          date,
          Active: value.Active || 0,
          Inactive: value.Inactive || 0
        }));
        setReportData(formatted);
      });
  }, []);

  return (
    <div className="w-full h-96 bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">📊 Weekly Attendance Report</h2>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={reportData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Active" fill="#4ade80" />
          <Bar dataKey="Inactive" fill="#f87171" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyReport;
*/
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Visitors",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "#4f46e5",
      },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-4">
        <div className="text-2xl font-bold mb-8">My Dashboard</div>
        <nav className="space-y-4">
          <a href="#" className="hover:bg-gray-700 p-2 rounded">Dashboard</a>
          <a href="#" className="hover:bg-gray-700 p-2 rounded">Messages</a>
          <a href="#" className="hover:bg-gray-700 p-2 rounded">Analytics</a>
          <a href="#" className="hover:bg-gray-700 p-2 rounded">Settings</a>
          <a href="#" className="hover:bg-gray-700 p-2 rounded">Logout</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Welcome back, User</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Admin</span>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-sm text-gray-500">Total Sales</h2>
            <p className="text-2xl font-bold">$12,345</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-sm text-gray-500">Visitors</h2>
            <p className="text-2xl font-bold">1,234</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-sm text-gray-500">Orders</h2>
            <p className="text-2xl font-bold">321</p>
          </div>
        </div>

        {/* Chart + Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow col-span-2">
            <h2 className="text-lg font-semibold mb-4">Traffic Overview</h2>
            <Bar data={barData} />
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-2">
              <li className="text-sm text-gray-700">John placed an order.</li>
              <li className="text-sm text-gray-700">Mary updated her profile.</li>
              <li className="text-sm text-gray-700">Server rebooted successfully.</li>
              <li className="text-sm text-gray-700">New user registration.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
