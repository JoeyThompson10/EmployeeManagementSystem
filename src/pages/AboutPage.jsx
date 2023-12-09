import React from 'react';
import '../css/global.css';

function AboutPage() {
  return (
    <div className="about-page">
      <h2>About the Employee Management System</h2>
      <p>
        This application is an app designed for managers and employees at a company. 
        Use of this app allows for better organization of manager and employee needs such as viewing schedules, managing their profile, and even requesting time off.
      </p>
      <h3>How It Works</h3>
      <ul>
        <li><strong>Profile Management</strong> Allows users to update personal information such as name, email, address and phone number</li>
        <li><strong>Request Time Off</strong> Allows employees to request time off</li>
        <li><strong>View Schedule</strong> Allows users to view work schedules</li>
        <li><strong>Schedule Management</strong> Allows management to review time off requests</li>
        <li><strong>Feedback</strong> Allows employees to submit feedback and suggestions to management</li>
        <li><strong>Task Management</strong> Allows managers to se the tasks assigned to all employees</li>
        <li><strong>Expense Claims</strong> Allows employees to upload any company expenses</li>
      </ul>
    </div>
  );
}

export default AboutPage;
