import React from 'react';
import './Hero.css';

const Hero = ({ title, paragraph, backgroundImage }) => {

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '50vh',
    width: '100%',
  };

  return (
    <div className="hero-image55" style={heroStyle}>
      <div className="hero-text55">
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Hero;
