import React from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div id="item1" className="carousel-item w-full ">
          <div
            className="hero min-h-screen "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/W02WsF3/Cathie-Hong-Home-14.jpg)",
            }}
          >
            <div className="hero-content">
              <div className="max-w-md md:max-w-full md:mx-32 ">
                <div
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <h1 className="mb-5 text-5xl text-textColorSky500 font-bold">
                    LOS GATOS TREEHOUSE
                  </h1>
                  <p className="mb-5 border  backdrop-blur-sm   py-5 px-2 text-black ">
                    Cathie Hong had been an interior designer for years. So when
                    the mom of four kids embarked on renovating her own family’s
                    new home—a moody, redwood-clad, midcentury residence tucked
                    behind trees in Los Gatos, California—she thought she had it
                    on lock. But the process proved to be a surprising one: “The
                    whole experience of renovating my house was eye-opening for
                    me. I thought going into it that I would know exactly what
                    to do because I’m always working with my clients on their
                    renovation projects,” Hong explains. “It was very different
                    being the homeowner!”
                  </p>
                  <Link
                    to="/service"
                    className="py-2 px-4  border rounded-full  backdrop-blur-sm    text-textColorSky500 "
                  >
                    Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="text-4xl text-textColorSky500">
            ❮
          </a>
          <a href="#slide2" className="text-4xl text-textColorSky500">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div id="item2" className="carousel-item w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/1607xHJ/Cathie-Hong-Emory-122.jpg)",
            }}
          >
            <div className="hero-content">
              <div className="max-w-md md:max-w-full md:mx-32 ">
                <div
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <h1 className="mb-5 text-5xl text-textColorSky500 font-bold">
                    FULL SERVICE DESIGN
                  </h1>
                  <p className="mb-5 border  backdrop-blur-sm  bg-opacity-5 py-5 px-2 text-black ">
                    Our preference as designers is to be brought on to the
                    project as early in the process as possible. We love
                    collaborating with architects, structural engineers, and
                    builders to help you create the vision you have for your
                    home. Whether your project is a new build, gut renovation,
                    furnishing, or somewhere in between, full-service design
                    includes:
                  </p>
                  <Link
                    to="/service"
                    className="py-2 px-4  border rounded-full  backdrop-blur-md   text-textColorSky500 "
                  >
                    Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="  text-4xl text-textColorSky500">
            ❮
          </a>
          <a href="#slide3" className="  text-4xl text-textColorSky500">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
