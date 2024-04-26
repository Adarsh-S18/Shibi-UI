import React from "react";
import HeaderSection from "./containers/Header";
import ExploreSection from "./containers/ExploreBox";
import ServiceSection from "./containers/ServiceSection";
import TestimonialSection from "./containers/TestimonialSection";

const AppManagement = () => {
  return (
    <div>
      <>
        <HeaderSection />
        <ExploreSection />
        <ServiceSection />
        <TestimonialSection />
      </>
    </div>
  );
};

export default AppManagement;
