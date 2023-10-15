import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import FeedbackForm from '../components/FeedbackForm';

function EmployeePortal() {
  return (
    <div className="dashboard">
      <Tabs>
        <TabList>
          <Tab>Attendance Tracker</Tab>
          <Tab>Payroll Management</Tab>
          <Tab>Employee Directory</Tab>
          <Tab>Feedback and Suggestions</Tab>
        </TabList>

        <TabPanel>
          <h2>Attendance Tracker</h2>
        </TabPanel>
        <TabPanel>
          <h2>Payroll Management</h2>
        </TabPanel>
        <TabPanel>
          <h2>Employee Directory</h2>
        </TabPanel>
        <TabPanel>
          <FeedbackForm />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default EmployeePortal;
