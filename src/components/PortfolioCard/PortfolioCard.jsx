import React from "react";

const PortfolioCard = ({ portfolio }) => {
  const { id, title, image1 } = portfolio;
  return (
    <div data-aos="fade-up" className="text-center">
      <img src={image1} alt="" />
      <small className="pt-2">{title}</small>
    </div>
  );
};

export default PortfolioCard;
