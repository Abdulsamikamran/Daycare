import Button from "@/components/button";
import Input from "@/components/input";
import Select from "@/components/select";
import React from "react";

const Filters = ({ variant }) => {
  return (
    <div className="h-[136px] max-w-[1147px] -mt-20 relative z-50 mx-auto bg-white p-6 rounded-2xl">
      {variant === "variant2" ? (
        <div className="flex justify-evenly items-end gap-4">
          <Input
            label="Daycare Name"
            placeholder="Bright Futures Academy"
            icon="/icons/search-green.svg"
            className="flex-1 w-[500px]"
          />

          <Select
            className="flex-1"
            label="Category"
            icon="/icons/search-green.svg"
            options={[{ value: "Infants", label: "Infants" }]}
          />
          <Button variant="primarySmall" className="whitespace-nowrap px-10">
            Search
          </Button>
        </div>
      ) : (
        <div className="flex justify-evenly items-end gap-4">
          <Input
            label="Job Title"
            placeholder="Experienced Teacher"
            icon="/icons/search-green.svg"
            className="flex-1 w-[376px]"
          />
          <Select
            className="flex-1"
            label="Location"
            icon="/icons/location-green.svg"
            options={[{ value: "Phuket", label: "Phuket" }]}
          />
          <Select
            className="flex-1"
            label="Category"
            icon="/icons/search-green.svg"
            options={[{ value: "Assistant", label: "Assistant" }]}
          />
          <Button variant="primarySmall" className="whitespace-nowrap px-10">
            Search
          </Button>
        </div>
      )}
    </div>
  );
};

export default Filters;
