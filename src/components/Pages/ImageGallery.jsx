import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import GalleryItem from "../GalleryItem/GalleryItem";

const ImageGallery = () => {
  const allData = useLoaderData();
  const loadData = allData.items;
  const [selectedCategory, setSelectedCategory] = useState("");
  const category = ["Dine In Room", "Living Room", "Washroom", "Kitchen"]; //bannan vul kora jabe na json file a je category name ace same name dite hobe
  return (
    <div className="bg-white">
      <div className="lg:max-w-7xl lg:mx-auto mx-4  pt-[66px]">
        <div>
          {/* category div */}
          <div className=" flex  justify-start mb-2  ">
            <button
              onClick={() => setSelectedCategory("")}
              className="bg-barandBgSky400  py-3 px-5 my-2 shadow-lg hover:scale-110 duration-300 hover:bg-green-200 rounded-md text-black me-2 "
            >
              Show ALL
            </button>
            {category.map((item, idx) => (
              <div key={idx} className=" px-2 ">
                <button
                  onClick={() => setSelectedCategory(item)}
                  className="bg-barandBgSky400 py-3 px-5 my-2 rounded-md text-black  shadow-lg hover:scale-110 duration-300 hover:bg-green-200  "
                >
                  {item}
                </button>
              </div>
            ))}
          </div>
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
