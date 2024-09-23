import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import SchoolIcon from "@mui/icons-material/School";
import ComputerIcon from "@mui/icons-material/Computer";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";
import EventIcon from "@mui/icons-material/Event";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import UpdateIcon from "@mui/icons-material/Update";
import MicIcon from "@mui/icons-material/Mic"; // Using Mic icon for hosting events

const ServiceManagement = () => {
  const services = [
    {
      name: "Empowerment Workshops",
      description:
        "Sessions designed to build Teacher Competence and enhance skills, and empower individuals in their personal and professional lives.",
      icon: <TrendingUpIcon fontSize="large" />,
    },
    {
      name: "Personal Mentoring",
      description:
        "Individualized guidance to help people understand who they truly are, recognize their unique skills, and use these to achieve their goals. Focused on the philosophy that when the self is aligned, everything else falls into place, this mentoring builds self-awareness and confidence.",
      icon: <PeopleIcon fontSize="large" />,
    },
    {
      name: "School Mentoring Programs",
      description:
        "Customized mentoring to elevate teaching practices, student engagement, and overall school performance.",
      icon: <BuildIcon fontSize="large" />,
    },
    {
      name: "AI Training for Educators",
      description:
        "Specialized training for implementing Artificial Intelligence as a subject and utilizing AI tools in education.",
      icon: <SchoolIcon fontSize="large" />,
    },
    {
      name: "Motivational Sessions",
      description:
        "Inspirational talks aimed at fostering positivity, resilience, and growth among all stakeholders.",
      icon: <MicIcon fontSize="large" />,
    },
    {
      name: "Leadership Development Trainings",
      description:
        "Focused programs to cultivate leadership qualities in educators, students, and school leaders or anyone who wants to be a leader is a leader.",
      icon: <ComputerIcon fontSize="large" />,
    },
    {
      name: "CBSE Workshops",
      description:
        "Expert-led workshops designed to help schools stay updated with the latest CBSE guidelines, changes, and best practices.",
      icon: <LeaderboardIcon fontSize="large" />,
    },
    {
      name: "Event Hosting and Emcee Services",
      description:
        "Professional hosting and EmceeC services for educational and community events.",
      icon: <EventIcon fontSize="large" />,
    },
    {
      name: "Personal Branding",
      description:
        "Partner with us to plan and execute impactful events, workshops, and educational programs.",
      icon: <UpdateIcon fontSize="large" />,
    },
  ];

  const colors = {
    primary: "#4B0082", // Indigo
    secondary: "#FFD700", // Gold
    background: "#F5F5F5", // Light Gray
    card: "#FFFFFF", // White
    text: "#333333", // Dark Gray
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #673AB7, #8868C1)",
        py: 8,
        marginTop: "100px",
        marginBottom: "10px",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            component="h2"
            fontFamily="Montserrat, sans-serif"
            sx={{
              color: "white",
              fontWeight: 800,
              mb: 2,
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h6"
            component="p"
            fontSize={22}
            fontFamily="Montserrat, sans-serif"
            sx={{
              color: "white",
              fontWeight: 600,
            }}
          >
            N'Able offers a comprehensive range of services aimed at enhancing
            education and personal development.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderTop: `4px solid ${colors.primary}`,
                  boxShadow: 3,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mb: 2 }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h3"
                    fontFamily="Montserrat, sans-serif"
                    sx={{
                      color: colors.primary,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {service.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontFamily="Montserrat, sans-serif"
                    fontSize="17px"
                    fontWeight={550}
                    sx={{ color: colors.text, textAlign: "center" }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceManagement;
