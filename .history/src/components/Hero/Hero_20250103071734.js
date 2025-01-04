import React from 'react';

const Hero = ({ title, paragraph, backgroundImage }) => {
  // Constructing the background image URL dynamically with the gradient and image
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '50%',  // Set the height to 50% as per your original styling
    position: 'relative',
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
