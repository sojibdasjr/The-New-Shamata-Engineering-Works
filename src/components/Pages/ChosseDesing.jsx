import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getDesignFromLS } from "../../../public/Utilitys/localStroage";
import ChosseGallary from "./ChosseGallary";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";

const ChosseDesing = () => {
  const [displayDesing, setDisplayDesing] = useState([]);
  const allDesign = useLoaderData();
  const desings = allDesign.items;

  useEffect(() => {
    const chosseDesign = getDesignFromLS();
    if (desings.length > 0) {
      const likeDesing = desings.filter((desing) =>
        chosseDesign.includes(desing.id)
      );
      setDisplayDesing(likeDesing);
    }
  }, [displayDesing]);

  return (
    <div className="bg-white">
      <div className="lg:max-w-7xl lg:mx-auto mx-4  min-h-screen  pt-[66px] ">
        <div className="flex justify-between">
          <Link to="/portfolio" className="me-2">
            <h1 className="flex items-center gap-3 text-red-400 border px-5 py-2 rounded">
              GO BACK <MdOutlineSubdirectoryArrowLeft className="text-2xl" />
            </h1>
          </Link>
          <h1 className="py-2 text-yellow-400 bg-black inline-block p-2">
            You have Chossed Desing Quantity : {displayDesing.length}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
          {displayDesing.map((display) => (
            <ChosseGallary key={display.id} display={display} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChosseDesing;
