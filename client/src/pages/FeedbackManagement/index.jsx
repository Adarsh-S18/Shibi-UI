import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { baseURL } from "../../config/common";

export default function FeedbackManagement() {
  const [feedbackImages, setFeedbackImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await fetch(
        `${baseURL}/api/feedbacks/get-feedbacks`
      );
      const data = await response.json();
      setFeedbackImages(data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ margin: "30px" }}>
      <Typography
        fontSize={30}
        fontWeight={700}
        mt={2}
        mb={4}
        sx={{ textAlign: "center" }}
      >
        Feedbacks
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {loading ? ( // Show loader while loading
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
            }}
          >
            <CircularProgress color="error"/>
          </Box>
        ) : (
          <>
            {feedbackImages.map((image, index) => (
              <Grid item xs={6} md={3} key={index}>
                <img
                  src={`${baseURL}${image}`}
                  alt={`Gallery ${index + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </div>
  );
}
