import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Container, Grid, Typography } from "@mui/material";
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
    <Box sx={{ pt: { xs: "120px", md: "150px" }, pb: { xs: 8, md: 12 }, position: "relative", overflow: "hidden" }}>
      <Box
        aria-hidden
        className="bg-decor"
        sx={{
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "radial-gradient(circle, #FF6F91 0%, transparent 70%)",
          top: 60,
          right: -160,
          opacity: 0.22,
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <span className="section-eyebrow">Feedback</span>
          <Typography className="section-title" sx={{ mt: 2 }}>
            What people <span className="accent">say</span>
          </Typography>
          <Typography className="section-subtitle">
            Real notes, messages and impressions from those who've been part of
            the N'Able experience.
          </Typography>
        </Box>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
            <CircularProgress sx={{ color: "var(--color-primary)" }} />
          </Box>
        ) : (
          <Grid container spacing={3} justifyContent="center">
            {feedbackImages.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Box
                  sx={{
                    overflow: "hidden",
                    borderRadius: "18px",
                    border: "1px solid var(--color-line)",
                    boxShadow: "var(--shadow-sm)",
                    transition: "transform .4s var(--ease-out), box-shadow .4s var(--ease-out)",
                    background: "var(--color-surface)",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "var(--shadow-lg)",
                    },
                    "&:hover img": { transform: "scale(1.05)" },
                  }}
                >
                  <Box
                    component="img"
                    src={`${baseURL}${image}`}
                    alt={`Feedback ${index + 1}`}
                    sx={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform .6s var(--ease-out)",
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}
