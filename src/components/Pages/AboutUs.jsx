import React from "react";

import AboutFounder from "../HomePageComponents/AboutFounder";
import AboutHero from "../HomePageComponents/AboutHero";
import AboutTeam from "../HomePageComponents/AboutTeam";

const AboutUs = () => {
  return (
    <div className="pt-6">
      <div className="bg-white">
        <AboutHero />
      </div>

      <div className="bg-white ">
        <AboutTeam />
      </div>
    </div>
  );
};

export default AboutUs;
