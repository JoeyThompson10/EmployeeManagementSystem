import React, { useEffect } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import AttendanceTracking from '../components/AttendanceTracking';
import DocumentManagement from '../components/DocumentManagement';
import EmployeeManagement from '../components/EmployeeManagement';
import EmployeePerformance from '../components/EmployeePerformance';
import ExpenseClaims from '../components/ExpenseClaims';
import FeedbackForm from '../components/FeedbackForm';
import HiringOnboarding from '../components/HiringOnboarding';
import LeaveManagement from '../components/LeaveManagement';
import PayrollManagement from '../components/PayrollManagement';
import ProfileManagement from '../components/ProfileManagement';
import RequestTimeOff from '../components/RequestTimeOff';
import ScheduleManagement from '../components/ScheduleManagement';
import TaskManagement from '../components/TaskManagement';
import ViewSchedules from '../components/ViewSchedules';


function Dashboard() {
  const isManager = localStorage.getItem('isManager');

  return (
    <div className="dashboard">
      <Tabs>
        <TabList>
          {/* All Users */}
          <Tab>Home</Tab>
          <Tab>Profile Management</Tab>
          <Tab>Document Access and Management</Tab>
          <Tab>Request Time Off</Tab>
          <Tab>View Schedules</Tab>
          <Tab>Feedback</Tab>

          {/* Employee Stuff */}
          <Tab>Attendance Tracking</Tab>
          <Tab>Task Management</Tab>
          <Tab>Expense Claims</Tab>

          {/* Manager Stuff */}
          {isManager==='true' && <Tab>Schedule Management</Tab>}
          {isManager==='true' && <Tab>Payroll Management</Tab>}
          {isManager==='true' && <Tab>Empoyee Performance Monitoring</Tab>}
          {isManager==='true' && <Tab>Leave Management</Tab>}
          {isManager==='true' && <Tab>Hiring and Onboarding</Tab>}
          {isManager==='true' && <Tab>Employee Management</Tab>}
        </TabList>

        <TabPanel>
  <div className="homepage-panel">
    <h2>Welcome to Your Dashboard</h2>
    <p>Here's where your journey begins each day. Navigate through the tabs to manage your tasks, view schedules, and more.</p>
    <div className="quick-info">
      <p>📅 Check your schedule in 'View Schedules'</p>
      <p>📄 Access and manage documents in 'Document Access and Management'</p>
      <p>🛠 Manage your profile in 'Profile Management'</p>
    </div>
    {/* You can add an image or icon here if relevant */}
    {/* <img src="welcome-image.jpg" alt="Welcome" className="welcome-image" /> */}
  </div>
</TabPanel>


        <TabPanel>
          <ProfileManagement />
        </TabPanel>
        <TabPanel>
          <DocumentManagement />
        </TabPanel>
        <TabPanel>
          <RequestTimeOff />
        </TabPanel>
        <TabPanel>
          <ViewSchedules />
        </TabPanel>
        <TabPanel>
          <FeedbackForm />
        </TabPanel>

        <TabPanel>
          <AttendanceTracking />
        </TabPanel>
        <TabPanel>
          <TaskManagement />
        </TabPanel>
        <TabPanel>
          <ExpenseClaims />
        </TabPanel>

        {isManager==='true' && <TabPanel>
          <ScheduleManagement />
        </TabPanel>}
        {isManager==='true' && <TabPanel>
          <PayrollManagement />
        </TabPanel>}
        {isManager==='true' && <TabPanel>
          <EmployeePerformance />
        </TabPanel>}
        {isManager==='true' && <TabPanel>
          <LeaveManagement />
        </TabPanel>}
        {isManager==='true' && <TabPanel>
          <HiringOnboarding />
        </TabPanel>}
        {isManager==='true' && <TabPanel>
          <EmployeeManagement />
        </TabPanel>}

      </Tabs>
    </div>
  );
}

export default Dashboard;
