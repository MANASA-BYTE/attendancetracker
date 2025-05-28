import React from "react";
import { Bar } from "react-chartjs-2";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip as ChartTooltip,
  Legend as ChartLegend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartTooltip,
  ChartLegend
);

const barData = {
  labels: ["day 1", "Day 2", "day 3", "day 4", "day 5"],
  datasets: [
    {
      label: "Presentes",
      data: [12, 19, 13, 15, 5],
      backgroundColor: "#7B59FF", // purple accent
    },
  ],
};

const pieData = [
  { name: "Present", value: 70 },
  { name: "Absent", value: 30 },
];

const COLORS = ["green", "red"]; // green and red

export default function ReportPage() {
  return (
    <div style={styles.wrapper}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={styles.backgroundVideo}
        src="/public/loginleft.mp4"
        type="video/mp4"
      >
        Your browser does not support the video tag.
      </video>

      {/* Main Container */}
      <div style={styles.container}>
        {/* Left - Bar Chart */}
        <div style={styles.leftPanel}>
          <h2 style={styles.heading}>Weekly Attendance</h2>
          <Bar data={barData} />
        </div>

        {/* Right - Pie Chart */}
        <div style={styles.rightPanel}>
          <h2 style={styles.heading}>Present and Absent Students</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                labelLine={false}
                dataKey="value"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    display: "grid",
    placeItems: "center",
    backgroundColor: "#000",
    fontFamily: "'Poppins', times",
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.25,
    zIndex: 0,
  },
  container: {
    display: "flex",
    width: "80%",
    maxWidth: "1100px",
    height: "70%",
    backdropFilter: "blur(6px)",
    backgroundColor: "rgba(30, 30, 30, 0.85)",
    borderRadius: "16px",
    boxShadow: "0 0 40px rgba(123, 89, 255, 0.6)",
    zIndex: 1,
    padding: "40px",
    gap: "40px",
  },
  leftPanel: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    borderRadius: "16px",
    padding: "24px 32px",
    boxShadow: "8px 0 30px rgba(123, 89, 255, 0.5)",
    color: "white",
    display: "flex",
    flexDirection: "column",
  },
  rightPanel: {
    width: "400px",
    backgroundColor: "rgba(165, 69, 176, 0.7)",
    borderRadius: "16px",
    padding: "24px 32px",
    boxShadow: "0 0 30px rgba(123, 89, 255, 0.5)",
    color: "white",
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    fontWeight: 700,
    fontSize: "1.8rem",
    marginBottom: "24px",
    userSelect: "none",
    color: "#E0B3FF",
  },
};
