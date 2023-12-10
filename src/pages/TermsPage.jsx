import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function TermsPage() {
  return (
    <div className="terms-page container my-5">
      <h1 className="text-center mb-4">Terms and Conditions</h1>
      
      <p className="lead">Welcome to our Employment Management System. By accessing or using our system, you agree to be bound by these terms and conditions.</p>

      <section className="my-4">
        <h2 className="h4">General Terms</h2>
        <p>These terms govern your use of our employment management system and the services provided through it. The system is intended for business and professional use only.</p>
      </section>

      <section className="my-4">
        <h2 className="h4">User Responsibilities</h2>
        <p>Users are responsible for maintaining the confidentiality of account information and for all activities that occur under their account. Users agree to use the system in compliance with all applicable laws and regulations.</p>
      </section>

      <section className="my-4">
        <h2 className="h4">Privacy Policy</h2>
        <p>Our privacy policy explains how we handle and protect your personal data and privacy when you use our system. Your use of the system signifies your acceptance of our privacy policy.</p>
      </section>

      <section className="my-4">
        <h2 className="h4">Modifications to the Terms</h2>
        <p>We reserve the right to modify these terms at any time. You are advised to review these terms periodically for any changes.</p>
      </section>

      
      <footer className="text-center mt-5">
        <small>&copy; [EmployeeManagementSystem] - All Rights Reserved</small>
      </footer>
    </div>
  );
}

export default TermsPage;
