import { Grid, Typography } from "@mui/material";
import React from "react";

const WorkshopDetails = () => {
  const containerStyle = {
    position: "relative",
    marginTop: '20px',
    height: "20vh",
    overflow: "hidden",
  };

  const imageStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(https://img.freepik.com/free-photo/diversity-teenager-team-seminar-training-education-concept_53876-146866.jpg?t=st=1711273986~exp=1711277586~hmac=be1a0bacb40ba03d3154a7cd95e1ae3313bb2250485ef749f695fefa29bff254&w=1060)", // Add your image URL here
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.9)", // Adjust the brightness for better contrast with text
  };

  const contentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
    zIndex: 1,
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "3rem",
    marginBottom: "20px",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)", // Add text shadow for better visibility
  };

  const galleryImages = [
    "https://static.library.ucla.edu/craftassetsprod/images/_fullscreen/Workshop-Example.jpg",
    "data:image/jpeg;base64,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",
    "https://stevespangler.com/wp-content/uploads/2020/02/48936344253_4009216a53_k-e1581348404823.jpg",
    "https://www.tomorrowsworldtoday.com/wp-content/uploads/2022/01/image1-25.jpg",
    "https://media.licdn.com/dms/image/C4D12AQHzBREYqshMxg/article-cover_image-shrink_720_1280/0/1571810472849?e=2147483647&v=beta&t=GrlowuDRtnOiczvI0dBbJ9virbhjIxmCKxZqvPNeGbI",
    "https://cache.careers360.mobi/media/presets/860X430/article_images/2022/3/11/7-Art-Workshops-For-Children-And-Grown-Ups.jpg",
    "https://static.library.ucla.edu/craftassetsprod/images/_fullscreen/Workshop-Example.jpg",
    // Add more image URLs as needed
  ];

  return (
    <>
      <div style={containerStyle} >
        <div style={imageStyle}></div>
        <div style={contentStyle}>
          <h1 style={headingStyle}>AI WORKSHOP</h1>
        </div>
      </div>
      <div>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid
            item
            xs={12}
            mt={6}
            sx={{
              marginBottom: "30px",
              marginLeft: "150px",
              marginRight: "150px",
            }}
          >
            <Typography fontSize={18}>
              In this day-long instructor-led workshop, participants will be
              introduced to the fundamentals of data science theory, tools, and
              practice. This course is suitable for anyone with basic computer
              skills; some knowledge of code and statistics is a bonus, and this
              will only enhance your experience of the course. The workshop
              begins with an introduction to the concept of artificial
              intelligence (AI). Students learn about the basic principles of
              AI, including what it is, how it works, and its various
              applications in today's world. This introductory session sets the
              stage for deeper exploration into the field.Hands-On Activities:
              The core of the workshop involves hands-on activities where
              students get to interact with AI technologies firsthand. These
              activities can include: Programming Basics: Students are
              introduced to programming languages commonly used in AI
              development, such as Python. They learn basic programming concepts
              through interactive exercises and coding challenges. Machine
              Learning Demos: Participants engage in interactive demonstrations
              of machine learning algorithms. They may train simple models to
              recognize patterns in data or classify objects based on predefined
              criteria. AI Projects: Students work on mini-projects that
              demonstrate practical applications of AI. These projects could
              involve building chatbots, image recognition systems, or simple
              recommendation engines.
            </Typography>
            {/* Additional content in the form of a numbered list */}
            <div>
              <Typography variant="h6" fontWeight={600} mt={6} mb={2}>
                {" "}
                Here are some additional points covered in the workshop:
              </Typography>
              <Typography fontSize={18} mt={6}>
                <ol style={{ columns: "2" }}>
                  <li>Introduction to AI concepts and terminology.</li>
                  <li>Understanding the role of data in AI applications.</li>
                  <li>
                    Exploring real-world case studies of AI implementation.
                  </li>
                  <li>Hands-on experience with AI tools and platforms.</li>
                  <li>
                    Discussion on the ethical implications of AI technology.
                  </li>
                  <li style={{ breakInside: "avoid-column" }}>
                    Introduction to AI concepts and terminology.
                  </li>
                  <li style={{ breakInside: "avoid-column" }}>
                    Introduction to AI concepts and terminology.
                  </li>
                  {/* Add more additional points as needed */}
                </ol>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
      <div style={{ margin: "30px" }}>
        <Typography
          fontSize={30}
          fontWeight={700}
          mt={2}
          mb={4}
          sx={{ textAlign: "center" }}
         
        >
          Gallery
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {galleryImages.map((image, index) => (
            <Grid item xs={6} md={3} key={index}>
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default WorkshopDetails;
