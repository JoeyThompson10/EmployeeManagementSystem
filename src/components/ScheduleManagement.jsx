import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { getEmployee } from '../MongoDbClient';
import { DisplayEmployees } from '../MongoDbClient';

const _id = localStorage.getItem('username');

const ScheduleManagement = () => {
    const [schedule, setSchedule] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            // Retrieve the employee with the matching username
            const employee = await getEmployee(_id);
    
            // Check if the employee exists and has a schedule
            if (employee && employee.schedule) {
                setSchedule(employee.schedule);
                console.log(`Schedule for ${_id}: ${JSON.stringify(employee.schedule)}`);
            } else {
                console.log(`No schedule found for ${_id}`);
            }
        }
        fetchData();
    }, [_id]);

    const tileClassName = ({ date }) => {
        const dateString = date.toISOString().split('T')[0]; // Convert date to string in "YYYY-MM-DD" format
        const isCurrentYear = date.getFullYear() === new Date().getFullYear(); // Check if the date is in the current year
        const isCurrentMonth = isCurrentYear && date.getMonth() === new Date().getMonth(); // Check if the date is in the current month
        const isCurrentDay = isCurrentMonth && date.getDate() === new Date().getDate();
        const dayOfWeek = date.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday

        // Check if the current date is a Saturday or Sunday
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

        // Check if the current date is within the range of the first and last day of the schedule
        const isWithinScheduleRange = schedule.length > 0 && date >= new Date(schedule[0]) && date <= new Date(schedule[schedule.length - 1]);

        const isWithinSchedule = schedule.some(day => {
            const scheduleDate = new Date(day).toISOString().split('T')[0];
            return scheduleDate === dateString;
        });

        if (isCurrentDay && isCurrentYear) {
            return 'current-day';
        } else if ((isWithinSchedule || isWithinScheduleRange) && !isWeekend) {
            return 'within-schedule';
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