import React from 'react';
import './Hero.css';  // Import the external CSS file for the Hero component

const Hero = ({ title, paragraph, backgroundImage }) => {
  // Inline style to set the background image dynamically
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '50vh',  // Set height to 50% of the viewport height (or adjust as needed)
    width: '100%',
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
