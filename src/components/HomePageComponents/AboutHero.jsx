import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgZoom from "lightgallery/plugins/zoom";

const AboutHero = () => {
  if (lgZoom === true) {
    console.log("Ok");
  }
  return (
    <div className="lg:max-w-7xl lg:mx-auto mx-4  py-16">
      <LightGallery
        speed={500}
        plugins={[lgZoom]}
        elementClassNames="flex items-center gap-4 "
      >
        <a href="https://images.squarespace-cdn.com/content/v1/5b097b4a4cde7ab1c2125706/1605310225255-L4OQQCTT0JZ392BA6TCB/cathiehong-ohlone_26.jpg?format=750w">
          <img
            alt=""
            src="https://images.squarespace-cdn.com/content/v1/5b097b4a4cde7ab1c2125706/1605310225255-L4OQQCTT0JZ392BA6TCB/cathiehong-ohlone_26.jpg?format=750w"
          />
        </a>
        <a href="https://images.squarespace-cdn.com/content/v1/5b097b4a4cde7ab1c2125706/1605310325551-NCY84U6OUC1WNSBJZ1W3/cathiehong-ohlone_12.jpg?format=750w">
          <img
            alt=""
            src="https://images.squarespace-cdn.com/content/v1/5b097b4a4cde7ab1c2125706/1605310325551-NCY84U6OUC1WNSBJZ1W3/cathiehong-ohlone_12.jpg?format=750w"
          />
        </a>
        <a href="https://images.squarespace-cdn.com/content/v1/5b097b4a4cde7ab1c2125706/1605310405366-3E7OY6OY28M1Y5NE7FRY/cathiehong-ohlone_18.jpg?format=750w">
          <img
            alt=""
            src="https://images.squarespace-cdn.com/content/v1/5b097b4a4cde7ab1c2125706/1605310405366-3E7OY6OY28M1Y5NE7FRY/cathiehong-ohlone_18.jpg?format=750w"
          />
        </a>
      </LightGallery>

      <div>
        <h1 className="text-2xl tracking-widest text-textColorSky500 pt-2">
          ABOUT
        </h1>
        <small className="text-black">
          Cathie Hong Interiors is a boutique interior design firm based in the
          South Bay Area. Our team of designers specializes in blending our
          modern aesthetic with each client’s personal design style. We take on
          a wide range of projects, including new construction projects,
          full-home renovations, and furnishing and styling projects.{" "}
        </small>
      </div>
    </div>
  );
};

export default AboutHero;
