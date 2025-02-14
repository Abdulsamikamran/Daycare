import Button from "@/components/Button";
import Input from "@/components/input";
import React, { useState } from "react";

const Subscription = () => {
  const [activePlanId, setActivePlanId] = useState(0); // 30-Day Plan is active by default

  const plans = [
    {
      id: 0,
      name: "30-Day Plan",
      price: "19.90",
      description:
        "Lorem ipsum dolor sit amet · Lorem ipsum dolor sit amet · Lorem ipsum dolor sit amet",
    },
    {
      id: 1,
      name: "60-Day Plan",
      price: "25.90",
      description:
        "Lorem ipsum dolor sit amet · Lorem ipsum dolor sit amet · Lorem ipsum dolor sit amet · Lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      name: "90-Day Plan",
      price: "30.90",
      description:
        "Lorem ipsum dolor sit amet · Lorem ipsum dolor sit amet · Lorem ipsum dolor sit amet",
    },
  ];

  const handleChoosePlan = (planId) => {
    setActivePlanId(planId);
  };

  const handleCancelPlan = () => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this plan?"
    );
    if (confirmCancel) {
      setActivePlanId(null);
    }
  };
  return (
    <div className="bg-white border p-6 rounded-2xl border-gray-200">
      <p className="font-bold text-[28px] font-sour">Subscription Plan</p>
      <div className="border-t border-border w-full my-6" />

      <div className="space-y-10 relative">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative p-6 rounded-xl transition-all duration-200 ${
              activePlanId === plan.id
                ? "border-2 border-theme2-dark bg-theme2-light shadow-sm"
                : "border border-gray-200 hover:border-gray-300"
            }`}
          >
            {activePlanId === plan.id && (
              <span className="absolute right-6 -top-5 bg-theme2-dark font-semibold text-sm px-7 py-3 text-white rounded-full">
                Active Plan
              </span>
            )}

            <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
            <div className="mt-2">
              <span className="text-3xl font-bold text-gray-900">
                ${plan.price}
              </span>
            </div>

            <p className="mt-4 text-sm text-gray-500">{plan.description}</p>

            <div className="mt-6 flex gap-4">
              {activePlanId === plan.id ? (
                <>
                  <Button
                    className="px-9"
                    variant="red"
                    onClick={handleCancelPlan}
                  >
                    Cancel Plan
                  </Button>
                  <Button className="px-9" variant="outlineBold2">
                    Download Invoice
                  </Button>
                </>
              ) : (
                <Button
                  className="px-9"
                  variant="primarySmall"
                  onClick={() => handleChoosePlan(plan.id)}
                >
                  Choose Plan
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
