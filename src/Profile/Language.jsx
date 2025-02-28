import Button from "@/components/button";
import React, { useState } from "react";

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const languages = ["english", "french", "german", "italian"];

  return (
    <div className="bg-white border xs:p-4 md:p-4 xl:p-6 rounded-2xl border-gray-200">
      <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-sour">
        Select Language
      </p>
      <div className="border-t border-border w-full my-3" />

      <div className="space-y-4 border border-border rounded-2xl p-4">
        {languages.map((language) => (
          <div
            key={language}
            className="flex items-center py-5 border-b justify-between  cursor-pointer"
            onClick={() => setSelectedLanguage(language)} // Set the selected language
          >
            <p className="capitalize font-semibold text-[18px]">{language}</p>
            <div
              className={`w-4 h-4 border-2 rounded-full flex items-center justify-center 
              ${
                selectedLanguage === language
                  ? "border-theme2-dark"
                  : "border-border"
              }`}
            >
              {selectedLanguage === language && (
                <div className="w-2 h-2 bg-theme2-dark rounded-full"></div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-border w-full my-3" />
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

export default Language;
