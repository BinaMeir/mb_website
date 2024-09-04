import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="footer-links">
                <div className="footer-column">
                    <h4>Services</h4>
                    <Link to="/bathrooms">Bathrooms</Link>
                    <Link to="/kitchen">Kitchen</Link>
                    <Link to="/plaster">Plaster</Link>
                    <Link to="/plumping">Plumping</Link>
                </div>
                <div className="footer-column">
                    <h4>Company</h4>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
                <div className="footer-column">
                    <h4>Contact Information</h4>
                    <p>Phone: 0515887084</p>
                    <p>Email: mb0548439982</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
