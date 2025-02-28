import React from "react";

const WhyJoin = () => {
  return (
    <div className=" my-10 relative">
      {/* Background Image */}
      <img
        className="w-full hidden lg:block h-[890px] "
        src="assets/background1.png"
        alt=""
      />
      <img
        className="w-full h-[1000px] block lg:hidden "
        src="assets/mobile-background1.png"
        alt=""
      />

      {/* Overlay Container */}
      <div className="absolute inset-0 xs:top-8 md:top-14 lg:top-0 flex flex-col lg:flex-row lg:justify-between items-start  gap-2  lg:items-center container mx-auto px-6 xl:px-10">
        {/* Left Text Content */}
        <div className="text-white lg:max-w-[450px]  xl:max-w-[580px] text-left">
          <h2 className="font-bold font-sour xs:text-[18px] sm:mt-2  md:text-[30px] lg:text-[30px] xl:text-[42px]">
            Why join KinderKrippenJobs?
          </h2>
          <p className="text-[12px] sm:text-[12px] md:text-[20px] lg:text-[16px] xl:text-[24px] leading-[24px] mt-0 sm:mt-5">
            At KinderKrippenJobs, we’re dedicated to helping individuals like
            you find meaningful and fulfilling careers in the world of daycare
            and early childhood education. Our platform connects you with
            trusted daycare centers that value your passion for nurturing young
            minds. With an easy-to-use interface, a wide range of job
            opportunities, and a focus on career growth.
          </p>
        </div>

        {/* Responsive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-3 xl:gap-5 mt-3 md:mt-10 xl:mt-0">
          {[
            {
              img: "/icons/bag-orange.svg",
              title: "Find Your Perfect Job",
              text: "Searching for the right daycare job has never been easier. Quickly find jobs that are the best fit for you.",
            },
            {
              img: "/icons/privacy-orange.svg",
              title: "Privacy and Security",
              text: "We understand the importance of protecting your data, and we have implemented robust measures to ensure a secure and trustworthy online experience.",
            },
            {
              img: "/icons/alert-orange.svg",
              title: "Instant Alerts",
              text: "Receive instant notifications about the status of the jobs you've applied for. Stay informed every step of the way, from application submission to interview scheduling.",
            },
            {
              img: "/icons/community-orange.svg",
              title: "Elevating Communities",
              text: "Together, we can strengthen the foundation of our daycares and cultivate a vibrant community.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white xs:p-4 xl:p-6 space-y-2 rounded-lg w-full xs:max-w-full lg:max-w-[338px] h-auto text-left"
            >
              <img
                src={card.img}
                alt=""
                className=" md:mx-0 w-[32px] sm:w-[40px] md:w-[48px]"
              />
              <h3 className="text-[14px] sm:text-[14px] md:text-[20px] xl:text-[24px] font-semibold font-sour">
                {card.title}
              </h3>
              <p className="text-[12px] sm:text-[12px] md:text-[16px] xl:text-[18px] text-black-medium">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;
