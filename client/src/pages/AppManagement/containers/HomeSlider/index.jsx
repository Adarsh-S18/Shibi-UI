import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

const HomeSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const styles = {
    slideshowContainer: {
      position: "relative",
      maxWidth: "100%",
      overflow: "hidden",
    },
    slide: {
      display: "none",
    },
    activeSlide: {
      display: "block",
    },
    image: {
      width: "100%",
      height: "auto",
    },
  };
  const images = [
    '/slider7.jpg',
    '/slider2.jpg',
    '/slider5.jpg',
    '/slider1.jpg',
    '/slider3.jpg',
    '/slider6.jpg',
    '/slider4.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change the interval as needed (currently set to 5 seconds)

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div>
      <Grid sx={{ paddingTop: { xs: 5 } }}>
        <div
          style={{
            position: "relative",
            maxHeight: "800px",
            maxWidth: "100%",
            overflow: "hidden",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={
                index === currentImageIndex
                  ? { ...styles.slide, ...styles.activeSlide }
                  : styles.slide
              }
            >
              <img src={image} alt={`Slide ${index}`} style={styles.image} />
            </div>
          ))}
        </div>
      </Grid>
    </div>
  );
};

export default HomeSlider;
