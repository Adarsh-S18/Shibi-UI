import React, { useEffect, useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";

const HomeSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const images = [
    '/sl2.jpeg',
    '/sl5.jpg',
    '/sl03.jpg',
    '/sl3.JPG',
    '/sl4.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change interval as needed (currently set to 3 seconds)

    return () => clearInterval(intervalId);
  }, [images.length]);

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
        mt: {lg: '120px', xs: "120px", sm: "64px" },
        minHeight: { xs: "200px", sm: "auto" }, // Ensure a minimum height on all screens
      }}
    >
      {images.map((image, index) => (
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
            src={image}
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
    </Box>
  );
};

export default HomeSlider;