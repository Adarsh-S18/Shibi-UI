import React from "react";
import { Link, Route, Routes } from "react-router-dom";
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

const AppManagement = () => {
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
          <ListItem component={Link} to="admin/vlogs">
            <ListItemText primary="Vlogs" />
          </ListItem>
          <Divider />
          <ListItem component={Link} to="admin/workshops">
            <ListItemText primary="Workshops" />
          </ListItem>
          <Divider />
          <ListItem component={Link} to="admin/feedbacks">
            <ListItemText primary="Feedbacks" />
          </ListItem>
          <Divider />
        </List>
      </Drawer>

      <div style={{ flexGrow: 1, padding: "16px" }}>
        <Routes>
          <Route path="admin/login" element={<Login />} />
          <Route path="admin/dashboard" element={<WorkshopsManagement />} />
          <Route path="admin/vlogs" element={<VlogsManagement />} />
          <Route path="admin/feedbacks" element={<FeedbacksManagement />} />
          <Route path="admin/workshops" element={<WorkshopsManagement />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppManagement;
