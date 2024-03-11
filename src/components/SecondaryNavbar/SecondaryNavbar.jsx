import React from "react";

import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { FcContacts } from "react-icons/fc";

const SecondaryNavbar = () => {
  return (
    <div className="bg-slate-200 text-[14px] text-black flex justify-around items-center">
      <div className="flex md:gap-2 items-center  ">
        <p className="">Follow us</p>
        <div className="flex md:gap-2">
          <Link
            to="https://www.facebook.com/ahmed.shajib.334"
            className="md:bg-blue-500 p-1 "
          >
            <FaFacebookF />
          </Link>
          <Link
            to="/https://www.facebook.com/ahmed.shajib.334"
            className="md:bg-red-500 p-1 "
          >
            <FaInstagram />
          </Link>
          <Link
            to="/https://www.facebook.com/ahmed.shajib.334"
            className="md:bg-black p-1 md:text-white "
          >
            <FaXTwitter />
          </Link>
          <Link
            to="/https://www.facebook.com/ahmed.shajib.334"
            className="md:bg-red-500 p-1 md:text-white"
          >
            <FaYoutube />
          </Link>
        </div>
      </div>
      <div className="flex  items-center gap-2">
        <div className=" flex items-center gap-2">
          <div className=" hidden md:flex items-center gap-1">
            <IoLocationSharp />

            <p>Dhaka /1250 Bangladesh</p>
          </div>
          <div className="flex items-center gap-1">
            <FcContacts />
            <p>+8801 628-078 487</p>
          </div>
        </div>
        <div className="md:flex items-center gap-2 hidden">
          ||
          <CiMail />
          <a href="mailto:shojibshoaib@gmail.com?body=My custom mail body">
            Web Mail
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
