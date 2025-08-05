// components/Logo.jsx
import React from 'react';

const Logo = () => {
  return (
    <a href="#" className="logo">
      <svg width="200" height="40" viewBox="0 0 200 40">
        <path d="M18.5,4L4,18.5L18.5,33L33,18.5L18.5,4z" fill="#5d30ff"></path>
        <text x="35" y="25" fill="#000" fontWeight="bold" fontSize="20">Tracker</text>
      </svg>
    </a>
  );
};

export default Logo;