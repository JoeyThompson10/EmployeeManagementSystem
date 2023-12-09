import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { getEmployee } from '../MongoDbClient';
import { DisplayEmployees } from '../MongoDbClient';

const _id = localStorage.getItem('username');

const Legend = () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
        <div>
            <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'lightskyblue', marginRight: '5px' }}></span>
            <span>Current Day</span>
        </div>
        <div>
            <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'green', marginRight: '5px' }}></span>
            <span>Work Scheduled</span>
        </div>
    </div>
);

const ViewSchedules = () => {
    const [employees, setEmployees] = useState([]);
    const [schedule, setSchedule] = useState([]);
    const [assigneeId, setAssigneeId] = useState('');
    const [isUserChosen, setIsUserChosen] = useState(false);

    useEffect(() => {
        async function fetchData() {
          // Retrieve the employee with the matching username
          const employee = await getEmployee(assigneeId);
    
          // Check if the employee exists and has a schedule
          if (employee && employee.schedule) {
            console.log(`Schedule for ${assigneeId}: ${JSON.stringify(employee.schedule)}`);
            setSchedule(employee.schedule);
          } else {
            console.log(`No schedule found for ${assigneeId}`);
            setSchedule([]);
          }
        }
    
        fetchData();
      }, [assigneeId]);
    
    useEffect(() => {
        DisplayEmployees().then(response => {
          if (response && response.data) {
            setEmployees(response.data);
          }
        });
      }, []);

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

    const handleAssigneeChange = event => {
        const newAssigneeId = event.target.value;
        setAssigneeId(newAssigneeId);
        setIsUserChosen(true);
      };

    return (
        <div>
            <h2>View Schedules</h2>
            <div style={{ maxWidth: '600px', margin: 'auto', textAlign: 'center', padding: '20px', borderRadius: '8px' }}>
            <select id="assignee" onChange={handleAssigneeChange} value={assigneeId} style={{textAlign: 'center'}}>
                    <option value="">Select Employee</option>
                    {employees.map(employee => (
                        <option key={employee._id} value={employee._id}>
                            {employee._id}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                {isUserChosen &&
                <Legend />
                }
                <div style={{ maxWidth: '600px', margin: 'auto', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px' }}>
                {isUserChosen &&
                <Calendar 
                    style={{ width: '100%' }}
                    tileClassName={tileClassName}
                />
                }
                </div>
            </div>
        </div>
    );
};

export default ViewSchedules;
