import Button from "@/components/button";
import Input from "@/components/input";
import React from "react";

const EditProfileApplicant = () => {
  return (
    <div className="bg-white border xs:p-4 md:p-4 xl:p-6 rounded-2xl border-gray-200">
      <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-sour">
        Terms and Conditions
      </p>
      <div className="border-t border-border w-full my-3" />
      <div
        className="grid grid-cols-1
       md:grid-cols-3 gap-5"
      >
        <Input type="text" placeholder="John" label="First Name" />
        <Input type="text" placeholder="Smith" label="Middlename" />
        <Input type="text" placeholder="Doe" label="Last Name" />
        <Input
          label="Email"
          type="email"
          placeholder="example@domain.com"
          icon={"/icons/email.svg"}
        />
        <Input
          variant="phone"
          label="Phone Number"
          type="tel"
          placeholder="+41 576 889 324"
          icon={"/icons/country.svg"}
        />
      </div>
      <div className="flex gap-4 mt-5 justify-end w-full ">
        <Button className="px-6" variant="primarySmall">
          Save Changes
        </Button>
        <Button className="px-6" variant="outlineBold2">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default EditProfileApplicant;
