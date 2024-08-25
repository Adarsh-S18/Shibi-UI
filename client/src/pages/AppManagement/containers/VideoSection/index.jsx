import { Box, Button, Grid } from "@mui/material";
import React from "react";

const VideoSection = () => {
  return (
    <Box sx={{
      flexGrow: 1,
      background: "#f4d03f",
      textAlign: "center",
      color: "black",
      fontSize: "22px",
      fontWeight: 600,
      padding: "30px",
      borderRadius: '20px'
    }}>
      <Grid
        container
        spacing={2}
      >
        <Grid item xs={8} sx={{ textAlign: "center", marginTop: '10px' }}>
          Take a deep dive into some of my daily vlogs packed with information!
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            href="/vlogs"
            color="secondary"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            sx={{
              borderRadius: "25px",
              padding: "15px 30px",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "orange",
              },
            }}
          >
            Check Out
          </Button>
        </Grid>
      </Grid>
    </Box>
    // <Grid
    //   item
    //   xs={12}
    //   md={12}
    //   sx={{
    //     backgroundColor: "red",
    //     margin: "20px",
    //     textAlign: "center",
    //     borderRadius: "10px",
    //   }}
    // >
    //   <Grid item xs={8}>
    //     <Item>xs=8</Item>
    //   </Grid>
    //   <Grid item xs={4}>
    //     <Item>xs=4</Item>
    //   </Grid>
    //   {/* <Grid sx={{ padding: "10px" }} xs={8} md={8}>
    //     Have a look into some informative vlogs!
    //   </Grid>
    //   <Grid xs={3} md={3}>
    //     <Button>Check out</Button>
    //   </Grid> */}
    // </Grid>
    // <>
    /* <h1
        style={{ textAlign: "center", marginTop: "30px", marginBottom: "30px" }}
      >
        Testimonials
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <iframe
            width="500"
            height="300"
            src="https://www.youtube.com/embed/irLeMeF3u1A?si=yJaHBteMmbgp9YAU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Grid>
        <Grid item xs={4}>
          <iframe
            width="500"
            height="300"
            src="https://www.youtube.com/embed/auTqZHCCtYw?si=MzlqAwEsjoCEW_ia"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Grid>
        <Grid item xs={4}>
          <iframe
            width="500"
            height="300"
            src="https://www.youtube.com/embed/wV49o69vito?si=HTBRlMpv6Jrj9Veb"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Grid>
      </Grid>
    </> */
  );
};

export default VideoSection;
