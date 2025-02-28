import ApplyJobModal from "@/components/applyJobModal";
import Button from "@/components/button";
import { Clock, MapPin } from "lucide-react";
import React, { useState } from "react";

const Hero3 = ({ variant }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" mt-0 md:mt-6 mx-auto md:container mb-0 md:mb-20 h-auto  md:h-[452px] ">
      <div className="  relative">
        {/* Hero Image - Responsive */}
        <img
          className="w-full h-full object-cover hidden md:block rounded-b-[20px] md:rounded-b-[30px]"
          src="/assets/job-hero.png"
          alt=""
        />
        <img
          className="w-full h-full block md:hidden object-cover "
          src="/assets/mobile-hero2.png"
          alt=""
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute h-full  w-full bottom-0 bg-gradient-to-t from-black-dark to-transparent xs:rounded-none rounded-b-[20px] md:rounded-b-[30px]" />

        {/* Job Details - Only for variant 1 */}
        {variant !== "variant2" && (
          <div className="absolute  flex xs:flex-wrap sm:flex-nowrap  px-2 gap-2 md:gap-6 top-4 sm:top-6 xs:left-0 md:left-4 ">
            {/* Job Title */}
            <div className="flex gap-1 md:gap-3 bg-white rounded-full px-2 md:px-3 py-1 sm:py-2 items-center">
              <img src="/icons/leader.svg" alt="" className="xs:w-4 xs:h-4" />
              <p className="font-medium text-[10px] md:text-[18px] whitespace-nowrap">
                Group Leader
              </p>
            </div>

            {/* Job Type */}
            <div className="flex gap-1 md:gap-3 bg-white rounded-full px-2 md:px-3 py-1 sm:py-2 items-center">
              <img
                src="/icons/time-orange.svg"
                alt=""
                className="xs:w-4 xs:h-4"
              />
              <span className="font-medium text-[10px] md:text-[18px] whitespace-nowrap">
                Full Time
              </span>
            </div>

            {/* Location */}
            <div className="flex  gap-1 md:gap-3 bg-white  rounded-full px-2 md:px-3 py-1 sm:py-2 items-center">
              <img
                src="/icons/location-orange.svg"
                alt=""
                className="xs:w-4 xs:h-4"
              />
              <span className="font-medium text-[10px] md:text-[18px] whitespace-nowrap">
                Radius Gallery · Santa Cruz, CA
              </span>
            </div>
          </div>
        )}

        {/* Posted Date */}
        {variant !== "variant2" && (
          <p className="text-white absolute hidden md:block right-4 sm:right-10 top-4 sm:top-6 text-[14px] sm:text-[16px] md:text-[18px]">
            Posted: 25/09/2024
          </p>
        )}
        {variant !== "variant2" && (
          <p className="text-black-medium absolute block md:hidden right-4  bottom-4 text-[14px] sm:text-[16px] md:text-[18px]">
            Posted: 25/09/2024
          </p>
        )}

        {/* Job Title & Location */}
        <div className="text-white absolute left-4 sm:left-3 sm:bottom-5 md:left-10 bottom-4 md:bottom-10">
          <h3 className="text-[24px]  md:text-[48px] font-bold">
            {variant !== "variant2" ? "Group Leader" : "Sunny Skies Childcare"}
          </h3>
          <p className="text-[16px]  md:text-[28px]">
            {variant !== "variant2"
              ? "Marcheille Daycare"
              : "Bahnhofstrasse 25 • 8001 Zürich, Switzerland"}
          </p>
        </div>

        {/* Buttons - Icons & Apply */}
        <div className=" gap-3 sm:gap-4 xs:hidden md:flex items-center absolute right-4 sm:right-10 bottom-4 sm:bottom-10">
          {/* Share Icon */}
          <div className="flex justify-center items-center h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[56px] md:w-[56px] rounded-full bg-white">
            <img src="/icons/send.svg" alt="" />
          </div>

          {/* Heart (Save) Icon */}
          <div className="flex justify-center items-center h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[56px] md:w-[56px] rounded-full bg-white">
            <img src="/icons/heart.svg" alt="" />
          </div>

          {/* Apply Button - Only for variant 1 */}
          {variant !== "variant2" && (
            <Button onClick={() => setIsOpen(true)} variant="primarySmall">
              Apply To Job
            </Button>
          )}
          <ApplyJobModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
};

export default Hero3;
