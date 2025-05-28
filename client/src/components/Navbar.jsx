import React from 'react';
import '../styles/Navbar.css';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      
      <div className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        
      </div>
      
      <div className="auth-buttons">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/register" className="signup-btn">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;