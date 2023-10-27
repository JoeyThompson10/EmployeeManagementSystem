import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/headerfooter.css';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-4">
      <div className="container">
        <nav className="footer-nav">
          <Link to="/about" className="text-light text-decoration-none mx-2" title="Learn more about us">About</Link> |
          <Link to="/contact" className="text-light text-decoration-none mx-2" title="Get in touch with us">Contact</Link> |
          <Link to="/terms" className="text-light text-decoration-none mx-2" title="Read our terms and conditions">Terms</Link>
        </nav>
        <p className="mt-2">© 2023 EmployeeManagementSystem</p>
      </div>
    </footer>
  );
}

export default Footer;
