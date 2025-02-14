import React from "react";

const Hero2 = ({ variant }) => {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-[510px] z-10"
          src="/assets/hero-bg1.png"
          alt=""
        />
        <div className="absolute top-0 w-full gap-7 h-full -mt-10 flex flex-col justify-center items-center text-center">
          {/* Text container with higher z-index */}
          <div className="relative z-50">
            <h3
              className={`font-semibold font-sour text-[80px] ${
                variant === "variant2" ? "max-w-[957px]" : "max-w-[644px]"
              } `}
            >
              {variant === "variant2"
                ? "Find the Perfect Place for Your Little Ones"
                : variant === "variant3"
                ? "We Build Brighter Future Together"
                : "Find Your Perfect Daycare Jobs"}
            </h3>
            {/* Green line positioned absolutely behind the text */}
            <img
              className={`absolute left-1/2 -translate-x-1/2 bottom-[10px] ${
                variant === "variant2" || variant === "variant3"
                  ? "w-[600px]"
                  : "w-[500px]"
              }  -z-10`}
              src="/assets/hero-greenline.svg"
              alt=""
            />
          </div>
          <p
            className={`text-[20px] text-center text-black-medium ${
              variant === "variant2"
                ? "max-w-[663px]"
                : variant === "variant3"
                ? "max-w-[825px]"
                : "max-w-[542px]"
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
