import Button from "@/components/button";
import React, { useState } from "react";
import PaymentMethodDrawer from "./PaymentMethodDrawer";

const MobilePricing = () => {
  const [activePlan, setActivePlan] = useState(1);

  const plans = [
    {
      name: "30-DAY PLAN",
      price: "19.90",
      features: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
      ],
    },
    {
      name: "60-DAY PLAN",
      price: "25.90",
      features: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
      ],
    },
    {
      name: "90-DAY PLAN",
      price: "30.90",
      features: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
      ],
    },
  ];
  return (
    <div>
      {" "}
      <div className="flex flex-col w-full justify-center items-strech gap-4">
        {plans.map((plan, index) => {
          const isActive = activePlan === index;
          return (
            <div
              key={index}
              className={`flex-1  items-center p-10 flex flex-col rounded-3xl cursor-pointer transition-colors duration-200 ${
                isActive
                  ? "bg-theme1-dark border-theme1-medium       border-[10px] text-white"
                  : "bg-black-light text-black hover:bg-gray-50"
              }`}
              style={{ maxWidth: "100%" }}
              onClick={() => setActivePlan(index)}
            >
              <div className="mb-4 ">
                <h3 className="text-sm text-center font-semibold">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mt-2">
                  <span className="text-lg">$</span>
                  <span className="text-[36px] font-bold">{plan.price}</span>
                </div>
              </div>
              <div className="flex-grow justify-center">
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={`text-sm ${
                        isActive ? "text-gray-200" : "text-gray-500"
                      }`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <PaymentMethodDrawer />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobilePricing;
