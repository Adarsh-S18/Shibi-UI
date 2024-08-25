import { Grid } from '@mui/material'
import React from 'react'

export default function VlogsManagement (){
    return (
        <>
          <h1
            style={{ textAlign: "center", marginTop: "30px", marginBottom: "30px" }}
          >
            Vlogs for you!
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
        </>
      );
}

