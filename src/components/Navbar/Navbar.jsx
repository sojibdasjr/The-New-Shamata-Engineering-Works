import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
//React icon
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // set toggleMenu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleSticky = () => {
      if (window.scrollY > 25) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleSticky);

    return () => {
      window.addEventListener("scroll", handleSticky);
    };
  });

  // navbar item
  const navItems = [
    { page: "HOME", path: "/" },
    { page: "ABOUT US", path: "/about" },
    { page: "PORTFOLIO", path: "/portfolio" },
    { page: "IMAGE GALLERY", path: "/gallery" },
    { page: "CONTACT", path: "/contact" },
  ];
  return (
    <header className="w-full duration-300 bg-barandBgSky400 text-white   fixed mt-[134px] top-0 left-0 right-0 ">
      <nav
        className={`py-4 lg:px-14 px-4  ${
          isSticky
            ? "static  -mt-[136px] top-0 left-0 right-0 border-b bg-barandBgSky400 bg-opacity-30  backdrop-filter backdrop-blur-md text-black  duration-300"
            : ""
        }`}
      >
        <div className="flex justify-start md:justify-center items-center tracking-widest   gap-8">
          {/* Nav items for large devices  */}
          <ul className="md:flex space-x-12 hidden ">
            {navItems.map(({ page, path }) => (
              <li
                key={path}
                className="  rounded block  hover:text-brandPrimary  "
              >
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  to={path}
                >
                  {page}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* menu btn for only mobile device */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none  focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Nav item for mobile device */}
        <div
          className={`space-y-4  py-7  ${
            isMenuOpen ? "  top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ page, path }) => (
            <li
              key={path}
              className="  rounded block text-black hover:text-red-500  hover:translate-x-2  duration-300 tracking-widest "
            >
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={path}
              >
                {page}
              </NavLink>
            </li>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
