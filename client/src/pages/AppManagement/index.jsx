import React from "react";
// import HeaderSection from "./containers/Header";
import ExploreSection from "./containers/ExploreBox";
import ServiceSection from "./containers/ServiceSection";
import TestimonialSection from "./containers/TestimonialSection";
import HomeSlider from "./containers/HomeSlider";

const AppManagement = () => {
  return (
    <div>
      <>
      <HomeSlider/>
        {/* <HeaderSection /> */}
        <ExploreSection />
        <ServiceSection />
        <TestimonialSection />
      </>
    </div>
  );
};

export default AppManagement;
