import React from "react";

const Impact = () => {
  return (
    <div className="bg-theme1-dark mb-6 h-[1047px] text-white py-20 w-full">
      <div className="flex container mx-auto w-full justify-between items-center">
        {/* Left Section */}
        <div className="space-y-3 max-w-[398px]">
          <h3 className="text-[36px] font-bold font-sour">Our Impact</h3>
          <p className="text-[20px]">
            We are fully committed to connecting quality caregivers with trusted
            daycares.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex gap-x-16">
          <div className="space-y-3">
            <h3 className="text-[36px] font-bold font-sour">5000+</h3>
            <p className="text-[20px]">Jobs Successfully Filled</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-[36px] font-bold font-sour">1200+</h3>
            <p className="text-[20px]">Daycare Centers</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-[36px] font-bold font-sour">95%</h3>
            <p className="text-[20px]">Candidate Satisfaction Rate</p>
          </div>
        </div>
      </div>
      <img
        src="/assets/impact.png"
        alt=""
        className="mx-auto  object-contain mt-4"
      />
    </div>
  );
};

export default Impact;
