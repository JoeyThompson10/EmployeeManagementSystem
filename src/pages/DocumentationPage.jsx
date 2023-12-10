import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "bootstrap-icons/font/bootstrap-icons.css"
function DocumentationPage() {
    return (
        <div className="documentation-page container my-5">
            <h1 className="text-center mb-3">Documentation</h1>
            <h3 className="mb-2">Contributors</h3>
            <div className="contributors mb-4">
                <p>
                    <strong>Created by:</strong> Alejandro Bhagwandeen, Zeshan Khan, Carter Ray, Joseph Thompson, and Imani Allen
                </p>
                <p><strong>for </strong> Cloud Software Development (SWE 4633 Section 01) <strong>at </strong> Kennesaw State University</p>
                <p><strong>Instructor: </strong> Dr. Xia Li</p>
            </div>
            <h3 className="mb-2">Project Documentation</h3>
            <ul className="list-unstyled">
                <li className="mb-2">
                    <strong>Project Proposal: </strong>
                    <a href="/ProjectProposal.pdf" download className="btn btn-primary btn-sm">
                        <i className="bi bi-download"></i>
                    </a>
                </li>
                <li className="mb-2">
                    <strong>Database and Web Implementation: </strong>
                    <a href="/DatabaseAndWebImplementation.pdf" download className="btn btn-primary btn-sm">
                        <i className="bi bi-download"></i>
                    </a>
                </li>
            </ul>
            <h3 className="mb-2">Code Repository:</h3>
            <p className="mb-4">
                <strong>Source Code: </strong>
                <a href="https://github.com/JoeyThompson10/EmployeeManagementSystem" className="btn btn-primary btn-sm">
                    <i className="bi bi-github"></i>
                </a>
            </p>
            <h3 className="mb-2">Project Video</h3>
            <iframe width="420" height="315" src="https://www.youtube.com/embed/D-eWMSW9VbQ?si=ufFhVGqhnSyo89GG" title="Project Video" className="mb-4"></iframe>
        </div>
    );
};

export default DocumentationPage;
