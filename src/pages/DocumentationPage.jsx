import React from "react"; 
import '../css/global.css';

function DocumentationPage(){
    return (
        <div className="documentation-page">
            <h1>Documentation</h1>
            <h2>Contributors</h2>
                <p>
                    Created by: Alejandro Bhagwandeen, Zeshan Khan, Carter Ray, Joseph Thompson, and Imani Allen <br />
                    School: Kennesaw State University <br />
                    Class: Cloud Software Development (SWE 4633 Section 01) <br />
                    Year: 2023
                </p>
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
            <h4>Code Repository:</h4>
                <p>
                    To view the source code for this project, please click the following link:
                    <a href= "https://github.com/JoeyThompson10/EmployeeManagementSystem"> LINK TO SOURCE CODE HERE </a>
                </p>
            <h5>Project Video</h5>
                <p>
                    Watch project demo video here: 
                    <a href= "https://youtube.com"> WATCH VIDEO NOW </a>
                </p>
        </div>
    );
};

export default DocumentationPage;