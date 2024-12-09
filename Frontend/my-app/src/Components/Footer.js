// import React from 'react';
// import './Footer.css';

// // Import FontAwesome icons directly via react-fontawesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhoneAlt, faWhatsapp, faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-solid-svg-icons';

// export default function Footer() {
//   return (
//     <footer className="footer">
     
//       <div className="footer-bottom">
//         <p>&copy; 2024 GreenYield Solutions. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// }

import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.css";


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            GreenYield Solutions is dedicated to empowering farmers with 
            sustainable solutions. We provide expert advice, fertilizers, 
            and more to enhance productivity.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            Phone: +91-1234567890 <br />
            Email: support@greenyield.com <br />
            Address: 123 Green Street, AgriCity, India
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 GreenYield Solutions. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="#facebook" className="icon facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#twitter" className="icon twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#instagram" className="icon instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#linkedin" className="icon linkedin">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


















