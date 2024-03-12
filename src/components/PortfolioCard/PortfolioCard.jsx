import React from "react";
import { Link } from "react-router-dom";

const PortfolioCard = ({ portfolio }) => {
  const { id, title, image1 } = portfolio;
  return (
    <Link
      to={`/portfolioDetails/${id}`}
      data-aos="fade-up"
      className="text-center"
    >
      <img src={image1} alt="" />
      <small className="pt-2 tracking-widest text-textColorSky500">
        {title}
      </small>
    </Link>
  );
};

export default PortfolioCard;
