import { Box, CircularProgress, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../config/common";

const VlogsManagement = () => {
  const [vlogs, setVlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVlogs();
  }, []);

  const fetchVlogs = async () => {
    try {
      const response = await fetch(`${baseURL}/api/vlogs/get-vlogs`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setVlogs(data);
    } catch (error) {
      console.error("Error fetching vlogs:", error);
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
          background: "radial-gradient(circle, #FFB547 0%, transparent 70%)",
          top: 40,
          left: -140,
          opacity: 0.22,
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <span className="section-eyebrow">Vlogs</span>
          <Typography className="section-title" sx={{ mt: 2 }}>
            Stories, ideas &amp; <span className="accent">reflections</span>
          </Typography>
          <Typography className="section-subtitle">
            Bite-sized perspectives on education, growth and the journey of
            being unapologetically you.
          </Typography>
        </Box>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
            <CircularProgress sx={{ color: "var(--color-primary)" }} />
          </Box>
        ) : (
          <Grid container spacing={3}>
            {vlogs.map((vlog) => (
              <Grid item xs={12} sm={6} md={4} key={vlog?._id}>
                <Box
                  sx={{
                    position: "relative",
                    background: "var(--color-surface)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid var(--color-line)",
                    boxShadow: "var(--shadow-sm)",
                    transition: "transform .4s var(--ease-out), box-shadow .4s var(--ease-out)",
                    aspectRatio: "16 / 11",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "var(--shadow-lg)",
                    },
                  }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={vlog?.link}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ border: 0, display: "block" }}
                  ></iframe>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default VlogsManagement;
