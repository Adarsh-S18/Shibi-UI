import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import { Link } from "react-router-dom"; // Import Link for routing
import { styled } from "@mui/system";

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
    { text: "Testimonials", link: "/testimonials" },
    { text: "Contact", link: "/contact-form" },
  ];

  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Left section: Logo and write-up */}
          <Grid item xs={12} md={6}>
            <FooterSection>
              <img
                src="/mainlogo.jpg"
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
          </Grid>

          {/* Right section: Quick Links and Get in Touch */}
          <Grid item xs={12} md={6}>
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

              {/* Get in Touch */}
              <Grid item xs={12} sm={6}>
                <FooterSection>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Get in Touch
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      marginBottom: "10px",
                    }}
                  >
                    Contact me for any further queries or concerns!
                  </Typography>
                  <SubscribeContainer>
                    <TextField
                      type="email"
                      placeholder="Enter your email"
                      variant="outlined"
                      size="small"
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "white",
                        },
                        "& input": { color: "white" },
                        width: "70%",
                      }}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ marginLeft: "10px" }}
                    >
                      Contact
                    </Button>
                  </SubscribeContainer>
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
