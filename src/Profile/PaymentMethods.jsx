import Button from "@/components/button";
import Input from "@/components/input";
import React, { useState } from "react";

const cards = [
  { type: "visa", logo: "/icons/visa.svg" },
  { type: "mastercard", logo: "/icons/circles.svg" },
  { type: "other", logo: "/icons/amex.svg" },
];
const PaymentMethod = () => {
  return (
    <div className="bg-white border p-6 rounded-2xl border-gray-200">
      <p className="font-bold text-[28px] font-sour">Change Password</p>
      <div className="border-t border-border w-full my-6" />
      <div className=" flex gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between min-w-[291px] w-full h-[146px]  p-4 bg-white rounded-lg border border-gray-200"
          >
            <div className="flex items-center justify-between">
              {/* <span className="text-2xl">{card.logo}</span> */}
              <img src={card.logo} alt="" />
              <button className="text-xs font-semibold text-red-500 hover:text-red-600">
                Remove
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="space-y-1">
                <p className="font-bold text-[18px]">John Doe</p>
                <p className="text-sm text-gray-500">56** 5465 0921 2163</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-end my-4">
        <Button variant="outlineBold2">
          <span className="mr-2">+</span> Add new card
        </Button>
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

export default PaymentMethod;
