import { Grid, Typography, Button } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

const ExploreSection = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #673AB7, #8868C1)",
        padding: "50px",
        marginBottom: "2rem",
        borderRadius: "15px", // Adding border radius for a softer look
        color: "#fff", // Setting text color to white
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sx={{ textAlign: "center", marginBottom: "30px" }}>
          <Typography fontSize={30} fontWeight={700} fontFamily= "sans-serif">
            <StarIcon /> Empowering Education, Empowering Futures.
          </Typography>
          <Typography fontSize={30} fontWeight={700} mt={2} fontFamily= "sans-serif">
            <StarIcon /> Transforming Teachers, Inspiring Students, Elevating
            Schools.
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            href="/workshops"
            color="warning"
            sx={{
              borderRadius: "25px",
              padding: "15px 30px",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "orange", // Matching hover color
              },
            }}
          >
            Explore Our Services
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ExploreSection;
