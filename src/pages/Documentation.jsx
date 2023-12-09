import React from "react"; 
import '../css/global.css';

const Documentation = () => {
    return (
        <div className="documentation-page">
            <h1>Contributors</h1>
                <p>
                    Created by: Alejandro Bhagwandeen, Zeshan Khan, Carter Ray, Joseph Thompson, and Imani Allen <br />
                    School: Kennesaw State University <br />
                    Class: Cloud Software Development (SWE 4633 Section 01) <br />
                    Year: 2023
                </p>
            <h2>Project Documentation</h2>
            <ul>
                <li>
                    <strong>Project Proposal: </strong> 
                    <a href="file:///Users/imaniallen/Downloads/ProjectProposal.pdf" download>Project Proposal</a>
                </li>
                <li>
                    <strong>ER Diagram: </strong>
                    <a href="file:///Users/imaniallen/Downloads/DatabaseAndWebImplementation.pdf" download>ER Diagram</a>
                </li>
            </ul>
            <h3>Code Repository:</h3>
                <p>
                    To view the source code for this project, please click the following link:
                    <a href= "https://github.com/JoeyThompson10/EmployeeManagementSystem"> LINK TO SOURCE CODE HERE </a>
                </p>
        </div>
    );
};

export default Documentation;