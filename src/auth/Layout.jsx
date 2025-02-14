import React from "react";

export default function Layout({ children, heading, start }) {
  return (
    <div className="min-h-screen max-w-[1440px] w-full mx-auto  grid md:grid-cols-2  ">
      <div className="flex items-center justify-center">
        <img
          src="/assets/logoLarge.svg"
          alt="Kinderkrippenjobs Logo"
          className="max-w-[446px] h-[220px]"
        />
      </div>

      {/* Children Section (Form) */}
      <div
        className={`flex flex-col gap-3 max-w-[554px]  mx-auto w-full ${
          start ? "justify-start pt-6" : "justify-center"
        }`}
      >
        <h2 className="font-bold font-sour text-[36px]">{heading}</h2>
        {children}
      </div>
    </div>
  );
}
