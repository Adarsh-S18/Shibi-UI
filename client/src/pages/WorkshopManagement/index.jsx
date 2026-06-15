import React, { useEffect, useState } from "react";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import { Box, Container, Grid, Typography } from "@mui/material";
import WorkshopDetails from "./containers/WorkshopDetails";
import { baseURL } from "../../config/common";
import { useHistory, useLocation } from "react-router-dom";

const WorkshopManagement = () => {
  const [detailsView, setDetailsView] = useState(false);
  const [workshopDetails, setWorkshopDetails] = useState([]);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchWorkshops();
  }, []);

  useEffect(() => {
    const pathArray = location.pathname.split('/');
    if (pathArray[1] === "workshops" && pathArray[2]) {
      const workshopId = pathArray[2];
      const workshop = workshopDetails.find(w => w._id === workshopId);
      if (workshop) {
        setSelectedWorkshop(workshop);
        setDetailsView(true);
      }
    } else {
      setDetailsView(false);
    }
  }, [location, workshopDetails]);

  const fetchWorkshops = async () => {
    try {
      const response = await fetch(`${baseURL}/api/workshops/get-workshops`);
      const data = await response.json();
      setWorkshopDetails(data);
    } catch (error) {
      console.error("Error fetching workshops:", error);
    }
  };

  const detailsViewRedirect = (workshop) => {
    setSelectedWorkshop(workshop);
    setDetailsView(true);
    history.push(`/workshops/${workshop._id}`);
  };

  if (detailsView) {
    return (
      <Box sx={{ pt: { xs: "110px", md: "130px" }, pb: { xs: 6, md: 10 } }}>
        <WorkshopDetails workshop={selectedWorkshop} />
      </Box>
    );
  }

  return (
    <Box sx={{ pt: { xs: "120px", md: "150px" }, pb: { xs: 8, md: 12 }, position: "relative", overflow: "hidden" }}>
      <Box
        aria-hidden
        className="bg-decor"
        sx={{
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "radial-gradient(circle, #9C6AE0 0%, transparent 70%)",
          top: 40,
          right: -140,
          opacity: 0.25,
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <span className="section-eyebrow">Workshops</span>
          <Typography className="section-title" sx={{ mt: 2 }}>
            Hands-on programs that <span className="accent">spark change</span>
          </Typography>
          <Typography className="section-subtitle">
            Explore a curated catalog of workshops designed for educators,
            students and leaders ready to grow.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {workshopDetails
            .slice()
            .reverse()
            .map((workshop) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={workshop._id}>
                <DetailsCard
                  name={workshop.name}
                  description={workshop.description}
                  image={workshop?.images}
                  redirectTo={() => detailsViewRedirect(workshop)}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WorkshopManagement;
