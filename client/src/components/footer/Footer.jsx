import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const socials = [
  { href: "https://www.instagram.com/", icon: <InstagramIcon />, color: "#E1306C", label: "Instagram" },
  { href: "https://www.facebook.com/shibi.anand03", icon: <FacebookIcon />, color: "#1877F2", label: "Facebook" },
  { href: "https://www.linkedin.com/in/shibi-anand/", icon: <LinkedInIcon />, color: "#0A66C2", label: "LinkedIn" },
  { href: "https://www.youtube.com/@NableByShibiAnand", icon: <YouTubeIcon />, color: "#FF0000", label: "YouTube" },
];

const Footer = () => {
  const menuItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about-us" },
    { text: "Services", link: "/services" },
    { text: "Workshops", link: "/workshops" },
    { text: "Feedbacks", link: "/feedbacks" },
    { text: "Contact", link: "/contact-form" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",
        background: "var(--grad-twilight)",
        color: "#fff",
        pt: { xs: 7, md: 10 },
        pb: 4,
        mt: 0,
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          width: 460,
          height: 460,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(156, 106, 224, 0.4) 0%, transparent 70%)",
          top: -180,
          left: -160,
          filter: "blur(40px)",
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 111, 145, 0.3) 0%, transparent 70%)",
          bottom: -150,
          right: -120,
          filter: "blur(50px)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={5}>
          {/* Brand */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2.5 }}>
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: "14px",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <img src="/logo-png.png" alt="N'Able logo" style={{ maxWidth: "80%", maxHeight: "80%" }} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 800,
                    fontSize: "1.3rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  N'Able
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontSize: "12.5px",
                    color: "rgba(255,255,255,0.65)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  by Shibi Anand
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                color: "rgba(255,255,255,0.78)",
                fontSize: "15px",
                lineHeight: 1.8,
                maxWidth: 440,
                mb: 3,
              }}
            >
              Navigate the evolving landscape of education with N'Able —
              empowering minds, reshaping classrooms, and seamlessly adapting to
              the dynamic future of learning.
            </Typography>

            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {socials.map((s) => (
                <IconButton
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  aria-label={s.label}
                  sx={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#fff",
                    width: 42,
                    height: 42,
                    transition: "all .3s var(--ease-spring)",
                    "&:hover": {
                      background: s.color,
                      borderColor: s.color,
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
              <IconButton
                href="https://podcasters.spotify.com/pod/show/shibi-anand3"
                target="_blank"
                aria-label="Spotify Podcast"
                sx={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff",
                  width: 42,
                  height: 42,
                  transition: "all .3s var(--ease-spring)",
                  "&:hover": {
                    background: "#1DB954",
                    borderColor: "#1DB954",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
                  />
                </svg>
              </IconButton>
            </Box>
          </Grid>

          {/* Links */}
          <Grid item xs={6} md={3}>
            <Typography
              sx={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                color: "#FFE3B0",
                mb: 2.5,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  style={{
                    color: "rgba(255,255,255,0.78)",
                    textDecoration: "none",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontSize: "15px",
                    fontWeight: 500,
                    transition: "all .25s var(--ease-out)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.78)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {item.text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact */}
          <Grid item xs={6} md={4}>
            <Typography
              sx={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                color: "#FFE3B0",
                mb: 2.5,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Get in touch
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFE3B0",
                }}
              >
                <EmailIcon fontSize="small" />
              </Box>
              <Box>
                <Typography sx={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
                  Email
                </Typography>
                <Typography sx={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "14.5px", fontWeight: 500, color: "#fff" }}>
                  nablebyshibianand@gmail.com
                </Typography>
              </Box>
            </Box>
            <Link
              to="/contact-form"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--grad-sunrise)",
                color: "var(--color-ink)",
                padding: "10px 22px",
                borderRadius: "999px",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                textDecoration: "none",
                marginTop: "8px",
                boxShadow: "0 12px 28px rgba(255, 181, 71, 0.35)",
              }}
            >
              Book a session →
            </Link>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.12)", my: { xs: 4, md: 5 } }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: "13.5px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            © 2026 Shibi Anand. All rights reserved.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: "13px",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            Developed by{" "}
            <a
              href="https://www.pixlverse.in/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#FFE3B0",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Pixlverse
            </a>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
