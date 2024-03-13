import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ChosseGallary = ({ display }) => {
  const { id, title, banner, image1, description } = display;
  return (
    <div className=" py-2 relative  rounded-lg gap-4 md:items-center lg:items-start mb-[270px]  md:mb-[200px] ">
      <div className="overflow-hidden cursor-pointer">
        <img
          className="transition-all duration-500 hover:scale-110 "
          src={banner}
          alt=""
        />
      </div>
      <div className=" bg-slate-200 bg-opacity-50 backdrop-blur-sm absolute rounded text-black border -mt-[85px]  mx-4 p-2">
        <div className="text-start pb-3 ">
          <h1 className=" tracking-widest underline underline-offset-2 pb-2 text-black font-bold">
            {title}
          </h1>
          <h1 className="text-yellow-800">{description.slice(0, 300)}</h1>
          <div className="mt-7  ">
            <Link
              to={`/detailChosse/${id}`}
              className="text-center text-black "
            >
              <h1 className=" hover:translate-x-3 duration-500 hover:text-textColorSky500  flex items-center">
                {" "}
                Read More <MdOutlineKeyboardArrowRight className="text-2xl" />
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChosseGallary;
