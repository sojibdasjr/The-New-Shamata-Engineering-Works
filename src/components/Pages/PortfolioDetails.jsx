import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactCompareImage from "react-compare-image";

const PortfolioDetails = () => {
  const [isLike, setIsLike] = useState(false);
  const loaderData = useLoaderData();
  const loadAllData = loaderData.items;
  const { id } = useParams();
  const newId = parseInt(id);
  const newItem = loadAllData.find((item) => item.id === newId);

  const { title, banner, banner2, image1, image2, image4, description } =
    newItem;

  const handleLike = () => {
    setIsLike(true);
    toast.success("🦄 Chooss Successfully", {});
  };

  return (
    <div className="bg-white text-black">
      <div className="lg:max-w-7xl lg:mx-auto mx-4  py-16">
        <h1 className="tracking-widest text-textColorSky500 pb-5">{title} </h1>
        <div className="pb-10">
          <small className="font-bold">{title}</small>
          <p className="py-3 text-[15px] text-stone-400">
            As seen in : The New Shamata Engineering Works{" "}
          </p>
          <p className="text-stone-400 text-[15px]">
            Archite: Story Build Design
          </p>
          <p className="py-3 text-stone-400 text-[15px]">
            Photography: Margaret Austin Photo
          </p>
        </div>
        <div
          className="mb-5 text-5xl text-textColorSky500"
          onClick={handleLike}
        >
          {isLike ? (
            <Link>
              <AiFillLike />
            </Link>
          ) : (
            <Link>
              <BiLike />
            </Link>
          )}
        </div>
        {/* image section  */}
        <ReactCompareImage leftImage={banner} rightImage={banner2} />
        {/* <img data-aos="zoom-in-down" className="w-full" src={banner} alt="" /> */}
        <div className="md:flex gap-4 pt-5 md:pe-8">
          <img
            data-aos="fade-right"
            className="md:w-1/3 pt-1"
            src={image1}
            alt=""
          />

          <img
            data-aos="fade-down"
            className="md:w-1/3 pt-1"
            src={image2}
            alt=""
          />

          <img
            data-aos="fade-left"
            className="md:w-1/3 pt-1"
            src={image4}
            alt=""
          />
        </div>
        <div className="pt-10">
          <h1 className="underline underline-offset-4 text-textColorSky500 tracking-widest pb-2">
            About Design
          </h1>
          <p className="tracking-wide ps-2">{description}</p>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </div>
  );
};

export default PortfolioDetails;
