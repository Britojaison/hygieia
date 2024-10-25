import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/imgs/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href='/#'><img src={Logo} alt="Company Logo" className="footer-logo" /></a>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h4>CONTACT US</h4>
          <p>+1 (844) 326-6005</p>
          <p><a href="mailto:info@example.com">Email Us</a></p>
        </div>
        
        <div className="footer-section">
          <h4>COMPANY</h4>
          <a href='/aboutus#about-us'><p>About Us</p></a>
          <a href='/aboutus#mission-section'><p>Our Mission</p></a> 
          <a href='/aboutus#offer-section'><p>What We Offer</p></a>
          <a href='/aboutus#team-section'><p>Meet the Team</p></a>
          <a href='/aboutus#choose-us-sectio'><p>Why Choose Hygieia</p></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Hygieia</p>
      </div>
    </footer>
  );
}

export default Footer;
