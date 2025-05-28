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
