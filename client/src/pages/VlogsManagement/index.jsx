import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const VlogsManagement = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: 700,
          textAlign: "center",
          fontFamily: "Montserrat, sans-serif",
          marginTop: '20px',
          marginBottom: '30px'
        }}
      >
        Vlogs
      </Typography>
      <Grid container spacing={2}>
        {Array.from({ length: 7 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/irLeMeF3u1A?si=yJaHBteMmbgp9YAU"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VlogsManagement;
