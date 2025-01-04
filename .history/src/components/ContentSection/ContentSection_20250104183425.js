import React from 'react';
import '../ContentSection/ContentSection.css';

const ContentSection = ({ title, paragraph, image, reverse, showButton, buttonText, onButtonClick }) => {
    return (
        <div className={`content-section ${reverse ? 'reverse' : ''}`}>
            <img src={image} alt={title} className="content-image" />
            <div className="content-text">
                <h2>{title}</h2>
                <p>{paragraph}</p>
                {/* Conditionally render the button */}
                {showButton && (
                    <button className="styled-button" onClick={onButtonClick}>
                        {buttonText || 'Click Me'} {/* Default button text */}
                    </button>
                )}
            </div>
        </div>
    );
};

export default ContentSection;
