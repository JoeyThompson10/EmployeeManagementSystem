import React, { useEffect } from 'react';
import Calendar from 'react-calendar';

const _id = localStorage.getItem('username');

const ScheduleManagement = () => {
    const tileClassName = ({ date }) => {
        const isCurrentDay = date.getDate() === new Date().getDate();
        const isDifferentMonth = date.getMonth() !== new Date().getMonth();
        
        if (isCurrentDay) {
            return 'current-day';
          } else if (isDifferentMonth) {
            return 'different-month-day';
          }
        return '';
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