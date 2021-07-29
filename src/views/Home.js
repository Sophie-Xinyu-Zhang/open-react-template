import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import AboutTheProgram from "../components/sections/AboutTheProgram";
import WhoAreWe from "../components/sections/WhoAreWe";
import Testimonial from "../components/sections/Testimonial";
import TargetAudience from "../components/sections/TargetAudience";
import TimeLine from "../components/sections/Timeline";
import Cta from "../components/sections/Cta";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <AboutTheProgram />
      <WhoAreWe
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <TargetAudience />
      <TimeLine />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
};

export default Home;
