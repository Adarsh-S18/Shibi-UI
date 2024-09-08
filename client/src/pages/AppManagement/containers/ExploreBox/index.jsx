// import React from "react";
// import { Grid, Typography, Button } from "@mui/material";

// const ExploreSection = () => {
//   return (
//     <div
//       style={{
//         background: "linear-gradient(to right, #673AB7, #8868C1)",
//         padding: "50px",
//         marginBottom: "2rem",
//         marginTop: "1rem",
//         borderRadius: "15px",
//         color: "#fff",
//       }}
//     >
//       <Grid container spacing={2} justifyContent="center" alignItems="center">
//         <Grid item xs={12} sx={{ textAlign: "center", marginBottom: "30px" }}>
//           <Typography
//             style={{ fontFamily: "Montserrat, sans-serif" }}
//             fontSize={30}
//             fontWeight={700}
//           >
//             Navigate the evolving landscape of education with N'Able by Shibi
//             Anand –
//             <p style={{ marginTop: "10px" }}>
//               Empowering minds, Reshaping classrooms &
//             </p>
//             Seamlessly adapting to the dynamic future of learning.
//           </Typography>
//         </Grid>
//         <Grid item xs={12} sx={{ textAlign: "center" }}>
//           <Button
//             variant="contained"
//             href="/services"
//             color="warning"
//             style={{ fontFamily: "Montserrat, sans-serif" }}
//             sx={{
//               borderRadius: "25px",
//               padding: "15px 30px",
//               fontWeight: 600,
//               "&:hover": {
//                 backgroundColor: "orange",
//               },
//             }}
//           >
//             Explore Our Services
//           </Button>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default ExploreSection;

import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
const ExploreSection = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #673AB7, #8868C1)",
        padding: "50px",
        marginBottom: "2rem",
        marginTop: "1rem",
        borderRadius: "15px",
        color: "#fff",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Side: Description */}
        <Grid item xs={12} md={6}>
          <Box sx={{ paddingRight: "20px" }}>
            <Typography
              style={{ fontFamily: "Montserrat, sans-serif" }}
              fontSize={40}
              fontWeight={700}
              mb={2}
            >
              <Box display="flex" alignItems="center">
                <NewReleasesIcon
                  fontSize="50"
                  color="#ffe400"
                  style={{ marginRight: "10px", color: '#ffda46' }}
                />
                What's New!
              </Box>
            </Typography>
            <Typography
              style={{ fontFamily: "Montserrat, sans-serif" }}
              fontSize={24}
              fontWeight={600}
              mb={3}
            >
              "Check out what's new at N'Able – an exciting update awaits!"
            </Typography>
          </Box>
        </Grid>

        {/* Right Side: Video or Image */}
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/uQgN-3C29vY?si=N7RAG_DjFAGGAR9z"
            title="What's New Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              maxWidth: "100%",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
            }}
          ></iframe>
        </Grid>
      </Grid>
    </div>
  );
};

export default ExploreSection;
