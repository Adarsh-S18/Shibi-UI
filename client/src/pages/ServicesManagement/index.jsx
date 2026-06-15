import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
} from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import SchoolIcon from "@mui/icons-material/School";
import ComputerIcon from "@mui/icons-material/Computer";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";
import EventIcon from "@mui/icons-material/Event";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import UpdateIcon from "@mui/icons-material/Update";
import MicIcon from "@mui/icons-material/Mic";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ServiceManagement = () => {
  const services = [
    {
      name: "Empowerment Workshops",
      description:
        "Sessions designed to build teacher competence, enhance skills and empower individuals in their personal and professional lives.",
      icon: <TrendingUpIcon fontSize="large" />,
      tint: "var(--grad-aurora)",
    },
    {
      name: "Personal Mentoring",
      description:
        "Individualized guidance to help people understand who they truly are, recognize their unique skills and use these to achieve their goals — building self-awareness and confidence.",
      icon: <PeopleIcon fontSize="large" />,
      tint: "var(--grad-sunrise)",
    },
    {
      name: "School Mentoring Programs",
      description:
        "Customized mentoring to elevate teaching practices, student engagement and overall school performance.",
      icon: <BuildIcon fontSize="large" />,
      tint: "linear-gradient(135deg, #2EC4B6, #5B2A86)",
    },
    {
      name: "AI Training for Educators",
      description:
        "Specialized training for implementing Artificial Intelligence as a subject and using AI tools meaningfully in education.",
      icon: <SchoolIcon fontSize="large" />,
      tint: "linear-gradient(135deg, #7C4BC2, #FF6F91)",
    },
    {
      name: "Motivational Sessions",
      description:
        "Inspirational talks aimed at fostering positivity, resilience and growth among all stakeholders.",
      icon: <MicIcon fontSize="large" />,
      tint: "linear-gradient(135deg, #FFB547, #FF6F91)",
    },
    {
      name: "Leadership Development",
      description:
        "Focused programs to cultivate leadership qualities in educators, students and school leaders — or anyone who wants to lead.",
      icon: <ComputerIcon fontSize="large" />,
      tint: "linear-gradient(135deg, #5B2A86, #2EC4B6)",
    },
    {
      name: "CBSE Workshops",
      description:
        "Expert-led workshops to help schools stay updated with the latest CBSE guidelines, changes and best practices.",
      icon: <LeaderboardIcon fontSize="large" />,
      tint: "var(--grad-aurora)",
    },
    {
      name: "Event Hosting & Emcee",
      description:
        "Professional hosting and emcee services for educational and community events.",
      icon: <EventIcon fontSize="large" />,
      tint: "var(--grad-sunrise)",
    },
    {
      name: "Personal Branding & Event Curation",
      description:
        "Partner with us to plan and execute impactful events, workshops and educational programs that resonate.",
      icon: <UpdateIcon fontSize="large" />,
      tint: "linear-gradient(135deg, #FF6F91, #7C4BC2)",
    },
  ];

  return (
    <Box sx={{ pt: { xs: "120px", md: "150px" }, pb: { xs: 8, md: 12 }, position: "relative", overflow: "hidden" }}>
      <Box
        aria-hidden
        className="bg-decor"
        sx={{
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, #9C6AE0 0%, transparent 70%)",
          top: -120,
          right: -160,
          opacity: 0.28,
        }}
      />
      <Box
        aria-hidden
        className="bg-decor"
        sx={{
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "radial-gradient(circle, #FFB547 0%, transparent 70%)",
          bottom: -120,
          left: -120,
          opacity: 0.22,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header banner */}
        <Box
          sx={{
            background: "var(--grad-aurora)",
            borderRadius: { xs: "20px", md: "32px" },
            p: { xs: 4, md: 6 },
            color: "#fff",
            boxShadow: "var(--shadow-glow)",
            mb: { xs: 5, md: 8 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              width: 280,
              height: 280,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              top: -80,
              right: -60,
              filter: "blur(40px)",
            }}
          />
          <Grid container alignItems="center" spacing={3} sx={{ position: "relative", zIndex: 1 }}>
            <Grid item xs={12} md={8}>
              <Box
                className="section-eyebrow"
                sx={{
                  background: "rgba(255,255,255,0.18) !important",
                  color: "#FFE3B0 !important",
                }}
              >
                Our Services
              </Box>
              <Typography
                sx={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 800,
                  fontSize: { xs: "2rem", md: "2.8rem" },
                  letterSpacing: "-0.02em",
                  lineHeight: 1.12,
                  mt: 2,
                  mb: 1.5,
                }}
              >
                Crafted for educators, leaders &amp; lifelong learners.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 400,
                  lineHeight: 1.7,
                  maxWidth: 580,
                }}
              >
                A comprehensive range of services aimed at enhancing education
                and personal development — each one shaped around the people we
                serve.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: "left", md: "right" } }}>
              <Button
                href="/contact-form"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  background: "var(--color-ink)",
                  color: "#fff",
                  fontWeight: 700,
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  borderRadius: "999px",
                  textTransform: "none",
                  px: 4,
                  py: 1.75,
                  fontSize: "15px",
                  boxShadow: "0 14px 36px rgba(26, 16, 51, 0.3)",
                  transition: "transform .3s var(--ease-out)",
                  "&:hover": {
                    background: "#fff",
                    color: "var(--color-primary)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Book an Appointment
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  background: "var(--color-surface)",
                  borderRadius: "20px",
                  p: { xs: 3, md: 3.5 },
                  border: "1px solid var(--color-line)",
                  boxShadow: "var(--shadow-sm)",
                  transition: "transform .45s var(--ease-out), box-shadow .45s var(--ease-out)",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "var(--shadow-lg)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "4px",
                    background: service.tint,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "16px",
                    background: service.tint,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2.5,
                    boxShadow: "0 8px 20px rgba(91, 42, 134, 0.18)",
                  }}
                >
                  {service.icon}
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "var(--color-ink)",
                    mb: 1,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                  }}
                >
                  {service.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontSize: "14.5px",
                    color: "var(--color-muted)",
                    lineHeight: 1.7,
                    fontWeight: 400,
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceManagement;
