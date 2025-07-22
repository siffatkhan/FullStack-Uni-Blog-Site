import React from 'react';
import './Footer.css'; // Importing the CSS file
// there is still footter probelm persists


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <p>© 2025 IMSpectrum. Developed by Siffat Khan.</p>
        </div>

        <div className="footer-links">
          <a href="https://github.com/siffatkhan" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          {/* <a href="/contact">Contact</a> */}
        </div>

        <div className="footer-policy">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
