import React, { useState } from 'react';
import { requestTimeOff } from '../MongoDbClient'; // Import the function from MongoDbClient
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const RequestTimeOff = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reason, setReason] = useState('');
    const [confirmation, setConfirmation] = useState('');

    const username = localStorage.getItem('username');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await requestTimeOff(username, startDate, endDate, reason);
        if (response.success) {
            setConfirmation('Your time-off request has been submitted successfully.');
        } else {
            setConfirmation('Failed to submit your request. Please try again.');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Request Time Off</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="form-group mb-3">
                    <label>Start Date:</label>
                    <input 
                        type="date" 
                        className="form-control"
                        value={startDate} 
                        onChange={(e) => setStartDate(e.target.value)} 
                        required 
                    />
                </div>

                <div className="form-group mb-3">
                    <label>End Date:</label>
                    <input 
                        type="date" 
                        className="form-control"
                        value={endDate} 
                        onChange={(e) => setEndDate(e.target.value)} 
                        required 
                    />
                </div>

                <div className="form-group mb-3">
                    <label>Reason:</label>
                    <textarea 
                        className="form-control"
                        value={reason} 
                        onChange={(e) => setReason(e.target.value)} 
                        required 
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit Request</button>
            </form>
            {confirmation && <div className="alert alert-info mt-3">{confirmation}</div>}
        </div>
    );
};

export default RequestTimeOff;
