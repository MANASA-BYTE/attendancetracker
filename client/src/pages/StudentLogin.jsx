/*import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function StudentLogin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (videoRef.current) {
      let stream = videoRef.current.srcObject;
      if (stream) {
        let tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
      videoRef.current.srcObject = null;
    }
  }, []);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/student/login", credentials);
      alert(res.data.message);
      navigate("/student/dashboard");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginBox}>
        <h2 style={styles.loginHeading}>Student Login</h2>

        {error && <p style={styles.errorBox}>{error}</p>}

        <form onSubmit={handleSubmit} style={styles.formContainer}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            style={styles.inputField}
            onFocus={(e) => Object.assign(e.target.style, styles.inputFieldFocus)}
            onBlur={(e) => Object.assign(e.target.style, styles.inputField)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            style={styles.inputField}
            required
          />

          <button
            type="submit"
            style={styles.loginButton}
            onMouseEnter={(e) => Object.assign(e.target.style, styles.loginButtonHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.loginButton)}
          >
            Login
          </button>
        </form>

        <p style={styles.registerText}>
          Don't have an account?{" "}
          <span
            style={styles.registerLink}
            onMouseEnter={(e) => Object.assign(e.target.style, styles.registerLinkHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.registerLink)}
            onClick={() => navigate("/studentregister")}
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    //background: "linear-gradient(to bottom right,left rgb(51, 85, 141),rgb(28, 22, 120))",
    background: "linear-gradient(to bottom right, #a1c4fd, #c2e9fb)",
    padding: "20px",
    width:"220vh",
  },
  loginBox: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  loginHeading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "15px",
  },
  errorBox: {
    background: "#ffe5e5",
    color: "#d9534f",
    padding: "10px",
    borderRadius: "6px",
    fontSize: "14px",
    marginBottom: "10px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  inputField: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
    outline: "none",
    transition: "0.3s",
    background: "#f9f9f9",
  },
  inputFieldFocus: {
    borderColor: "#4a90e2",
    boxShadow: "0px 0px 5px rgba(74, 144, 226, 0.5)",
  },
  loginButton: {
    width: "100%",
    background: "#4a90e2",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
  },
  loginButtonHover: {
    background: "#357ae8",
  },
  registerText: {
    fontSize: "14px",
    marginTop: "10px",
  },
  registerLink: {
    color: "#4a90e2",
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "none",
  },
  registerLinkHover: {
    textDecoration: "underline",
  },
};
*/
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function StudentLogin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(true); // Dark mode ON by default
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (videoRef.current) {
      let stream = videoRef.current.srcObject;
      if (stream) {
        let tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
      videoRef.current.srcObject = null;
    }
  }, []);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/student/login", credentials);
      alert(res.data.message);
      navigate("/student/dashboard");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div
      style={{
        ...styles.loginContainer,
        background: darkMode
          ? "linear-gradient(135deg, #0f172a, #1e293b)"
          : "linear-gradient(to bottom right, #a1c4fd, #c2e9fb)",
        color: darkMode ? "#f1f5f9" : "#333",
        animation: "fadeIn 1s ease forwards",
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        input:focus {
          animation: glow 1.5s infinite alternate;
        }

        @keyframes glow {
          from {
            box-shadow: 0 0 5px 1px #4a90e2;
          }
          to {
            box-shadow: 0 0 15px 3px #60a5fa;
          }
        }

        button:hover {
          animation: pulse 1.2s infinite alternate;
        }

        @keyframes pulse {
          from {
            background-color: #357ae8;
          }
          to {
            background-color: #60a5fa;
          }
        }
      `}</style>

      <div
        style={{
          ...styles.loginBox,
          background: darkMode ? "#1e293b" : "white",
          boxShadow: darkMode
            ? "0 0 20px 2px rgba(16, 185, 129, 0.7)"
            : "0px 4px 10px rgba(0, 0, 0, 0.1)",
          color: darkMode ? "#f1f5f9" : "#333",
        }}
      >
        <h2 style={{ ...styles.loginHeading, color: darkMode ? "#10b981" : "#333" }}>
          Student Login
        </h2>

        {error && (
          <p
            style={{
              ...styles.errorBox,
              background: darkMode ? "#782121" : "#ffe5e5",
              color: darkMode ? "#f87171" : "#d9534f",
            }}
          >
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} style={styles.formContainer}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            style={{
              ...styles.inputField,
              background: darkMode ? "#0f172a" : "#f9f9f9",
              border: darkMode ? "1px solid #334155" : "1px solid #ccc",
              color: darkMode ? "#f1f5f9" : "#333",
            }}
            onFocus={(e) => Object.assign(e.target.style, darkMode ? {
              borderColor: "#10b981",
              boxShadow: "0 0 8px 2px #10b981",
              background: "#134e4a",
              color: "#d1fae5",
            } : styles.inputFieldFocus)}
            onBlur={(e) => Object.assign(e.target.style, {
              background: darkMode ? "#0f172a" : "#f9f9f9",
              border: darkMode ? "1px solid #334155" : "1px solid #ccc",
              color: darkMode ? "#f1f5f9" : "#333",
              boxShadow: "none",
            })}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            style={{
              ...styles.inputField,
              background: darkMode ? "#0f172a" : "#f9f9f9",
              border: darkMode ? "1px solid #334155" : "1px solid #ccc",
              color: darkMode ? "#f1f5f9" : "#333",
            }}
            onFocus={(e) => Object.assign(e.target.style, darkMode ? {
              borderColor: "#10b981",
              boxShadow: "0 0 8px 2px #10b981",
              background: "#134e4a",
              color: "#d1fae5",
            } : styles.inputFieldFocus)}
            onBlur={(e) => Object.assign(e.target.style, {
              background: darkMode ? "#0f172a" : "#f9f9f9",
              border: darkMode ? "1px solid #334155" : "1px solid #ccc",
              color: darkMode ? "#f1f5f9" : "#333",
              boxShadow: "none",
            })}
            required
          />

          <button
            type="submit"
            style={{
              ...styles.loginButton,
              background: darkMode ? "#10b981" : "#4a90e2",
            }}
            onMouseEnter={(e) => Object.assign(e.target.style, darkMode ? {
              background: "#059669",
              boxShadow: "0 0 12px 3px #059669",
              transition: "background 0.3s ease",
            } : styles.loginButtonHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, {
              background: darkMode ? "#10b981" : "#4a90e2",
              boxShadow: "none",
            })}
          >
            Login
          </button>
        </form>

        <p style={{ ...styles.registerText, color: darkMode ? "#cbd5e1" : "#333" }}>
          Don't have an account?{" "}
          <span
            style={{
              ...styles.registerLink,
              color: darkMode ? "#22c55e" : "#4a90e2",
            }}
            onMouseEnter={(e) =>
              Object.assign(e.target.style, {
                textDecoration: "underline",
                color: darkMode ? "#4ade80" : "#357ae8",
                cursor: "pointer",
              })
            }
            onMouseLeave={(e) =>
              Object.assign(e.target.style, {
                textDecoration: "none",
                color: darkMode ? "#22c55e" : "#4a90e2",
              })
            }
            onClick={() => navigate("/studentregister")}
          >
            Register here
          </span>
        </p>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            marginTop: "20px",
            padding: "8px 12px",
            backgroundColor: darkMode ? "#334155" : "#cbd5e1",
            color: darkMode ? "#d1d5db" : "#1e293b",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            fontWeight: "bold",
          }}
          title="Toggle light/dark mode"
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
    width: "220vh",
  },
  loginBox: {
    padding: "30px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  loginHeading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  errorBox: {
    padding: "10px",
    borderRadius: "6px",
    fontSize: "14px",
    marginBottom: "10px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  inputField: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    fontSize: "16px",
    outline: "none",
    transition: "0.3s",
  },
  loginButton: {
    width: "100%",
    color: "white",
    padding: "10px",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
    border: "none",
  },
  registerText: {
    fontSize: "14px",
    marginTop: "10px",
  },
  registerLink: {
    fontWeight: "bold",
    textDecoration: "none",
  },
};