import React from 'react';
import './Contact.css'; // Import the CSS file

export default function Contact() {
  return (
    <div className="contact-page">
      <h2>Connect with us</h2>
      <div className="contact-card">
       
        <div className="contact-info">
          <p><strong>Phone Number:</strong> +91 9876543210</p>
          <p><strong>Telephone Number:</strong> (022) 123-4567</p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:shopowner@example.com">shopowner@example.com</a>
          </p>
          <p>
            <strong>Facebook:</strong>{' '}
            <a
              href="https://facebook.com/shopowner"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook.com/shopowner
            </a>
          </p>
          <p>
            <strong>Instagram:</strong>{' '}
            <a
              href="https://instagram.com/shopowner"
              target="_blank"
              rel="noopener noreferrer"
            >
              @shopowner
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
