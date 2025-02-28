import { useState } from "react";
import Button from "@/components/button";
import Card3 from "@/components/card3";

export default function Favourites() {
  const [activeTab, setActiveTab] = useState("Daycare Centers");

  const tabs = ["Daycare Centers", "Jobs"];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8">
      <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-sour">
        Favourites
      </p>
      <div className="border-t border-border w-full my-3" />
      <div className="flex overflow-x-scroll hide-scrollbar gap-2 sm:gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 lg:px-12 border border-border py-2 lg:py-4 rounded-full text-xs whitespace-nowrap sm:text-base transition-colors 
            ${
              activeTab === tab
                ? "bg-theme2-dark text-white"
                : "text-black-medium hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Daycare Centers" && (
        <div className="grid md:grid-cols-2 gap-10">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="w-full max-w-[424px] bg-white rounded-lg p-3 sm:p-4 md:p-5 border border-border cursor-pointer"
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                {/* Left Side */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <img
                    src="/icons/favourite-card.svg"
                    alt="favorite icon"
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <div>
                    <p className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                      Sunny Skies Childcare
                    </p>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <img
                        src="/icons/location.svg"
                        alt="location icon"
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                      <p className="text-xs sm:text-sm md:text-base text-gray-500">
                        Bahnhofstrasse 25
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src="/icons/heart-red.svg"
                  alt="heart icon"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mt-3">
                Lorem ipsum dolor sit amet consectetur. Lacinia cenas dignissim
                suspendisse ipsum nulla sed sagittis. Posuere faucibus non
                pharetra.
              </p>
            </div>
          ))}
        </div>
      )}

      {activeTab === "Jobs" && (
        <div className="grid md:grid-cols-2 gap-10">
          <Card3 heart />
          <Card3 heart />
          <Card3 heart />
          <Card3 heart />
        </div>
      )}

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
}
