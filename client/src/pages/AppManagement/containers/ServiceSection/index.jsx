import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Avatar, Box, Button, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2), // Increased padding for better appearance
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "1px solid #6a00b9", // Thicker, more visible border with a pleasant blue color
  borderRadius: "8px", // Rounded corners
  boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.1)", // Soft shadow for better depth
}));

const ServiceSection = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "70px",
          marginBottom: "10px",
        }}
      >
        Initiatives
      </h1>
      <Grid container spacing={2} mb={6} sx={{ padding: "30px" }}>
        <Grid item xs={12} md={6}>
          <Item sx={{ minHeight: "400px" }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb={2.5}
            >
              <Avatar
                alt="N'Able Logo"
                src="/nablelogo.jpg"
                sx={{
                  width: 90,
                  height: 90,
                  mr: 2,
                  mb: 3,
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Shadow for the avatar
                }}
              />
              <Typography
                style={{ fontFamily: "Montserrat, sans-serif" }}
                sx={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#6a00b9",
                }}
                mb={3}
              >
                N'Able By Shibi Anand
              </Typography>
            </Box>
            <Typography
              style={{ fontFamily: "Montserrat, sans-serif" }}
              sx={{ margin: "10px", color: "black", fontWeight: 500 }}
            >
              N'Able was born from a deep desire to empower individuals to help
              themselves, to become the best versions of who they are meant to
              be. We recognize that everyone is unique, with their own path and
              timeline in life. At N'Able, we work closely with both individuals
              and communities, guiding them to uncover their true potential and
              helping them to shine their inner light. Our mission is to support
              you in your journey of self-discovery, growth, and achievement,
              enabling you to pursue life on your own terms with confidence and
              purpose.
            </Typography>
            <Box textAlign="center" mt={3}>
              <Button
                variant="contained"
                color="secondary"
                // startIcon={<i className="fab fa-youtube" />}
                sx={{
                  backgroundColor: "#FF0000",
                  borderRadius: "20px",
                  padding: "15px",
                  fontFamily: "Montserrat, sans-serif",
                }}
                href="/services"
                >
                Explore More
              </Button>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item sx={{ minHeight: "400px" }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb={2.5}
            >
              <Avatar
                alt="AI Teacher Community Logo"
                src="/AILOGO.jpeg"
                sx={{
                  width: 90,
                  height: 90,
                  mr: 2,
                  mb: 3,
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Shadow for the avatar
                }}
              />
              <Typography
                style={{ fontFamily: "Montserrat, sans-serif" }}
                sx={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#6a00b9",
                }}
                mb={3}
              >
                AI Teacher Community
              </Typography>
            </Box>
            <Typography
              sx={{ margin: "10px", color: "black", fontWeight: 500 }}
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Launched in May 2021 by N'Able, the AI Teacher Community aims to
              empower CBSE teachers across India to integrate AI as a skill
              subject in their classrooms. With over 22 sessions organized to
              date, the community has grown into a self-sustained network of
              over 400 teachers worldwide. This collaborative platform enables
              teachers to support each other in effectively implementing AI
              education in schools.
            </Typography>
            <Box textAlign="center" mt={9}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<i className="fab fa-youtube" />}
                sx={{
                  backgroundColor: "#FF0000",
                  borderRadius: "20px",
                  padding: "15px",
                  fontFamily: "Montserrat, sans-serif",
                }}
                href="https://www.youtube.com/watch?v=0ET_Kzj5MY4&list=PLe_YFUGwCEm8qSxKcsiRtYoRM6rVpcm_v"
                target="_blank"
              >
                Explore More
              </Button>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default ServiceSection;
