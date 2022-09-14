import React from "react";
import EthTransparent from "../assets/eth-transparent.png";

const StartMining = () => {
  return (
    <section className=" mx-auto bg-gradient-to-b from-[#2B076E] to-[#0D0D2B] py-5">
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="2000"
        className="bg-[#3671E9] w-11/12 lg:w-10/12 mx-auto p-10 text-black flex flex-col lg:flex-row justify-between h-[350px] lg:h-[200px] lg:items-center rounded-lg bg-no-repeat"
        style={{
          backgroundImage: `url(${EthTransparent})`,
        }}
      >
        <div className="text-white w-[100%] lg:w-[50%] mr-36">
          <h1 className="font-bold text-2xl mb-4">Start mining now</h1>
          <p>
            Join now with CRAPPO to get the latest news and start mining now
          </p>
        </div>
        <input
          type="text"
          placeholder="Enter your email"
          className="outline-none border-b-2 border-[#E0E0E0] pb-2 mr-5 lg:w-[50%] bg-transparent placeholder:text-white"
        />
        <button className="bg-white text-black flex px-8 py-3 items-center rounded-full justify-around font-bold">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default StartMining;
