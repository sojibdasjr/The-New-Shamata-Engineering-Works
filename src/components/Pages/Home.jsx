import React from "react";

const Home = () => {
  return (
    <div>
      <div className="carousel w-full ">
        <div id="item1" className="carousel-item w-full ">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/W02WsF3/Cathie-Hong-Home-14.jpg)",
            }}
          >
            <div className="hero-content text-center backdrop-blur-md  bg-opacity-5  text-black bg-purple-200 ">
              <div className="max-w-md ">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="py-2 px-4 rounded bg-purple-400 text-white">
                  Service
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/1607xHJ/Cathie-Hong-Emory-122.jpg)",
            }}
          >
            <div className="hero-content text-center  backdrop-blur-md  bg-opacity-5  text-black bg-purple-200">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="py-2 px-4 rounded bg-purple-400 text-white">
                  Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full bg-slate-200 py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
      </div>
    </div>
  );
};

export default Home;
