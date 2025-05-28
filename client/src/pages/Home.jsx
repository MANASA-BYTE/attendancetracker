/*
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
        background: 'linear-gradient(to bottom right, #5f27cd, #5f27cd)',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
      }}
    >
    
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          background: 'linear-gradient(to bottom right, #5f27cd, #5f27cd)',
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
          
          <div style={{ maxWidth: '45%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>Attendance Tracker</h1>
            <p style={{ fontSize: '1.3rem', maxWidth: '350px' }}>
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

          
          <div style={{ position: 'relative', width: '50%', maxWidth: '600px' }}>
            <img src={gradImg} alt="Graduation" style={imageStyle('100%', 'auto')} />
            <img src={teacherImg} alt="Teacher" style={cornerImageStyle('top', 'right', '30%', '-30%')} />
            <img src={classImg} alt="Class" style={cornerImageStyle('bottom', 'left', '-30%', '30%')} />
          </div>
        </div>
      </div>

      <div
        ref={aboutRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '4rem 3rem',
          background: 'linear-gradient(to bottom right, #5f27cd, #5f27cd)',
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
          style={{ width: '500px', height: '500px', borderRadius: '20px', objectFit: 'cover', boxShadow: '0 8px 18px rgba(0,0,0,0.3)' }}
        />
      </div>


    

<Section ref={featuresRef} title="Features" bg="#5f27cd">
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



     
      <Section ref={feedbackRef} title="Feedback" bg="linear-gradient(to bottom right, #5f27cd, #5f27cd)">
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

      
      <div style={{ textAlign: 'center', padding: '1rem', background: '#000' }}>
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
  boxShadow: '0 4px 10px rgba(106, 14, 227, 0.2)',
  cursor: 'pointer',
});

const imageStyle = (w, h) => ({
  width: w,
  height: h,
  borderRadius: '20px',
  objectFit: 'cover',
  boxShadow: '0 6px 20px rgba(40, 23, 233, 0.3)',
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
  boxShadow: '0 4px 8px rgba(15, 33, 232, 0.2)',
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

export default HomePage;*/

import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, UserCog } from 'lucide-react';
import logo from '../assets/logo.png';
import gradImg from '../assets/graducation.jpg';
import classImg from '../assets/class.jpg';
import teacherImg from '../assets/teacher.jpg';
//import indexcss from './index.css';

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
                <span style={{ marginTop: '0.8rem' }}>Teacher</span>
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