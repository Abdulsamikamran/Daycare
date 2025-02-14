import Button from "@/components/button";
import { Clock, MapPin } from "lucide-react";
import React from "react";

const Hero3 = ({ variant }) => {
  return (
    <div className="container mt-10 mb-40 h-[452px] mx-auto">
      <div className="relative">
        <img className="w-full" src="/assets/job-hero.png" alt="" />
        <div className="absolute h-[450px] w-full bottom-0 bg-gradient-to-t from-black-dark to-transparent rounded-b-[30px] " />
        {variant !== "variant2" && (
          <div className="absolute flex gap-6 top-10 left-10">
            <div className="flex gap-2 bg-white rounded-full px-2 py-2 items-center">
              <img src="/icons/leader.svg" alt="" />
              <p className="font-medium text-[18px]">Group Leader</p>
            </div>
            <div className="flex gap-3 bg-white rounded-full px-2 py-2 items-center">
              <img src="/icons/time-orange.svg" alt="" />
              <span className="font-medium text-[18px]">Full Time</span>
            </div>
            <div className="flex gap-3 bg-white rounded-full px-2 py-2 items-center">
              <img src="/icons/location-orange.svg" alt="" />
              <span className="font-medium text-[18px]">
                Radius Gallery · Santa Cruz, CA
              </span>
            </div>
          </div>
        )}
        {variant !== "variant2" && (
          <p className="text-white absolute right-10 top-10 text-[18px]">
            Posted: 25/09/2024
          </p>
        )}

        <div className="text-white absolute left-10 bottom-10">
          <h3 className="text-[48px] font-bold">
            {variant !== "variant2" ? "Group Leader" : "Sunny Skies Childcare"}
          </h3>
          <p className="text-[28px]">
            {variant !== "variant2"
              ? "Marcheille Daycare"
              : "Bahnhofstrasse 25 • 8001 Zürich, Switzerland"}
          </p>
        </div>
        <div className="flex gap-4 items-center absolute right-10 bottom-10">
          <div className="flex justify-center items-center h-[56px] w-[56px] rounded-full bg-white">
            <img src="/icons/send.svg" alt="" />
          </div>
          <div className="flex justify-center items-center h-[56px] w-[56px] rounded-full bg-white">
            <img src="/icons/heart.svg" alt="" />
          </div>
          {variant !== "variant2" && (
            <Button variant="primarySmall">Apply To Job</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero3;
