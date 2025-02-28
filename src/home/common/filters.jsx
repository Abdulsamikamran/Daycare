import Button from "@/components/button";
import Input from "@/components/input";
import Select from "@/components/select";
import React from "react";

const Filters = ({ variant }) => {
  return (
    <div className="xs:h-auto md:h-[136px]  max-w-[1147px] xs:-mt-20 sm:-mt-28 md:-mt-20 relative z-50 xs:mx-8 md:mx-auto bg-white p-6 rounded-2xl">
      {variant === "variant2" ? (
        <div className="flex flex-col w-full md:flex-row justify-evenly xs:items-center md:items-end gap-4">
          <div className=" flex-1 w-full">
            <Input
              label="Daycare Name"
              placeholder="Bright Futures Academy"
              icon="/icons/search-green.svg"
              className="flex-1 w-[500px]"
            />
          </div>

          <div className=" flex-1 w-full">
            <Select
              className="flex-1"
              label="Category"
              icon="/icons/search-green.svg"
              options={[{ value: "Infants", label: "Infants" }]}
            />
          </div>

          <div className=" flex-1 w-full">
            <Button
              fullWidth
              variant="primarySmall"
              className="whitespace-nowrap px-16"
            >
              Search
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full md:flex-row justify-evenly xs:items-center md:items-end gap-4">
          <div className=" flex-1 w-full">
            <Input
              label="Job Title"
              placeholder="Experienced Teacher"
              icon="/icons/search-green.svg"
              className=" xs:w-full md:w-[376px]"
            />
          </div>
          <div className=" flex-1 w-full">
            <Select
              className=" w-full flex-1"
              label="Location"
              icon="/icons/location-green.svg"
              options={[{ value: "Phuket", label: "Phuket" }]}
            />
          </div>
          <div className=" flex-1 w-full">
            <Select
              className=" w-full flex-1"
              label="Category"
              icon="/icons/search-green.svg"
              options={[{ value: "Assistant", label: "Assistant" }]}
            />
          </div>
          <div className=" flex-1 w-full">
            <Button variant="primarySmall" fullWidth className=" px-16">
              Search
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
