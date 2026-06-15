import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const TestimonialsManagement = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Dr. Monsi George",
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

  return (
    <Box sx={{ pt: { xs: "120px", md: "150px" }, pb: { xs: 8, md: 12 }, position: "relative", overflow: "hidden" }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <span className="section-eyebrow">Testimonials</span>
          <Typography className="section-title" sx={{ mt: 2 }}>
            Trusted by mentors &amp; <span className="accent">leaders</span>
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonialsData.map((t) => (
            <Grid item xs={12} key={t.id}>
              <Box
                sx={{
                  position: "relative",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-line)",
                  borderRadius: "24px",
                  p: { xs: 4, md: 5 },
                  boxShadow: "var(--shadow-md)",
                  overflow: "hidden",
                  transition: "transform .4s var(--ease-out), box-shadow .4s var(--ease-out)",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "var(--shadow-lg)",
                  },
                }}
              >
                <FormatQuoteIcon
                  sx={{
                    position: "absolute",
                    top: 20,
                    right: 24,
                    fontSize: 90,
                    color: "var(--color-primary-50)",
                    transform: "scaleX(-1)",
                    zIndex: 0,
                  }}
                />
                <Box sx={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: 3, mb: 3 }}>
                  <Box
                    sx={{
                      width: 88,
                      height: 88,
                      borderRadius: "50%",
                      padding: "3px",
                      background: "var(--grad-aurora)",
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      component="img"
                      src={t.img}
                      alt={t.name}
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "3px solid #fff",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 700,
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                      color: "var(--color-ink)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {t.name}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontSize: "15.5px",
                    color: "var(--color-ink-soft)",
                    lineHeight: 1.85,
                    fontWeight: 400,
                  }}
                >
                  {t.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsManagement;
