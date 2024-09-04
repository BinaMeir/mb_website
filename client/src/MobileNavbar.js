import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MobileNavbar.css'; // Custom CSS for additional styling
import logo from './logo.jpg'; // Adjust the path to your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Import the phone icon
import { Link } from 'react-router-dom'; // Import Link for internal navigation

const MobileNavbar = () => {
  const whatsappNumber = '+972548439982'; // Replace with the owner's phone number
  const phoneNumber = '+972515887084'; // Replace with the owner's phone number
  const message = 'Hello, I would like to contact you regarding your website.';
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  const phoneLink = `tel:${phoneNumber}`; // Link to open the phone app

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="mobile-navbar">
      <div className="left-links">
        <Nav.Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
        </Nav.Link>
        <Nav.Link href={phoneLink}>
          <FontAwesomeIcon icon={faPhone} size="lg" />
        </Nav.Link>
      </div>
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="right-hamburger" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/about">אודות</Nav.Link>
          <NavDropdown title="שיפוץ דירה" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/house-rennovation#kitchen">מטבחים</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/house-rennovation#bathroom">חדרי אמבטיה</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/house-rennovation#living-room">סלון</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/gallery">גלריה</Nav.Link>
          <Nav.Link as={Link} to="/recommendations">המלצות</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MobileNavbar;
