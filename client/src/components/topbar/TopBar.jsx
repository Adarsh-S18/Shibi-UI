import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function TopBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about-us" },
    { text: "Services", link: "/services" },
    { text: "Workshops", link: "/workshops" },
    { text: "Feedbacks", link: "/feedbacks" },
    { text: "Contact", link: "/contact-form" },
  ];

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        width: 250,
        padding: 2,
      }}
    >
      <IconButton onClick={handleDrawerToggle}>
        <CloseIcon />
      </IconButton>
      <List>
        {menuItems.map((item) => (
          <ListItem button component={Link} to={item.link} key={item.text}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link to="/">
          <img
            src="/mainlogo.jpg"
            alt="Logo"
            style={{
              height: "110px",
              width: "auto",
              marginLeft: "15px",
            }}
          />
        </Link>

        {/* For large screens */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            marginLeft: "auto",
            gap: "20px",
          }}
        >
          {menuItems.map((item) => (
            <Button
              key={item.text}
              component={Link}
              to={item.link}
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                fontFamily: "Montserrat, sans-serif",
                color: "black",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#673ab7", // Change color on hover
                },
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>

        <IconButton
          edge="start"
          color="secondary"
          aria-label="menu"
          sx={{ display: { xs: "block", md: "none" }, marginLeft: "auto" }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon fontSize="large" />
        </IconButton>

        {/* Drawer for mobile */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 250,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
