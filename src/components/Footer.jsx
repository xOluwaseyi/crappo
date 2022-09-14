import React from "react";
import FooterLogo from "../assets/crappo-logo.png";
import Visa from "../assets/visa-white.png";
import Mastercard from "../assets/mastercard-white.png";
import Bitcoin from "../assets/bitcoin-white.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";

const Footer = () => {
  return (
    <footer className="bg-[#0D0D2B]  text-white lg:pt-10">
      <div className="w-[92%] mx-auto ">
        <div className="flex flex-col text-center lg:text-left lg:flex-row items-center lg:items-start justify-between">
          <div className="flex items-center ">
            <img src={FooterLogo} className="my-7 lg:my-0 " alt="footer logo" />
            <p className="text-xl font-semibold ml-2 ">CRAPPO</p>
          </div>
          <div className="mb-16">
            <h3 className="font-bold text-xl">Quick Link</h3>
            <div className="mt-7 h-[200px] flex flex-col justify-between text-lg">
              <li>Home</li>
              <li>Products</li>
              <li>About</li>
              <li>Features</li>
              <li>Contact</li>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="font-bold text-xl">Resources</h3>
            <div className="mt-7 h-[200px] flex flex-col justify-between text-lg">
              <li>Download Whitepaper</li>
              <li>Smart Token</li>
              <li>Blockchain Explorer</li>
              <li>Crypto API</li>
              <li>Interest</li>
            </div>
          </div>

          <div className="w-[80%] mb-10 md:mb-0 lg:w-[30%]">
            <h1 className="font-semibold text-lg md:text-2xl lg:text-3xl xl:text-4xl text-center lg:text-left leading-snug mb-10">
              We accept following payment systems:
            </h1>

            <div className="flex mx-auto md:w-[70%] lg:w-[100%] items-center justify-between ">
              {[
                { type: Visa, id: 0 },
                { type: Mastercard, id: 1 },
                { type: Bitcoin, id: 2 },
              ].map((type) => {
                return (
                  <div
                    key={type.id}
                    className="bg-[#E0E0E0] h-[60px] px-7 py-2 grid place-items-center rounded-lg bg-opacity-5 "
                  >
                    <img src={type.type} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* acknowledgment */}
        <div className="flex justify-between flex-col items-center md:flex-row md:py-10">
          <p className="mb-10 md:my-0 font-medium">
            ©2022 CRAPPO. All rights reserved
          </p>
          <div className="flex w-[300px] justify-between pb-16 md:my-0">
            <img src={facebook} className="w-[10%] " alt="" />
            <img src={instagram} className="w-[10%] " alt="" />
            <img src={youtube} className="w-[10%] " alt="" />
            <img src={twitter} className="w-[10%] " alt="" />
            <img src={linkedin} className="w-[10%] " alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
