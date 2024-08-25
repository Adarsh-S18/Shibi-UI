import React, { useState } from "react";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import { Grid } from "@mui/material";
import WorkshopDetails from "./containers/WorkshopDetails";

const WorkshopManagement = () => {
  const [detailsView, setdetailsView] = useState(false);
  console.log(detailsView);
  const detailsViewRedirect = () => {
    setdetailsView(true);
  };

  return (
    <>
      {detailsView ? (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <WorkshopDetails />
        </Grid>
      ) : (
        <Grid container spacing={2} sx={{ margin: "2rem" }}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <DetailsCard redirectTo={detailsViewRedirect} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default WorkshopManagement;
