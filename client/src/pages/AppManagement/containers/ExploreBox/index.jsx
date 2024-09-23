import React, { useEffect, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import { baseURL } from "../../../../config/common";

const ExploreSection = () => {
  const [updateData, setUpdateData] = useState(null);
console.log(updateData)
  useEffect(() => {
    fetchWorkshops();
  }, []);

  const fetchWorkshops = async () => {
    try {
      const response = await fetch(`${baseURL}/api/workshops/get-new-updates`);
      const data = await response.json();
      setUpdateData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching workshops:", error);
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #673AB7, #8868C1)",
        padding: "30px 20px", // Adjusted padding for better mobile responsiveness
        marginBottom: "2rem",
        marginTop: "1rem",
        borderRadius: "15px",
        color: "#fff",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              paddingRight: { xs: "0", md: "20px" },
              paddingBottom: { xs: "20px", md: "0" },
            }}
          >
            <Typography
              style={{ fontFamily: "Montserrat, sans-serif" }}
              variant="h4" // Adjusted for responsiveness
              fontWeight={700}
              mb={2}
              sx={{
                fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" }, // Responsive font sizes
              }}
            >
              <Box display="flex" alignItems="center">
                <NewReleasesIcon
                  fontSize="large"
                  style={{ marginRight: "10px", color: "#ffda46" }}
                />
                What's New!
              </Box>
            </Typography>
            <Typography
              style={{ fontFamily: "Montserrat, sans-serif" }}
              variant="h6" // Adjusted to h6 for mobile readability
              fontWeight={600}
              mb={3}
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" }, // Responsive font sizes
              }}
            >
              Check out what's new at N'Able – an exciting update awaits!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "right" } }}> {/* Center align on mobile */}
          {updateData ? (
            <Box
              sx={{
                position: "relative",
                paddingTop: updateData.youtubeLink ? "56.25%" : "0",
                borderRadius: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                width: { xs: "100%", md: "auto" }, // Adjust width on mobile
                maxWidth: { xs: "100%", md: "100%" }, // Ensure max-width for responsiveness
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
                    borderRadius: "10px",
                  }}
                ></iframe>
              ) : updateData.image ? (
                <img
                  src={`${baseURL}${updateData.image}`}
                  alt="What's New Update"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                  }}
                />
              ) : (
                <Typography sx={{textAlign: 'center'}} variant="body1">Update Coming soon...</Typography>
              )}
            </Box>
          ) : (
            <Typography variant="body1">Loading...</Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default ExploreSection;
