import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { removeFromLS } from "../../../public/Utilitys/localStroage";

const ChosseGallary = ({ display }) => {
  const { id, title, banner, description } = display;

  const handleDelete = (id) => {
    removeFromLS(id);
  };

  return (
    <div className=" py-2 relative  rounded-lg gap-4 md:items-center lg:items-start mb-[270px]  md:mb-[200px] ">
      <div className="overflow-hidden cursor-pointer">
        <img
          className="transition-all duration-500 hover:scale-110 "
          src={banner}
          alt=""
        />
      </div>
      <div className=" bg-slate-100 bg-opacity-50 backdrop-blur-sm absolute rounded text-black border -mt-[85px]  mx-4 p-2">
        <div className="text-start pb-3 ">
          <h1 className=" tracking-widest underline underline-offset-2 pb-2 text-black font-bold">
            {title}
          </h1>
          <h1 className="text-red-800">{description.slice(0, 300)}</h1>
          <div className="mt-7 flex justify-between  ">
            <Link
              to={`/detailChosse/${id}`}
              className="text-center text-black "
            >
              <h1 className=" hover:translate-x-6 duration-500 hover:text-textColorSky500  flex items-center">
                {" "}
                Read More <MdOutlineKeyboardArrowRight className="text-2xl" />
              </h1>
            </Link>
            <button
              className="flex items-center gap-2"
              onClick={() => handleDelete(id)}
            >
              <p className="hover:text-red-400"> Detele</p>
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChosseGallary;
