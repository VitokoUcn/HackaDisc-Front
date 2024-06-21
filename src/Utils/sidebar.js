import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People'; 
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      className="bg-light mt-5"
      variant="permanent"
      PaperProps={{ style: { 
        width: drawerWidth, 
        marginTop: '64px',
      } }}
      anchor="left"
    >
     <div className="pt-4 pb-4 ">
  <List>
    <ListItem button component={Link} to="/">
      <ListItemIcon><HomeIcon /></ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={Link} to="/dashboard">
      <ListItemIcon><DashboardIcon /></ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/analytics">
      <ListItemIcon><BarChartIcon /></ListItemIcon>
      <ListItemText primary="Analytics" />
    </ListItem>
    <ListItem button component={Link} to="/worker-administration">
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="Worker Administration" />
        </ListItem>
    <ListItem button component={Link} to="/settings">
      <ListItemIcon><SettingsIcon /></ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </List>
</div>
    </Drawer>
  );
};

export default Sidebar;
