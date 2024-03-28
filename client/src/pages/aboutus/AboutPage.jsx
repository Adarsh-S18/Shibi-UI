import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material";
import Footer from "../../components/footer/Footer";

const AboutPage = () => {
  const roles = [
    "Founder: N'Able & AI Teacher Community",
    "Teacher Educator",
    "MOC (Niti Ayog)",
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
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
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
                variant="h3"
                sx={{
                  marginBottom: "10px",
                  color: "#333",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: "bold",
                  letterSpacing: "0.05em",
                }}
              >
                Shibi Anand
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "darkgoldenrod",
                  fontSize: "24px",
                  marginBottom: "18px",
                  fontFamily: "Arial, sans-serif",
                  letterSpacing: "0.03em",
                  fontWeight: 600
                }}
              >
                Edupreneur & Mentor | Founder of N'Able and AI Teacher Community
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: 'center',
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
                      fontFamily: "arial",
                      margin: '5px',
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
                variant="body1"
                sx={{
                  color: "#333",
                  fontSize: "22px",
                  marginTop: "50px",
                  marginBottom: "20px",
                  fontFamily: "Arial, sans-serif",
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
        {/* <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <img
              src="/personal2.jpg"
              alt="About"
              style={{ width: "80%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: "50px", borderRadius: "10%" }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  fontFamily: "arial",
                  color: "#0066cc",
                }}
              >
                SHIBI ANAND
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
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
                      fontFamily: "arial",
                      fontSize: "14px",
                      backgroundColor: "#f0f0f0",
                      border: "1px solid #0066cc",
                      color: "#0066cc",
                      fontWeight: "bold",
                    }}
                  />
                ))}
              </div>
              <div style={{ marginTop: "20px" }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "arial",
                    color: "#0066cc",
                  }}
                >
                  Our Mission
                </Typography>
                <Typography
                  paragraph
                  sx={{ fontFamily: "arial", fontSize: "16px", color: "#333" }}
                >
                  Our mission is to provide quality services and products that
                  exceed our customers' expectations. Our mission is to provide
                  quality services and products that exceed our customers'
                  expectations. Our mission is to provide quality services and
                  products that exceed our customers' expectations.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: "20px" }}
                >
                  Learn More
                </Button>
              </div>
            </Paper>
          </Grid>
        </Grid> */}
        <Grid container spacing={2} mt={6} mb={6} sx={{ marginTop: '180px'}}>
          <Grid item xs={12}>
            <Paper
              elevation={3}
              style={{
                padding: "20px",
                backgroundColor: "#E5F1F3",
                borderRadius: "10px",
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                style={{
                  fontWeight: "bold",
                  color: "#0066cc",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                Know More about Me!
              </Typography>
              <Typography
                paragraph
                style={{
                  fontFamily: "arial",
                  fontSize: "16px",
                  color: "#333",
                  lineHeight: "1.6",
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
      <Footer />
    </>
  );
};

export default AboutPage;
