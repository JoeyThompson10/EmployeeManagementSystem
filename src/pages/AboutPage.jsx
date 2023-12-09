import React from 'react';
import '../css/global.css';

function AboutPage() {
  return (
    <div className="about-page">
      <h1>Contributors</h1>
      <p1>Created by: Alejandro Bhagwandeen, Zeshan Khan, Carter Ray, and Joseph Thompson, Imani Allen,</p1>
      <p2>Kennesaw State University</p2>
      <p3>Cloud Software Development (SWE 4633 Section 01) </p3>
      <h2>About the Employee Management System</h2>
      <p>
        This application is an app designed for managers and employees at a company. 
        Use of this app allows for better organization of manager and employee needs such as viewing schedules, managing their profile, and even requesting time off.
      </p>
      <h3>How it works</h3>
      <ul>
        <li><strong>Profile Management</strong> Allows users to update personal information such as name, email, address and phone number</li>
        <li><strong>Request Time Off</strong> Allows employees to request time off</li>
        <li><strong>View Schedule</strong> Allows users to view work schedules</li>
        <li><strong>Schedule Management</strong> Allows management to review time off requests</li>
        <li><strong>Feedback</strong> Allows employees to submit feedback and suggestions to management</li>
        <li><strong>Task Management</strong> Allows managers to se the tasks assigned to all employees</li>
      </ul>
      <h3>Ccode Repository:</h3>
      <p>
        To view the source code for this project, please click the following link:
        <a href= "https://github.com/JoeyThompson10/EmployeeManagementSystem"></a>
      </p>
    </div>
  );
}

export default AboutPage;
