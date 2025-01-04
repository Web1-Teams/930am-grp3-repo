import React from 'react';
import '../Hero/hero.css';

const Hero = ({ title, paragraph, backgroundImage }) => {
  return (
    <div className="hero-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Hero;
