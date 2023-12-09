import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { getEmployee } from '../MongoDbClient';
import { DisplayEmployees } from '../MongoDbClient';
import { updateRequestStatus } from '../MongoDbClient';

const _id = localStorage.getItem('username');

const ScheduleManagement = () => {
    const [timeOffRequests, setTimeOffRequests] = useState([]);
    const [employees, setEmployees] = useState([]);
    
    useEffect(() => {
        DisplayEmployees().then(response => {
            if (response && response.data) {
                setEmployees(response.data);
            }
        });
    }, []);

    useEffect(() => {
        // Fetch time off requests for each employee
        const fetchTimeOffRequests = async () => {
            const requests = await Promise.all(
                employees.map(employee => getEmployee(employee._id))
            );

            // Flatten the array of time off requests
            const allRequests = requests.flatMap(request => request.data.timeOffRequests);

            setTimeOffRequests(allRequests);
        };

        fetchTimeOffRequests();
    }, [employees]);

    const handleApproveRequest = async (employeeId, requestIndex) => {
        try {
            // Update the status in the database
            await updateRequestStatus(employeeId, requestIndex, 'Approved');

            // Update the state to reflect the change
            const updatedEmployees = [...employees];
            updatedEmployees.forEach(employee => {
                if (employee._id === employeeId && employee.timeOffRequests) {
                    employee.timeOffRequests[requestIndex].status = 'Approved';
                }
            });
            setEmployees(updatedEmployees);

            DisplayEmployees().then(response => {
                if (response && response.data) {
                    setEmployees(response.data);
                }
            });

        } catch (error) {
            console.error('Error approving time off request:', error);
        }
    };

    return (
        <div>
            <h2>Schedule Management</h2>
            <h3>Time Off Requests Pending Approval:</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Time Off Requests</th>
                    </tr>
                </thead>
                <tbody>
                {employees.map((employee, index) => (
                    <tr key={index}>
                        <td>{employee._id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        {/* Display time off requests for each employee */}
                        <td>
                            {employee.timeOffRequests && employee.timeOffRequests.length > 0 ? (
                                employee.timeOffRequests.map((request, requestIndex) => (
                                    <div key={requestIndex} style={{ borderBottom: '1px solid #ccc', marginBottom: '8px' }}>
                                        <strong>Reason:</strong> {request.reason} <br />
                                        <strong>Status:</strong> {request.status} <br />
                                        <strong>Start Date:</strong> {request.startDate} <br />
                                        <strong>End Date:</strong> {request.endDate} <br />
                                        {request.status === 'Pending' && (
                                            <button onClick={() => handleApproveRequest(employee._id, requestIndex)}>
                                                Approve
                                            </button>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <div>No time off requests</div>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
};

export default ScheduleManagement;