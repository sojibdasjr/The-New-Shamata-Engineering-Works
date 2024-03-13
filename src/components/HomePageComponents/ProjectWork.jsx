import React from "react";

const ProjectWork = () => {
  return (
    <div className="lg:max-w-7xl lg:mx-auto mx-4 ">
      <div className="lg:flex  items-center gap-4">
        <div data-aos="fade-right" className="text-black lg:w-1/2 md:w-full">
          <h1 className="font-semibold underline underline-offset-4">
            PRINCIPAL DESIGNER
          </h1>
          <p>
            Cathie Hong Interiors is a boutique interior design firm based in
            the South Bay Area. Our team of designers specializes in blending
            our modern aesthetic with each client’s personal design style. We
            take on a wide range of projects, including new construction
            projects, full-home renovations, and furnishing and styling
            projects.
          </p>
        </div>

        <div data-aos="fade-up" className=" lg:w-1/2 md:w-full ">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5b097b4a4cde7ab1c2125706/dd293a6f-c686-4f54-b15c-1b093a41e18c/CathieHong_Smith_1.jpg?format=2500w"
            alt=""
            className="border md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectWork;
