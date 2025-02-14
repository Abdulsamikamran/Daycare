"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/dialog";
// import { Button } from "@/components/button";
import PaymentForm from "./PaymentForm";
import Button from "@/components/button";
import { DialogTitle } from "@radix-ui/react-dialog";
export default function PricingModal() {
  const [activePlan, setActivePlan] = useState(1);
  const [showPayment, setShowPayment] = useState(false);

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
    <Dialog>
      <DialogTitle></DialogTitle>
      <DialogTrigger asChild>
        <Button fullWidth>Publish Job</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[850px] ">
        {!showPayment ? (
          <div className="w-full px-4 py-6">
            <div className="text-center mb-8">
              <h2 className="text-[36px] font-bold mb-2v">Pricing & Plans</h2>
              <p className="text-[18px]  text-black-medium max-w-2xl mx-auto">
                Choose the subscription that works best for your hiring goals.
                Whether you need short-term access or multiple job postings,
                we’ve got you covered with affordable and manageable plans.
              </p>
            </div>

            <div className="flex justify-center items-stretch gap-4">
              {plans.map((plan, index) => {
                const isActive = activePlan === index;
                return (
                  <div
                    key={index}
                    className={`flex-1 rounded-lg p-6 flex flex-col cursor-pointer transition-colors duration-200 ${
                      isActive
                        ? "bg-theme1-dark border-theme1-light  border-4 text-white"
                        : "bg-background text-black hover:bg-gray-50"
                    }`}
                    style={{ maxWidth: "250px" }}
                    onClick={() => setActivePlan(index)}
                  >
                    <div className="mb-4 ">
                      <h3 className="text-sm text-center font-medium">
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline justify-center mt-2">
                        <span className="text-lg">$</span>
                        <span className="text-3xl font-bold">{plan.price}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
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
                    <Button
                      className="mt-4 text-black-dark"
                      variant="outlineBold2"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowPayment(true);
                      }}
                    >
                      Choose Plan
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <PaymentForm />
        )}
      </DialogContent>
    </Dialog>
  );
}
