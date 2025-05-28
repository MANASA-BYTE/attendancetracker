import React, { useState, useEffect, useRef } from "react";
import { Building2, School, Clock, Upload, Menu, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [section, setSection] = useState("");
  const [className, setClassName] = useState("");
  const [time, setTime] = useState("");
  const [file, setFile] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");
  const [results, setResults] = useState(null);
  const sidebarRef = useRef(null);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("admin")) || {
    name: "Admin User",
    email: "admin@example.com",
    photo: "/passport.jpg",
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleReportClick = () => {
    navigate("/admin/report");
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("video", file);
    formData.append("section", section);
    formData.append("class", className);
    formData.append("time", time);

    try {
      const response = await fetch("http://127.0.0.1:5000/upload_video", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (!response.ok) throw new Error("Upload failed");

      const data = await response.json();
      console.log("Processed Data:", data);
      setResults(data);
      setUploadStatus("Upload Successful ✅");
    } catch (error) {
      console.error("Error:", error);
      setUploadStatus("Upload Failed ❌");
    }
  };

  const getStatusTextAndColor = (confidence) => {
    if (confidence > 0.5) return { text: "Active ✅ present", color: "green" };
    if (confidence < 0.5) return { text: "Inactive ❌absent", color: "red" };
    return { text: "Uncertain ❓", color: "orange" };
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarVisible(false);
      }
    };

    if (isSidebarVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarVisible]);

  return (
    <div style={styles.page}>
      {isSidebarVisible && (
        <div ref={sidebarRef} style={styles.sidebar}>
          <div style={styles.profile}>
            <img
              src={user.photo || "/passport.jpg"}
              alt="Admin"
              style={styles.avatar}
            />
            <p style={styles.name}>{user.name}</p>
            <p style={styles.email}>{user.email}</p>
          </div>
          <button onClick={handleReportClick} style={styles.sidebarButton}>
            <FileText size={18} style={{ marginRight: "8px" }} />
            Show Report
          </button>
        </div>
      )}

      <header style={styles.header}>
        <div style={styles.hamburgerContainer}>
          <Menu size={30} color="black" onClick={toggleSidebar} style={styles.hamburgerIcon} />
        </div>
        <h1 style={styles.title}>Admin Dashboard</h1>
      </header>

      <main style={styles.main}>
        <div style={styles.centerBox}>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                <Building2 size={20} style={styles.icon} />
                Section
              </label>
              <select value={section} onChange={(e) => setSection(e.target.value)} style={styles.select}>
                <option value="">Select a section</option>
                <option value="A">Section A</option>
                <option value="B">Section B</option>
              </select>
            </div>

            {section && (
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <School size={20} style={styles.icon} />
                  Class
                </label>
                <select value={className} onChange={(e) => setClassName(e.target.value)} style={styles.select}>
                  <option value="">Select a class</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
                </select>
              </div>
            )}

            {className && (
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <Clock size={20} style={styles.icon} />
                  Time
                </label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} style={styles.input} />
              </div>
            )}

            {time && (
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  <Upload size={20} style={styles.icon} />
                  Upload Classroom Video
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  style={styles.input}
                  accept="video/*"
                />
              </div>
            )}

            {file && (
              <div style={styles.formGroup}>
                <button type="submit" style={styles.button}>
                  Process Attendance
                </button>
              </div>
            )}
          </form>

          {uploadStatus && (
            <p
              style={{
                ...styles.uploadStatus,
                color: uploadStatus.includes("Successful") ? "green" : "red",
              }}
            >
              {uploadStatus}
            </p>
          )}

          {results && results.faces?.length > 0 && (
            <div style={styles.resultsBox}>
              <h2 style={styles.resultsTitle}>Processed Results</h2>
              <div style={styles.resultsGrid}>
                {results.faces.map((face, idx) => {
                  const { text, color } = getStatusTextAndColor(face.confidence);
                  return (
                    <div key={idx} style={styles.resultCard}>
                      {face.image_url && (
                        <img
                          src={`http://127.0.0.1:5000${face.image_url}`}
                          alt={`Face ${idx + 1}`}
                          style={styles.resultImage}
                        />
                      )}
                      <p>Confidence: {face.confidence}</p>
                      <p style={{ color }}>{text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

const styles = {
  page: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    padding: "20px 0",
    backgroundColor: "rgba(26, 12, 228, 0.99)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    textAlign: "center",
    width: "100%",
    position: "relative",
  },
  hamburgerContainer: {
    position: "absolute",
    left: "20px",
    top: "20px",
    cursor: "pointer",
  },
  hamburgerIcon: {
    cursor: "pointer",
  },
  title: {
    fontSize: "2.4rem",
    fontWeight: "bold ",
    //font family:"times",
    color: "black",
    margin: 0,
  },
  sidebar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "250px",
    height: "1000vh",
    backgroundColor: "black",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    zIndex: 1000,
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "30px",
    color: "white",
  },
  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginBottom: "10px",
    objectFit: "cover",
    border: "2px solid #fff",
  },
  name: {
    fontWeight: "bold",
    fontSize: "1.1rem",
  },
  email: {
    fontSize: "0.9rem",
    opacity: 0.8,
  },
  sidebarButton: {
    backgroundColor: "#374151",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    marginBottom: "10px",
    borderRadius: "8px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  main: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  centerBox: {
    backgroundColor: "white",
    padding: "40px 30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    width: "90%",
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "flex",
    alignItems: "center",
    fontWeight: "600",
    marginBottom: "6px",
    color: "#1f2937",
  },
  icon: {
    marginRight: "8px",
  },
  select: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    backgroundColor: "#1f2937",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },
  uploadStatus: {
    fontSize: "16px",
    fontWeight: "600",
    textAlign: "center",
  },
  resultsBox: {
    marginTop: "30px",
    backgroundColor: "#f9fafb",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  resultsTitle: {
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "15px",
  },
  resultsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "15px",
  },
  resultCard: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "15px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    textAlign: "center",
  },
  resultImage: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  },
};

export default AdminDashboard;