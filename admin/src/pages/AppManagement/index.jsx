import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import WorkshopsManagement from "../WorkshopsManagement";
import VlogsManagement from "../VlogsManagement";
import FeedbacksManagement from "../FeedbacksManagement";
import Login from "../LoginManagement";
import LogoutIcon from '@mui/icons-material/Logout';

const AppManagement = () => {
  const navigate = useNavigate(); 

  return (
    <div style={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            backgroundColor: "#f0f0f0",
            color: "black",
            fontWeight: 700,
            fontSize: "33px",
            boxSizing: "border-box",
            fontFamily: "Montserrat, sans-serif",
          },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            margin: "20px",
            fontWeight: 700,
            fontSize: "20px",
          }}
        >
          ADMIN PANEL
        </Typography>
        <List sx={{ margin: "10px" }}>
          <Divider />
          <ListItem component={Link} to="manage-vlogs">
            <ListItemText primary="Vlogs" />
          </ListItem>
          <Divider />
          <ListItem component={Link} to="manage-workshops">
            <ListItemText primary="Workshops" />
          </ListItem>
          <Divider />
          <ListItem component={Link} to="manage-feedbacks">
            <ListItemText primary="Feedbacks" />
          </ListItem>
          <Divider />
          <ListItem
          sx={{cursor: 'pointer', backgroundColor: 'red',color: 'white', borderRadius: '10px'}}
            onClick={() => {
              localStorage.removeItem("isAuthenticated");
              navigate('/admin-login')
            }}
          >
            <LogoutIcon/>
            <ListItemText primary="Logout" />
          </ListItem>
          <Divider />
        </List>
      </Drawer>

      <div style={{ flexGrow: 1, padding: "16px" }}>
        <Routes>
          <Route path="admin-login" element={<Login />} />
          <Route path="manage-dashboard" element={<WorkshopsManagement />} />
          <Route path="manage-vlogs" element={<VlogsManagement />} />
          <Route path="manage-feedbacks" element={<FeedbacksManagement />} />
          <Route path="manage-workshops" element={<WorkshopsManagement />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppManagement;
