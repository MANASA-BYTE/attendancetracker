/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [videoEnded, setVideoEnded] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", credentials);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", "admin");
      alert("Login Successful");
      navigate("/admin/dashboard");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div className="admin-login-page">
      <style>{`
        .admin-login-page {
          display: flex;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          background-color: #0a143a;
          font-family: Arial, sans-serif;
        }

        .admin-left {
          flex: 1;
          position: relative;
        }

        .admin-right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(8px);
        }

        .admin-login-card {
          background-color: rgba(255, 255, 255, 0.45);
          padding: 32px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          width: 100%;
          max-width: 400px;
          text-align: center;
        }

        .admin-login-title {
          font-size: 26px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 20px;
        }

        .admin-error-text {
          color: #dc2626;
          font-size: 14px;
          margin-bottom: 12px;
        }

        .admin-input {
          width: 100%;
          padding: 12px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 16px;
          margin-bottom: 16px;
          outline: none;
          transition: border 0.3s ease;
        }

        .admin-input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 5px rgba(37, 99, 235, 0.5);
        }

        .admin-button {
          width: 100%;
          background-color: #2563eb;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .admin-button:hover {
          background-color: #1e40af;
        }

        .admin-forgot-text {
          font-size: 14px;
          color: #6b7280;
          margin-top: 12px;
        }

        .admin-forgot-link {
          color: #2563eb;
          cursor: pointer;
          font-weight: 600;
        }

        .admin-forgot-link:hover {
          text-decoration: underline;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 2rem;
          font-weight: bold;
        }

        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>

      <div className="admin-left">
        <video
          autoPlay
          muted
          onEnded={() => setVideoEnded(true)}
          src="loginleft.mp4"
        />
        {videoEnded && <div className="video-overlay">Login</div>}
      </div>

      <div className="admin-right">
        <form onSubmit={handleSubmit} className="admin-login-card">
          <h2 className="admin-login-title">Admin Login</h2>

          {error && <p className="admin-error-text">{error}</p>}

          <input
            type="email"
            placeholder="Email"
            className="admin-input"
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="admin-input"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            required
          />

          <button type="submit" className="admin-button">
            Login
          </button>

          <p className="admin-forgot-text">
            Forgot your password?{" "}
            <span
              className="admin-forgot-link"
              onClick={() => alert("Password reset feature coming soon!")}
            >
              Reset here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;*/
/*
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [videoEnded, setVideoEnded] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", credentials);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", "admin");
      alert("Login Successful");
      navigate("/admin/dashboard");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div className="admin-login-page">
      <style>{`
        .admin-login-page {
          display: flex;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          background-color: #0a143a;
          font-family: Arial, sans-serif;
        }

        .admin-left {
          flex: 1;
          position: relative;
        }

        .admin-right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(8px);
        }

        .admin-login-card {
          background-color: rgba(255, 255, 255, 0.45);
          padding: 32px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          width: 100%;
          max-width: 400px;
          text-align: center;
        }

        .admin-login-title {
          font-size: 26px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 20px;
        }

        .admin-error-text {
          color: #dc2626;
          font-size: 14px;
          margin-bottom: 12px;
        }

        .admin-input {
          width: 100%;
          padding: 12px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 16px;
          margin-bottom: 16px;
          outline: none;
          transition: border 0.3s ease;
        }

        .admin-input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 5px rgba(37, 99, 235, 0.5);
        }

        .admin-button {
          width: 100%;
          background-color: #2563eb;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .admin-button:hover {
          background-color: #1e40af;
        }

        .admin-forgot-text {
          font-size: 14px;
          color: #6b7280;
          margin-top: 12px;
        }

        .admin-forgot-link {
          color: #2563eb;
          cursor: pointer;
          font-weight: 600;
        }

        .admin-forgot-link:hover {
          text-decoration: underline;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 2rem;
          font-weight: bold;
        }

        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>

      <div className="admin-left">
        <video
          autoPlay
          muted
          onEnded={() => setVideoEnded(true)}
          src="loginleft.mp4"
        />
        {videoEnded && <div className="video-overlay">Login</div>}
      </div>

      <div className="admin-right">
        <form onSubmit={handleSubmit} className="admin-login-card">
          <h2 className="admin-login-title">Admin Login</h2>

          {error && <p className="admin-error-text">{error}</p>}

          <input
            type="email"
            placeholder="Email"
            className="admin-input"
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="admin-input"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            required
          />

          <button type="submit" className="admin-button">
            Login
          </button>

          <p className="admin-forgot-text">
            Forgot your password?{" "}
            <span
              className="admin-forgot-link"
              onClick={() => alert("Password reset feature coming soon!")}
            >
              Reset here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
*/
/*
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Cleanup video stream if any (like your example)
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
      const res = await axios.post("http://localhost:5000/api/admin/login", credentials);
      if (res.data.success) {
        alert(res.data.message);
        navigate("/admin/dashboard");
      } else {
        setError(res.data.message || "Login failed. Try again.");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div style={styles.wrapper}>
      
      <video
        autoPlay
        muted
        loop
        playsInline
        style={styles.backgroundVideo}
        src="/Adminnl.mp4" // Replace with your admin background video path
        type="video/mp4"
        ref={videoRef}
      />

      
      <div style={styles.container}>
      
        <div style={styles.leftPanel}>
          <h1 style={styles.loginTitle}>Admin Login</h1>
          <p style={styles.subtitle}>Enter your admin credentials</p>

          {error && <p style={styles.errorBox}>{error}</p>}

          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="email"
              name="email"
              placeholder="Admin Email"
              value={credentials.email}
              onChange={handleChange}
              style={styles.input}
              required
              autoComplete="username"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              style={styles.input}
              required
              autoComplete="current-password"
            />
            <p style={styles.forgotPassword}>Forgot Password?</p>
            <button type="submit" style={styles.loginButton}>
              Login
            </button>
          </form>
        </div>

      
        <div style={styles.rightPanel}>
          <div style={styles.welcomeTextContainer}>
            <h1 style={styles.welcomeHeading}>
              <b>Welcome back,</b>
              <br />
              Admin
            </h1>
            <p style={styles.loginAccessText}>
              Manage your portal securely and efficiently.
            </p>
          </div>
          
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
   // backgroundColor: "blue",
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
    filter: "brightness(0.3)", // dark overlay effect on video
  },
  container: {
    display: "flex",
    width: "55%",
    height: "65%",
    fontFamily: "'Poppins', sans-serif",
    overflow: "hidden",
    userSelect: "none",
    zIndex: 2,
    borderRadius: "16px",
    backdropFilter: "blur(6px)",
    boxShadow: "0 0 40px rgba(0, 0, 0, 0.5)",
  },
  leftPanel: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 60px",
    boxShadow: "8px 0 30px rgba(0,0,0,0.3)",
    borderRadius: "16px 0 0 16px",
  },
  loginTitle: {
    fontWeight: "700",
    fontSize: "2.5rem",
    marginBottom: "8px",
  },
  subtitle: {
    color: "#B0B0B0",
    fontWeight: "400",
    fontSize: "1rem",
    marginBottom: "32px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  input: {
    backgroundColor: "#2B2B2B",
    border: "none",
    borderBottom: "1.5px solid #444",
    borderRadius: "4px 4px 0 0",
    padding: "15px 12px",
    fontSize: "1rem",
    color: "white",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  forgotPassword: {
    fontSize: "0.9rem",
    color: "#888",
    cursor: "pointer",
    alignSelf: "flex-start",
    marginTop: "-10px",
    marginBottom: "20px",
  },
  loginButton: {
    backgroundColor: "#7B59FF",
    border: "none",
    borderRadius: "12px",
    padding: "14px",
    fontSize: "1rem",
    fontWeight: "500",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  errorBox: {
    backgroundColor: "#FF4848",
    color: "white",
    padding: "10px",
    borderRadius: "8px",
    fontWeight: "600",
    marginBottom: "10px",
  },
  rightPanel: {
    flex: 1,
    backgroundColor: "rgba(69, 21, 182, 0.7)",
    color: "white",
    borderRadius: "0 16px 16px 0",
    padding: "40px 50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    boxShadow: "-8px 0 30px rgba(0,0,0,0.3)",
  },
  welcomeTextContainer: {
    maxWidth: "400px",
    marginBottom: "auto",
  },
  welcomeHeading: {
    fontWeight: "800",
    fontSize: "2rem",
    margin: "0",
    fontFamily:"times",
    lineHeight: "1.2",
    userSelect: "none",
  },
  loginAccessText: {
    fontWeight: "400",
    fontSize: "1rem",
    opacity: 0.8,
    marginTop: "12px",
    userSelect: "none",
  },
  illustration: {
    width: "auto",
    maxHeight: "200px",
    position: "absolute",
    bottom: "45px",
    right: "40px",
    userSelect: "none",
  },
};
*/
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", credentials);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", "admin");
      alert("Login Successful");
      navigate("/admin/dashboard");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div className="admin-login-page">
      <style>{`
        .admin-login-page {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
          font-family: Times, serif;
          background-color:black;
        }

        .admin-login-card {
          position: relative;
          width: 450px;
          height: 600px;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0,0,0,0.7);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 40px 30px;
          z-index: 1;
          backdrop-filter: brightness(0.4); /* dims background video */
          background: rgba(0,0,0,0.4); /* fallback dim */
        }

        .admin-login-card video {
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
          filter: brightness(0.6);
        }

        .admin-login-title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 25px;
          text-align: center;
          text-transform: uppercase;
          background: linear-gradient(90deg, #231557, #44107a, #ff1361, #fff800);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: textclip 2s linear infinite;
        }

        @keyframes textclip {
          to {
            background-position: 200% center;
          }
        }

        .admin-error-text {
          color: #f87171;
          font-size: 14px;
          margin-bottom: 15px;
          text-align: center;
        }

        .admin-input {
          width: 100%;
          padding: 14px;
          margin-bottom: 20px;
          font-size: 16px;
          border-radius: 8px;
          border: none;
          outline: none;
          background: rgba(255, 255, 255, 0.15);
          color: white;
          transition: background-color 0.3s ease;
        }

        .admin-input::placeholder {
          color: #ddd;
        }

        .admin-input:focus {
          background: rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 8px #60a5fa;
        }

        .admin-button {
          width: 100%;
          padding: 14px;
          background-color: #3b82f6;
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .admin-button:hover {
          background-color: #1d4ed8;
        }

        .admin-forgot-text {
          margin-top: 20px;
          font-size: 14px;
          text-align: center;
          color: #d1d5db;
        }

        .admin-forgot-link {
          color: #3b82f6;
          cursor: pointer;
          font-weight: 600;
        }

        .admin-forgot-link:hover {
          text-decoration: underline;
        }
      `}</style>

      <form onSubmit={handleSubmit} className="admin-login-card">
        {/* Background video inside card */}
        <video autoPlay muted loop playsInline>
          <source src="/Aloginn.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h2 className="admin-login-title">Admin Login</h2>

        {error && <p className="admin-error-text">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="admin-input"
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="admin-input"
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          required
        />

        <button type="submit" className="admin-button">
          Login
        </button>

        <p className="admin-forgot-text">
          Forgot your password?{" "}
          <span
            className="admin-forgot-link"
            onClick={() => alert("Password reset feature coming soon!")}
          >
            Reset here
          </span>
        </p>
      </form>
    </div>
  );
}

export default AdminLogin;
