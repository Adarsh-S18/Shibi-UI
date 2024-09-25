import React, { useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { baseURL } from "../../../../config/common";

const WorkshopDetails = ({ workshop }) => {
  const containerStyle = {
    position: "relative",
    height: "20vh",
    marginTop: "40px",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  };

  const imageStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url(https://wallpapers.com/images/hd/solid-purple-1920-x-1200-background-u09ilxc0nn1deksl.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.8)",
    borderRadius: "10px",
  };

  const contentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
    zIndex: 1,
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: 600,
    marginBottom: "20px",
    textShadow: "2px 2px 6px rgba(0,0,0,0.6)", // More pronounced shadow for contrast
  };

  const descriptionStyle = {
    fontSize: "1.1rem",
    lineHeight: 1.6,
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
    marginTop: "30px",
    color: "#444", // Softer text color for readability
    // textAlign: "center",
    margin: "0 auto",
    maxWidth: "80%",
  };

  const galleryContainerStyle = {
    margin: "50px auto", // Center the gallery
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "1200px",
  };

  const galleryImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
    transition: "transform 0.3s ease-in-out", // Smooth transition
    "&:hover": {
      transform: "scale(1.60)", // Increase the scale for more pronounced zoom
    },
  };
  

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Box sx={containerStyle}>
        <Box sx={imageStyle} />
        <Box sx={contentStyle}>
          <Typography variant="h1" sx={headingStyle}>
            {workshop?.name}
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid
          item
          xs={12}
          mt={6}
          sx={{
            marginBottom: "40px",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Typography sx={descriptionStyle} component="div">
            <div dangerouslySetInnerHTML={{ __html: workshop?.description }} />
          </Typography>
        </Grid>
      </Grid>

      <Box sx={galleryContainerStyle}>
        <Typography
          fontSize={30}
          fontWeight={700}
          sx={{ textAlign: "center", marginBottom: "30px" }}
        >
          Gallery
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {workshop?.images.map((image, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box
                component="img"
                src={`${baseURL}${image}`}
                alt={`Gallery ${index + 1}`}
                sx={galleryImageStyle}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default WorkshopDetails;
