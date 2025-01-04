import React from 'react';
import './ContentSection.css';

const ContentSection = ({ title, paragraph, image, reverse }) => {
    return (
        <div className={`content-section ${reverse ? 'reverse' : ''}`}>
            <img src={image} alt={title} className="content-image" />
            <div className="content-text">
                <h2>{title}</h2>
                <p>{paragraph}</p>
            </div>
        </div>
    );
};

export default ContentSection;
