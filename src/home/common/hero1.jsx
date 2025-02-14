import Button from "@/components/button";
import Input from "@/components/input";
import React from "react";

const Hero1 = () => {
  return (
    <div className="w-full h-[681px]">
      <div className="container mx-auto flex items-center justify-between h-full">
        <div className="max-w-[585px] space-y-8 w-full">
          <div className="relative">
            <p className="font-sour leading-[100px] relative z-20 font-bold text-[80px]">
              We help finding daycare jobs effortlessly!
            </p>
            <img
              src="/assets/hero-greenline.svg"
              className="absolute bottom-0 "
              alt=""
            />
          </div>
          <p className="text-black-medium text-[20px]">
            Discover rewarding opportunities in early childhood education and
            make a difference in young lives. Find the perfect role or candidate
            to create a nurturing daycare environment.
          </p>
          <div className="flex w-full gap-4">
            <input
              className="flex-grow w-full text-[16px] rounded-full border border-border focus:border-theme2-medium focus:outline-none pl-5"
              type="email"
              placeholder="Enter your email"
            />
            <Button className="px-8" variant="primarySmall">
              Subscribe
            </Button>
          </div>
        </div>
        <img src="/assets/hero-img1.png" alt="" />
      </div>
    </div>
  );
};

export default Hero1;
