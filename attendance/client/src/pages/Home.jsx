// // import React from 'react'

// // export default function Home() {
// //   return (
// //     <div>Home</div>
// //   )
// // }
// import '../styles/Home.css'; // Create a CSS file for styling
/*
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div style={containerStyle}>
        <div style={{ textAlign: "center", padding: "50px"}}>
            <h1>Attendance Tracker</h1>
            <p>Missing lectures is fun until attendance shortage starts haunting your dreams!</p>

            
            <button onClick={() => navigate("/login")} style={buttonStyle}>Login</button>
            <button onClick={() => navigate("/register")} style={buttonStyle}>Register</button>
        </div>
        </div>
    );
}
// Button styling
const buttonStyle = {
    margin: "10px",
    padding: "12px 24px",
    fontSize: "18px",
    cursor: "pointer",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    transition: "0.3s",
};

// Container styling to spread full screen
const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundImage: "url('https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-5544-51f7-a467-4174843bd41a/raw?se=2025-04-01T13%3A18%3A37Z&sp=r&sv=2024-08-04&sr=b&scid=4fbbcb71-cd58-50ac-8232-830e063971e3&skoid=365eb242-95ba-4335-a618-2c9f8f766a86&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-01T06%3A06%3A05Z&ske=2025-04-02T06%3A06%3A05Z&sks=b&skv=2024-08-04&sig=F4cdLiJd1cz29Pe64bFJI3M0K6KrMO7WYf4mBXHv3ck%3D')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: 0,
};
export default Home;
*/
/*
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div style={containerStyle}>
            
            <img 
                src="https://universitykart.b-cdn.net/Content/upload/admin/qg4a5w5a.ak4.png" 
                alt="KMIT Logo" 
                style={logoStyle} 
            />

            <h1 style={titleStyle}>Attendance Tracker</h1>
            <p style={subtitleStyle}>
                Missing lectures is fun until attendance shortage starts haunting your dreams!
            </p>

            {/* Login and Register Buttons *
            <div>
                <button onClick={() => navigate("/login")} style={buttonStyle} className="button-hover">
                    Login
                </button>
                <button onClick={() => navigate("/register")} style={buttonStyle} className="button-hover">
                    Register
                </button>
            </div>
        </div>
    );
}

// Styles
const containerStyle = {
    height: "100vh",
    width: "100vw",
    backgroundImage: "url('https://i.pinimg.com/736x/ef/cd/af/efcdaf3668e03e3ec4974d71d4964f65.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",  // Ensures text is visible over the background
    padding: "20px"
};

const logoStyle = {
    width: "120px",  // Reduced logo size
    marginBottom: "20px"
};

const titleStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px"
};

const subtitleStyle = {
    fontSize: "18px",
    maxWidth: "600px",
    marginBottom: "20px"
};

const buttonStyle = {
    margin: "10px",
    padding: "12px 24px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    transition: "all 0.3s ease"
};

// Apply hover effects dynamically
const styles = document.createElement("style");
styles.innerHTML = `
    .button-hover:hover {
        background-color: #0056b3;
        transform: scale(1.05);
    }
    .button-hover:active {
        transform: scale(0.98);
    }
`;
document.head.appendChild(styles);

export default Home;

/*
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (role === "admin") {
      navigate("/register/admin");
    } else {
      navigate("/register/student");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Select Role</h2>
        <select
          className="w-full p-2 mb-3 border rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
        <button
          onClick={handleContinue}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Home;

*/
/*
import { useNavigate } from "react-router-dom";

export default function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-semibold mb-4">Select Your Role</h2>
        
        <button 
          onClick={() => navigate("/admin/register")} 
          className="w-full bg-blue-500 text-white p-3 rounded-md mb-3 hover:bg-blue-600 transition"
        >
          Register as Admin
        </button>

        <button 
          onClick={() => navigate("/student/register")} 
          className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition"
        >
          Register as Student
        </button>
      </div>
    </div>
  );
}
*/
/*
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, UserCog } from 'lucide-react';

function Role() {
  const navigate = useNavigate();

  // Styles for the main container
  const containerStyle = {
    minHeight: '100vh',
    width:'220vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    background: 'linear-gradient(to bottom right, #7b2cbf, #4a00e0)',
    //backgroundImage: "url('https://i.pinimg.com/736x/ef/cd/af/efcdaf3668e03e3ec4974d71d4964f65.jpg')",

  };

  // Styles for the main box
  const boxStyle = {
    background: 'white',
    padding: '3rem',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    textAlign: 'center',
    width: '100%',
    maxWidth: '450px',
    opacity: 0.7, 
  };

  // Styles for the title and subtitle
  const titleStyle = { fontSize: '2rem', fontWeight: 'bold', color: '#333' };
  const subtitleStyle = { fontSize: '1rem', color: '#666', marginBottom: '2rem' };

  // Styles for the grid layout
  const gridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' };

  // Common button styles
  const buttonStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
  };

  // Student Button Style
  const studentButton = {
    ...buttonStyle,
    background: '#007bff',
  };

  const studentHover = {
    background: '#0056b3',
    transform: 'scale(1.05)',
  };

  // Admin Button Style
  const adminButton = {
    ...buttonStyle,
    background: '#6f42c1',
  };

  const adminHover = {
    background: '#563d7c',
    transform: 'scale(1.05)',
  };

  // Icon styling
  const iconStyle = { width: '40px', height: '40px', marginBottom: '10px', color: 'white' };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={titleStyle}>Select Your Role</h1>
        <p style={subtitleStyle}>Choose your role to proceed</p>

        <div style={gridStyle}>
         
          <button
            onClick={() => navigate('/student/register')}
            style={studentButton}
            onMouseOver={(e) => Object.assign(e.target.style, studentHover)}
            onMouseOut={(e) => Object.assign(e.target.style, studentButton)}
          >
            <GraduationCap style={iconStyle} />
            <span>Student</span>
          </button>

          
          <button
            onClick={() => navigate('/admin/register')}
            style={adminButton}
            onMouseOver={(e) => Object.assign(e.target.style, adminHover)}
            onMouseOut={(e) => Object.assign(e.target.style, adminButton)}
          >
            <UserCog style={iconStyle} />
            <span>Admin</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Role;
*/
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, UserCog } from 'lucide-react';
import logo from '../assets/logo.png';
import gradImg from '../assets/graducation.jpg';
import classImg from '../assets/class.jpg';
import teacherImg from '../assets/teacher.jpg';

const HomePage = () => {
  const navigate = useNavigate();

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const feedbackRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    alert('Thank you for your feedback!');
    setFormData({ name: '', message: '' });
  };

  return (
    <div
      style={{
        width: '100vw',
        overflowY: 'auto',
        scrollBehavior: 'smooth',
        background: 'linear-gradient(to bottom right,rgb(18, 4, 47),rgb(46, 21, 96))',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/*Backgckground video}
       <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
      }}
    >
      <source src="/background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

      {/* Navbar */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          background: 'linear-gradient(to bottom right,rgb(11, 7, 22),rgb(57, 9, 160))',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          zIndex: 1000,
          boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
        }}
      >
        <img src={logo} alt="Logo" style={{ width: '50px' }} />
        <div style={{ display: 'flex', gap: '2rem', fontWeight: 'bold', cursor: 'pointer' }}>
          {['Home', 'About', 'Features', 'Feedback'].map((section, idx) => (
            <span
              key={idx}
              onClick={() => {
                if (section === 'Home') scrollToSection(homeRef);
                if (section === 'About') scrollToSection(aboutRef);
                if (section === 'Features') scrollToSection(featuresRef);
                if (section === 'Feedback') scrollToSection(feedbackRef);
              }}
              style={{
                transition: 'color 0.2s',
              }}
              onMouseOver={(e) => (e.target.style.color = '#ccc')}
              onMouseOut={(e) => (e.target.style.color = '#fff')}
            >
              {section}
            </span>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <div ref={homeRef} style={{ paddingTop: '6rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '6rem 3rem 4rem',
            minHeight: '100vh',
          }}
        >
          {/* Left */}
          <div style={{ maxWidth: '45%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
           {/* <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>Attendance Tracker</h1>*/}
           <h1 style={{
            textAlign: 'center',
    fontSize: '3rem',
    fontWeight: 'bold',
    color: 'white',
    fontFamily:'times',
    WebkitBoxReflect: 'below 1px linear-gradient(transparent, rgba(255,255,255,0.2))',
  }}>{"Attendence Tracker".split("").map((char, index) => (
    <span
      key={index}
      style={{
        display: 'inline-block',
        animation: 'bounce 1.5s infinite ease-in-out',
        animationDelay: `${index * 0.1}s`,
        textShadow: '0 5px 10px rgba(0,0,0,0.3)',
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</h1>
<p className="fill-para" data-text="Streamline attendance management with our efficient tracking system.">
  Streamline attendance management with our efficient tracking system.
</p>

            <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
              <div
                onClick={() => navigate('/student/register')}
                style={cardStyle('#007bff', '#0056b3')}
              >
                <GraduationCap size={40} />
                <span style={{ marginTop: '0.8rem' }}>Student</span>
              </div>
              <div
                onClick={() => navigate('/admin/register')}
                style={cardStyle('#8e2de2', '#4a00e0')}
              >
                <UserCog size={40} />
                <span style={{ marginTop: '0.8rem' }}>Admin</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div style={{ position: 'relative', width: '50%', maxWidth: '600px' }}>
            <img src={gradImg} alt="Graduation" style={imageStyle('100%', 'auto')} />
            <img src={teacherImg} alt="Teacher" style={cornerImageStyle('top', 'right', '30%', '-30%')} />
            <img src={classImg} alt="Class" style={cornerImageStyle('bottom', 'left', '-30%', '30%')} />
          </div>
        </div>
      </div>

      {/* About Section with text left, image right */}
      <div
        ref={aboutRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '4rem 3rem',
          /*background: 'linear-gradient(to bottom right,rgb(51, 23, 107), #5f27cd)',*/
        }}
      >
        <div style={{ width: '50%' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            Our Attendance Tracker revolutionizes classroom management by leveraging cutting-edge
            computer vision technologies like YOLO and facial recognition. This smart system ensures seamless
            attendance tracking, monitors student focus, and provides real-time analytics to help educators
            make informed decisions for better academic engagement and performance.
          </p>
        </div>
        <img
          src={teacherImg}
          alt="About"
          style={{ width: '500px', height: '500px', borderRadius: '20px', objectFit: 'cover', boxShadow: '0 8px 18px,rgb(26, 9, 61),rgb(32, 13, 69)' }}
        />
        
      </div>


      {/* Features Section */}
{/* Features Section */}
<marquee behavior="scroll" direction="left" scrollamount="5">
  <div style={{ display: 'inline-flex', gap: '2rem' }}>
<Section ref={featuresRef} title="Features" bg="">
  <div
    style={{
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
      gap: '2rem',
      width: '200%',
    }}
  >
    {[
      {
        title: 'Live Attendance',
        img: classImg,
        desc: 'Instant detection of presence using YOLO and facial recognition.',
      },
      {
        title: 'Smart Monitoring',
        img: teacherImg,
        desc: 'AI observes student focus and engagement levels in real-time.',
      },
      {
        title: 'Secure Records',
        img: gradImg,
        desc: 'Encrypted storage of attendance data with admin access control.',
      },
      {
        title: 'Analytics Dashboard',
        img: teacherImg,
        desc: 'Track performance and attendance trends with visual insights.',
      },
      {
        title: 'Automated Alerts',
        img: classImg,
        desc: 'Get notified when attendance or engagement drops below thresholds.',
      },
    ].map((card, index) => (
      <div
        key={index}
        style={{
          width: '19%', // Adjusted to fit 5 cards
          background: '#fff',
          borderRadius: '16px',
          padding: '1rem',
          boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
          color: '#333',
          textAlign: 'center',
        }}
      >
        <img
          src={card.img}
          alt={card.title}
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '10px',
            marginBottom: '1rem',
          }}
        />
        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{card.title}</h3>
        <p style={{ fontSize: '1rem' }}>{card.desc}</p>
      </div>
    ))}
  </div>
</Section>
 </div>
</marquee>


      {/* Feedback Section */}
      <Section ref={feedbackRef} title="Feedback" bg="">
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
            maxWidth: '500px',
            marginTop: '2rem',
          }}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
            style={inputStyle}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            rows={4}
            required
            style={inputStyle}
          />
          <button
            type="submit"
            style={{
              background: '#6a1b9a',
              color: 'white',
              padding: '0.75rem',
              borderRadius: '8px',
              border: 'none',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => (e.target.style.background = '#4a148c')}
            onMouseOut={(e) => (e.target.style.background = '#6a1b9a')}
          >
            Submit Feedback
          </button>
        </form>
      </Section>

      {/* Footer */}
      <div style={{ textAlign: 'center', padding: '1rem', background: '' }}>
        © 2025 Attendify | Built with 💜 by KMIT
      </div>
    </div>
  );
};

// ============== Helper Styles & Components ==============

const cardStyle = (color1, color2) => ({
  background:` linear-gradient(to right, ${color1}, ${color2})`,
  width: '160px',
  height: '160px',
  color: 'white',
  borderRadius: '20px',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 10px rgba(49, 17, 91, 0.2)',
  cursor: 'pointer',
});

const imageStyle = (w, h) => ({
  width: w,
  height: h,
  borderRadius: '20px',
  objectFit: 'cover',
  boxShadow: '0 6px 20px rgba(31, 24, 108, 0.3)',
});

const cornerImageStyle = (v, h, tx, ty) => ({
  position: 'absolute',
  [v]: 0,
  [h]: 0,
  transform: `translate(${tx}, ${ty})`,
  width: '160px',
  height: '110px',
  objectFit: 'cover',
  borderRadius: '12px',
  border: '3px solid white',
  boxShadow: '0 4px 8px rgba(95, 36, 143, 0.2)',
  background: '#fff',
});

const inputStyle = {
  padding: '0.75rem',
  borderRadius: '8px',
  border: 'none',
  fontSize: '1rem',
  outline: 'none',
};

const Section = React.forwardRef(({ title, children, bg }, ref) => (
  <div
    ref={ref}
    style={{
      padding: '5rem 3rem',
      background: bg,
      minHeight: '300px',
    }}
  >
    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{title}</h2>
    <div style={{ fontSize: '1.2rem', maxWidth: '800px' }}>{children}</div>
  </div>
));

export default HomePage;