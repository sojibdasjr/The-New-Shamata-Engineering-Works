import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import GalleryItem from "../GalleryItem/GalleryItem";
import { CiMenuFries } from "react-icons/ci";

const ImageGallery = () => {
  const allData = useLoaderData();
  const loadData = allData.items;
  const [selectedCategory, setSelectedCategory] = useState("");
  const category = ["Dine In Room", "Living Room", "Washroom", "Kitchen"]; //bannan vul kora jabe na json file a je category name ace same name dite hobe
  return (
    <div className="bg-white">
      <div className="lg:max-w-7xl lg:mx-auto mx-4  pt-[66px]">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className=" flex items-center gap-2 border border-barandBgSky400 text-black  py-1 px-5 "
          >
            <CiMenuFries className="text-1xl " /> Choose Category
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow border-2 m-3 backdrop-blur-lg w-52"
          >
            <li>
              <button
                onClick={() => setSelectedCategory("")}
                className="   py-3 px-5 my-2 shadow-lg hover:scale-110 duration-300 border-y-2 hover:bg-sky-100 hover:bg-opacity-25 rounded-md text-black hover:text-sky-500 hover:tracking-widest   "
              >
                Show ALL
              </button>
            </li>
            {category.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => setSelectedCategory(item)}
                  className="border-y-2 hover:bg-sky-100 hover:bg-opacity-25 rounded-md text-black py-3 px-5 my-2    shadow-lg hover:scale-110 duration-300 hover:text-sky-500 hover:tracking-widest   "
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {/* category div */}
          <div className=" flex  justify-start mb-2  "></div>
          {/* renderdiv */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {selectedCategory === ""
              ? loadData.map((items, index) => (
                  <GalleryItem key={index} items={items}></GalleryItem>
                ))
              : loadData
                  .filter(
                    (item) =>
                      item.category.toLowerCase() ===
                      selectedCategory.toLocaleLowerCase()
                  )
                  .map((items, index) => (
                    <GalleryItem key={index} items={items}></GalleryItem>
                  ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
