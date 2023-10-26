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
          <Tab>Schedule Management</Tab>
          <Tab>Payroll Management</Tab>
          <Tab>Empoyee Performance Monitoring</Tab>
          <Tab>Leave Management</Tab>
          <Tab>Hiring and Onboarding</Tab>
          <Tab>Employee Management</Tab>
        </TabList>

        <TabPanel>
          <h2>Home</h2>
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
        <TabPanel>
          <ScheduleManagement />
        </TabPanel>
        <TabPanel>
          <PayrollManagement />
        </TabPanel>
        <TabPanel>
          <EmployeePerformance />
        </TabPanel>
        <TabPanel>
          <LeaveManagement />
        </TabPanel>
        <TabPanel>
          <HiringOnboarding />
        </TabPanel>
        <TabPanel>
          <EmployeeManagement />
        </TabPanel>

      </Tabs>
    </div>
  );
}

export default Dashboard;
