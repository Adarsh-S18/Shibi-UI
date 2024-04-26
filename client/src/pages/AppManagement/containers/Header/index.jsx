import Grid from "@mui/material/Grid";
import { Icon, Typography, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function HeaderSection() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            gap: "20px",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <Box sx={{ flex: 2, textAlign: "center" }}>
            <Typography
              variant="h3"
              sx={{
                marginBottom: "10px",
                color: "#333",
                fontFamily: "sans-serif",
                fontWeight: "bold",
                letterSpacing: "0.05em",
              }}
            >
              Shibi Anand
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "black",
                fontSize: "20px",
                marginBottom: "18px",
                fontFamily: "sans-serif",
                letterSpacing: "0.03em",
              }}
            >
              Edupreneur & Mentor | Founder of N'Able and AI Teacher Community
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#333",
                fontSize: "22px",
                marginBottom: "20px",
                fontFamily: "sans-serif",
                letterSpacing: "0.03em",
                lineHeight: "1.5",
              }}
            >
              Navigate the evolving landscape of education with N'Able by Shibi
              Anand – Empowering minds, reshaping classrooms, and seamlessly
              adapting to the dynamic future of learning.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Icon
                sx={{
                  margin: "10px",
                  color: "#3b5998",
                  fontSize: "32px",
                  "& a": {
                    color: "inherit",
                    textDecoration: "none",
                  },
                }}
              >
                <a
                  href="https://www.facebook.com/shibi.anand03"
                  target="_blank"
                >
                  <FacebookIcon />
                </a>
              </Icon>
              <Icon
                sx={{
                  margin: "10px",
                  color: "#98008F",
                  fontSize: "32px",
                  "& a": {
                    color: "inherit",
                    textDecoration: "none",
                  },
                }}
              >
                <a
                  href="https://www.instagram.com/nablebyshibianand?igsh=YmZmMDJrMTlxbDNz"
                  target="_blank"
                >
                  <InstagramIcon />
                </a>
              </Icon>
              <Icon
                sx={{
                  margin: "10px",
                  color: "red",
                  fontSize: "32px",
                  "& a": {
                    color: "inherit",
                    textDecoration: "none",
                  },
                }}
              >
                <a
                  href="https://youtube.com/@NableByShibiAnand?si=i9EWieHLhSLcbcPx"
                  target="_blank"
                >
                  <YouTubeIcon />
                </a>
              </Icon>
              <Icon
                sx={{
                  margin: "10px",
                  color: "#0077B5",
                  fontSize: "32px",
                  "& a": {
                    color: "inherit",
                    textDecoration: "none",
                  },
                }}
              >
                <a
                  href="https://www.linkedin.com/in/shibi-anand/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
              </Icon>
              <Icon
                sx={{
                  margin: "10px",
                  color: "#00D50D",
                  fontSize: "32px",
                  "& a": {
                    color: "inherit",
                    textDecoration: "none",
                  },
                }}
              >
                <a href="https://podcasters.spotify.com/pod/show/shibi-anand3" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.9em"
                    height="0.8em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
                    />
                  </svg>
                </a>
              </Icon>
            </Box>
          </Box>
          <Box sx={{ flex: 1, position: "relative" }}>
            <img
              src="/personal.jpg"
              style={{
                borderRadius: "50%",
                width: "400px",
                height: "400px",
                transition: "transform 0.5s ease",
              }}
              alt="Profile"
              onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
