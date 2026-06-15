import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  IconButton,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Email } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from "emailjs-com";

const services = [
  { name: "Empowerment Workshops" },
  { name: "Personal Mentoring" },
  { name: "School Mentoring Programs" },
  { name: "AI Training for Educators" },
  { name: "Motivational Sessions" },
  { name: "Leadership Development Trainings" },
  { name: "CBSE Workshops" },
  { name: "Event Hosting and Emcee Services" },
  { name: "Personal Branding and Event Curation" },
  { name: "Others" },
];

const socialButtons = [
  { href: "https://www.instagram.com/", icon: <InstagramIcon />, color: "#E1306C", label: "Instagram" },
  { href: "https://www.facebook.com/shibi.anand03", icon: <FacebookIcon />, color: "#1877F2", label: "Facebook" },
  { href: "https://www.linkedin.com/in/shibi-anand/", icon: <LinkedInIcon />, color: "#0A66C2", label: "LinkedIn" },
  { href: "https://www.youtube.com/@NableByShibiAnand", icon: <YouTubeIcon />, color: "#FF0000", label: "YouTube" },
];

const fieldStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "14px",
    background: "var(--color-bg)",
    fontFamily: "Plus Jakarta Sans, sans-serif",
    "& fieldset": { borderColor: "var(--color-line)" },
    "&:hover fieldset": { borderColor: "var(--color-primary-400)" },
    "&.Mui-focused fieldset": { borderColor: "var(--color-primary)" },
  },
  "& .MuiInputLabel-root": {
    fontFamily: "Plus Jakarta Sans, sans-serif",
    color: "var(--color-muted)",
    "&.Mui-focused": { color: "var(--color-primary)" },
  },
};

export default function ContactManagement() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .send("service_1f8u7r6", "template_lfnog4p", formData, "KQZqi1xsVhwJBlQbw")
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
        setFormData({ name: "", email: "", phoneNumber: "", message: "", service: "" });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  };

  return (
    <Box sx={{ pt: { xs: "120px", md: "150px" }, pb: { xs: 8, md: 12 }, position: "relative", overflow: "hidden" }}>
      <Box
        aria-hidden
        className="bg-decor"
        sx={{
          width: 440,
          height: 440,
          borderRadius: "50%",
          background: "radial-gradient(circle, #9C6AE0 0%, transparent 70%)",
          top: -100,
          left: -160,
          opacity: 0.28,
        }}
      />
      <Box
        aria-hidden
        className="bg-decor"
        sx={{
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: "radial-gradient(circle, #FFB547 0%, transparent 70%)",
          bottom: -120,
          right: -120,
          opacity: 0.25,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <span className="section-eyebrow">Get in touch</span>
          <Typography className="section-title" sx={{ mt: 2 }}>
            Let's start a <span className="accent">conversation</span>
          </Typography>
          <Typography className="section-subtitle">
            Have a question, idea or opportunity in mind? Send us a note — we'll
            get back to you as soon as we can.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                background: "var(--color-surface)",
                p: { xs: 3, md: 5 },
                borderRadius: "24px",
                border: "1px solid var(--color-line)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: "1.3rem", md: "1.6rem" },
                  color: "var(--color-ink)",
                  mb: 1,
                  letterSpacing: "-0.01em",
                }}
              >
                Send us a message
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontSize: "14.5px",
                  color: "var(--color-muted)",
                  mb: 3,
                }}
              >
                Fill in the form and we'll respond within 24 hours.
              </Typography>

              <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      sx={fieldStyles}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      sx={fieldStyles}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      variant="outlined"
                      sx={fieldStyles}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth sx={fieldStyles}>
                      <InputLabel id="service-label">Select Service</InputLabel>
                      <Select
                        labelId="service-label"
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        label="Select Service"
                      >
                        {services.map((service, index) => (
                          <MenuItem key={index} value={service.name}>
                            {service.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                      multiline
                      rows={5}
                      sx={fieldStyles}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      endIcon={<SendIcon />}
                      sx={{
                        background: "var(--grad-aurora)",
                        color: "#fff",
                        borderRadius: "14px",
                        py: 1.75,
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        fontWeight: 700,
                        fontSize: "15px",
                        textTransform: "none",
                        letterSpacing: "0.01em",
                        boxShadow: "var(--shadow-glow)",
                        transition: "transform .3s var(--ease-out)",
                        "&:hover": {
                          background: "var(--grad-aurora)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                background: "var(--grad-twilight)",
                color: "#fff",
                p: { xs: 3, md: 5 },
                borderRadius: "24px",
                height: "100%",
                boxShadow: "var(--shadow-glow)",
              }}
            >
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #FF6F91 0%, transparent 70%)",
                  bottom: -80,
                  right: -60,
                  filter: "blur(40px)",
                  opacity: 0.6,
                }}
              />

              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: "1.3rem", md: "1.6rem" },
                    mb: 1,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Contact info
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontSize: "14.5px",
                    color: "rgba(255,255,255,0.75)",
                    mb: 4,
                  }}
                >
                  Reach us directly or connect on socials.
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "12px",
                      background: "var(--grad-sunrise)",
                      color: "var(--color-ink)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Email />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 600 }}>
                      Email
                    </Typography>
                    <Typography sx={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 600, fontSize: "15px" }}>
                      nablebyshibianand@gmail.com
                    </Typography>
                  </Box>
                </Box>

                <Typography sx={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 600, mb: 1.5 }}>
                  Find us on
                </Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {socialButtons.map((s) => (
                    <IconButton
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      aria-label={s.label}
                      sx={{
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "#fff",
                        width: 44,
                        height: 44,
                        transition: "all .3s var(--ease-spring)",
                        "&:hover": {
                          background: s.color,
                          borderColor: s.color,
                          transform: "translateY(-3px)",
                        },
                      }}
                    >
                      {s.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
