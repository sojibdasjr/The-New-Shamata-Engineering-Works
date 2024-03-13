import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DetailChosse = () => {
  const loaderData = useLoaderData();
  const loadAllData = loaderData.items;
  const { id } = useParams();
  const newId = parseInt(id);
  const newItem = loadAllData.find((item) => item.id === newId);
  const { title, banner, banner2, image1, image2, image4, description } =
    newItem;

  return (
    <div className="bg-white text-black pt-6 ">
      <div className="lg:max-w-7xl lg:mx-auto mx-4  py-16">
        <div className="grid grid-cols-3 gap-4">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DetailChosse;
