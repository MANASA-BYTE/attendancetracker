import React, { useEffect, useState } from "react";
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
