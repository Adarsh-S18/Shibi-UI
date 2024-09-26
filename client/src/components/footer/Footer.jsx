import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom"; // Import Link for routing
import { styled } from "@mui/system";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterContainer = styled("footer")({
  backgroundColor: "#282c34",
  color: "white",
  padding: "40px 0",
});

const FooterSection = styled(Box)({
  marginBottom: "20px",
});

const SubscribeContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  marginTop: "10px",
});

const DownloadList = styled(List)({
  padding: 0,
  listStyleType: "none",
});

const Footer = () => {
  const menuItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about-us" },
    { text: "Services", link: "/services" },
    { text: "Workshops", link: "/workshops" },
    { text: "Feedbacks", link: "/feedbacks" },
    { text: "Contact", link: "/contact-form" },
  ];

  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Left section: Logo and write-up */}
          <Grid item xs={12} md={8}>
            <FooterSection>
              <img
                src="/logo-png.png"
                alt="Logo"
                style={{ maxWidth: "150px", marginBottom: "20px" }}
              />
              <Typography
                variant="body1"
                paragraph
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  lineHeight: "1.7",
                }}
              >
                Navigate the evolving landscape of education with N'Able by
                Shibi Anand – Empowering minds, reshaping classrooms, and
                seamlessly adapting to the dynamic future of learning.
              </Typography>
            </FooterSection>
            <Box sx={{ mt: 3 }}>
              <IconButton
                href="https://www.instagram.com/"
                target="_blank"
                sx={{ color: "white" }}
              >
                <InstagramIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://www.facebook.com/shibi.anand03"
                target="_blank"
                sx={{ color: "blue" }}
              >
                <FacebookIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/shibi-anand/"
                target="_blank"
                sx={{ color: "white" }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://www.youtube.com/@NableByShibiAnand"
                target="_blank"
                sx={{ color: "red" }}
              >
                <YouTubeIcon fontSize="large" />
              </IconButton>

              <IconButton
                href="https://podcasters.spotify.com/pod/show/shibi-anand3"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3em"
                  height="1.3em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#03c200"
                    d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
                  />
                </svg>
              </IconButton>
            </Box>
          </Grid>

          {/* Right section: Quick Links and Get in Touch */}
          <Grid item xs={12} md={4}>
            <Grid container spacing={4}>
              {/* Quick Links */}
              <Grid item xs={12} sm={6}>
                <FooterSection>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Quick Links
                  </Typography>
                  <DownloadList>
                    {menuItems.map((item, index) => (
                      <ListItem
                        key={index}
                        style={{
                          padding: "4px 0",
                          fontFamily: "Montserrat, sans-serif",
                        }}
                      >
                        {/* Wrap the ListItem with Link for routing */}
                        <Link
                          to={item.link}
                          style={{
                            color: "white",
                            textDecoration: "none",
                          }}
                        >
                          {item.text}
                        </Link>
                      </ListItem>
                    ))}
                  </DownloadList>
                </FooterSection>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box
          sx={{
            textAlign: "center",
            marginTop: "20px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          © 2024 Shibi Anand. All Rights Reserved.
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
