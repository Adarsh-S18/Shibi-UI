import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../config/common";

const VlogsManagement = () => {
  const [vlogs, setVlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVlogs();
  }, []);

  const fetchVlogs = async () => {
    try {
      const response = await fetch(`${baseURL}/api/vlogs/get-vlogs`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setVlogs(data);
    } catch (error) {
      console.error("Error fetching vlogs:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 2,
        marginTop: "90px",
      }}
    >
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: 700,
          textAlign: "center",
          fontFamily: "Montserrat, sans-serif",
          marginTop: "20px",
          marginBottom: "30px",
        }}
      >
        Vlogs
      </Typography>
      {loading ? ( // Show loader while loading
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={2}>
          {vlogs.map((vlog) => (
            <Grid item xs={12} sm={6} md={3} key={vlog?._id}>
              <iframe
                width="100%"
                height="240"
                src={vlog?.link}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default VlogsManagement;
