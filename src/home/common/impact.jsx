import React from "react";

const Impact = () => {
  return (
    <div className="bg-theme1-dark mb-6 text-white py-14 xl:py-20 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between xs:items-start md:items-center px-6">
        {/* Left Section */}
        <div className="space-y-2 md:space-y-3 max-w-md text-left md:text-left">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-sour">
            Our Impact
          </h3>
          <p className="text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl">
            We are fully committed to connecting quality caregivers with trusted
            daycares.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex  justify-center md:justify-end gap-6 md:gap-x-16 mt-6 md:mt-0">
          <div className="space-y-1 text-start">
            <h3 className="text-[12px]  md:text-xl lg:text-4xl xl:text-5xl font-bold font-sour">
              5000+
            </h3>
            <p className="text-[11px] whitespace-nowrap sm:text-sm  lg:text-lg xl:text-xl">
              Jobs Filled
            </p>
          </div>
          <div className="space-y-1 text-start">
            <h3 className="text-[12px]  md:text-xl lg:text-4xl xl:text-5xl font-bold font-sour">
              1200+
            </h3>
            <p className="text-[11px] whitespace-nowrap sm:text-sm  lg:text-lg xl:text-xl">
              Daycare Centers
            </p>
          </div>
          <div className="space-y-1 text-start">
            <h3 className="text-[12px]  md:text-xl lg:text-4xl xl:text-5xl font-bold font-sour">
              95%
            </h3>
            <p className="text-[11px] whitespace-nowrap sm:text-sm  lg:text-lg xl:text-xl">
              Satisfaction Rate
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Image */}
      <img
        src="/assets/impact.png"
        alt="Impact Illustration"
        className="mx-auto object-contain mt-6 max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]"
      />
    </div>
  );
};

export default Impact;
