import React from "react";
import { GiHouse } from "react-icons/gi";
import { GiAchievement } from "react-icons/gi";
import { MdGroups } from "react-icons/md";
import { RiCommunityFill } from "react-icons/ri";

const AboutCompany = () => {
  return (
    <div className="md:max-w-7xl md:mx-auto  mx-2 ">
      {/* text */}
      <div className="py-5   text-center">
        <p className="text-black my-5">All you need to know</p>
        <h1 className="text-2xl text-black ">
          About{" "}
          <span className="text-textColorSky500">
            The New Shamata Engineering Works
          </span>
        </h1>
      </div>

      {/* box */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5 mx-2 cursor-pointer ">
        <div className=" border-2 rounded-md border-textColorSky500   ">
          <div className=" flex flex- justify-center text-7xl text-textColorSky500 my-2 ">
            <GiHouse />
          </div>
          <div className="text-center">
            <h1 className="pb-5 text-black font-semibold">Since</h1>
            <h1 className="text-2xl text-black font-bold">2010</h1>
          </div>
        </div>

        <div className=" border-2 rounded-md border-textColorSky500 ">
          <div className=" flex flex- justify-center text-7xl text-textColorSky500 my-2 ">
            <RiCommunityFill />
          </div>
          <div className="text-center">
            <h1 className="pb-5 text-black font-semibold">Units</h1>
            <h1 className="text-2xl text-black font-bold">15</h1>
          </div>
        </div>

        <div className=" border-2 rounded-md border-textColorSky500 ">
          <div className=" flex flex- justify-center text-7xl text-textColorSky500 my-2 ">
            <MdGroups />
          </div>
          <div className="text-center">
            <h1 className="pb-5 text-black font-semibold">Employess</h1>
            <h1 className="text-2xl text-black font-bold">125</h1>
          </div>
        </div>

        <div className=" border-2 rounded-md border-textColorSky500 ">
          <div className=" flex flex- justify-center text-7xl text-textColorSky500 my-2 ">
            <GiAchievement />
          </div>
          <div className="text-center">
            <h1 className="pb-5 text-black font-semibold">Achievements</h1>
            <h1 className="text-2xl text-black font-bold">7</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
