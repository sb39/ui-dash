import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const SideBar = () => {
  return (
    <ProSidebar>
      <Menu iconShape="square">
        <MenuItem>Dashboard</MenuItem>
        <MenuItem>Branch & Courses</MenuItem>
        <SubMenu title="Colleges">
          <MenuItem>All</MenuItem>
          <MenuItem>Send Invitations</MenuItem>
          <MenuItem>Add College</MenuItem>
        </SubMenu>
        <SubMenu title="Companies">
          <MenuItem>All</MenuItem>
        </SubMenu>
        <SubMenu title="Students">
          <MenuItem>All</MenuItem>
          <MenuItem>Add Student</MenuItem>
        </SubMenu>
        <SubMenu title="My Jobs">
          <MenuItem>All Jobs</MenuItem>
          <MenuItem>Open Jobs</MenuItem>
          <MenuItem>Application Status</MenuItem>
          <MenuItem>Close Jobs</MenuItem>
        </SubMenu>
        <SubMenu title="Data">
          <MenuItem>Generate Report</MenuItem>
          <MenuItem>Update Youtube links</MenuItem>
          <MenuItem>Update Blog links</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default SideBar;
