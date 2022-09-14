import React from "react";
import InvestSmart from "../assets/InvestSmart.png";
import GrowProfit from "../assets/GrowProfit.png";
import Statistics from "../assets/Statistics.png";

const Features = () => {
  return (
    <>
      <section className="bg-[#2B076E] py-10">
        <div className="w-10/12 mx-auto">
          <p
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="2000"
            className="w-[100%] lg:w-9/12 font-medium md:font-semibold text-3xl lg:text-4xl mx-auto text-center leading-normal mt-5 text-white"
          >
            Market sentiments, portfolio, and run the infrastructure of your
            choice
          </p>

          {/* 1 */}
          <div className="flex flex-col lg:flex-row justify-between my-10 lg:my-12 ">
            <div
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="2000"
              className="w-[100%] lg:w-[40%]"
            >
              <h1 className=" font-semibold text-white text-4xl py-2 leading-relaxed">
                Invest Smart
              </h1>
              <p className="py-2 text-lg text-[#E0E0E0] w-[100%] lg:w-[80%]">
                Get full statistic information about the behaviour of buyers and
                sellers will help you to make the decision.
              </p>
              <button
                type="button"
                className="bg-[#3671E9] text-white flex px-6 mt-3 mb-8 lg:mb-0 py-3 items-center rounded-full justify-around font-medium"
              >
                Learn More
              </button>
            </div>
            <img
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="2000"
              src={InvestSmart}
              className="w-[100%] md:w-[70%] h-auto lg:w-[60%] xl:w-[50%] "
              alt=""
            />
          </div>

          {/* 2 */}
          <div className="flex justify-between mb-10 flex-col lg:flex-row-reverse">
            <div
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="2000"
              className="w-[100%] lg:w-[40%]"
            >
              <h1 className=" font-semibold text-white text-4xl py-2 leading-relaxed">
                Detailed Statistics
              </h1>
              <p className="py-2 text-lg text-[#E0E0E0] w-[80%]">
                View all mining related information in realtime, at any point at
                any location and decide which polls you want to mine in.
              </p>
              <button
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                type="button"
                className="bg-[#3671E9] text-white flex px-6 mt-3 mb-8 lg:mb-0 py-3 items-center rounded-full justify-around font-medium"
              >
                Learn More
              </button>
            </div>
            <img
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="2000"
              src={Statistics}
              className="w-[100%] md:w-[70%] h-auto lg:w-[55%] xl:w-[50%] "
              alt=""
            />
          </div>

          {/* 3 */}
          <div className="flex flex-col xl:flex-row justify-between">
            <div
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="2000"
              className="w-[100%] mb-10 xl:mb-0 xl:w-[40%]"
            >
              <h1 className=" font-semibold text-white text-4xl py-2 leading-relaxed">
                Grow your profit and track your investments
              </h1>
              <p className="py-2 text-lg text-[#E0E0E0] w-[80%]">
                Use advanced analytical tools. Clear TradingView charts let you
                track current and historical profit investments.
              </p>
              <button
                type="button"
                className="bg-[#3671E9] text-white flex px-6 mt-3 mb-8 lg:mb-0 py-3 items-center rounded-full justify-around font-medium"
              >
                Learn More
              </button>
            </div>
            <img
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="2000"
              src={GrowProfit}
              className="w-[100%] md:w-[80%] h-[200px] md:h-auto xl:w-[50%]"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
