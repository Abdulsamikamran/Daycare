import Button from "@/components/button";
import Input from "@/components/input";
import React from "react";

const Newsletter = () => {
  return (
    <div className="h-[440px] relative">
      <div className="flex h-full gap-6 flex-col justify-center items-center">
        <h3 className="text-[36px] font-bold font-sour">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-[20px] max-w-[628px]">
          Don’t miss out on the latest updates, tips, and opportunities!
          Subscribe today and be the first to know what’s happening in the
          community!
        </p>
        <div className="flex gap-2 items-center">
          <Input
            className={" w-[556px] h-[58px]"}
            type="email"
            placeholder="example@domain.com"
            icon={"/icons/email.svg"}
          />
          <Button variant="primarySmallBlue" className="">
            Subscribe
          </Button>
        </div>
      </div>
      <img
        className="absolute left-0 bottom-0"
        src="/assets/newsletter-img1.png"
        alt=""
      />
      <img
        className="absolute right-5 bottom-5"
        src="/assets/newsletter-vec.png"
        alt=""
      />
    </div>
  );
};

export default Newsletter;
