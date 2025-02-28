import React from "react";

const Trusted = () => {
  return (
    <div className="my-28 container mx-auto flex flex-col justify-center items-center">
      <p className="py-8 font-semibold text-[20px] text-center">
        Trusted by over 50,000 companies
      </p>
      {/* Company Logos in Flex */}
      <div className="flex xs:flex-wrap lg:flex-nowrap justify-center items-center gap-5  lg:gap-9 gap-y-8 px-4">
        {[...Array(7)].map((_, index) => (
          <img
            key={index}
            src={`/icons/company${index + 1}.svg`}
            alt={`Company ${index + 1}`}
            className="w-[80px] sm:w-[80px] md:w-[180px] lg:w-[200px] object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Trusted;
