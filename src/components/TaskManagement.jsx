import React, { useState, useEffect } from 'react';
import { DisplayEmployees, AddTaskToUser } from '../MongoDbClient';

const TaskManagement = () => {
    const [employees, setEmployees] = useState([]);
    const [assigneeId, setAssigneeId] = useState('');
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        DisplayEmployees().then(response => {
            if (response && response.data) {
                setEmployees(response.data);
            }
        });
    }, []);

    const handleTaskChange = event => {
        setNewTask(event.target.value);
    };

    const handleAssigneeChange = event => {
        setAssigneeId(event.target.value);
    };

    const handleAddTask = async () => {
        try {
            await AddTaskToUser(assigneeId, newTask);
            // Refresh the employee list after adding the task
            DisplayEmployees().then(response => {
                if (response && response.data) {
                    setEmployees(response.data);
                }
            });
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Task Management</h2>
            <div>
                <label htmlFor="assignee">Assign To:</label>
                <select id="assignee" onChange={handleAssigneeChange} value={assigneeId}>
                    <option value="">Select Employee</option>
                    {employees.map(employee => (
                        <option key={employee._id} value={employee._id}>
                            {employee._id}
                        </option>
                    ))}
                </select>
                <label htmlFor="newTask">Task:</label>
                <input
                    type="text"
                    id="newTask"
                    value={newTask}
                    onChange={handleTaskChange}
                />
                <button onClick={handleAddTask} disabled={!assigneeId || !newTask}>
                    Add Task
                </button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Job Title</th>
                        <th>Is Manager</th>
                        <th>Task</th>
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
                            <td>{employee.task}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskManagement;
