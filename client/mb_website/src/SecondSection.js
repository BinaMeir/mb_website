import React from 'react';
import { FaUtensils, FaHome, FaBath, FaTools, FaCouch, FaWrench } from 'react-icons/fa'; // Importing icons from Font Awesome
import { GiFloorPolisher } from 'react-icons/gi'; // Importing icon from Game Icons
import { Link } from 'react-router-dom';
import './SecondSection.css'; // Import the CSS for styling

const SecondSection = () => {
    return (
        <header className="second-section">
            <div className="second-section-header">
                <h2>ההתמחויות שלנו</h2>
            </div>
            <div className="second-section-links">
                <Link to="/house-rennovation" className="icon-link">
                    <FaHome size={50} />
                    <span>House</span>
                </Link>                
                <Link to="/plaster" className="icon-link">
                    <FaTools size={50} />
                    <span>Plaster</span>
                </Link>               
                <Link to="/house-rennovation#kitchen" className="icon-link">
                    <FaUtensils size={50} />
                    <span>Kitchen</span>
                </Link>
                <Link to="/house-rennovation#living-room" className="icon-link">
                    <FaCouch size={50} />
                    <span>Living Room</span>
                </Link>
                <Link to="/house-rennovation#bathroom" className="icon-link">
                    <FaBath size={50} />
                    <span>Bathroom</span>
                </Link>
                <Link to="/flooring" className="icon-link">
                    <GiFloorPolisher size={50} />
                    <span>Flooring</span>
                </Link>
                <Link to="/plumbing" className="icon-link">
                    <FaWrench size={50} />
                    <span>Plumbing</span>
                </Link>
                <Link to="/other" className="icon-link">
                    <FaTools size={50} />
                    <span>Other</span>
                </Link>
            </div>
        </header>
    );
};

export default SecondSection;
