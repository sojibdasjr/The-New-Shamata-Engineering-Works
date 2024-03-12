import React from "react";
import logo from "../../assets/logo.png";
import { MdLocalPhone } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import "./Navbar.css";

const SecondaryNavbar = () => {
  return (
    <div className="bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className=" py-5 text-black flex justify-between mx-2">
          {/* log and company name */}
          <div className="flex items-center gap-2">
            <img className="w-10 md:w-14" src={logo} alt="" />
            <h1 className="font-semibold md:font-bold md:text-2xl md:tracking-widest">
              The New Shamata <br />{" "}
              <span className="text-textColorSky500">Engineering Works</span>
            </h1>
          </div>
          {/* contact Info */}
          <div className="flex justify-center gap-4 items-center">
            <div className="hidden md:flex items-center gap-2">
              <MdLocalPhone className=" text-4xl text-textColorSky500 border border-slate-300 rounded-full p-1 " />
              <div>
                <small>Toll Free: 080000161609</small>
                <p className="font-semibold">Hot Line: +8801628078487</p>
              </div>
            </div>
            <div className="hidden lg:flex  items-center gap-2">
              <SiMinutemailer className=" text-4xl text-textColorSky500 border border-slate-300 rounded-full p-1 " />
              <div>
                <small>Email us </small>
                <p className="font-semibold">shojibshoaib@gmail.com</p>
              </div>
            </div>
            <div className="gradient-border  ">
              <p className="font-semibold">Quanlity First</p>
              <small>-Shoaib Ahmed</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
