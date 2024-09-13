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
          {/* <ListItem  component={Link} to="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem> */}
          <Divider />
          <ListItem component={Link} to="/vlogs">
            <ListItemText primary="Vlogs" />
          </ListItem>
          <Divider />
          <ListItem component={Link} to="/workshops">
            <ListItemText primary="Workshops" />
          </ListItem>
          <Divider />
          <ListItem component={Link} to="/feedbacks">
            <ListItemText primary="Feedbacks" />
          </ListItem>
          <Divider />
        </List>
      </Drawer>

      <div style={{ flexGrow: 1, padding: "16px" }}>
        <Routes>
          <Route path="dashboard" element={<WorkshopsManagement />} />
          <Route path="vlogs" element={<VlogsManagement />} />
          <Route path="feedbacks" element={<FeedbacksManagement />} />
          <Route path="workshops" element={<WorkshopsManagement />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppManagement;
