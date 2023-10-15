import React from 'react';
import { Link } from 'react-router-dom';
import '../css/headerfooter.css';

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link> | 
        <Link to="/terms">Terms</Link>
      </nav>
      <p>© 2023 EmployeeManagementSystem</p>
    </footer>
  );
}

export default Footer;