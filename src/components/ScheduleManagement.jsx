import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { getEmployee } from '../MongoDbClient';

const _id = localStorage.getItem('username');

const ScheduleManagement = () => {
    const [schedule, setSchedule] = useState([]);
    
    useEffect(() => {
        // Fetch the user's schedule from the server using an API call
        getEmployee(_id)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setSchedule(data.schedule))
            .catch(error => console.error('Error fetching schedule:', error));
    }, [_id]);

    const tileClassName = ({ date }) => {
        const dateString = date.toISOString().split('T')[0]; // Convert date to string in "YYYY-MM-DD" format
        const isScheduled = schedule.includes(dateString);
        const isCurrentDay = date.getDate() === new Date().getDate();
        const isDifferentMonth = date.getMonth() !== new Date().getMonth();

        if (isScheduled) {
            return 'scheduled-day';
        } else if (isCurrentDay) {
            return 'current-day';
        } else if (isDifferentMonth) {
            return 'different-month-day';
        } else {
            return '';
        }
      };
    return (
        <div>
            <h2>Schedule Management</h2>
            <h3>User: {_id}</h3>
            <div style={{ maxWidth: '600px', margin: 'auto', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px' }}>
            <Calendar 
                style={{ width: '100%' }}
                tileClassName={tileClassName}
            />
            </div>
        </div>
    );
};

export default ScheduleManagement;