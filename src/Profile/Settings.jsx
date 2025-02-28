import Button from "@/components/button";
import React, { useState } from "react";

const Settings = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const togglePlatform1 = () => setIsActive((prev) => !prev);
  const togglePlatform2 = () => setIsActive2((prev) => !prev);
  const togglePlatform3 = () => setIsActive3((prev) => !prev);

  return (
    <div className="bg-white border p-4 sm:p-6 rounded-2xl border-gray-200">
      <p className="font-bold text-lg sm:text-xl md:text-2xl font-sour">
        Settings
      </p>
      <div className="border-t border-border w-full my-3" />

      {[isActive, isActive2, isActive3].map((state, index) => (
        <div
          key={index}
          className="flex my-4 sm:my-6 items-center justify-between"
        >
          <div>
            <h3 className="font-semibold text-base sm:text-lg md:text-xl">
              Lorem ipsum
            </h3>
            <p className="text-sm sm:text-base text-black-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <button
            onClick={() => {
              if (index === 0) togglePlatform1();
              if (index === 1) togglePlatform2();
              if (index === 2) togglePlatform3();
            }}
            className={`w-[75px] md:w-12 h-5 sm:h-6 rounded-full transition-colors duration-200 ease-in-out ${
              state ? "bg-theme2-dark" : "bg-gray-200"
            }`}
          >
            <span
              className={`block w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out ${
                state
                  ? "translate-x-[26px]   md:translate-x-6"
                  : "translate-x-1"
              }`}
            />
          </button>
        </div>
      ))}

      <div className="flex flex-wrap gap-2 sm:gap-4 mt-5 justify-end w-full">
        <Button className="px-4 sm:px-6" variant="primarySmall">
          Save Changes
        </Button>
        <Button className="px-4 sm:px-6" variant="outlineBold2">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Settings;
