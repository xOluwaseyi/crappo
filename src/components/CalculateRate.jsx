import React from "react";
import Bitcoin from "../assets/Bitcoin.png";
import Etheruem from "../assets/Ethereum.png";
import Litecoin from "../assets/Litecoin.png";
import Button from "../UI/Button";

const CalculateRate = () => {
  return (
    <>
      <section className="w-10/12 mx-auto">
        <div
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="2000"
          className="drop-shadow-2xl bg-white w-11/12 md:w-8/12 mx-auto p-9 text-black rounded-b-3xl"
        >
          <h1 className="font-bold text-[#3671E9]">
            ESTIMATED 24 HOUR REVENUE:
          </h1>
          <p className="font-extrabold text-2xl pb-2 pt-4">
            0.055 130 59 ETH <span className="text-[#3671E9]">($1275)</span>
          </p>
          <p className="text-[#828282] text-sm">
            Revenue will change based on mining difficulty and Ethereum price.
          </p>
        </div>

        <p
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="2000"
          className="w-11/12 md:w-9/12 lg:w-7/12 font-semibold text-2xl md:text-4xl mx-auto text-center leading-normal mt-20 mb-10"
        >
          Trade securely and market the high growth cryptocurrencies.
        </p>

        <div className=" flex flex-wrap justify-around items-center mb-12">
          {/* bit */}
          <div className="bg-[#2B076E] text-white h-[380px] w-[320px] flex flex-col justify-evenly items-center  border-2 border-black p-5 rounded-3xl mb-10 lg:mb-0 ">
            <img src={Bitcoin} alt="" />
            <h1 className="font-bold text-2xl">Bitcoin</h1>
            <p className="text-center">
              Digital currency in which a record of transactions is maintained.
            </p>
            <Button styles="flex items-center justify-around font-medium">
              Start mining
              <span className="ml-3 bg-white text-[#3671E9] w-[25px] h-[25px] rounded-full grid place-items-center font-black text-sm">
                &gt;
              </span>
            </Button>
          </div>

          {/* eth */}
          <div className=" drop-shadow-2xl bg-white  h-[380px] w-[320px] flex flex-col justify-evenly items-center p-5 rounded-3xl mb-10 lg:mb-0">
            <img src={Etheruem} alt="" />
            <h1 className="font-bold text-2xl">Etheruem</h1>
            <p className="text-center text-[#828282]">
              Blockchain technology to create and run decentralized digital
              applications.
            </p>
            <div className="ml-3 bg-white text-[#3671E9] border-2 border-[#2b076e33] w-[50px] h-[50px] rounded-full grid place-items-center ">
              <span className="font-black text-xl">&gt;</span>
            </div>
          </div>

          {/*lit */}
          <div className="drop-shadow-2xl bg-white h-[380px] w-[320px] flex flex-col justify-evenly items-center p-5 rounded-3xl">
            <img src={Litecoin} alt="" />
            <h1 className="font-bold text-2xl">Litecoin</h1>
            <p className="text-center text-[#828282]">
              Cryptocurrency that enables instant payments to anyone in the
              world.
            </p>
            <div className="ml-3 bg-white text-[#3671E9] border-2 border-[#2b076e33] w-[50px] h-[50px] rounded-full grid place-items-center ">
              <span className="font-black text-xl">&gt;</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CalculateRate;