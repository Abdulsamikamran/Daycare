import Button from "@/components/button";
import React, { useState } from "react";

const Terms = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const languages = ["english", "french", "german", "italian"];

  return (
    <div className="bg-white border xs:p-4 md:p-4 xl:p-6 rounded-2xl border-gray-200">
      <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-sour">
        Terms and Conditions
      </p>
      <div className="border-t border-border w-full my-3" />

      <div className=" text-black-medium space-y-6">
        <p>
          Lorem ipsum dolor sit amet consectetur. Lacinia maecenas dignissim
          suspendisse ipsum nulla sed sagittis. Tristique nisi quis porttitor
          sed quam ultricies. Sollicitudin eros sit et lacus. Viverra posuere
          volutpat quam donec sit. Posuere faucibus non pharetra non a augue.
          Scelerisque faucibus malesuada at massa eu purus sed diam massa.
        </p>

        <p>
          A posuere purus semper ut tempor morbi proin fermentum diam. Ornare
          vehicula arcu ut magna mi scelerisque diam. Purus etiam in enim nullam
          sodales posuere in.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur. Lacinia maecenas dignissim
          suspendisse ipsum nulla sed sagittis. Tristique nisi quis porttitor
          sed quam ultricies. Sollicitudin eros sit et lacus. Viverra posuere
          volutpat quam donec sit. Posuere faucibus non pharetra non a augue.
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>
            Scelerisque faucibus malesuada at massa eu purus sed diam massa.
          </li>
          <li>A posuere purus semper ut tempor morbi proin fermentum diam.</li>
          <li>Ornare vehicula arcu ut magna mi scelerisque diam.</li>
        </ul>

        <p>
          Lorem ipsum dolor sit amet consectetur. Lacinia maecenas dignissim:
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>suspendisse ipsum nulla sed sagittis.</li>
          <li>Tristique nisi quis porttitor sed quam ultricies.</li>
          <li>
            Sollicitudin eros sit et lacus verra posuere volutpat quam donec
            sit.
          </li>
          <li>Posuere faucibus non pharetra non a augue.</li>
        </ul>
      </div>
    </div>
  );
};

export default Terms;
