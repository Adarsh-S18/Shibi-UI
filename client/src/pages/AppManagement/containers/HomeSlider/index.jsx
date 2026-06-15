import React, { useEffect, useState } from "react";
import { Box, IconButton, useTheme, useMediaQuery } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
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

  const fetchSliders = async () => {
    try {
      const response = await fetch(`${baseURL}/api/sliders/get-sliders`);
      const data = await response.json();
      // Newest images are appended to the end on the server, so reverse to
      // show the most recently updated image first.
      setSliderImages(Array.isArray(data) ? [...data].reverse() : []);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "calc(100% - 24px)", md: "calc(100% - 48px)" },
        mx: "auto",
        height: {
          xs: "auto",
          sm: "calc(100vh - 120px)",
        },
        overflow: "hidden",
        mt: { lg: "120px", xs: "96px", sm: "96px" },
        borderRadius: { xs: "20px", md: "28px" },
        boxShadow: "var(--shadow-lg)",
        minHeight: { xs: "240px", sm: "auto" },
        isolation: "isolate",
      }}
    >
      {sliderImages.map((image, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            inset: 0,
            opacity: index === currentImageIndex ? 1 : 0,
            transform: index === currentImageIndex ? "scale(1)" : "scale(1.04)",
            transition: "opacity 0.9s var(--ease-out), transform 1.2s var(--ease-out)",
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
              maxHeight: isMobile ? "calc(100vh - 120px)" : "none",
            }}
          />
          {/* gradient veil to ground the image */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(26,16,51,0) 55%, rgba(26,16,51,0.45) 100%)",
              pointerEvents: "none",
            }}
          />
        </Box>
      ))}

      {/* Decorative gradient ring (top-right) */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          width: { xs: 160, md: 280 },
          height: { xs: 160, md: 280 },
          right: { xs: -60, md: -90 },
          top: { xs: -60, md: -90 },
          background: "var(--grad-aurora)",
          borderRadius: "50%",
          filter: "blur(80px)",
          opacity: 0.45,
          pointerEvents: "none",
        }}
      />

      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: { xs: 10, md: 22 },
          transform: "translateY(-50%)",
          width: { xs: 44, md: 56 },
          height: { xs: 44, md: 56 },
          color: "var(--color-ink)",
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          boxShadow: "var(--shadow-md)",
          transition: "all .3s var(--ease-spring)",
          "&:hover": {
            background: "#fff",
            transform: "translateY(-50%) scale(1.08)",
          },
        }}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: { xs: 10, md: 22 },
          transform: "translateY(-50%)",
          width: { xs: 44, md: 56 },
          height: { xs: 44, md: 56 },
          color: "var(--color-ink)",
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          boxShadow: "var(--shadow-md)",
          transition: "all .3s var(--ease-spring)",
          "&:hover": {
            background: "#fff",
            transform: "translateY(-50%) scale(1.08)",
          },
        }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>

      {/* Dot indicators */}
      {sliderImages.length > 0 && (
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 16, md: 26 },
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
            zIndex: 2,
            background: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(8px)",
            borderRadius: "999px",
            px: 1.5,
            py: 1,
          }}
        >
          {sliderImages.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              sx={{
                cursor: "pointer",
                width: index === currentImageIndex ? 26 : 9,
                height: 9,
                borderRadius: 999,
                background:
                  index === currentImageIndex
                    ? "var(--grad-sunrise)"
                    : "rgba(255,255,255,0.6)",
                transition: "all .35s var(--ease-spring)",
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default HomeSlider;
