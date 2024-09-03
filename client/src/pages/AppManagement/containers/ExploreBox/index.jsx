import React from "react";
import { Grid, Typography, Button } from "@mui/material";

const ExploreSection = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #673AB7, #8868C1)",
        padding: "50px",
        marginBottom: "2rem",
        marginTop: "1rem",
        borderRadius: "15px",
        color: "#fff",
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sx={{ textAlign: "center", marginBottom: "30px" }}>
          <Typography
            style={{ fontFamily: "Montserrat, sans-serif" }}
            fontSize={30}
            fontWeight={700}
          >
            Navigate the evolving landscape of education with N'Able by Shibi
            Anand –
            <p style={{ marginTop: "10px" }}>
              Empowering minds, Reshaping classrooms &
            </p>
            Seamlessly adapting to the dynamic future of learning.
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            href="/services"
            color="warning"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            sx={{
              borderRadius: "25px",
              padding: "15px 30px",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "orange",
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
