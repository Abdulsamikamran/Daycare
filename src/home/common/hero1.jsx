import Button from "@/components/button";
import Input from "@/components/input";
import React from "react";
import useRoleLocalStorage from "../../hooks/useRoleLocalStorage";

const Hero1 = () => {
  const [selectedRole] = useRoleLocalStorage("selectedRole");

  return (
    <div className="w-full flex flex-col items-center container mx-auto xs:px-2 md:px-6 h-auto lg:h-[681px] py-12 lg:py-0">
      <img
        src="/assets/applicant-hero.png"
        alt=""
        className="w-full xs:block lg:hidden max-w-[500px] lg:max-w-none"
      />
      <div className="container mx-auto w-full flex flex-col lg:flex-row items-center justify-between h-full px-4 lg:px-0">
        {/* Left Section (Text and Input) */}
        <div className="max-w-full lg:max-w-[585px] w-full space-y-6 lg:space-y-8">
          <div className="relative">
            <p className="font-sour xs:font-semibold   md:font-bold text-[40px] xs:text-[36px] md:text-[60px] lg:text-[80px] leading-[50px] xs:leading-[40px] md:leading-[80px] lg:leading-[100px] relative z-20">
              We help finding daycare jobs effortlessly!
            </p>
            <img
              src="/assets/hero-greenline.svg"
              className="absolute  bottom-0  xs:w-[50%] md:w-[70%] lg:w-auto"
              alt=""
            />
          </div>
          <p className="text-black-medium text-[16px] xs:text-[14px] md:text-[20px] lg:text-[20px] leading-[24px] xs:leading-[24px] lg:leading-[36px]">
            Discover rewarding opportunities in early childhood education and
            make a difference in young lives. Find the perfect role or candidate
            to create a nurturing daycare environment.
          </p>

          <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-2">
            <div className="flex-1">
              <Input
                className="h-[50px] sm:h-[58px] w-full"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <Button className="w-full sm:w-auto" variant="primarySmall">
              {selectedRole === "company" ? "Subscribe" : "Get Started"}
            </Button>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="mt-12 lg:mt-0 w-full xs:hidden lg:flex lg:w-auto flex justify-center lg:justify-end">
          {selectedRole === "company" ? (
            <img
              src="/assets/hero-img1.png"
              alt=""
              className="w-full max-w-[500px] lg:max-w-none"
            />
          ) : (
            <img
              src="/assets/applicant-hero.png"
              alt=""
              className="w-full max-w-[500px] lg:max-w-none"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero1;
