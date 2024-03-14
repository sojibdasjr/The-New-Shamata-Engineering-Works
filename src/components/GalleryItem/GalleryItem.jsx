import React from "react";

const GalleryItem = ({ items }) => {
  const { image1, image2, image4 } = items;
  return (
    <>
      <img data-aos="zoom-out-up" src={image1} alt="" />
      <img data-aos="zoom-in-right" src={image2} alt="" />

      <img data-aos="zoom-in-down" src={image4} alt="" />
    </>
  );
};

export default GalleryItem;
