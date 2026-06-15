import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function TopBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about-us" },
    { text: "Services", link: "/services" },
    { text: "Workshops", link: "/workshops" },
    { text: "Feedbacks", link: "/feedbacks" },
    { text: "Contact", link: "/contact-form" },
  ];

  const isActive = (link) =>
    link === "/" ? location.pathname === "/" : location.pathname.startsWith(link);

  const drawer = (
    <Box
      sx={{
        width: 280,
        height: "100%",
        background: "var(--grad-twilight)",
        color: "#fff",
        padding: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Box
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 800,
            fontSize: 18,
            letterSpacing: "0.04em",
          }}
        >
          N'Able
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "#fff" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ borderColor: "rgba(255,255,255,0.15)", mb: 2 }} />
      <List sx={{ flex: 1 }}>
        {menuItems.map((item) => (
          <ListItem
            button
            component={Link}
            to={item.link}
            key={item.text}
            onClick={handleDrawerToggle}
            sx={{
              borderRadius: "12px",
              mb: 0.5,
              py: 1.25,
              px: 2,
              background: isActive(item.link) ? "rgba(255,255,255,0.12)" : "transparent",
              transition: "all .3s var(--ease-out)",
              "&:hover": {
                background: "rgba(255,255,255,0.16)",
                transform: "translateX(4px)",
              },
            }}
          >
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontWeight: 600,
                fontSize: 16,
                letterSpacing: "0.01em",
              }}
            />
          </ListItem>
        ))}
      </List>
      <Button
        component={Link}
        to="/contact-form"
        onClick={handleDrawerToggle}
        sx={{
          mt: 2,
          background: "var(--grad-sunrise)",
          color: "#1A1033",
          fontWeight: 700,
          borderRadius: "999px",
          py: 1.25,
          textTransform: "none",
          fontFamily: "Plus Jakarta Sans, sans-serif",
          "&:hover": {
            background: "var(--grad-sunrise)",
            transform: "translateY(-2px)",
          },
        }}
      >
        Book a Session
      </Button>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: scrolled ? "rgba(255, 255, 255, 0.78)" : "rgba(255, 255, 255, 0.55)",
        backdropFilter: "saturate(180%) blur(18px)",
        WebkitBackdropFilter: "saturate(180%) blur(18px)",
        borderBottom: scrolled
          ? "1px solid var(--color-line)"
          : "1px solid rgba(255,255,255,0.4)",
        boxShadow: scrolled ? "0 10px 30px rgba(26, 16, 51, 0.06)" : "none",
        transition: "all 0.35s var(--ease-out)",
        color: "var(--color-ink)",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          minHeight: { xs: 72, md: scrolled ? 84 : 96 },
          px: { xs: 2, md: 4 },
          transition: "min-height 0.3s var(--ease-out)",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src="/mainlogo.jpg"
            alt="N'Able by Shibi Anand"
            style={{
              height: scrolled ? 64 : 84,
              width: "auto",
              transition: "height 0.3s var(--ease-out)",
              borderRadius: 10,
            }}
          />
        </Link>

        {/* Large-screen nav */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: { md: "4px", lg: "8px" },
            marginLeft: "auto",
            marginRight: 2,
          }}
        >
          {menuItems.map((item) => {
            const active = isActive(item.link);
            return (
              <Button
                key={item.text}
                component={Link}
                to={item.link}
                disableRipple
                sx={{
                  position: "relative",
                  fontSize: "15px",
                  fontWeight: 600,
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  color: active ? "var(--color-primary)" : "var(--color-ink-soft)",
                  textTransform: "none",
                  px: 1.75,
                  py: 1,
                  letterSpacing: "0.01em",
                  borderRadius: "10px",
                  transition: "color .25s var(--ease-out)",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: "50%",
                    bottom: 6,
                    transform: "translateX(-50%)",
                    width: active ? "22px" : "0px",
                    height: "3px",
                    borderRadius: "999px",
                    background: "var(--grad-aurora)",
                    transition: "width .3s var(--ease-spring)",
                  },
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "var(--color-primary)",
                  },
                  "&:hover::after": {
                    width: "22px",
                  },
                }}
              >
                {item.text}
              </Button>
            );
          })}
        </Box>

        {/* CTA on desktop */}
        <Button
          component={Link}
          to="/contact-form"
          className="btn-aurora"
          sx={{
            display: { xs: "none", md: "inline-flex" },
            fontSize: "14px",
            px: "22px !important",
            py: "10px !important",
          }}
        >
          Book a Session
        </Button>

        {/* Mobile menu trigger */}
        <IconButton
          aria-label="menu"
          sx={{
            display: { xs: "inline-flex", md: "none" },
            color: "var(--color-primary)",
            background: "var(--color-primary-50)",
            borderRadius: "12px",
            ml: "auto",
            "&:hover": { background: "var(--color-primary-50)" },
          }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 280,
              border: "none",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
