/*import React from 'react';
import { CalendarDays, User } from 'lucide-react';

function StudentDashboard() {
  const studentId = "12345";
  const attendanceRecords = [
    { date: '2024-03-10', status: 'present', activityLevel: 'active', class: 'Mathematics', time: '09:00 AM' },
    { date: '2024-03-09', status: 'absent', activityLevel: 'sleepy', class: 'Physics', time: '10:30 AM' },
  ];

  return (
    <div className="dashboard-container">
      <div className="header">
        <div className="header-content">
          <div className="header-left">
            <User className="icon" />
            <h1 className="title">Student Dashboard</h1>
          </div>
          <div className="header-right">
            <span className="student-id">ID: {studentId}</span>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">
              <CalendarDays className="icon-sm" /> Attendance History
            </h2>
          </div>
          <div className="table-container">
            <table className="table">
              <thead className="table-head">
                <tr>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Activity Level</th>
                  <th>Class</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {attendanceRecords.map((record, index) => (
                  <tr key={index}>
                    <td>{record.date}</td>
                    <td>
                      <span className={`status ${record.status === 'present' ? 'present' : 'absent'}`}>
                        {record.status}
                      </span>
                    </td>
                    <td>{record.activityLevel}</td>
                    <td>{record.class}</td>
                    <td>{record.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;

// CSS Styles (in the same file)
const styles = `
  .dashboard-container {
    min-height: 100vh;
    width:220vh;
    background-color:rgb(24, 46, 89);
  }
  .header {
    background-color: white;
    box-shadow: 0px 1px 3px rgba(76, 23, 23, 0.1);
  }
  .header-content {
    max-width: 1280px;
    margin: auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-left {
    display: flex;
    align-items: center;
  }
  .icon {
    width: 24px;
    height: 24px;
    color: #2563eb;
    margin-right: 0.5rem;
  }
  .title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #1f2937;
  }
  .student-id {
    color: #6b7280;
  }
  .content {
    max-width: 1280px;
    margin: 2rem auto;
    padding: 1rem;
  }
  .card {
    background-color: white;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
  }
  .card-header {
    padding: 1rem;
    border-bottom: 1px solidrgba(20, 67, 162, 0.7);
  }
  .card-title {
    font-size: 1.25rem;
    font-weight: medium;
    color: #1f2937;
    display: flex;
    align-items: center;
  }
  .icon-sm {
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
  }
  .table-container {
    overflow-x: auto;
  }
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  .table-head th {
    background-color:rgb(151, 164, 176);
    padding: 0.75rem;
    text-align: left;
    font-size: 0.75rem;
    font-weight: 600;
    color: #6b7280;
    text-transform: uppercase;
  }
  .table-body td {
    padding: 0.75rem;
    font-size: 0.875rem;
    color: #374151;
  }
  .status {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 9999px;
  }
  .present {
    background-color: #d1fae5;
    color: #065f46;
  }
  .absent {
    background-color: #fee2e2;
    color: #b91c1c;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
*/
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const attendanceData = [
  { date: "2024-03-10", status: "present", activity: "active",  },
  { date: "2024-03-09", status: "absent", activity: "sleepy", },
  { date: "2024-03-08", status: "present", activity: "active", },
  { date: "2024-03-07", status: "present", activity: "active",  },
  { date: "2024-03-06", status: "absent", activity: "inactive", },
];

const graphData = attendanceData.map((entry) => ({
  date: entry.date,
  Present: entry.status === "present" ? 1 : 0,
  Absent: entry.status === "absent" ? 1 : 0,
}));

const colors = {
  primary: "#4caf50",
  secondary: "#f44336",
  backgroundDark: "#121212",
  backgroundLight: "#f9fafb",
  sidebarBg: "#1e1e1e",
  textLight: "#f1f1f1",
  textDark: "#333",
  tableRowHover: "#2a2a2a",
  shadowDark: "rgba(0,0,0,0.8)",
  shadowLight: "rgba(0,0,0,0.15)",
};

const StudentDashboard = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      {/* Import Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          fontFamily: "'Roboto', sans-serif",
          opacity: fadeIn ? 1 : 0,
          transition: "opacity 1s ease-in",
          backgroundColor: colors.backgroundDark,
          color: colors.textLight,
        }}
      >
        {/* Sidebar - Attendance Table */}
        <aside
          style={{
            width: "50%",
            backgroundColor: colors.sidebarBg,
            padding: "2.5rem 2rem",
            boxSizing: "border-box",
            overflowY: "auto",
            boxShadow: `inset -6px 0 20px ${colors.shadowLight}`,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: "700",
              marginBottom: "1rem",
              letterSpacing: "1.5px",
              textShadow: `1px 1px 3px ${colors.shadowDark}`,
            }}
          >
            Student Dashboard
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "500",
              marginBottom: "2rem",
              letterSpacing: "0.5px",
            }}
          >
          
          </p>

          <h2
            style={{
              fontSize: "1.8rem",
              color: colors.primary,
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textShadow: `0 0 5px ${colors.primary}`,
            }}
          >
            📅 Attendance History
          </h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "1.1rem",
              boxShadow: `0 4px 15px ${colors.shadowDark}`,
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <thead>
              <tr
                style={{
                  backgroundColor: "#333",
                  color: "#eee",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                <th style={{ padding: "0.75rem 1rem", textAlign: "left" }}>
                  Date
                </th>
                <th style={{ padding: "0.75rem 1rem", textAlign: "left" }}>
                  Status
                </th>
                <th style={{ padding: "0.75rem 1rem", textAlign: "left" }}>
                  Activity
                </th>
                
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((entry, i) => (
                <tr
                  key={i}
                  style={{
                    backgroundColor: i % 2 === 0 ? "#222" : "#1a1a1a",
                    transition: "background-color 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = colors.tableRowHover)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      i % 2 === 0 ? "#222" : "#1a1a1a")
                  }
                >
                  <td style={{ padding: "0.7rem 1rem" }}>{entry.date}</td>
                  <td
                    style={{
                      color:
                        entry.status === "present"
                          ? colors.primary
                          : colors.secondary,
                      fontWeight: "600",
                      textTransform: "capitalize",
                    }}
                  >
                    {entry.status}
                  </td>
                  <td style={{ textTransform: "capitalize", padding: "0.7rem 1rem" }}>
                    {entry.activity}
                  </td>
                  <td style={{ textTransform: "capitalize", padding: "0.7rem 1rem" }}>
                    {entry.class}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </aside>

        {/* Main Content - Bar Graph */}
        <main
          style={{
            width: "50%",
            backgroundColor: colors.backgroundLight,
            padding: "3rem 2.5rem",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            boxShadow: `inset 6px 0 20px ${colors.shadowLight}`,
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              color: colors.primary,
              marginBottom: "2rem",
              textShadow: `0 0 7px ${colors.primary}`,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            📊 Attendance Graph
          </h2>

          <section
            style={{
              flexGrow: 1,
              backgroundColor: "#fff",
              borderRadius: "15px",
              boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
              padding: "1.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ResponsiveContainer width="100%" height={350}>
              <BarChart
                data={graphData}
                margin={{ top: 25, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 12, fill: colors.textDark }}
                  stroke={colors.textDark}
                />
                <YAxis
                  allowDecimals={false}
                  tick={{ fontSize: 12, fill: colors.textDark }}
                  stroke={colors.textDark}
                />
                <Tooltip
                  contentStyle={{ fontSize: "14px", borderRadius: "8px" }}
                />
                <Bar
                  dataKey="Present"
                  fill={colors.primary}
                  isAnimationActive={true}
                  animationDuration={1500}
                  animationEasing="ease-in-out"
                  radius={[8, 8, 0, 0]}
                />
                <Bar
                  dataKey="Absent"
                  fill={colors.secondary}
                  isAnimationActive={true}
                  animationDuration={1500}
                  animationEasing="ease-in-out"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </section>
        </main>
      </div>
    </>
  );
};

export default StudentDashboard;