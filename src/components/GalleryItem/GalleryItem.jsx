import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgZoom from "lightgallery/plugins/zoom";
import { Link } from "react-router-dom";

const GalleryItem = ({ items }) => {
  const { image1, image2, image4 } = items;
  return (
    <>
      <LightGallery data-aos="fade-up" speed={500} plugins={[lgZoom]}>
        <Link to={image1}>
          <img alt="" src={image1} />
        </Link>
      </LightGallery>
      <LightGallery data-aos="fade-up" speed={500} plugins={[lgZoom]}>
        <Link to={image2}>
          <img alt="" src={image2} />
        </Link>
      </LightGallery>
      <LightGallery data-aos="fade-up" speed={500} plugins={[lgZoom]}>
        <Link to={image4}>
          <img alt="" src={image4} />
        </Link>
      </LightGallery>
    </>
  );
};

export default GalleryItem;
