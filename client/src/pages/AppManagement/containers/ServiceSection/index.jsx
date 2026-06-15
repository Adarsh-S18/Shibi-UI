import * as React from "react";
import Grid from "@mui/material/Grid";
import { Avatar, Box, Button, Typography, Container } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const InitiativeCard = ({ logo, title, body, href, external = false, accent = "var(--grad-aurora)" }) => (
  <Box
    sx={{
      position: "relative",
      height: "100%",
      background: "var(--color-surface)",
      borderRadius: "24px",
      p: { xs: 3, md: 4 },
      border: "1px solid var(--color-line)",
      boxShadow: "var(--shadow-md)",
      transition: "transform .45s var(--ease-out), box-shadow .45s var(--ease-out)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "var(--shadow-lg)",
      },
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "5px",
        background: accent,
      },
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, mb: 2 }}>
      <Box
        sx={{
          width: 80,
          height: 80,
          borderRadius: "20px",
          padding: "3px",
          background: accent,
          flexShrink: 0,
        }}
      >
        <Avatar
          alt={title}
          src={logo}
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "17px",
            background: "#fff",
          }}
        />
      </Box>
      <Typography
        sx={{
          fontFamily: "Sora, sans-serif",
          fontSize: { xs: "1.25rem", md: "1.5rem" },
          fontWeight: 700,
          color: "var(--color-ink)",
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </Typography>
    </Box>
    <Typography
      sx={{
        fontFamily: "Plus Jakarta Sans, sans-serif",
        fontSize: "15.5px",
        color: "var(--color-muted)",
        lineHeight: 1.75,
        fontWeight: 400,
        flex: 1,
      }}
    >
      {body}
    </Typography>
    <Box mt={3}>
      <Button
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        endIcon={external ? <OpenInNewIcon sx={{ fontSize: 16 }} /> : <ArrowForwardIcon sx={{ fontSize: 18 }} />}
        sx={{
          background: accent,
          color: "#fff",
          borderRadius: "999px",
          textTransform: "none",
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontWeight: 700,
          fontSize: "14px",
          px: 3,
          py: 1.25,
          boxShadow: "0 10px 30px rgba(91, 42, 134, 0.25)",
          transition: "transform .3s var(--ease-out), box-shadow .3s var(--ease-out)",
          "&:hover": {
            background: accent,
            transform: "translateY(-2px)",
            boxShadow: "0 14px 36px rgba(91, 42, 134, 0.35)",
          },
        }}
      >
        Explore More
      </Button>
    </Box>
  </Box>
);

const ServiceSection = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: { xs: 6, md: 10 }, mt: { xs: 2, md: 4 } }}>
      <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
        <span className="section-eyebrow">Initiatives</span>
        <Typography className="section-title" sx={{ mt: 2 }}>
          Programs crafted to <span className="accent">empower</span>
        </Typography>
        <Typography className="section-subtitle">
          From individual mentoring to teacher communities, every initiative is
          designed to spark growth, build confidence and create lasting impact.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <InitiativeCard
            logo="/nablelogo.jpg"
            title="N'Able by Shibi Anand"
            accent="var(--grad-aurora)"
            body="N'Able was born from a deep desire to empower individuals to help themselves, to become the best versions of who they are meant to be. We recognize that everyone is unique, with their own path and timeline in life. We work closely with both individuals and communities, guiding them to uncover their true potential and helping them shine their inner light."
            href="/services"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InitiativeCard
            logo="/AILOGO.jpeg"
            title="AI Teacher Community"
            accent="var(--grad-sunrise)"
            body="Launched in May 2021, the AI Teacher Community empowers CBSE teachers across India to integrate AI as a skill subject in their classrooms. With over 22 sessions to date, the community has grown into a self-sustained network of 400+ teachers worldwide — collaborating to bring AI into schools."
            href="https://www.youtube.com/watch?v=0ET_Kzj5MY4&list=PLe_YFUGwCEm8qSxKcsiRtYoRM6rVpcm_v"
            external
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServiceSection;
