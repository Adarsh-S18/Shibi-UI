/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ServiceSection = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "70px",
          marginBottom: "60px",
          fontFamily: "sans-serif",
        }}
      >
        What do we provide?
      </h1>
      <Grid container spacing={2} mb={6}>
        <Grid item xs={6}>
          <Item>
            <Typography
              sx={{
                fontSize: "21px",
                fontWeight: "600",
                color: "goldenrod",
                fontFamily: "sans-serif",
              }}
              mb={3}
            >
              WORKSHOPS
            </Typography>
            <Typography sx={{ margin: "10px" , color: 'black'}}>
              Consultation is a process based on a plan-do-review framework. It
              works at the individual, group and whole school level. It is a
              solution focussed process which aims for agreed actions. It is
              collaborative and is inclusive of teachers, parents and pupils.
            </Typography>
            <img
              src="https://img.freepik.com/free-vector/model-posing-art-workshop_74855-5273.jpg?w=1060&t=st=1711466204~exp=1711466804~hmac=159fb05708bf506a4ec067570b3875008d29bf77f6f5c83f583de5c7d28c3c57"
              width={490}
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Typography
              sx={{
                fontSize: "21px",
                fontWeight: "600",
                color: "goldenrod",
                fontFamily: "sans-serif",
              }}
              mb={3}
            >
              TEACHER MENTORING
            </Typography>
            <Typography sx={{ margin: "10px", color: 'black' }}>
              Consultation is a process based on a plan-do-review framework. It
              works at the individual, group and whole school level. It is a
              solution focussed process which aims for agreed actions. It is
              collaborative and is inclusive of teachers, parents and pupils.
            </Typography>
            <img
              src="https://img.freepik.com/free-vector/coach-speaking-before-audience-mentor-presenting-charts-reports-employees-meeting-business-training-seminar-conference-vector-illustration-presentation-lecture-education_74855-8294.jpg?t=st=1711466263~exp=1711469863~hmac=837d7333b53a90bc433fd027cb158af5f29519ce5a77f82f7344000272690223&w=900"
              width={390}
            />
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default ServiceSection;
