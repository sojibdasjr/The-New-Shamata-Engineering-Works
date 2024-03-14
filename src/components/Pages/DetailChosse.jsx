import React from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";

const DetailChosse = () => {
  const loaderData = useLoaderData();
  const loadAllData = loaderData.items;
  const { id } = useParams();
  const newId = parseInt(id);
  const newItem = loadAllData.find((item) => item.id === newId);
  const { title, banner, banner2, image1, image2, image4, description } =
    newItem;
  const navigate = useNavigate();

  return (
    <div className="bg-white text-black pt-[56px] ">
      <div
        className="hero h-80 "
        style={{
          backgroundImage:
            "url(https://www.jaquar.com/images/uploaded/Bedroom%20Lighting%20Ideas/Add-a-Pop-of-Colour-with-Lighting-.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>

        <div className="max-w-md text-center ">
          <p>
            {" "}
            <Link to="/" className="text-white">
              Home
            </Link>{" "}
            /Space Planning
          </p>
          <h1 className="mb-5 text-3xl font-bold">{title}</h1>
        </div>
      </div>

      <div className="lg:max-w-7xl lg:mx-auto mx-4  py-16">
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          <h1 className="flex items-center gap-3 text-red-400 border px-5 py-2 rounded">
            GO BACK <MdOutlineSubdirectoryArrowLeft className="text-2xl" />
          </h1>
        </button>
        <div className="md:flex gap-6 mt-2">
          <div data-aos="fade-right" className="md:w-1/4">
            <div className="p-5 bg-barandBgSky400 bg-opacity-10  ">
              <div className="text-2xl w-60 font-bold ">
                <h1 className="tracking-widest mb-2">All Services</h1>
              </div>
              <div className=" border-t pt-5 border-gray-300  ">
                <h1 className="bg-white py-3 mb-2 rounded ps-1 tracking-widest flex gap-4 items-center hover:bg-blue-200 hover:-translate-y-2 duration-300 cursor-pointer">
                  01. Space Planning <FaArrowRightLong />
                </h1>
                <h1 className="bg-white py-3 mb-2 rounded ps-1 tracking-widest flex gap-4 items-center hover:bg-blue-200 hover:-translate-y-2 duration-300 cursor-pointer">
                  02. Interior Desing{" "}
                </h1>
                <h1 className="bg-white py-3 mb-2 rounded ps-1 tracking-widest flex gap-4 items-center hover:bg-blue-200 hover:-translate-y-2 duration-300 cursor-pointer">
                  03. Space Planning
                </h1>
                <h1 className="bg-white py-3 rounded ps-1 tracking-widest flex gap-4 items-center hover:bg-blue-200 hover:-translate-y-2 duration-300 cursor-pointer">
                  04. Space Planning
                </h1>
                <h1 className="bg-white py-3 mb-2 rounded ps-1 tracking-widest flex gap-4 items-center hover:bg-blue-200 hover:-translate-y-2 duration-300 cursor-pointer">
                  05. Space Planning
                </h1>
                <h1 className="bg-white py-3 mb-2 rounded ps-1 tracking-widest flex gap-4 items-center hover:bg-blue-200 hover:-translate-y-2 duration-300 cursor-pointer">
                  06. Space Planning
                </h1>
              </div>
            </div>

            {/* contact page */}
            <div className="p-5 bg-barandBgSky400 bg-opacity-10 mt-10   ">
              <form>
                <div className=" w-60 ">
                  <h1 className="tracking-widest text-[14px] mb-2">Contact</h1>
                  <h1 className="tracking-wide mb-2 font-semibold">
                    Let's start new project.
                  </h1>
                </div>
                <div className=" border-t pt-5 border-gray-300  ">
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    className="input mb-2 input-bordered input-accent w-full max-w-xs bg-white"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    className="input input-bordered input-accent w-full max-w-xs bg-white"
                  />
                  <textarea
                    className="textarea textarea-success w-full h-40 bg-white mt-2"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button
                  className="py-3  bg-barandBgSky400 w-full hover:scale-110 duration-300 "
                  type="submit"
                >
                  Start Project
                </button>
              </form>
            </div>
          </div>

          <div data-aos="zoom-out-up" className="md:w-3/4">
            <img className="w-full" src={banner} alt="" />
            <h1 className="text-5xl my-5 font-semibold tracking-widest">
              {title}
            </h1>
            <h1 className="text-gray-500 text-[14px]">{description}</h1>

            <div data-aos="zoom-out-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 overflow-hidden">
                <img
                  className="hover:scale-110 duration-500 cursor-pointer"
                  src={image1}
                  alt=""
                />
                <img
                  className="hover:scale-110 duration-500 cursor-pointer"
                  src={image2}
                  alt=""
                />
              </div>
              <h1 className="text-5xl my-5 font-semibold tracking-widest">
                {title}
              </h1>
              <h1 className="text-gray-500 text-[14px]">{description}</h1>
              <h1 className="text-gray-500 text-[14px]">{description}</h1>
              <div className="flex mt-3 items-center gap-2">
                <h1 className="text-gray-500 text-[14px]">{description}</h1>
                <img className="w-60 rounded-lg" src={image4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailChosse;
