import { Box, Button, Container, Typography } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";

const VideoSection = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: { xs: 6, md: 10 } }}>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: "var(--grad-sunrise)",
          borderRadius: { xs: "20px", md: "32px" },
          p: { xs: 4, md: 6 },
          boxShadow: "var(--shadow-glow-warm)",
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        {/* decorative shapes */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            width: 220,
            height: 220,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.25)",
            top: -80,
            left: -60,
            filter: "blur(30px)",
          }}
        />
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "rgba(91, 42, 134, 0.15)",
            bottom: -60,
            right: -30,
            filter: "blur(40px)",
          }}
        />

        <Box sx={{ position: "relative", zIndex: 1, textAlign: { xs: "center", md: "left" }, flex: 1 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              background: "rgba(26, 16, 51, 0.12)",
              color: "var(--color-ink)",
              borderRadius: "999px",
              px: 2,
              py: 0.75,
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            <PlayCircleFilledIcon sx={{ fontSize: 16 }} />
            Now Streaming
          </Box>
          <Typography
            sx={{
              fontFamily: "Sora, sans-serif",
              fontWeight: 700,
              fontSize: { xs: "1.7rem", sm: "2rem", md: "2.4rem" },
              color: "var(--color-ink)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              mb: 1.5,
            }}
          >
            Insights, stories &amp; reflections.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: { xs: "0.98rem", md: "1.05rem" },
              color: "rgba(26, 16, 51, 0.75)",
              fontWeight: 500,
              maxWidth: 540,
              lineHeight: 1.7,
              mx: { xs: "auto", md: 0 },
            }}
          >
            Catch the latest vlogs — bite-sized perspectives on education,
            growth and the journey of being unapologetically you.
          </Typography>
        </Box>

        <Button
          variant="contained"
          href="/vlogs"
          endIcon={<ArrowForwardIcon />}
          sx={{
            position: "relative",
            zIndex: 1,
            background: "var(--color-ink)",
            color: "#fff",
            borderRadius: "999px",
            px: 4,
            py: 1.75,
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontWeight: 700,
            fontSize: "15px",
            textTransform: "none",
            boxShadow: "0 14px 36px rgba(26, 16, 51, 0.28)",
            transition: "transform .3s var(--ease-out), box-shadow .3s var(--ease-out)",
            "&:hover": {
              background: "var(--color-primary)",
              transform: "translateY(-2px)",
              boxShadow: "0 18px 44px rgba(26, 16, 51, 0.35)",
            },
          }}
        >
          Watch Vlogs
        </Button>
      </Box>
    </Container>
  );
};

export default VideoSection;
