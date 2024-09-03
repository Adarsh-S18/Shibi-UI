import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Chip,
  Box,
  IconButton,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const AboutSectionPage = () => {
  const roles = [
    "LinkedIn Top Voice",
    "Founder: N'Able & AI Teacher Community",
    "Teacher Educator",
    "WEN Kottayam Core Committee Member",
    "Podcaster",
    "WICCIKMHC",
    "Digital Content Creator #life",
    "Edupreneur",
    "Resource Person",
    "Book Reviewer",
    "SDG Advocate",
    "Collaborator",
    "SEL Advocate",
  ];

  return (
    <>
      <Grid
        container
        spacing={2}
        style={{ height: "100vh", marginBottom: "60px" }} // Adjusted marginBottom from 160px to 60px
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={7} sx={{ textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0px 10px 20px rgba(0.9, 0.9, 0.9, 0.3)",
              backgroundColor: "white",
              gap: "20px",
              transition: "transform 0.3s",
            }}
          >
            <Box sx={{ flex: 2, textAlign: "center" }}>
              <Typography
                style={{ fontFamily: "Montserrat, sans-serif" }}
                variant="h3"
                sx={{
                  marginBottom: "10px",
                  color: "#404040", // Darker, elegant shade for the text
                  fontWeight: "bold",
                  letterSpacing: "0.05em",
                }}
              >
                Shibi Anand
              </Typography>
              <Typography
                style={{ fontFamily: "Montserrat, sans-serif" }}
                variant="body1"
                sx={{
                  color: "#404040",
                  fontSize: "22px",
                  marginBottom: "18px",
                  fontWeight: 700,
                }}
              >
                Edupreneur & Mentor | Founder of N'Able and AI Teacher Community
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "8px",
                  marginTop: "10px",
                }}
              >
                {roles.map((role, index) => (
                  <Chip
                    key={index}
                    label={role}
                    variant="outlined"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      margin: "5px",
                      fontSize: "16px",
                      backgroundColor: "#6c01bb", // Light bluish color for the chips
                      border: "1px solid #00008B", // Border color to complement the background
                      color: "white", // Text color for the chips
                      fontWeight: "bold",
                    }}
                  />
                ))}
              </div>

              <Box sx={{ marginTop: "20px" }}>
                <IconButton
                  href="https://www.instagram.com/"
                  target="_blank"
                  style={{ color: "#90268d" }}
                >
                  <InstagramIcon fontSize="large" />
                </IconButton>
                <IconButton
                  href="https://www.facebook.com/"
                  target="_blank"
                  style={{ color: "blue" }}
                >
                  <FacebookIcon fontSize="large" />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/"
                  target="_blank"
                  style={{ color: "darkblue" }}
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
                <IconButton
                  href="mailto:your-email@example.com"
                  style={{ color: "red" }}
                >
                  <EmailIcon fontSize="large" />
                </IconButton>
              </Box>

              <Typography
                style={{ fontFamily: "Montserrat, sans-serif" }}
                variant="body1"
                sx={{
                  color: "rgba(0, 0, 0, 0.7)", // Black fade effect for the description
                  fontSize: "21px",
                  fontWeight: 600,
                  marginTop: "50px",
                  marginBottom: "20px",
                  letterSpacing: "0.03em",
                  lineHeight: "1.5",
                }}
              >
                Navigate the evolving landscape of education with N'Able by
                Shibi Anand – Empowering minds, reshaping classrooms, and
                seamlessly adapting to the dynamic future of learning.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
          <img
            src="/personal4.jpg"
            style={{
              borderRadius: "50%",
              maxWidth: "100%",
              maxHeight: "500px",
              transition: "transform 0.5s ease",
              objectFit: "cover",
            }}
            alt="Profile"
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />
        </Grid>
      </Grid>

      <Container>
        <Grid container spacing={2} mb={6} sx={{ marginTop: "60px" }}>
          {/* Adjusted marginTop from 250px to 60px */}
          <Grid item xs={12}>
            <Paper
              elevation={3}
              style={{
                padding: "40px",
                backgroundColor: "#570080",
                borderRadius: "10px",
                boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "white",
                  marginBottom: "30px",
                  textAlign: "center",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
                }}
              >
                N'Able for you
              </Typography>
              <Typography
                variant="h6"
                mb={6}
                style={{
                  textAlign: "center",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                N'Able is dedicated to enhancing education and personal
                development through <br></br>a variety of tailored services:
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      backgroundColor: "white",
                      padding: "20px",
                      borderRadius: "8px",
                      marginBottom: "20px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: "bold",
                        color: "#2A003A",
                      }}
                    >
                      1. Workshops
                    </Typography>
                    <Typography
                      paragraph
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "16px",
                        color: "#333333",
                        lineHeight: "1.6",
                        fontWeight: 500,
                      }}
                    >
                      Engaging sessions designed to upskill teachers, students,
                      and school leaders, fostering growth and innovation.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      backgroundColor: "white",
                      padding: "20px",
                      borderRadius: "8px",
                      marginBottom: "20px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: "bold",
                        color: "#2A003A",
                      }}
                    >
                      2. Professional Mentoring
                    </Typography>
                    <Typography
                      paragraph
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "16px",
                        color: "#333333",
                        lineHeight: "1.6",
                        fontWeight: 500,
                      }}
                    >
                      Personalized guidance to help individuals excel in their
                      roles, driving professional growth and development.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      backgroundColor: "white",
                      padding: "20px",
                      borderRadius: "8px",
                      marginBottom: "20px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: "bold",
                        color: "#2A003A",
                      }}
                    >
                      3. Training
                    </Typography>
                    <Typography
                      paragraph
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "16px",
                        color: "#333333",
                        lineHeight: "1.6",
                        fontWeight: 500,
                      }}
                    >
                      Includes AI Integration Training, Empowerment Workshops,
                      and Motivational Sessions to enhance skills and drive
                      personal and professional growth.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      backgroundColor: "white",
                      padding: "20px",
                      borderRadius: "8px",
                      marginBottom: "20px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: "bold",
                        color: "#2A003A",
                      }}
                    >
                      4. Digital Content Creation
                    </Typography>
                    <Typography
                      paragraph
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "16px",
                        color: "#333333",
                        lineHeight: "1.6",
                        fontWeight: 500,
                      }}
                    >
                      Crafting engaging and impactful content for digital
                      platforms, enhancing educational outreach and
                      communication.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AboutSectionPage;
