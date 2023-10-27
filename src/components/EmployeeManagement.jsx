import React, { useState, useEffect } from 'react';
import { DisplayEmployees } from "../MongoDbClient";

const EmployeeManagement = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        DisplayEmployees().then(response => {
            if (response && response.data) {
                setEmployees(response.data);
            }
        });
    }, []);

    return (
        <div>
            <h2>Employee Management</h2>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Job Title</th>
                        <th>Is Manager</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee._id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.job_title}</td>
                            <td>{employee.isManager ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeManagement;
