import Button from "@/components/button";
import Card4 from "@/components/card4";
import React from "react";

const Applicant = () => {
  return (
    <div>
      <div className="bg-white border p-6 rounded-2xl border-gray-200">
        <p className="font-bold text-[28px] font-sour">Applicants</p>
        <div className="border-t border-border w-full my-6" />
        <div className="grid-cols-2 grid gap-4">
          <Card4 />
          <Card4 />
          <Card4 />
          <Card4 />
          <Card4 />
        </div>
        <div className="flex gap-4 justify-end w-full ">
          <Button className="px-6" variant="primarySmall">
            Save Changes
          </Button>
          <Button className="px-6" variant="outlineBold2">
            Cancel
          </Button>
        </div>
      </div>
      <p className=" text-[14px] max-w-[500px] text-black-medium mt-10">
        *Please note that the details provided by applicants, including their
        resumes and contact information, will be sent directly to the company's
        registered email address.
      </p>
    </div>
  );
};

export default Applicant;
