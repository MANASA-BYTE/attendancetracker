import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch attendance data when the component mounts
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        // Replace with your actual API endpoint to fetch the student's attendance
        const response = await axios.get("http://localhost:5000/api/student/attendance");
        setAttendance(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load attendance data. Please try again.");
        setLoading(false);
      }
    };

    fetchAttendance();
  }, []);

  // Logout functionality
  const handleLogout = () => {
    // Clear any session data or JWT token if needed
    localStorage.removeItem("token");
    navigate("/studentlogin");
  };

  if (loading) {
    return <div>Loading attendance data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={styles.dashboardContainer}>
      <div style={styles.dashboardHeader}>
        <h2 style={styles.headerText}>Student Dashboard</h2>
        <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
      </div>

      <div style={styles.attendanceSection}>
        <h3 style={styles.attendanceHeading}>Attendance Overview</h3>
        {attendance.length === 0 ? (
          <p>No attendance data available.</p>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {attendance.map((record, index) => (
                <tr key={index}>
                  <td>{record.date}</td>
                  <td>{record.status}</td>
                  <td>{record.comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Example of displaying attendance stats in a graphical format */}
      <div style={styles.graphSection}>
        <h3 style={styles.attendanceHeading}>Attendance Statistics</h3>
        {/* Insert a graph library here (like Chart.js) to display graphical statistics */}
        <p>Graph will be displayed here</p>
      </div>
    </div>
  );
}

const styles = {
  dashboardContainer: {
    padding: "20px",
    backgroundColor: "#f4f7fc",
    minHeight: "100vh",
  },
  dashboardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4a90e2",
    color: "white",
    padding: "10px 20px",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  headerText: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  attendanceSection: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  attendanceHeading: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableCell: {
    padding: "10px",
    border: "1px solid #ddd",
  },
  graphSection: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
};
