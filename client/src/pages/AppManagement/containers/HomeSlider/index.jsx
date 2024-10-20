import React, { useEffect, useState } from "react";
import { Box, IconButton, useTheme, useMediaQuery } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { baseURL } from "../../../../config/common";

const HomeSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [sliderImages, setSliderImages] = useState([]);

  useEffect(() => {
    fetchSliders();
  }, []);

  
  // const dummysliderImage = [
  //   "/sl2.jpeg",
  //   "/sl5.jpg",
  //   "/sl03.jpg",
  //   "/sl3.JPG",
  //   "/sl4.jpg",
  // ];

  const fetchSliders = async () => {
    try {
      const response = await fetch(`${baseURL}/api/sliders/get-sliders`);
      const data = await response.json();
      setSliderImages(data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  // Function to handle next button click
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle previous button click
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: "auto",
          sm: "calc(100vh - 64px)",
        },
        overflow: "hidden",
        mt: { lg: "120px", xs: "120px", sm: "64px" },
        minHeight: { xs: "200px", sm: "auto" }, // Ensure a minimum height on all screens
      }}
    >
      {sliderImages.map((image, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: index === currentImageIndex ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={`${baseURL}${image}`}
            alt={`Slide ${index + 1}`}
            sx={{
              width: "100%",
              height: isMobile ? "auto" : "100%",
              objectFit: isMobile ? "contain" : "cover",
              objectPosition: "center",
              maxHeight: isMobile ? "calc(100vh - 56px)" : "none",
            }}
          />
        </Box>
      ))}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          padding: isMobile ? "10px" : "20px", // Adjust padding based on screen size
          color: "#fff",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      {/* Right Button */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          padding: isMobile ? "10px" : "20px", // Adjust padding based on screen size
          color: "#fff",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default HomeSlider;
