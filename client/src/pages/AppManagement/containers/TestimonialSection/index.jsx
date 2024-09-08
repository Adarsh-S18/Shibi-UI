import React from "react";
import { Typography, Container, Grid, Paper, Box } from "@mui/material";

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
    text: "In my fairly short association with her I have found her to be a bundle full of energy. She is one of the most proactive educational leaders I have had the occasion to associate with. Ready to take up any challenge and work really hard to make a mark in whatever she does is the hallmark of her character. For Shibi education is a religion and she is definitely destined to be a high priest in this field in the years to come. Modest to the core her willingness to learn despite being an authority in many areas shows her humility as an individual. A happy combination of beauty and brains her capacity to appreciate the achievements of others and feeling genuinely happy at their accomplishments are sterling virtues of her immaculate character.",
  },
];

const TestimonialSection = () => {
  return (
    <Container sx={{ mb: 6 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 700,
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        Testimonials
      </Typography>
      <Grid container justifyContent="center" spacing={4}>
        {testimonialsData.map((testimonial) => (
          <Grid item xs={12} md={6} key={testimonial.id}>
            <Paper
              sx={{
                padding: "24px",
                borderRadius: "12px",
                margin: "10px",
                minHeight: "490px",
                border: "2px solid #3f51b5", // Thicker, more visible border with a pleasant blue color
                backgroundColor: "#ffffff", // Bright white background
                boxShadow: "0px 4px 20px rgba(63, 81, 181, 0.15)", // Subtle shadow with a blue tint
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 6px 25px rgba(63, 81, 181, 0.25)", // Enhanced shadow on hover
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  height={80}
                  width={80}
                  style={{ borderRadius: "50%", marginRight: "20px", border: "2px solid #3f51b5" }}
                />
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "#3f51b5", // Matching blue color for the name
                  }}
                >
                  {testimonial.name}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                fontSize={16}
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  lineHeight: 1.7,
                  fontWeight: 500,
                  color: "#333333", // Slightly darker text for better contrast on white
                }}
              >
                {testimonial.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TestimonialSection;