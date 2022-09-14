import React from "react";
import WhyBarChart from "../assets/why-barchart.png";
import WhyPerson from "../assets/why-person.png";
import WhyWorld from "../assets/why-world.png";
import WhyImage from "../assets/why-image.png";
import Button from "../UI/Button";

const WhyCrappo = () => {
  return (
    <>
      <section className="pt-5">
        <div
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="3000"
          data-aos-easing="linear"
          className="flex flex-col h-[350px] md:h-auto md:flex-row justify-between items-center"
        >
          <div className="flex items-center">
            <img className="pr-7" src={WhyBarChart} alt="" />
            <div>
              <h1 className="font-extrabold  text-3xl">$30B</h1>
              <p className="text-[#E0E0E0] text-sm font-light pt-2">
                Digital Currency Exchanged
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img className="pr-7" src={WhyPerson} alt="" />
            <div>
              <h1 className="font-extrabold  text-3xl">10M+</h1>
              <p className="text-[#E0E0E0] text-sm font-light pt-2">
                Trusted Wallets Investor
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img className="pr-7" src={WhyWorld} alt="" />
            <div>
              <h1 className="font-extrabold  text-3xl">195</h1>
              <p className="text-[#E0E0E0] text-sm font-light pt-2">
                Countries Supported
              </p>
            </div>
          </div>
        </div>

        {/* why */}
        <div className="flex flex-col-reverse lg:flex-row justify-between pt-10 items-center">
          <img
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="2000"
            src={WhyImage}
            alt=""
          />
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="3000"
            className="lg:w-[40%]"
          >
            <h1 className="font-semibold text-4xl py-3 leading-relaxed">
              Why you should choose CRAPPO
            </h1>
            <p className="py-3 text-lg text-[#E0E0E0] lg:w-[80%]">
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
            </p>
            <Button styles="font-bold mt-5">Learn More</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyCrappo;
