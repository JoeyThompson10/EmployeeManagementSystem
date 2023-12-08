import React, { useEffect } from 'react';
import Calendar from 'react-calendar';
import { getEmployee } from '../MongoDbClient';

const _id = localStorage.getItem('username');

const ScheduleManagement = () => {
    return (
        <div>
            <h2>Schedule Management</h2>
            <h3>User: {_id}</h3>
            <div style={{ maxWidth: '600px', margin: 'auto', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px' }}>
            <Calendar style={{ width: '100%' }}/>
            </div>
        </div>
    );
};

export default ScheduleManagement;