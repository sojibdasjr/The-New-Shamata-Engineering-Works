import React from "react";
import Slider from "../HomePageComponents/Slider";
import AboutCompany from "../HomePageComponents/AboutCompany";

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="bg-white">
        <AboutCompany />
      </div>
    </div>
  );
};

export default Home;
