import Button from "@/components/button";
import Card3 from "@/components/card3";
import Input from "@/components/input";
import React, { useState } from "react";

const History = () => {
  const [isActive, setIsActive] = useState(false);

  const togglePlatform = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div>
      <div className="bg-white border xs:p-4 md:p-4 xl:p-6 rounded-2xl border-gray-200">
        <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-sour">
          History
        </p>
        <div className="border-t border-border w-full my-3" />
        <div className="flex gap-2 md:gap-7">
          <div className={"w-full flex-1"}>
            <Input
              className={"w-full   "}
              type="text"
              icon={"/icons/search-green.svg"}
              placeholder={"Search here..."}
            />
          </div>
          <Button variant="primarySmall" className="whitespace-nowrap px-16">
            Search
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-4">
          <Card3 />
          <Card3 />
          <Card3 />
          <Card3 />
        </div>
      </div>
      <p className="text-black-medium max-w-[700px] mt-5">
        *Please note that the details provided by applicants, including their
        resumes and contact information, will be sent directly to the company's
        registered email address.
      </p>
    </div>
  );
};

export default History;
