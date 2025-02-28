import Button from "@/components/button";
import Input from "@/components/input";
import React from "react";

const Newsletter = () => {
  return (
    <div className="relative h-[440px] py-10 md:py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4 md:space-y-6">
        <img
          className=" block md:hidden w-32 sm:w-32 md:w-36"
          src="/assets/newsletter-img1.png"
          alt=""
        />
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-sour">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-xs text-center max-w-[628px] sm:text-sm md:text-sm lg:text-lg xl:text-xl">
          Don’t miss out on the latest updates, tips, and opportunities!
          Subscribe today and be the first to know what’s happening in the
          community!
        </p>

        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-2 items-start sm:items-center">
          <div className="w-full sm:full md:w-[500px]">
            <Input
              className="h-[50px] sm:h-[58px] w-full"
              type="email"
              placeholder="example@domain.com"
              icon="/icons/email.svg"
            />
          </div>
          <Button variant="primarySmallBlue" className="w-full sm:w-auto">
            Subscribe
          </Button>
        </div>
      </div>

      {/* Images */}
      <img
        className="absolute hidden md:block left-0 bottom-0 w-24 sm:w-28 md:w-36"
        src="/assets/newsletter-img1.png"
        alt=""
      />
      <img
        className="absolute right-3 hidden md:block sm:right-5 bottom-3 sm:bottom-5 w-16 sm:w-20 md:w-24"
        src="/assets/newsletter-vec.png"
        alt=""
      />
    </div>
  );
};

export default Newsletter;
