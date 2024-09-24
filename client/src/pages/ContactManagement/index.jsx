import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  IconButton,
  Box,
  Paper,
} from "@mui/material";
import { Headset, Email } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from "emailjs-com";

export default function ContactManagement() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .send(
        "service_gfpumle",
        "template_qegerps",
        formData,
        "I_Q1R90GG8T4kGGZS"
      )
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  };

  return (
    <section
      className="contact_us"
      style={{
        padding: "40px 0",
        background: "linear-gradient(to right, #673AB7, #8868C1)",
        marginTop: "100px",
      }}
    >
      <Container>
        <Grid container justifyContent="center" spacing={4}>
          <Grid item md={8}>
            <Paper
              elevation={3}
              style={{
                padding: "30px",
                backgroundColor: "#fff",
                borderRadius: "15px",
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                align="center"
                color="primary"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                align="center"
                paragraph
                sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
              >
                Feel free to contact us anytime. We'll get back to you as soon
                as possible!
              </Typography>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  style={{
                    marginBottom: "20px",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  style={{
                    marginBottom: "20px",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined"
                  multiline
                  rows={4}
                  margin="normal"
                  style={{
                    marginBottom: "20px",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                />
                <Button
                  type="submit" // Ensure this is present
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{
                    padding: "10px 0",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={4}>
            <Paper
              elevation={3}
              style={{
                padding: "30px",
                backgroundColor: "#fff",
                borderRadius: "15px",
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                color="primary"
                sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
              >
                Contact Info
              </Typography>
              <Box display="flex" alignItems="center" marginBottom={2}>
                <Headset color="primary" style={{ marginRight: "10px" }} />
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                >
                  +91 8848496043
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" marginBottom={2}>
                <Email color="primary" style={{ marginRight: "10px" }} />
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                >
                  nablebyshibianand@gmail.com
                </Typography>
              </Box>

              <Box mt={4} display="flex" justifyContent="center">
                <IconButton
                  href="https://www.instagram.com/"
                  target="_blank"
                  style={{ color: "#90268d" }}
                >
                  <InstagramIcon fontSize="large" />
                </IconButton>
                <IconButton
                  href="https://www.facebook.com/shibi.anand03"
                  target="_blank"
                  style={{ color: "blue" }}
                >
                  <FacebookIcon fontSize="large" />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/shibi-anand/"
                  target="_blank"
                  style={{ color: "darkblue" }}
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
                <IconButton
                  href="https://www.youtube.com/@NableByShibiAnand"
                  style={{ color: "red" }}
                >
                  <YouTubeIcon fontSize="large" />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
