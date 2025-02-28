import React from "react";

const Hero2 = ({ variant }) => {
  return (
    <div className="overflow-hidden">
      <div className="relative">
        {/* Responsive Image */}
        <img
          className="w-full h-[300px] sm:h-[400px] md:h-[510px] object-cover z-10"
          src="/assets/hero-bg1.png"
          alt="Hero Background"
        />

        {/* Content Container */}
        <div className="absolute top-0 w-full h-full pb-10 sm:pb-16 md:pb-20 flex flex-col justify-center items-center text-center">
          {/* Text Container */}
          <div className="relative z-50 flex flex-col items-center">
            <h3
              className={`font-semibold font-sour text-[32px]  md:text-[60px] lg:text-[80px] leading-tight ${
                variant === "variant2"
                  ? "xs:max-w-[200px]   sm:max-w-[200px] md:max-w-[957px]"
                  : "sm:max-w-[300px] md:max-w-[644px]"
              }`}
            >
              {variant === "variant2"
                ? "Find the Perfect Place for Your Little Ones"
                : variant === "variant3"
                ? "We Build Brighter Futures Together"
                : "Find Your Perfect Daycare Jobs"}
            </h3>

            {/* Green Line */}
            <img
              className={`absolute left-1/2 -translate-x-1/2 bottom-[5px] xs:bottom-0 ${
                variant === "variant2"
                  ? "w-[190px] md:w-[500px] lg:w-[600px]"
                  : variant === "variant3"
                  ? "w-[260px] md:w-[600px] lg:w-[700px]"
                  : "w-[228px]  md:w-[450px] lg:w-[500px]"
              } -z-10`}
              src="/assets/hero-greenline.svg"
              alt="Green Line"
            />
          </div>

          {/* Description */}
          <p
            className={`text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-black-medium mt-4  px-4  max-w-[542px] ${
              variant === "variant2"
                ? "md:max-w-[663px]"
                : variant === "variant3"
                ? "md:max-w-[663px]"
                : "md:max-w-[542px]"
            }`}
          >
            {variant === "variant2"
              ? "Explore a wide range of childcare options designed to nurture young minds. Find the perfect center that aligns with your family’s needs and values."
              : variant === "variant3"
              ? "Our journey began with a simple belief: every child deserves a nurturing, safe, and inspiring environment to grow. We bring families and daycare centers together to foster growth."
              : "Explore opportunities from trusted daycare centers near you. Start your journey to a fulfilling career in childcare today!"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
