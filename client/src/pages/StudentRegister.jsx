import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function StudentRegister() {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    photo: "", // Stores base64 image
  });

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isWebcamActive, setIsWebcamActive] = useState(false);
  const navigate = useNavigate();

  // Function to Start Webcam
  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setIsWebcamActive(true);
    } catch (err) {
      console.error("Webcam error:", err);
      alert("Webcam access is required for registration.");
    }
  };

  // Function to Stop Webcam
  const stopWebcam = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      let stream = videoRef.current.srcObject;
      let tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsWebcamActive(false);
  };

  // Activate Webcam only when Capture Face is Clicked
  const handleCaptureClick = () => {
    if (!isWebcamActive) {
      startWebcam();
    }
  };

  // Capture Image from Webcam
  const captureFace = () => {
    if (!isWebcamActive) {
      alert("Webcam is not active. Click 'Capture Face' again to open it.");
      return;
    }

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set a smaller canvas size (reduce resolution)
    canvas.width = 300;
    canvas.height = 300;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert to base64 with lower quality
    const imageData = canvas.toDataURL("image/jpeg", 0.5);

    setStudent({ ...student, photo: imageData });

    // Stop webcam after capturing image
    stopWebcam();
  };

  // Handle Input Changes
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!student.photo) {
      alert("Please capture your face before registering.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/student/register", student);
      alert(res.data.message);

      stopWebcam();
      navigate("/studentlogin");
    } catch (error) {
      console.error("Registration failed", error);
      alert(error.response?.data?.message || "Registration failed. Try again.");
    }
  };

  return (
    <div style={styles.registerContainer}>
      <div style={styles.formBox}>
        <h2 style={styles.formTitle}>Student Registration</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="id" placeholder="Student ID" value={student.id} onChange={handleChange} style={styles.inputField} required />
          <input type="text" name="name" placeholder="Full Name" value={student.name} onChange={handleChange} style={styles.inputField} required />
          <input type="email" name="email" placeholder="Email" value={student.email} onChange={handleChange} style={styles.inputField} required />
          <input type="password" name="password" placeholder="Password" value={student.password} onChange={handleChange} style={styles.inputField} required />

         
          <div className="flex flex-col items-center">
            <video ref={videoRef} autoPlay className="w-48 h-36 border" style={{ display: isWebcamActive ? "block" : "none" }} />
            <canvas ref={canvasRef} className="hidden" width="640" height="480" />
            <button type="button" onClick={handleCaptureClick} style={styles.primaryButton}>
              {isWebcamActive ? "Capture Face" : "Open Webcam"}
            </button>
            {isWebcamActive && (
              <button type="button" onClick={captureFace} style={styles.secondaryButton}>
                Confirm & Capture
              </button>
            )}
          </div>

          
          {student.photo && (
            <div className="mt-2 text-center">
              <p className="text-sm">Captured Face:</p>
              <img src={student.photo} alt="Captured face" className="w-20 h-20 rounded-full mx-auto" />
            </div>
          )}

          <button type="submit" style={styles.successButton}>Register</button>
        </form>
        <p style={styles.loginText}>
          Already have an account?{" "}
          <span style={styles.loginLink} onClick={() => navigate("/studentlogin")}>
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}

// CSS Styles
const styles = {
  registerContainer: {
    minHeight: "100vh",
    display: "flex",
    width:"220vh",
    alignItems: "center",
    justifyContent: "center",
    //background: "linear-gradient(to bottom right, #1e3a8a, #9333ea)",
    color: "white",
    background:"black",
  },
  formBox: {
    background: "#1e293b",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    width:"100vh",
    hiegth:"60vh",
    animation: "fadeIn 1s ease-in-out",
  },
  formTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  inputField: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #4b5563",
    background: "#374151",
    color: "white",
  },
  primaryButton: {
    background: "#2563eb",
    color: "white",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },
  secondaryButton: {
    background: "#10b981",
    color: "white",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
    marginTop: "10px",
  },
  successButton: {
    background: "#22c55e",
    color: "white",
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
    width: "100%",
  },
  loginText: {
    marginTop: "12px",
  },
  loginLink: {
    color: "#60a5fa",
    cursor: "pointer",
  },
};
