import React, { useEffect, useState } from "react";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import { Grid } from "@mui/material";
import WorkshopDetails from "./containers/WorkshopDetails";
import { baseURL } from "../../config/common";

const WorkshopManagement = () => {
  const [detailsView, setdetailsView] = useState(false);
  const [workshopDetails, setWorkshopDetails] = useState([]);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null); // Track selected workshop

  useEffect(() => {
    fetchWorkshops();
  }, []);

  const fetchWorkshops = async () => {
    try {
      const response = await fetch(`${baseURL}/api/workshops/get-workshops`);
      const data = await response.json();
      setWorkshopDetails(data);
    } catch (error) {
      console.error("Error fetching workshops:", error);
    }
  };

  // Handle redirect to details view with selected workshop data
  const detailsViewRedirect = (workshop) => {
    setSelectedWorkshop(workshop); // Set selected workshop
    setdetailsView(true);
  };

  return (
    <>
      {detailsView ? (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          mt={11}
          sx={{ marginTop: "8rem" }}
        >
          <WorkshopDetails workshop={selectedWorkshop} />
        </Grid>
      ) : (
        <Grid
          container
          spacing={2}
          sx={{ marginTop: "8rem", marginBottom: "8rem" }}
        >
          {workshopDetails.map((workshop) => (
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
      )}
    </>
  );
};

export default WorkshopManagement;
