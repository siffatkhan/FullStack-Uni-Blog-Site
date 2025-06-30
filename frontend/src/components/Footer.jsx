import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10 border-t">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">

        <div className="text-center md:text-left">
          <p>© 2025 IMSpectrum | Built by Siffat</p>
        </div>

        <div className="flex space-x-4 my-2 md:my-0">
          <a href="https://github.com/siffatkhan" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>

        <div className="flex space-x-4 text-sm">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
