import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";

const BoardDirectors = () => {
  return (
    <div
      className="bg-repeat-x bg-center "
      style={{
        backgroundImage: "url(https://i.ibb.co/9h8mgVh/overlay.jpg)",
      }}
    >
      <h1 className="text-center text-2xl text-black font-bold pt-5">
        Board Of Corporate Directors
      </h1>
      <div className="lg:max-w-7xl lg:mx-auto mx-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
          <div
            data-aos="zoom-out-right"
            className="border rounded-md py-5  backdrop-blur-sm bg-blue-400 bg-opacity-15   "
          >
            <div className="text-center text-black">
              <div className="avatar">
                <div className="w-40 rounded-full ring ring-barandBgSky400 ring-offset-base-100 ring-offset-2">
                  <img src="https://static1.squarespace.com/static/5af4da35a2772cc078f7e05b/60df488dd265c20054e76732/60df488de63d186be345059c/1625245859624/001_+Tara_LYCP0001_1.jpg?format=1500w" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Rubbi</h1>
                <h1 className="font-semibold">Corporate Director</h1>
                <h1 className="text-textColorSky500">
                  Shamata Engineering Works
                </h1>
                <div className="  flex justify-center gap-4 pt-5">
                  <FaFacebookF />
                  <FaInstagram />
                  <BsTwitterX />
                  <SiMinutemailer />
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-out-down"
            className="border rounded-md py-5  backdrop-blur-sm bg-blue-400 bg-opacity-15   "
          >
            <div className="text-center text-black">
              <div className="avatar">
                <div className="w-40 rounded-full ring ring-barandBgSky400 ring-offset-base-100 ring-offset-2">
                  <img src="https://scontent.fcla7-1.fna.fbcdn.net/v/t39.30808-6/420426650_867151761855650_3231332764276749308_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Nc9vlZXBp5QAX9OqOzS&_nc_ht=scontent.fcla7-1.fna&oh=00_AfAZDAVUJZTJjjzDtoJtGl8rTYrWgEX_FaB2ic1tUf9ZeA&oe=65F46C80" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Shoaib Ahmed</h1>
                <h1 className="font-semibold">Corporate Director</h1>
                <h1 className="text-textColorSky500">
                  Shamata Engineering Works
                </h1>
                <div className="  flex justify-center gap-4 pt-5">
                  <FaFacebookF />
                  <FaInstagram />
                  <BsTwitterX />
                  <SiMinutemailer />
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-out-up"
            className="border rounded-md py-5  backdrop-blur-sm bg-blue-400 bg-opacity-15   "
          >
            <div className="text-center text-black">
              <div className="avatar">
                <div className="w-40 rounded-full ring ring-barandBgSky400 ring-offset-base-100 ring-offset-2">
                  <img src="https://amelieclements.com/wp-content/uploads/2022/02/business-portrait-woman-photographer-zurich-professional-headshot-amelie-clements-corporate-photoshoot-portfolio-apercu.jpg" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Mareila</h1>
                <h1 className="font-semibold">Corporate Director</h1>
                <h1 className="text-textColorSky500">
                  Shamata Engineering Works
                </h1>
                <div className="  flex justify-center gap-4 pt-5">
                  <FaFacebookF />
                  <FaInstagram />
                  <BsTwitterX />
                  <SiMinutemailer />
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-out"
            className="border rounded-md py-5  backdrop-blur-sm bg-blue-400 bg-opacity-15   "
          >
            <div className="text-center text-black">
              <div className="avatar">
                <div className="w-40 rounded-full ring ring-barandBgSky400 ring-offset-base-100 ring-offset-2">
                  <img src="https://images.squarespace-cdn.com/content/v1/631ba8eed2196a6795698665/3690ca61-6a9d-4c93-a2a5-83a5f2aa1648/2022-08-16-Trinet-0540-Martinez-Juan.jpg" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Rokke</h1>
                <h1 className="font-semibold">Corporate Director</h1>
                <h1 className="text-textColorSky500">
                  Shamata Engineering Works
                </h1>
                <div className="  flex justify-center gap-4 pt-5">
                  <FaFacebookF />
                  <FaInstagram />
                  <BsTwitterX />
                  <SiMinutemailer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardDirectors;
