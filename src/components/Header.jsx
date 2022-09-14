import React, { useState } from "react";
import crappo_logo from "../assets/crappo-logo.png";
import Button from "../UI/Button";

const Header = () => {
  const [nav, setNav] = useState(false);
  const showNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex items-center">
        <img src={crappo_logo} alt="logo" />
        <p className="text-xl font-semibold ml-2 ">CRAPPO</p>
      </div>

      {/* hamburger */}
      {nav ? (
        <i
          className="fixed right-[30px] fa fa-times text-3xl z-50 lg:hidden"
          aria-hidden="true"
          onClick={showNav}
        ></i>
      ) : (
        <i
          className="fa fa-bars text-3xl lg:hidden"
          aria-hidden="true"
          onClick={showNav}
        ></i>
      )}

      {/* desktop */}
      <nav className="hidden lg:flex lg:w-[650px] justify-between items-center">
        <a href="#" className="text-xl">
          Products
        </a>
        <a href="#" className="text-xl">
          Features
        </a>
        <a href="#" className="text-xl">
          About
        </a>
        <a href="#" className="text-xl">
          Contact
        </a>
        <div className="flex items-center">
          <a
            href="#"
            className="pr-6 border-r-2 border-r-[#F2F2F2] border-opacity-30 font-medium text-"
          >
            Login
          </a>
          <a href="#">
            <Button styles="text-xl ml-5">Register</Button>
          </a>
        </div>
      </nav>

      {/* mobile */}
      <nav
        className={
          nav
            ? "fixed top-[0px] right-[0px] grid place-items-center h-[100vh]  w-full lg:hidden bg-[#0D0D2B] z-40 duration-1000"
            : "fixed top-[0px] right-[-100vw] grid place-items-center h-[100vh]  w-full lg:hidden bg-[#0D0D2B] z-40 duration-1000"
        }
      >
        <div className="h-[60%] my-auto flex flex-col justify-evenly items-center">
          <a href="#" className="text-2xl">
            Products
          </a>
          <a href="#" className="text-2xl">
            Features{" "}
          </a>
          <a href="#" className="text-2xl">
            About
          </a>
          <a href="#" className="text-2xl">
            Contact
          </a>
          <div className="flex items-center">
            <a
              href="#"
              className="pr-6 border-r-2 border-r-[#F2F2F2] border-opacity-30 font-medium text-2xl"
            >
              Login
            </a>
            <a href="#">
              <Button styles="text-xl ml-5">Register</Button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
