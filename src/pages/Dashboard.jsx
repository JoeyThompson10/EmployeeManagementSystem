import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import EmployeeManagement from '../components/EmployeeManagement';
import ExpenseClaims from '../components/ExpenseClaims';
import FeedbackForm from '../components/FeedbackForm';
import HiringOnboarding from '../components/HiringOnboarding';
import LeaveManagement from '../components/LeaveManagement';
import ProfileManagement from '../components/ProfileManagement';
import RequestTimeOff from '../components/RequestTimeOff';
import ScheduleManagement from '../components/ScheduleManagement';
import TaskManagement from '../components/TaskManagement';
import ViewSchedules from '../components/ViewSchedules';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const isManager = localStorage.getItem('isManager') === 'true';

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div>
            <h2 className="text-center my-4">Welcome to Your Dashboard</h2>

            <p className="text-center">
              Here's where your journey begins each day. Navigate through the tabs to manage your tasks, view schedules, and more.
            </p>
            <div className="text-center">
              <p>📅 Check your schedule in 'View Schedules'</p>
              <p>📝 Request time off in 'Request Time Off'</p>
              <p>🛠 Manage your profile in 'Profile Management'</p>
            </div>
          </div>
        );
      case 'profileManagement':
        return <ProfileManagement />;
      case 'requestTimeOff':
        return <RequestTimeOff />;
      case 'viewSchedules':
        return <ViewSchedules />;
      case 'feedback':
        return <FeedbackForm />;
      case 'taskManagement':
        return <TaskManagement />;
      case 'expenseClaims':
        return <ExpenseClaims />;
      case 'hiringOnboarding':
        return <HiringOnboarding />;
      case 'scheduleManagement':
        return isManager ? <ScheduleManagement /> : null;
      case 'leaveManagement':
        return isManager ? <LeaveManagement /> : null;
      case 'employeeManagement':
        return isManager ? <EmployeeManagement /> : null;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>Home</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'profileManagement' ? 'active' : ''}`} onClick={() => setActiveTab('profileManagement')}>Profile Management</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'requestTimeOff' ? 'active' : ''}`} onClick={() => setActiveTab('requestTimeOff')}>Request Time Off</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'viewSchedules' ? 'active' : ''}`} onClick={() => setActiveTab('viewSchedules')}>View Schedules</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'feedback' ? 'active' : ''}`} onClick={() => setActiveTab('feedback')}>Feedback</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'taskManagement' ? 'active' : ''}`} onClick={() => setActiveTab('taskManagement')}>Task Management</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'expenseClaims' ? 'active' : ''}`} onClick={() => setActiveTab('expenseClaims')}>Expense Claims</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'hiringOnboarding' ? 'active' : ''}`} onClick={() => setActiveTab('hiringOnboarding')}>Onboarding</button>
        </li>
        {isManager && (
          <>
            <li className="nav-item">
              <button className={`nav-link ${activeTab === 'scheduleManagement' ? 'active' : ''}`} onClick={() => setActiveTab('scheduleManagement')}>Schedule Management</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${activeTab === 'leaveManagement' ? 'active' : ''}`} onClick={() => setActiveTab('leaveManagement')}>Leave Management</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${activeTab === 'employeeManagement' ? 'active' : ''}`} onClick={() => setActiveTab('employeeManagement')}>Employee Management</button>
            </li>
          </>
        )}
      </ul>

      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
}

export default Dashboard;
