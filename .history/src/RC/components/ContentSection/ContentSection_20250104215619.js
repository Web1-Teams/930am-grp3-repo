import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ContentSection.css';

const ContentSection = ({ title, paragraph, image, reverse, showButton, buttonText, navigateTo }) => {
    return (
        <div className={`content-section ${reverse ? 'reverse' : ''}`}>
            <img src={image} alt={title} className="content-image" />
            <div className="content-text">
                <h2>{title}</h2>
                <p>{paragraph}</p>
                {showButton && navigateTo && (
                    <Link to={navigateTo} className="styled-button">
                        {buttonText || 'Learn More'}
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ContentSection;
