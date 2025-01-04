import React from 'react';
import './Hero.css';  // Import the CSS file for Hero component

const Hero = ({ title, paragraph, backgroundImage }) => {
  // Dynamically set the background image using props
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL + backgroundImage})`,
  };

  return (
    <div className="hero-image" style={heroStyle}>
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Hero;
