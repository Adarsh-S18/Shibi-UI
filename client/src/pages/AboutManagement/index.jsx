import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Chip,
  Box,
  IconButton,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { baseURL } from "../../config/common";

const socials = [
  {
    href: "https://www.instagram.com/",
    icon: <InstagramIcon fontSize="medium" />,
    label: "Instagram",
    color: "#E1306C",
  },
  {
    href: "https://www.facebook.com/shibi.anand03",
    icon: <FacebookIcon fontSize="medium" />,
    label: "Facebook",
    color: "#1877F2",
  },
  {
    href: "https://www.linkedin.com/in/shibi-anand/",
    icon: <LinkedInIcon fontSize="medium" />,
    label: "LinkedIn",
    color: "#0A66C2",
  },
  {
    href: "https://www.youtube.com/@NableByShibiAnand",
    icon: <YouTubeIcon fontSize="medium" />,
    label: "YouTube",
    color: "#FF0000",
  },
];

const AboutSectionPage = () => {
  const [accountDetails, setAccountDetails] = useState([]);
  useEffect(() => {
    fetchAccountDetails();
  }, []);

  const fetchAccountDetails = async () => {
    try {
      const response = await fetch(`${baseURL}/api/accounts/get-details`);
      const data = await response.json();
      setAccountDetails(data);
    } catch (error) {
      console.error("Error fetching Account details:", error);
    }
  };

  return (
    <Box sx={{ overflow: "hidden" }}>
      {/* Hero with profile */}
      <Container maxWidth="lg" sx={{ pt: { xs: "120px", md: "150px" }, pb: { xs: 6, md: 10 }, position: "relative" }}>
        <Box
          aria-hidden
          className="bg-decor"
          sx={{
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "radial-gradient(circle, #9C6AE0 0%, transparent 70%)",
            top: -60,
            right: -120,
            opacity: 0.3,
          }}
        />
        <Box
          aria-hidden
          className="bg-decor"
          sx={{
            width: 340,
            height: 340,
            borderRadius: "50%",
            background: "radial-gradient(circle, #FFB547 0%, transparent 70%)",
            bottom: -80,
            left: -100,
            opacity: 0.25,
          }}
        />

        <Grid container spacing={6} alignItems="center" sx={{ position: "relative", zIndex: 1 }}>
          <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
            <Box
              sx={{
                width: { xs: "85%", sm: "70%", md: "100%" },
                maxWidth: 420,
                aspectRatio: "1 / 1",
                mx: "auto",
                position: "relative",
                borderRadius: "50%",
                padding: "8px",
                background: "var(--grad-aurora)",
                boxShadow: "var(--shadow-glow)",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform .6s var(--ease-out)",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              >
                <Box
                  component="img"
                  src="/pers.jpg"
                  alt="Shibi Anand"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box className="section-eyebrow">About</Box>
            <Typography
              sx={{
                fontFamily: "Sora, sans-serif",
                fontSize: { xs: "2.4rem", md: "3.4rem" },
                fontWeight: 800,
                letterSpacing: "-0.025em",
                color: "var(--color-ink)",
                lineHeight: 1.05,
                mt: 2,
                mb: 1.5,
              }}
            >
              Shibi Anand
            </Typography>
            <Typography
              sx={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                color: "var(--color-primary)",
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                fontWeight: 600,
                mb: 3,
              }}
            >
              Edupreneur &amp; Mentor — Founder of N'Able and AI Teacher Community
            </Typography>
            <Typography
              sx={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                color: "var(--color-muted)",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                fontWeight: 400,
                mb: 3,
              }}
            >
              Navigate the evolving landscape of education with N'Able by Shibi
              Anand — empowering minds, reshaping classrooms, and seamlessly
              adapting to the dynamic future of learning.
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
              {accountDetails?.details?.map((role, index) => (
                <Chip
                  key={index}
                  label={role}
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    background: "var(--color-primary-50)",
                    color: "var(--color-primary)",
                    border: "1px solid var(--color-line-strong)",
                    borderRadius: "999px",
                    px: 0.5,
                    transition: "all .3s var(--ease-out)",
                    "&:hover": {
                      background: "var(--grad-aurora)",
                      color: "#fff",
                      transform: "translateY(-2px)",
                    },
                  }}
                />
              ))}
            </Box>

            <Box sx={{ display: "flex", gap: 1.25, flexWrap: "wrap" }}>
              {socials.map((s) => (
                <IconButton
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  aria-label={s.label}
                  sx={{
                    background: "var(--color-surface)",
                    boxShadow: "var(--shadow-sm)",
                    border: "1px solid var(--color-line)",
                    color: s.color,
                    width: 48,
                    height: 48,
                    transition: "all .3s var(--ease-spring)",
                    "&:hover": {
                      background: s.color,
                      color: "#fff",
                      transform: "translateY(-3px)",
                      boxShadow: "var(--shadow-md)",
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
                  background: "var(--color-surface)",
                  boxShadow: "var(--shadow-sm)",
                  border: "1px solid var(--color-line)",
                  color: "#1DB954",
                  width: 48,
                  height: 48,
                  transition: "all .3s var(--ease-spring)",
                  "&:hover": {
                    background: "#1DB954",
                    color: "#fff",
                    transform: "translateY(-3px)",
                    boxShadow: "var(--shadow-md)",
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
        </Grid>
      </Container>

      {/* N'Able for you */}
      <Container maxWidth="lg" sx={{ pb: { xs: 8, md: 12 } }}>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            background: "var(--grad-twilight)",
            borderRadius: { xs: "20px", md: "32px" },
            p: { xs: 4, md: 6 },
            color: "#fff",
            boxShadow: "var(--shadow-glow)",
          }}
        >
          <Box
            aria-hidden
            className="bg-decor"
            sx={{
              width: 340,
              height: 340,
              borderRadius: "50%",
              background: "radial-gradient(circle, #FF6F91 0%, transparent 70%)",
              top: -100,
              right: -80,
              opacity: 0.4,
            }}
          />

          <Box sx={{ textAlign: "center", mb: 5, position: "relative", zIndex: 1 }}>
            <Box
              className="section-eyebrow"
              sx={{
                background: "rgba(255,255,255,0.15) !important",
                color: "#FFE3B0 !important",
              }}
            >
              Our offering
            </Box>
            <Typography
              sx={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "2.8rem" },
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "#fff",
                mt: 2,
                mb: 1.5,
              }}
            >
              N'Able for you
            </Typography>
            <Typography
              sx={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                color: "rgba(255,255,255,0.85)",
                fontSize: { xs: "1rem", md: "1.1rem" },
                maxWidth: 720,
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              N'Able is dedicated to enhancing education and personal
              development through tailored services.
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ position: "relative", zIndex: 1 }}>
            {[
              {
                title: "Professional Mentoring",
                content:
                  "Personalized guidance to help individuals excel in their roles, driving professional growth and development.",
              },
              {
                title: "Workshops and Trainings",
                content:
                  "Dynamic workshops and tailored training programs to empower individuals, teams, and organizations — focused on skill development, self-discovery and innovation.",
              },
              {
                title: "Personal Branding & Event Curation",
                content:
                  "We help individuals and teams highlight their unique strengths, values and skills — creating impactful personal brands and memorable events.",
              },
              {
                title: "Digital Content Creation",
                content:
                  "Socially relevant content that inspires and sparks meaningful conversations across the community.",
              },
            ].map((service, index) => (
              <Grid key={index} item xs={12} md={6}>
                <Box
                  sx={{
                    background: "rgba(255,255,255,0.97)",
                    color: "var(--color-ink)",
                    padding: { xs: "24px", md: "28px" },
                    borderRadius: "20px",
                    height: "100%",
                    border: "1px solid rgba(255,255,255,0.4)",
                    transition: "transform .4s var(--ease-out), box-shadow .4s var(--ease-out)",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      width: 44,
                      height: 44,
                      borderRadius: "12px",
                      background: "var(--grad-aurora)",
                      color: "#fff",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 700,
                      fontSize: "18px",
                      mb: 2,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      color: "var(--color-ink)",
                      mb: 1,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontSize: "15px",
                      color: "var(--color-muted)",
                      lineHeight: 1.75,
                      fontWeight: 400,
                    }}
                  >
                    {service.content}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSectionPage;
