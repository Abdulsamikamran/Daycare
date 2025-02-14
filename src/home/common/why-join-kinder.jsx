import React from "react";

const WhyJoin = () => {
  return (
    <div className="py-6 relative">
      {/* Background Image */}
      <img
        className="w-full h-[890px] object-fit "
        src="assets/background1.png"
        alt=""
      />

      {/* Overlay Container */}
      <div className="absolute  inset-0 flex justify-between items-center container mx-auto">
        {/* Left Text Content */}
        <div className="text-white max-w-[580px]">
          <h2 className="font-bold font-sour text-[36px]">
            Why join KinderKrippenJobs?
          </h2>
          <p className="text-[20px] leading-relaxed">
            At KinderKrippenJobs, we’re dedicated to helping individuals like
            you find meaningful and fulfilling careers in the world of daycare
            and early childhood education. Our platform connects you with
            trusted daycare centers that value your passion for nurturing young
            minds. With an easy-to-use interface, a wide range of job
            opportunities, and a focus on career growth.
          </p>
        </div>

        {/* Right Side Grid */}
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-white p-6 space-y-2 rounded-lg w-[338px] h-[234px]">
            <img src="/icons/bag-orange.svg" alt="" />
            <h3 className="text-[24px] font-semibold font-sour">
              Find Your Perfect Job
            </h3>
            <p className="text-[18px] text-black-medium">
              Searching for the right daycare job has never been easier. Quickly
              find jobs that are the best fit for you.
            </p>
          </div>
          <div className="bg-white  p-6 space-y-2  rounded-lg w-[338px] h-[298.64px]">
            <img src="/icons/privacy-orange.svg" alt="" />
            <h3 className="text-[24px] font-semibold font-sour">
              Privacy and Security
            </h3>
            <p className="text-[18px] text-black-medium">
              We understand the importance of protecting your data, and we have
              implemented robust measures to ensure a secure and trustworthy
              online experience.
            </p>
          </div>
          <div className="bg-white  p-6 space-y-2  rounded-lg w-[338px] -mt-16 h-[298.64px]">
            <img src="/icons/alert-orange.svg" alt="" />
            <h3 className="text-[24px] font-semibold font-sour">
              Instant Alerts
            </h3>
            <p className="text-[18px] text-black-medium">
              Receive instant notifications about the status of the jobs you've
              applied for. Stay informed every step of the way, from application
              submission to interview scheduling.
            </p>
          </div>
          <div className="bg-white  p-6 space-y-2  rounded-lg w-[338px] h-[234px]">
            <img src="/icons/community-orange.svg" alt="" />
            <h3 className="text-[24px] font-semibold font-sour">
              Elevating Communities
            </h3>
            <p className="text-[18px] text-black-medium">
              Together, we can strengthen the foundation of our daycares and
              cultivate a vibrant community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;
