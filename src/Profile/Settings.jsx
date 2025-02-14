import Button from "@/components/button";
import React, { useState } from "react";

const Settings = () => {
  const [isActive, setIsActive] = useState(false);

  const togglePlatform = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div className="bg-white border p-6 rounded-2xl border-gray-200">
      <p className="font-bold text-[28px] font-sour">Settings</p>
      <div className="border-t border-border w-full my-6" />
      <div className="flex my-6 items-center justify-between">
        <div>
          <h3 className="font-semibold text-[20px]">Lorem ipsum</h3>
          <p className="text-[16px] text-black-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <button
          onClick={togglePlatform}
          className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${
            isActive ? "bg-theme2-dark" : "bg-gray-200"
          }`}
        >
          <span
            className={`block w-5 h-5 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out ${
              isActive ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>
      <div className="flex my-6 items-center justify-between">
        <div>
          <h3 className="font-semibold text-[20px]">Lorem ipsum</h3>
          <p className="text-[16px] text-black-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <button
          onClick={togglePlatform}
          className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${
            isActive ? "bg-theme2-dark" : "bg-gray-200"
          }`}
        >
          <span
            className={`block w-5 h-5 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out ${
              isActive ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>
      <div className="flex my-6 items-center justify-between">
        <div>
          <h3 className="font-semibold text-[20px]">Lorem ipsum</h3>
          <p className="text-[16px] text-black-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <button
          onClick={togglePlatform}
          className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${
            isActive ? "bg-theme2-dark" : "bg-gray-200"
          }`}
        >
          <span
            className={`block w-5 h-5 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out ${
              isActive ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
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

export default Settings;
