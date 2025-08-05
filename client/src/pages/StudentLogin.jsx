import { useState, useEffect, useRef } from "react";
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
      if (res.data.success) {
        alert(res.data.message);
        navigate("/student/dashboard");
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
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={styles.backgroundVideo}
        src="/public/loginleft.mp4" // Replace with correct path to your video
        type="video/mp4"
      />

      {/* Foreground Login Container */}
      <div style={styles.container}>
        {/* Left Side - Login Form */}
        <div style={styles.leftPanel}>
          <h1 style={styles.loginTitle}>Login</h1>
          <p style={styles.subtitle}>Enter your account details</p>

          {error && <p style={styles.errorBox}>{error}</p>}

          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="email"
              name="email"
              placeholder="Username"
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
            <button type="submit" style={styles.loginButton}>Login</button>
          </form>

          <p style={styles.signupText}>
            Don’t have an account?{" "}
            <span style={styles.signupLink} onClick={() => navigate("/studentregister")}>
              Sign up
            </span>
          </p>
        </div>

        {/* Right Side - Welcome & Illustration */}
        <div style={styles.rightPanel}>
          <div style={styles.welcomeTextContainer}>
            <h1 style={styles.welcomeHeading}>
              <b>Welcome to</b>
              <br />
              student portal
            </h1>
          
          </div>
          <img
            src="/public/stlogin.png" 
            alt="Student Illustration"
            style={styles.illustration}
            draggable={false}
          />
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
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  },
  container: {
    display: "flex",
    width: "70%",
    height: "70%",
    fontFamily: "'Poppins', sans-serif",
    overflow: "hidden",
    userSelect: "none",
    zIndex: 2,
    borderRadius: "16px",
    backdropFilter: "blur(6px)",
    boxShadow: "0 0 40px rgba(0,0,0,0.5)",
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
  signupText: {
    color: "#AAA",
    marginTop: "auto",
    fontSize: "0.9rem",
  },
  signupLink: {
    color: "#4E41FF",
    backgroundColor: "#2B2B2B",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    marginLeft: "10px",
    fontWeight: "600",
    userSelect: "none",
  },
  rightPanel: {
    flex: 1,
    backgroundColor: "rgba(165, 69, 176, 0.7)",
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
    fontSize: "3rem",
    margin: "0",
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
    maxHeight: "300px",
    align:"centre",
    position: "absolute",
    bottom: "40px",
    right: "40px",
    userSelect: "none",
  },
};
