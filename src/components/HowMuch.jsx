import React from "react";
import Button from "../UI/Button";

const HowMuch = () => {
  return (
    <>
      <section className="pt-40">
        <h1
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="3000"
          className="text-center text-4xl font-bold mb-8"
        >
          Check how much you can earn
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="2500"
          className="text-center lg:w-5/12 mx-auto mb-10"
        >
          Let’s check your hash rate to see how much you will earn today,
          Exercitation veniam consequat sunt nostrud amet.
        </p>
        <div
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="2000"
          className="bg-[#FBFCFE] h-[250px] flex  justify-between items-start lg:items-center lg:h-auto flex-col lg:flex-row w-11/12 lg:w-8/12 mx-auto p-10 text-black rounded-t-3xl "
        >
          <input
            type="text"
            placeholder="Enter your hash rate"
            className="outline-none border-b-2 border-[#E0E0E0] pb-1 w-[100%] lg:w-[30%] bg-transparent placeholder:text-black"
          />
          <select className="outline-none border-b-2 border-[#E0E0E0] pb-1 w-[100%] lg:w-[25%] bg-transparent">
            <option value="TH/s">TH/s</option>
          </select>
          <Button styles="text-xl">Calculate</Button>
        </div>
      </section>
    </>
  );
};

export default HowMuch;
