import React from "react";
import { Container, Grid, Paper, Typography, Chip, Box } from "@mui/material";

const AboutSectionPage = () => {
  const roles = [
    "LinkedIn Top Voice",
    "Founder: N'Able & AI Teacher Community",
    "Teacher Educator",
    // "MOC (Niti Ayog)",
    'WEN Kottayam Core Committee Member',
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
        style={{ height: "100vh", marginBottom: "160px" }}
        justifyContent="center"
        alignItems="center"
        mb={6}
      >
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <img
            src="/personal.jpg"
            style={{
              borderRadius: "50%",
              width: "400px",
              height: "400px",
              transition: "transform 0.5s ease",
            }}
            alt="Profile"
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px",
              marginLeft: "150px",
              marginRight: "150px",
              borderRadius: "20px",
              // backgroundColor: "#78c2ad", // Add your preferred background color here
              boxShadow: "0px 10px 20px rgba(0.9, 0.9, 0.9, 0.9)",
              gap: "20px",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Box sx={{ flex: 2, textAlign: "center" }}>
              <Typography
                style={{ fontFamily: "Montserrat, sans-serif" }}
                variant="h3"
                sx={{
                  marginBottom: "10px",
                  color: "#333",
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
                  color: "darkgoldenrod",
                  fontSize: "24px",
                  marginBottom: "18px",
                  fontWeight: 600,
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
                    color="primary"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      margin: "5px",
                      fontSize: "16px",
                      backgroundColor: "#f0f0f0",
                      border: "1px solid #0066cc",
                      color: "#0066cc",
                      fontWeight: "bold",
                    }}
                  />
                ))}
              </div>
              <Typography
                style={{ fontFamily: "Montserrat, sans-serif" }}
                variant="body1"
                sx={{
                  color: "#333",
                  fontSize: "22px",
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
      </Grid>

      <Container>
        <Grid container spacing={2} mt={6} mb={6} sx={{ marginTop: "250px" }}>
          <Grid item xs={12}>
            <Paper
              elevation={3}
              style={{
                padding: "40px",
                backgroundColor: "#F8F9FA",
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
                  color: "#1976D2", // Material Design Primary Color
                  marginBottom: "30px",
                  textAlign: "center",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
                }}
              >
                Know More about Me!
              </Typography>
              <Typography
                paragraph
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "18px",
                  color: "#333333", // Material Design Text Color
                  lineHeight: "1.8",
                  textAlign: "justify",
                  textIndent: "2rem",
                }}
              >
                I am an Edupreneur & a change enabler. Born and brought up in
                Ranchi, Jharkhand I did my Master's in IT from BITS, Mesra, a
                pioneer institution. A Computer Science and AI Educator for the
                past 19 years, I worked as Associate Vice Principal, IT Admin,
                Programme Co-ordinator, Dept Head of Computer Science at
                Excelsior English School Kottayam, Kerala. I am a Mentor of
                Change (Atal Innovation Mission, Niti Ayog), was a Toastmaster,
                Chairperson, ALL Ladies League, Kottayam, Council member of
                WICCI Mental Health, Kerala chapter, a Podcaster, a content
                curator, knowledge collaborator, an Edupreneur. I am the founder
                of N'Able by Shibi Anand, a L & D platform for School
                Stakeholders and AI Teacher Community, a forum for making AI
                implementation in classrooms smoother. I believe in the mantra
                "A teacher who dares to teach can never cease to learn". Open to
                collaboration and willing to support Schools in improving their
                quality by focusing on the most important stakeholders,
                educators, students, and of course the leaders.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AboutSectionPage;
