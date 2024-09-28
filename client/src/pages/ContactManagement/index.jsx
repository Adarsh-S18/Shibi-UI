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
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Headset, Email } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from "emailjs-com";

// List of services as options for the dropdown
const services = [
  {
    name: "Empowerment Workshops",
  },
  {
    name: "Personal Mentoring",
  },
  {
    name: "School Mentoring Programs",
  },
  {
    name: "AI Training for Educators",
  },
  {
    name: "Motivational Sessions",
  },
  {
    name: "Leadership Development Trainings",
  },
  {
    name: "CBSE Workshops",
  },
  {
    name: "Event Hosting and Emcee Services",
  },
  {
    name: "Personal Branding and Event Curation",
  },
  {
    name: "Others",
  },
];

export default function ContactManagement() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: "",
  });
  console.log(formData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .send(
        "service_1f8u7r6",
        "template_lfnog4p",
        formData,
        "KQZqi1xsVhwJBlQbw"
      )
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
        setFormData({ name: "", email: "", message: "", service: "" });
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
                <FormControl fullWidth margin="normal">
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
                  type="submit"
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
