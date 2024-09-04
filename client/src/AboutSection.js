// AboutSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css'; // Import the CSS file for styling

const AboutSection = () => {
    return (
        <div className="about-section-container">
            <div className="about-section-content">
                <img src={`${process.env.PUBLIC_URL}/michael.jpg`} alt="Constructor" className="constructor-image" />
                <div className="about-text">
                    <h2>About Our Constructor</h2>
                    <p>
                        John Doe has over 20 years of experience in home renovations and construction. Known for his attention to detail and dedication to quality, John ensures every project is completed to the highest standard.
                    </p>
                    <Link to="/about" className="about-button">
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
