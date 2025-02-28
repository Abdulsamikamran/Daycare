import React from "react";

const Hero = () => {
  return (
    <div className="w-full  flex justify-center items-center relative">
      <img
        className="w-full xs:h-[200px] lg:h-[280px]"
        src="/assets/profile-hero.png"
        alt="hero"
      />
      <p className="   xs:text-[36px]  lg:text-[48px] font-bold font-sour text-white absolute ">
        Profile
      </p>
    </div>
  );
};

export default Hero;
