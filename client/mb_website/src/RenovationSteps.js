// RenovationSteps.js
import React from 'react';
import { FaClipboardList, FaSearch, FaDraftingCompass, FaHammer } from 'react-icons/fa';
import './RenovationSteps.css'; // Import the CSS file for styling

const RenovationSteps = () => {
    return (
        <div className="renovation-steps-container">
            <h2>Key Steps for Starting a Renovation</h2>
            <div className="step">
                <FaClipboardList className="step-icon" size={40} />
                <div className="step-content">
                    <h3>1. Plan and Budget</h3>
                    <p>Outline the scope of your renovation and set a realistic budget. Consider all costs, including materials, labor, and any unexpected expenses.</p>
                </div>
            </div>
            <div className="step">
                <FaSearch className="step-icon" size={40} />
                <div className="step-content">
                    <h3>2. Research and Hire Professionals</h3>
                    <p>Research contractors and designers, check references, and get quotes. Hiring experienced professionals ensures quality work and saves time.</p>
                </div>
            </div>
            <div className="step">
                <FaDraftingCompass className="step-icon" size={40} />
                <div className="step-content">
                    <h3>3. Design and Permits</h3>
                    <p>Work with your designer to finalize the design. Obtain necessary permits from local authorities to ensure compliance with regulations.</p>
                </div>
            </div>
            <div className="step">
                <FaHammer className="step-icon" size={40} />
                <div className="step-content">
                    <h3>4. Construction</h3>
                    <p>Begin the renovation process. Stay in close communication with your contractor to keep the project on track and address any issues promptly.</p>
                </div>
            </div>
        </div>
    );
};

export default RenovationSteps;
