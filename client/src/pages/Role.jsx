import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, UserCog } from 'lucide-react';

function Role() {
  const navigate = useNavigate();

  // Styles for the main container
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //background: 'linear-gradient(to bottom right,rgb(191, 44, 44),rgb(67, 24, 152))',


    //backgroundImage: "url('https://universitykart.b-cdn.net/Content/upload/admin/qg4a5w5a.ak4.png')",

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
   // backgroundImage: "url('https://universitykart.b-cdn.net/Content/upload/admin/qg4a5w5a.ak4.png')",

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
          {/* Student Role */}
          <button
            onClick={() => navigate('/student/register')}
            style={studentButton}
            onMouseOver={(e) => Object.assign(e.target.style, studentHover)}
            onMouseOut={(e) => Object.assign(e.target.style, studentButton)}
          >
            <GraduationCap style={iconStyle} />
            <span>Student</span>
          </button>

          {/* Admin Role */}
          <button
            onClick={() => navigate('/admin/register')}
            style={adminButton}
            onMouseOver={(e) => Object.assign(e.target.style, adminHover)}
            onMouseOut={(e) => Object.assign(e.target.style, adminButton)}
          >
            <UserCog style={iconStyle} />
            <span>Faculty</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Role;
