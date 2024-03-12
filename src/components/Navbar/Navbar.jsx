import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
//React icon
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // set toggleMenu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // navbar item
  const navItems = [
    { page: "Home", path: "/" },
    { page: "About Us", path: "/about" },
    { page: "Service", path: "/service" },
    { page: "Image Gallery", path: "/gallery" },
    { page: "Contact", path: "/contact" },
  ];
  return (
    <header className="w-full bg-barandBgSky400 text-black  top-0 left-0 right-0 ">
      <nav className=" py-4 lg:px-14 px-4">
        <div className="flex justify-start md:justify-center items-center font-semibold  gap-8">
          {/* Nav items for large devices  */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ page, path }) => (
              <li
                key={path}
                className="  rounded block text-grey900 hover:text-brandPrimary "
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
              className="  rounded block text-black hover:text-red-500  hover:translate-x-2  duration-300 "
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
