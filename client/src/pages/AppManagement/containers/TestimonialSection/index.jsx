/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Typography, Container, Grid, Paper } from "@mui/material";

const testimonialsData = [
  {
    id: 1,
    name: "Dr. Monsi George ",
    img: "/test1.jpeg",
    text: "In an ever-expanding world of choices and possibilities,  what anyone aspiring for higher prospects needs is a well-informed mentor. Ms. Shibi Anand is such a person. She was one of the most proactive educational leaders with whom I had the privilege of working. She kept herself informed of career options and researched into the acquisition of skills and attitudes that would make her students and other mentees attain those. As an educational counselor,  Ms. Shibi is highly motivated and committed to the total well-being of her mentees. I am confident that she will not spare any effort to decipher the needs and potentials of her mentees and guide them to greater heights.",
  },
  {
    id: 2,
    name: "Dr. N Ajith Kumar",
    img: "/test2.jpeg",
    text: "It gives me great happiness to give a testimonial to a very accomplished and  proactive person like SHIBI ANAND. In my fairly short association with her I have found her to be a “bundle full of energy.” She is one of the most proactive educational leaders I have had the occasion to associate with. Ready to take up any challenge and work really hard to make a mark in whatever she does is the hallmark of her character. Though basically an educational counsellor, she is far ahead of that adage since along with counselling she  has motivated a large number of students to greatness. For Shibi education is a religion and she is definitely destined to be a high priest in this field in the years to come. Modest to the core her willingness to learn despite being an authority in many areas shows her humility as an individual. A happy combination of beauty and brains her capacity to appreciate the achievements of others and feeling genuinely happy at their accomplishments are sterling virtues of her immaculate character. I wish SHIBI ANAND the very best in all her endeavors.",
  },
];

const TestimonialSection = () => {
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
      <Grid container justifyContent="center" sx={12} mb={2}>
        <Grid item xs={12} md={12} lg={12}>
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
            <Typography
              variant="h6"
              gutterBottom
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {testimonialsData[0].name}
            </Typography>
            <Typography
              variant="body1"
              color="black"
              paragraph
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {testimonialsData[0].text}
            </Typography>
          </Paper>
        </Grid>
        {/* <Grid item xs={6} md={6} lg={6}>
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
            <Typography
              variant="h6"
              gutterBottom
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {testimonialsData[1].name}
            </Typography>
            <Typography
              variant="body1"
              color="black"
              paragraph
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {testimonialsData[1].text}
            </Typography>
          </Paper>
        </Grid> */}
      </Grid>
      <Grid container justifyContent="center" sx={12} mb={12}>
        <Grid item xs={12} md={12} lg={12}>
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
            <Typography
              variant="h6"
              gutterBottom
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {testimonialsData[1].name}
            </Typography>
            <Typography
              variant="body1"
              color="black"
              paragraph
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {testimonialsData[1].text}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TestimonialSection;
