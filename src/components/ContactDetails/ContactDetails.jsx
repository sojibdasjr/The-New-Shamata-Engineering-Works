import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddIcCall } from "react-icons/md";

const ContactDetails = () => {
  return (
    <div className="lg:max-w-7xl lg:mx-auto pb-5 mx-2 ">
      <div className="grid md:grid-cols-2">
        <div>
          <img
            src="https://img.freepik.com/free-photo/portrait-woman-customer-service-worker_144627-37948.jpg?t=st=1710427324~exp=1710430924~hmac=e7c64d181e7c42c6d94937c6b4f7b2675089f687b62df493b4cfc6ed811bc1e5&w=1380"
            alt=""
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="grid md:grid-cols-2 gap-4"
        >
          <div className="text-black bg-slate-100 text-center">
            <h1 className="uppercase text-2xl font-bold mt-5 mb-2 ">
              Contact us
            </h1>
            <p>We are here to provide design consulting</p>
            <div className="flex items-center gap-4 justify-center mt-5">
              <FaFacebookF />
              <FaSquareXTwitter />
              <FaInstagram />
              <IoLogoYoutube />
            </div>
          </div>
          <div className="text-black bg-slate-100 text-center">
            <h1 className="flex justify-center mt-5">
              <MdOutlineEmail className="text-6xl text-textColorSky500 border-2 border-black rounded-full p-1" />
            </h1>
            <p className="uppercase text-2xl font-bold mt-2">Email</p>
            <div className="items-center gap-4 justify-center mt-5">
              <h1>shojibshoaib@gmail.com</h1>
              <small className="lowercase">
                suppoet@ShamataEngineeringWorks.com
              </small>
            </div>
          </div>
          <div className="text-black bg-slate-100 text-center">
            <h1 className="flex justify-center mt-5">
              <FaLocationDot className="text-6xl text-textColorSky500 border-2 border-black rounded-full p-1" />
            </h1>
            <p className="uppercase text-2xl font-bold mt-2">address</p>
            <div className=" gap-4  mt-5">
              <h1>121 Rock Street 15 Uttra, Dhaka</h1>
              <p className="lowercase text-end me-10">Bangladesh</p>
            </div>
          </div>
          <div className="text-black bg-slate-100 text-center">
            <h1 className="flex justify-center mt-5">
              <MdAddIcCall className="text-6xl text-textColorSky500 border-2 border-black rounded-full p-1" />
            </h1>
            <p className="uppercase text-2xl font-bold mt-2">call us</p>
            <div className="items-center gap-4 justify-center mt-5">
              <h1>+8801628078487</h1>
              <h1>+8801928078487</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
