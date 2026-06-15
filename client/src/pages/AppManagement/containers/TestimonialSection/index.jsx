import React from "react";
import { Typography, Container, Grid, Box } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const testimonialsData = [
  {
    id: 1,
    name: "Dr. Monsi George",
    desc: "Mentor and Ex-Principal, Excelsior English School",
    img: "/test1.jpeg",
    text: "In an ever-expanding world of choices and possibilities,  what anyone aspiring for higher prospects needs is a well-informed mentor. Ms. Shibi Anand is such a person. She was one of the most proactive educational leaders with whom I had the privilege of working. She kept herself informed of career options and researched into the acquisition of skills and attitudes that would make her students and other mentees attain those. As an educational counselor,  Ms. Shibi is highly motivated and committed to the total well-being of her mentees. I am confident that she will not spare any effort to decipher the needs and potentials of her mentees and guide them to greater heights.",
  },
  {
    id: 2,
    name: "Dr. N Ajith Kumar",
    desc: "Mentor and Well Wisher",
    img: "/test2.jpeg",
    text: "In my fairly short association with her I have found her to be a bundle full of energy. She is one of the most proactive educational leaders I have had the occasion to associate with. Ready to take up any challenge and work really hard to make a mark in whatever she does is the hallmark of her character. For Shibi education is a religion and she is definitely destined to be a high priest in this field in the years to come. Modest to the core her willingness to learn despite being an authority in many areas shows her humility as an individual. A happy combination of beauty and brains her capacity to appreciate the achievements of others and feeling genuinely happy at their accomplishments are sterling virtues of her immaculate character.",
  },
  {
    id: 3,
    name: "Rohitha Elizabeth Varghese",
    desc: "Sustainble Designer, Art Storyteller, Founder - Kriyations.in",
    img: "/test3.jpeg",
    text: `N'Ablebyshibianand provided me with an incredible opportunity to showcase the talents I’ve honed over the past 28 years. While I’ve done several shows across various regions, this particular show "FEEL THE INNER ARTIST" in Kottayam, Kerala, truly stood out. The response from the audience was overwhelming, and through this event, my work was not only appreciated but embraced in a way that made me feel truly recognized and valued.Shibi’s unwavering dedication and remarkable ability to organize such a powerful and impactful event in such a short time are nothing short of extraordinary. Her passion for supporting and uplifting others is inspiring, and I deeply admire the energy and heart she puts into every endeavor. I wish her nothing but the best in her future ventures and have no doubt that she will continue to empower and elevate many more talented individuals, just as she has done for me.`,
  },
  {
    id: 4,
    name: "Rebecca Baby Ipe",
    desc: "Mentor and Educational Leader",
    img: "/tsti4.jpeg",
    text: `An Educator with over two decades in education in the capacity of Teacher, Administrator and Trainer .Shibi Anand, is an extraordinary woman brimming with competencies, common sense, confidence and compassion. Shibi has an adventurous spirit, loves challenges and tries unchartered waters, offering guidance and inspiration but with an open mind ever so willing to learn from others - all qualities that make her a good leader and a great team player. I am impressed by her vision, thought process and objective assessment of experiences seeing the positive and suggesting proactive measures where she finds room for improvement. Shibi Anand has courage of conviction standing on a base of solid varied experiences but is not rigid. In her portfolio, technology and creativity, imagination and practicality, are well balanced. Her willingness to constantly upscale her skills and enhance her outlook inspire. I wish Shibi the very best as she forges ahead in her varied roles as Trainer, Motivator, Counselor, Mentor and of course Teacher.`,
  },
];

const TestimonialSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, transparent 0%, var(--color-surface-tint) 100%)",
        pb: { xs: 6, md: 10 },
        pt: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <span className="section-eyebrow">Voices</span>
          <Typography className="section-title" sx={{ mt: 2 }}>
            Words from those we've <span className="accent">walked with</span>
          </Typography>
          <Typography className="section-subtitle">
            Real reflections from mentors, collaborators and friends who've
            experienced the N'Able journey.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonialsData.map((testimonial) => (
            <Grid item xs={12} md={6} key={testimonial.id}>
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  background: "var(--color-surface)",
                  padding: { xs: "28px", md: "36px" },
                  borderRadius: "24px",
                  border: "1px solid var(--color-line)",
                  boxShadow: "var(--shadow-md)",
                  transition: "transform .45s var(--ease-out), box-shadow .45s var(--ease-out)",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "var(--shadow-lg)",
                  },
                }}
              >
                <FormatQuoteIcon
                  sx={{
                    position: "absolute",
                    top: 18,
                    right: 22,
                    fontSize: 80,
                    color: "var(--color-primary-50)",
                    transform: "scaleX(-1)",
                    zIndex: 0,
                  }}
                />

                <Box sx={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", mb: 3 }}>
                  <Box
                    sx={{
                      width: 76,
                      height: 76,
                      borderRadius: "50%",
                      padding: "3px",
                      background: "var(--grad-aurora)",
                      mr: 2.5,
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      component="img"
                      src={testimonial.img}
                      alt={testimonial.name}
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "3px solid #fff",
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Sora, sans-serif",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        color: "var(--color-ink)",
                        lineHeight: 1.3,
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        fontSize: "13.5px",
                        color: "var(--color-muted)",
                        fontWeight: 500,
                        mt: 0.5,
                        lineHeight: 1.4,
                      }}
                    >
                      {testimonial.desc}
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    lineHeight: 1.8,
                    fontWeight: 400,
                    fontSize: "15px",
                    color: "var(--color-ink-soft)",
                  }}
                >
                  {testimonial.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialSection;
