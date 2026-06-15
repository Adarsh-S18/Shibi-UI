import React, { useEffect } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { baseURL } from "../../../../config/common";

const WorkshopDetails = ({ workshop }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Container maxWidth="lg">
      {/* Hero banner */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "240px", md: "300px" },
          borderRadius: { xs: "20px", md: "28px" },
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--grad-twilight)",
          boxShadow: "var(--shadow-glow)",
          mb: 5,
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              workshop?.images?.[0]
                ? `url(${baseURL}${workshop.images[0]})`
                : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        />
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(26,16,51,0.85) 0%, rgba(91,42,134,0.7) 60%, rgba(255,111,145,0.55) 100%)",
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            color: "#fff",
            px: 4,
            py: 6,
          }}
        >
          <Box
            className="section-eyebrow"
            sx={{
              background: "rgba(255,255,255,0.18) !important",
              color: "#FFE3B0 !important",
            }}
          >
            Workshop
          </Box>
          <Typography
            sx={{
              fontFamily: "Sora, sans-serif",
              fontWeight: 800,
              fontSize: { xs: "1.9rem", md: "2.8rem" },
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              mt: 2,
              textShadow: "0 4px 24px rgba(0,0,0,0.3)",
              wordBreak: "break-word",
            }}
          >
            {workshop?.name}
          </Typography>
        </Box>
      </Box>

      {/* Description */}
      <Box
        sx={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-line)",
          borderRadius: { xs: "16px", md: "24px" },
          p: { xs: 3, md: 5 },
          boxShadow: "var(--shadow-sm)",
          mb: 6,
        }}
      >
        <Box
          sx={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontSize: { xs: "15px", md: "16px" },
            color: "var(--color-ink-soft)",
            lineHeight: 1.85,
            "& h1, & h2, & h3, & h4": {
              fontFamily: "Sora, sans-serif",
              color: "var(--color-ink)",
              letterSpacing: "-0.01em",
            },
            "& a": { color: "var(--color-primary)" },
            "& img": { maxWidth: "100%", borderRadius: "12px" },
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: workshop?.description }} />
        </Box>
      </Box>

      {/* Gallery */}
      {workshop?.images?.length > 0 && (
        <Box
          sx={{
            mt: 4,
            p: { xs: 3, md: 5 },
            background: "var(--color-surface-tint)",
            borderRadius: { xs: "20px", md: "28px" },
            border: "1px solid var(--color-line)",
          }}
        >
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <span className="section-eyebrow">Gallery</span>
            <Typography
              sx={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 700,
                fontSize: { xs: "1.6rem", md: "2rem" },
                letterSpacing: "-0.01em",
                color: "var(--color-ink)",
                mt: 1.5,
              }}
            >
              A look inside
            </Typography>
          </Box>
          <Grid container spacing={2.5} justifyContent="center">
            {workshop.images.map((image, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box
                  sx={{
                    overflow: "hidden",
                    borderRadius: "14px",
                    aspectRatio: "1 / 1",
                    boxShadow: "var(--shadow-sm)",
                    "&:hover img": { transform: "scale(1.08)" },
                  }}
                >
                  <Box
                    component="img"
                    src={`${baseURL}${image}`}
                    alt={`Gallery ${index + 1}`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform .6s var(--ease-out)",
                      display: "block",
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default WorkshopDetails;
