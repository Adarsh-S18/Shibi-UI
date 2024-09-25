import React, { useEffect, useState } from "react";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import { Grid } from "@mui/material";
import WorkshopDetails from "./containers/WorkshopDetails";
import { baseURL } from "../../config/common";
import { useHistory, useLocation } from "react-router-dom";

const WorkshopManagement = () => {
  const [detailsView, setDetailsView] = useState(false);
  const [workshopDetails, setWorkshopDetails] = useState([]);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null); // Track selected workshop
  const history = useHistory();
  const location = useLocation(); // Get current location

  useEffect(() => {
    fetchWorkshops();
  }, []);

  useEffect(() => {
    // Check the URL path to determine the view state
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
    history.push(`/workshops/${workshop._id}`); // Update URL
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
          <Grid item xs={12}>
            <WorkshopDetails workshop={selectedWorkshop} />
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          spacing={2}
          padding={5}
          sx={{ marginTop: "8rem", marginBottom: "8rem" }}
        >
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
      )}
    </>
  );
};

export default WorkshopManagement;
