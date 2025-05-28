import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminRegister() {
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/admin/register", admin);
      alert(res.data.message);
      navigate("/adminLogin");
    } catch (error) {
      console.error("Registration failed", error);
      alert(error.response?.data?.message || "Registration failed. Try again.");
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
      >
        <source src="/Adminnl.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Container */}
      <div style={styles.container}>
        {/* Left Section: Admin Register Form */}
        <div style={styles.left}>
          <h2 style={styles.title}>Admin Register</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={admin.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={admin.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={admin.password}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>
              Register
            </button>
          </form>
          <p style={styles.loginText}>
            Already have an account?{" "}
            <span
              style={styles.loginLink}
              onClick={() => navigate("/adminLogin")}
            >
              Login here
            </span>
          </p>
        </div>

        {/* Right Section: Welcome Info */}
        <div style={styles.right}>
          <h1 style={styles.rightTitle}>Welcome to Admin Portal</h1>
          <p style={styles.rightText}>
            Manage your attendance system effectively and securely.
          </p>
          <img
            src="/log.jpg"
            alt="Registration"
            style={styles.rightImage}
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
    fontFamily: "'Poppins', sans-serif",
    display: "grid",
    placeItems: "center",
    backgroundColor: "black", // no background color
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
    width: "90%",
    maxWidth: "900px",
    height: "70%",
    backdropFilter: "blur(6px)",
    backgroundColor: "rgba(0, 0, 0, 0.98)", // semi-transparent dark overlay
    borderRadius: "16px",
    boxShadow: "0 0 40px rgba(59, 17, 228, 0.96)", // purple glow shadow
    zIndex: 1,
    padding: "40px",
    gap: "40px",
    color: "white",
  },
  left: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  right: {
    flex: 1,
    backgroundColor: "rgba(58, 16, 226, 0.9)", // purple accent panel
    borderRadius: "16px",
    padding: "30px 30px",
    //height:"20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    boxShadow: "0 0 30px rgba(65, 24, 228, 0.7)",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "24px",
    color: "#E0B3FF",
    userSelect: "none",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  input: {
    padding: "14px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    outline: "none",
    color: "#333",
  },
  button: {
    backgroundColor: "#7B59FF",
    color: "white",
    padding: "14px",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  loginText: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#ddd",
  },
  loginLink: {
    color: "#7B59FF",
    cursor: "pointer",
    fontWeight: "700",
  },
  rightTitle: {
    fontSize: "2.2rem",
    fontWeight: "700",
    marginBottom: "16px",
    userSelect: "none",
  },
  rightText: {
    fontSize: "1.2rem",
    marginBottom: "30px",
  },
  rightImage: {
    width: "100%",
    maxWidth: "220px",
    borderRadius: "8px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
  },
};

export default AdminRegister;
