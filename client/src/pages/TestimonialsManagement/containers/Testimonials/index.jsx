/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Typography, Container, Grid, Paper } from "@mui/material";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    img: "https://dstudiosphotography.com/wp-content/uploads/2019/01/Corporate-Headshots-3-square.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    name: "Katrine",
    img: "https://www.imagefitz.com/wp-content/uploads/2019/02/Professional-Headshot-Photography-1JF1398-Square.jpg",
    text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker .",
  },
  {
    id: 3,
    name: "Andrews",
    img: "https://media.licdn.com/dms/image/D5612AQGCBR3599zRCA/article-cover_image-shrink_720_1280/0/1703561491473?e=2147483647&v=beta&t=J922l__ELG2zlsyJnxcSgHiGYr63NY_8Zdp3E9VqZqE",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.",
  },
  {
    id: 4,
    name: "Lilly Doe",
    img: "https://wrisenergy.org/wp-content/uploads/2019/06/Professional-headshot-square.jpg",
    text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour .",
  },
];

const Testimonials = () => {
  //   const [currentIndex, setCurrentIndex] = React.useState(0);

  //   const handleNext = () => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  //   };

  //   const handlePrev = () => {
  //     setCurrentIndex(
  //       (prevIndex) =>
  //         (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
  //     );
  //   };

  return (
    <Container>
      <h1
        style={{ textAlign: "center", marginTop: "30px", marginBottom: "30px" }}
      >
        Testimonials
      </h1>
      <Grid container justifyContent="center" sx={12} mb={5}>
        <Grid item xs={6} md={6} lg={6}>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              textAlign: "center",
              borderRadius: "20px",
              margin: "10px",
            }}
          >
            <img
              src={testimonialsData[0].img}
              height={100}
              width={100}
              style={{ borderRadius: "50%" }}
            />
            <Typography variant="h6" gutterBottom>
              {testimonialsData[0].name}
            </Typography>
            <Typography variant="body1" color="black" paragraph>
              {testimonialsData[0].text}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              textAlign: "center",
              borderRadius: "20px",
              margin: "10px",
            }}
          >
            <img
              src={testimonialsData[1].img}
              height={100}
              width={100}
              style={{ borderRadius: "50%" }}
            />
            <Typography variant="h6" gutterBottom>
              {testimonialsData[1].name}
            </Typography>
            <Typography variant="body1" color="black" paragraph>
              {testimonialsData[1].text}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={12} mb={5}>
        <Grid item xs={6} md={6} lg={6}>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              textAlign: "center",
              borderRadius: "20px",
              margin: "10px",
            }}
          >
            <img
              src={testimonialsData[2].img}
              height={100}
              width={100}
              style={{ borderRadius: "50%" }}
            />
            <Typography variant="h6" gutterBottom>
              {testimonialsData[2].name}
            </Typography>
            <Typography variant="body1" color="black" paragraph>
              {testimonialsData[2].text}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              textAlign: "center",
              borderRadius: "20px",
              margin: "10px",
            }}
          >
            <img
              src={testimonialsData[3].img}
              height={100}
              width={100}
              style={{ borderRadius: "50%" }}
            />
            <Typography variant="h6" gutterBottom>
              {testimonialsData[3].name}
            </Typography>
            <Typography variant="body1" color="black" paragraph>
              {testimonialsData[3].text}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testimonials;
