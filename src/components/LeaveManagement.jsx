import React, { useState, useEffect } from 'react';
import { DisplayEmployees, AddLeaveRange } from '../MongoDbClient';

const LeaveManagement = () => {
    const [employees, setEmployees] = useState([]);
    const [assigneeId, setAssigneeId] = useState('');
    const [leaveRange, setLeaveRange] = useState('');

    useEffect(() => {
        DisplayEmployees().then(response => {
            if (response && response.data) {
                setEmployees(response.data);
            }
        });
    }, []);

    const handleLeaveChange = event => {
        setLeaveRange(event.target.value);
    };

    const handleAssigneeChange = event => {
        setAssigneeId(event.target.value);
    };

    const handleAddLeaveRange= async () => {
        try {
            await AddLeaveRange(assigneeId, leaveRange);
            // Refresh the employee list after adding the task
            DisplayEmployees().then(response => {
                if (response && response.data) {
                    setEmployees(response.data);
                }
            });
        } catch (error) {
            console.error('Error adding leave range:', error);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Leave Management</h2>
            <div>
                <div className="mb-3">
                    <label htmlFor="assignee" className="form-label">Assign To:</label>
                    <select id="assignee" className="form-select" onChange={handleAssigneeChange} value={assigneeId}>
                        <option value="">Select Employee</option>
                        {employees.map(employee => (
                            <option key={employee._id} value={employee._id}>
                                {employee._id}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="leaveRange" className="form-label">Date Range (MM/DD-MM/DD):</label>
                    <input
                        type="text"
                        id="leaveRange"
                        className="form-control"
                        value={leaveRange}
                        onChange={handleLeaveChange}
                    />
                </div>
                <button onClick={handleAddLeaveRange} className="btn btn-primary" disabled={!assigneeId || !leaveRange}>
                    Save
                </button>
            </div>
            <table className="table table-striped mt-4">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Job Title</th>
                        <th>Is Manager</th>
                        <th>Leave</th>
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
                            <td>{employee.leave}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeaveManagement;
