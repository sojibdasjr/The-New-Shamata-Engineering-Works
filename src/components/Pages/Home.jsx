import React from "react";
import Slider from "../HomePageComponents/Slider";
import AboutCompany from "../HomePageComponents/AboutCompany";
import AboutFounder from "../HomePageComponents/AboutFounder";
import CompaniesProfile from "../HomePageComponents/CompaniesProfile";
import ProjectWork from "../HomePageComponents/ProjectWork";
import BoardDirectors from "../HomePageComponents/BoardDirectors";

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="bg-white pb-16">
        <AboutCompany />
      </div>
      <div className="bg-black ">
        <AboutFounder />
      </div>
      <div className="bg-white ">
        <CompaniesProfile />
      </div>
      <div className="bg-barandBgSky400 ">
        <ProjectWork />
      </div>
      <div className="bg-white pt-16">
        <BoardDirectors />
      </div>
    </div>
  );
};

export default Home;
