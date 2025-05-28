// components/Hero.js
import React from 'react';
import './Hero.css';
import VideoShowcase from './VideoShowcase';
const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">Attendance Tracker</h1>
      <p className="hero-subtitle"> Missing lectures is fun until attendance shortage starts haunting your dreams!"</p>
      <p className="no-credit"></p>
      
      <VideoShowcase />
    </section>
  );
};

export default Hero;