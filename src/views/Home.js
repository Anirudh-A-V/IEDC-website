import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Achievements from "../components/sections/Achievements";
import UpcomingEvents from "../components/sections/UpcomingEvents";
import Cta from "../components/sections/Cta";
import Gallery from "../components/sections/gallery";
import Team from "../components/sections/Team";
import Announcements from "../components/sections/Announcements";
import INOPoints from "../components/sections/INOPoints";
const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <UpcomingEvents topDivider />
      <Announcements topDivider />
      <Achievements topDivider />
      <INOPoints topDivider />
      <Gallery topDivider />
      <Team topDivider />
      <Cta split />
    </>
  );
};

export default Home;
