import React from "react";

const AboutFounder = () => {
  return (
    <div className="lg:max-w-7xl lg:mx-auto mx-4 py-16">
      <div className="lg:flex  py-5 items-center gap-4">
        <div data-aos="fade-right" className=" lg:w-1/2 md:w-full ">
          <img
            src="https://i.ibb.co/Nyy0F6X/istockphoto-541581726-612x612.jpg"
            alt=""
            className="border md:w-full"
          />
        </div>

        <div data-aos="zoom-out" className="text-yellow-400 lg:w-1/2 md:w-full">
          <h1 className="text-4xl font-semibold text-textColorSky500">
            CATHIE HONG
          </h1>
          <h1 className="font-semibold underline underline-offset-4 text-white">
            PRINCIPAL DESIGNER
          </h1>
          <p>
            Cathie is the lead designer at CHI. She has always been an artist
            and has pursued it in many different forms throughout her life, but
            has found her niche in creating beautiful and functional spaces for
            a wide spectrum of clients. She enjoys the creativity of imagining
            the layout, materials and finishes of a space, but also enjoys the
            precision, calculations and careful coordination required in
            bringing that vision to life with a valued network of tradespeople.
            She has lived in San Diego, Orange County, Los Angeles, and has now
            settled back up in the Bay Area (her hometown) with her husband and
            four children. Her vision in designing interiors is to help clients
            actualize their dreams for their homes in a thoughtful and
            collaborative way.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;
