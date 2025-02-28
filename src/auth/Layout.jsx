import React from "react";

export default function Layout({ children, heading, start }) {
  return (
    <div className="min-h-screen xs:px-4 md:mx-auto md:max-w-[1440px] w-full xs:flex xs:flex-col md:grid md:grid-cols-2">
      {/* Logo Section */}
      <div
        className={`flex justify-center xs:items-start md:items-center ${
          start ? "xs:hidden md:block" : ""
        }`}
      >
        <img
          src="/assets/logoLarge.svg"
          alt="Kinderkrippenjobs Logo"
          className="xs:max-w-[214.89px] xs:my-10 md:max-w-[300px] md:my-0 lg:max-w-[446px] lg:h-[220px]"
        />
      </div>

      {/* Children Section (Form) */}
      <div
        className={`flex flex-col gap-3 xs:mb-8 md:mb-0 max-w-[554px] mx-auto w-full ${
          start
            ? "justify-start xs:pt-0 md:pt-6"
            : "xs:justify-start md:justify-center"
        }`}
      >
        <h2 className="font-bold font-sour xs:text-[24px] lg:text-[36px]">
          {heading}
        </h2>
        {children}
      </div>
    </div>
  );
}
