import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container mx-auto mt-16">
      <div className="lg:px-16 px-6 flex py-4 flex-col justify-center lg:flex-row items-center lg:justify-between bg-[#013248] rounded-lg  min-h-[540px]">
        <div className="lg:pe-5 lg:block">
          <p className="pl-4 mb-4 border-l-2 border-slate-300">
            <span className="text-slate-100 uppercase font-semibold">
              Find your <br /> perfect car
            </span>
          </p>

          <h1 className="text-5xl font-bold text-slate-100 leading-[4rem] mb-6">
            Grab Upto 50% Off On Selected Car
          </h1>
          <p className="text-slate-200 text-lg">
            You can find the best cars for all your needs in our dealership and
            we offer the best prices.
          </p>
          <Button className="bg-transparent mt-8 rounded-full uppercase text-lg font-bold px-8 py-6  border-[3px]">
            Buy Now
          </Button>
        </div>

        <div className="relative z-[1] hidden lg:block">
          <span className="slider__thumb__circle-1"></span>
          <span className="slider__thumb__circle-2"></span>
          <Image src="/imgs/hero-1.png" alt="hero" width={850} height={850} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
