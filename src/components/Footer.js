import React from 'react';
import './Footer.css'; // Optional for styling
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Local Grocery Store</p>
      <nav>
        <a href="/about">About Us</a> | <a href="/contact">Contact</a> | <a href="/privacy">Privacy Policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
