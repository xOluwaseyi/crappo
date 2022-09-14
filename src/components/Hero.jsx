import React from "react";
import HeroImage from "../assets/hero-image.png";
import TransparentBg from "../assets/transparent-bg.png";
import Button from "../UI/Button";

const Hero = () => {
  return (
    <>
      <main
        style={{ backgroundImage: `url(${TransparentBg})` }}
        className="flex flex-col lg:flex-row justify-between items-center pb-14"
      >
        <div className=" lg:w-[50%]">
          <div
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="2000"
            className="w-[345px] lg:w-[360px] flex justify-around items-center bg-[#ffffff1a] p-1 rounded-full"
          >
            <p
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="2000"
              className="bg-white text-[#0D0D2B] px-3 py-2 rounded-full font-bold"
            >
              75% save
            </p>
            <p className="">For the Black Friday weekend</p>
          </div>
          <h1
            data-aos="fade-up"
            data-aos-duration="3000"
            className="font-semibold ml-5 text-3xl lg:text-6xl py-5 leading-normal"
          >
            Fastest & secure platform to invest in crypto
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="3000"
            className="pb-8 ml-5 text-[#E0E0E0]"
          >
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
            billion in transactions.
          </p>
          <Button styles=" ml-5 flex items-center justify-around font-bold">
            Try for FREE
            <span
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-sine"
              className="ml-3 bg-white text-[#3671E9] w-[25px] h-[25px] rounded-full grid place-items-center font-black text-sm"
            >
              &gt;
            </span>
          </Button>
        </div>
        <img
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="2000"
          src={HeroImage}
          alt="hero-image"
        />
      </main>
    </>
  );
};

export default Hero;
