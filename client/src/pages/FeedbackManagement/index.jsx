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
      const response = await fetch(`${baseURL}/api/feedbacks/get-feedbacks`);
      const data = await response.json();
      setFeedbackImages(data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ margin: "30px", marginTop: "130px" }}>
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
            <CircularProgress color="error" />
          </Box>
        ) : (
          <>
            {feedbackImages.map((image, index) => (
              <Grid
                item
                xs={12} // Full width on small screens
                sm={6}  // Two in a row on small screens (576px and above)
                md={4}  // Three in a row on medium screens (960px and above)
                lg={3}  // Four in a row on large screens (1280px and above)
                key={index}
              >
                <img
                  src={`${baseURL}${image}`}
                  alt={`Gallery ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </div>
  );
}
