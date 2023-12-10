import React from "react";
import '../css/global.css';

function DocumentationPage() {
    return (
        <div className="documentation-page">
            <h1>Documentation</h1>
            <h3>Contributors</h3>
            <div className="contributors">
                <p>
                    <strong>Created by:</strong> Alejandro Bhagwandeen, Zeshan Khan, Carter Ray, Joseph Thompson, and Imani Allen
                </p>
                <p><strong>for </strong> Cloud Software Development (SWE 4633 Section 01) <strong>at </strong> Kennesaw State University</p>
                <p><strong>Instructor: </strong> Dr. Xia Li</p>
            </div>
            <h3>Project Documentation</h3>
            <ul>
                <li>
                    <strong>Project Proposal: </strong>
                    <a href="/ProjectProposal.pdf" download>Download Document</a>
                </li>
                <li>
                    <strong>Database and Web Implementation: </strong>
                    <a href="/DatabaseAndWebImplementation.pdf" download>Download Document</a>
                </li>
            </ul>
            <h3>Code Repository:</h3>
            <p>
                To view the source code for this project, please click the following link:
                <a href="https://github.com/JoeyThompson10/EmployeeManagementSystem"> LINK TO SOURCE CODE HERE </a>
            </p>
            <h3>Project Video</h3>
            <iframe width="420" height="315"
                src="https://www.youtube.com/embed/nOWRVyq9USg">
            </iframe>


        </div>
    );
};

export default DocumentationPage;