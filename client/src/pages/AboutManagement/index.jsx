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
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const AboutSectionPage = () => {
  const roles = [
    "LinkedIn Educational Top Voice",
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
        sx={{ mt: 14, mb: 6, px: 2 }} // px adds padding to adjust content horizontally
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          md={7}
          sx={{ textAlign: "center", mb: { xs: 4, md: 0 } }}
        >
          <Box
            sx={{
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0px 10px 20px rgba(0.9, 0.9, 0.9, 0.3)",
              backgroundColor: "white",
              transition: "transform 0.3s",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                mb: "10px",
                color: "#404040",
                fontWeight: "bold",
                letterSpacing: "0.05em",
              }}
            >
              Shibi Anand
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: "#404040",
                fontSize: "22px",
                mb: "18px",
                fontWeight: 700,
              }}
            >
              Edupreneur & Mentor | Founder of N'Able and AI Teacher Community
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "8px",
                mt: "10px",
              }}
            >
              {roles.map((role, index) => (
                <Chip
                  key={index}
                  label={role}
                  variant="outlined"
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    backgroundColor: "#6c01bb",
                    border: "1px solid #00008B",
                    color: "white",
                    fontWeight: "bold",
                    m: "5px",
                  }}
                />
              ))}
            </Box>

            <Box sx={{ mt: 3 }}>
              <IconButton
                href="https://www.instagram.com/"
                target="_blank"
                sx={{ color: "#90268d" }}
              >
                <InstagramIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://www.facebook.com/shibi.anand03"
                target="_blank"
                sx={{ color: "blue" }}
              >
                <FacebookIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/shibi-anand/"
                target="_blank"
                sx={{ color: "darkblue" }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://www.youtube.com/@NableByShibiAnand"
                target="_blank"
                sx={{ color: "red" }}
              >
                <YouTubeIcon fontSize="large" />
              </IconButton>

              <IconButton
                href="https://podcasters.spotify.com/pod/show/shibi-anand3"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3em"
                  height="1.3em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#03c200"
                    d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
                  />
                </svg>
              </IconButton>
            </Box>

            <Typography
              variant="body1"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: "rgba(0, 0, 0, 0.7)",
                fontSize: "21px",
                fontWeight: 600,
                mt: 6,
                letterSpacing: "0.03em",
                lineHeight: "1.5",
              }}
            >
              Navigate the evolving landscape of education with N'Able by Shibi
              Anand – Empowering minds, reshaping classrooms, and seamlessly
              adapting to the dynamic future of learning.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
          <Box
            sx={{
              width: { xs: "70%", md: "100%" },
              maxWidth: "450px",
              height: "auto",
              overflow: "hidden",
              borderRadius: "50%",
              margin: "0 auto",
            }}
          >
            <img
              src="/personal1.jpg"
              style={{
                width: "85%",
                height: "auto",
                objectFit: "cover",
                transition: "transform 0.5s ease",
              }}
              alt="Profile"
              onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            />
          </Box>
        </Grid>
      </Grid>

      <Container>
        <Grid container spacing={2} mb={6} sx={{ mt: { xs: 6, md: 10 } }}>
          <Grid item xs={12}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                backgroundColor: "#570080",
                borderRadius: "10px",
                boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "white",
                  mb: 4,
                  textAlign: "center",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
                }}
              >
                N'Able for you
              </Typography>

              <Typography
                variant="h6"
                mb={6}
                sx={{
                  textAlign: "center",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                N'Able is dedicated to enhancing education and personal
                development through tailored services:
              </Typography>

              <Grid container spacing={4}>
                {[
                  {
                    title: "1. Workshops",
                    content:
                      "Engaging sessions designed to upskill teachers, students, and school leaders, fostering growth and innovation.",
                  },
                  {
                    title: "2. Professional Mentoring",
                    content:
                      "Personalized guidance to help individuals excel in their roles, driving professional growth and development.",
                  },
                  {
                    title: "3. Training",
                    content:
                      "Includes AI Integration Training, Empowerment Workshops, and Motivational Sessions to enhance skills.",
                  },
                  {
                    title: "4. Digital Content Creation",
                    content:
                      "At N'Able, we create socially relevant content, inspiring and sparking meaningful conversations.",
                  },
                ].map((service, index) => (
                  <Grid key={index} item xs={12} md={6}>
                    <Box
                      sx={{
                        backgroundColor: "white",
                        padding: "20px",
                        borderRadius: "8px",
                        minHeight: "180px",
                        mb: "20px",
                      }}
                    >
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                          color: "#2A003A",
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        paragraph
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontSize: "16px",
                          color: "#333333",
                          lineHeight: "1.6",
                          fontWeight: 500,
                        }}
                      >
                        {service.content}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AboutSectionPage;
