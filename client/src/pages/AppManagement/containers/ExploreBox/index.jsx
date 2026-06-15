import React, { useEffect, useState } from "react";
import { Grid, Typography, Box, Container } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { baseURL } from "../../../../config/common";

const ExploreSection = () => {
  const [updateData, setUpdateData] = useState(null);
  useEffect(() => {
    fetchWorkshops();
  }, []);

  const fetchWorkshops = async () => {
    try {
      const response = await fetch(`${baseURL}/api/workshops/get-new-updates`);
      const data = await response.json();
      setUpdateData(data);
    } catch (error) {
      console.error("Error fetching workshops:", error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 10 }, mb: { xs: 6, md: 8 } }}>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: "var(--grad-twilight)",
          borderRadius: { xs: "20px", md: "32px" },
          color: "#fff",
          p: { xs: 3, sm: 5, md: 7 },
          boxShadow: "var(--shadow-glow)",
        }}
      >
        {/* decorative blobs */}
        <Box
          aria-hidden
          className="bg-decor"
          sx={{
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "radial-gradient(circle, #FF6F91 0%, transparent 70%)",
            top: -80,
            right: -80,
            opacity: 0.55,
          }}
        />
        <Box
          aria-hidden
          className="bg-decor"
          sx={{
            width: 260,
            height: 260,
            borderRadius: "50%",
            background: "radial-gradient(circle, #9C6AE0 0%, transparent 70%)",
            bottom: -100,
            left: -60,
            opacity: 0.4,
          }}
        />

        <Grid container spacing={5} alignItems="center" sx={{ position: "relative", zIndex: 1 }}>
          <Grid item xs={12} md={6}>
            <Box
              className="section-eyebrow"
              sx={{
                background: "rgba(255,255,255,0.15) !important",
                color: "#FFE3B0 !important",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <AutoAwesomeIcon sx={{ fontSize: 16 }} />
              What's New
            </Box>
            <Typography
              sx={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 700,
                fontSize: { xs: "1.9rem", sm: "2.3rem", md: "2.8rem" },
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                mt: 2,
                mb: 2,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Discover the latest at{" "}
              <Box component="span" sx={{ background: "var(--grad-sunrise)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                N'Able
              </Box>
            </Typography>
            <Typography
              sx={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.15rem" },
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.88)",
                fontWeight: 400,
                textAlign: { xs: "center", md: "left" },
                maxWidth: 540,
              }}
            >
              N'Able empowers individuals and schools to reach their fullest
              potential through personalized support, transformative experiences,
              and expert consultation. We help people embrace their uniqueness
              and achieve growth while partnering with educational institutions
              to elevate quality and effectiveness through mentoring and guidance.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "right" } }}>
            {updateData ? (
              <Box
                sx={{
                  position: "relative",
                  paddingTop: updateData.youtubeLink ? "56.25%" : "0",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  width: { xs: "100%", md: "auto" },
                  maxWidth: "100%",
                  transition: "transform .5s var(--ease-out)",
                  "&:hover": { transform: "translateY(-4px)" },
                }}
              >
                {updateData.youtubeLink ? (
                  <iframe
                    src={updateData.youtubeLink}
                    title="What's New Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: 0,
                    }}
                  ></iframe>
                ) : updateData.image ? (
                  <img
                    src={`${baseURL}${updateData.image}`}
                    alt="What's New Update"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                ) : (
                  <Typography sx={{ textAlign: "center", p: 4 }} variant="body1">
                    Update Coming soon...
                  </Typography>
                )}
              </Box>
            ) : (
              <Typography variant="body1" sx={{ opacity: 0.8 }}>
                Loading...
              </Typography>
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ExploreSection;
