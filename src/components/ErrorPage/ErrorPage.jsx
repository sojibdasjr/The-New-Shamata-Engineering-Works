import React from "react";
import erro from "../../assets/bagErro.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className=" flex items-center justify-center gap-16">
        <img className="" src={erro} alt="" />
        <div className="text-black w-2/4">
          <h1 className="text-6xl font-semibold tracking-widest mb-5">
            Oops! Page <br /> Not Found
          </h1>
          <p className="tracking-widest text-start ">
            You must have picked the wrong door because I haven't been able to
            lay my eye on the page you've been searching for......
          </p>
          <div className="mt-10">
            <Link to="/" className="bg-barandBgSky400 py-2 px-5 uppercase ">
              {" "}
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
