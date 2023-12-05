import React, { useState } from 'react';
import { requestTimeOff } from '../MongoDbClient'; // Import the function from MongoDbClient

const RequestTimeOff = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reason, setReason] = useState('');
    const [confirmation, setConfirmation] = useState('');

    const username = localStorage.getItem('username');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await requestTimeOff( username, startDate, endDate, reason );
        if (response.success) {
            setConfirmation('Your time-off request has been submitted successfully.');
        } else {
            setConfirmation('Failed to submit your request. Please try again.');
        }
    };

    return (
        <div className="request-time-off">
            <h2>Request Time Off</h2>
            <form onSubmit={handleSubmit}>
                <label>Start Date:
                    <input 
                        type="date" 
                        value={startDate} 
                        onChange={(e) => setStartDate(e.target.value)} 
                        required 
                    />
                </label>
                <label>End Date:
                    <input 
                        type="date" 
                        value={endDate} 
                        onChange={(e) => setEndDate(e.target.value)} 
                        required 
                    />
                </label>
                <label>Reason:
                    <textarea 
                        value={reason} 
                        onChange={(e) => setReason(e.target.value)} 
                        required 
                    />
                </label>
                <button type="submit">Submit Request</button>
            </form>
            {confirmation && <p>{confirmation}</p>}
        </div>
    );
};

export default RequestTimeOff;
