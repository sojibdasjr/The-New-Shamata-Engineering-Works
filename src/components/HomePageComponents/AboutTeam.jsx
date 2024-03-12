import React from "react";

const AboutTeam = () => {
  return (
    <div>
      <div className="lg:max-w-7xl lg:mx-auto mx-4 py-16">
        <div className="bg-white">
          <h1 className=" text-2xl text-textColorSky500  tracking-widest ">
            TEAM
          </h1>
        </div>
        <div className="lg:flex  py-5 items-center gap-4">
          <div className=" lg:w-1/2 md:w-full ">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img
                src="https://images.squarespace-cdn.com/content/v1/5b097b4a4cde7ab1c2125706/1605311373849-VRUOKUIC8YC7UUL7Y5UZ/cathiehong-8992.jpg?format=750w"
                alt=""
                className="border md:w-full"
              />
            </div>
          </div>

          <div className="text-black lg:w-1/2 md:w-full">
            <div
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <h1 className="text-4xl font-semibold">CATHIE HONG</h1>
              <h1 className="font-semibold underline underline-offset-4">
                PRINCIPAL DESIGNER
              </h1>
              <p>
                Cathie is the lead designer at CHI. She has always been an
                artist and has pursued it in many different forms throughout her
                life, but has found her niche in creating beautiful and
                functional spaces for a wide spectrum of clients. She enjoys the
                creativity of imagining the layout, materials and finishes of a
                space, but also enjoys the precision, calculations and careful
                coordination required in bringing that vision to life with a
                valued network of tradespeople. She has lived in San Diego,
                Orange County, Los Angeles, and has now settled back up in the
                Bay Area (her hometown) with her husband and four children. Her
                vision in designing interiors is to help clients actualize their
                dreams for their homes in a thoughtful and collaborative way.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
