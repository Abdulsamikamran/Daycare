"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Input from "@/components/input";
import Select from "@/components/select";
import Button from "@/components/button";
import { useNavigate } from "react-router-dom";

const paymentMethods = [
  {
    id: "card",
    title: "Credit or Debit Card",
    description: "Visa, MasterCard, PayPal, Amex",
  },
  {
    id: "twint",
    title: "Twint Payment",
    description: "Pay quickly and securely with TWINT.",
  },
  {
    id: "prepayment",
    title: "Pre-Payments",
    description: "Avail easy & upfront transactions.",
  },
];

export default function PaymentFlow() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleEdit = () => {
    setShowDetails(false);
  };

  const handleNext = () => {
    if (selectedMethod) {
      setShowDetails(true);
    }
  };

  const handleNavigate = () => {
    navigate("/");
  };

  const images = ["/icons/visa.svg", "/icons/circles.svg", "/icons/amex.svg"];

  const renderMethodDetails = () => {
    const method = paymentMethods.find((m) => m.id === selectedMethod);

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-white border border-theme1-dark p-4 rounded-lg mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-4 h-4 border-2 ${
                selectedMethod === method.id
                  ? "border-theme1-dark"
                  : "border-border"
              } rounded-full flex items-center justify-center`}
            >
              {selectedMethod === method.id && (
                <div className="w-2 h-2 bg-theme1-dark rounded-full"></div>
              )}
            </div>
            <div>
              <div className="font-bold text-[16px]">{method.title}</div>
              <div className="text-sm text-gray-500 font-medium">
                {method.description}
              </div>
            </div>
          </div>
          <button onClick={handleEdit} className="text-theme1-dark text-sm">
            Edit
          </button>
        </div>

        {selectedMethod === "card" && (
          <div className="space-y-4">
            <Input
              id="accountHolder"
              label="Account Holder Name"
              placeholder="John Doe"
            />
            <Input
              id="cardNumber"
              label="Card Number"
              placeholder="0000 0000 0000 0000"
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                rightIcon="/icons/calender.svg"
                id="expiryDate"
                label="Expiry Date"
                placeholder="Expiry Date"
              />
              <Input id="cvv" label="CVV" placeholder="CVV" />
            </div>
          </div>
        )}

        {selectedMethod === "twint" && (
          <div className="space-y-4">
            <Select
              label="Bank Name"
              options={[
                { value: "baloise", label: "Baloise" },
                { value: "ubs", label: "UBS" },
                { value: "cs", label: "Credit Suisse" },
              ]}
            />
            <Input id="iban" type="number" label="IBAN Number" />
            <Input
              variant="phone"
              type="tel"
              label="TWINT Mobile Number"
              placeholder="+41 576 889 324"
            />
          </div>
        )}

        {selectedMethod === "prepayment" && (
          <div className="space-y-4">
            <Select
              label="Bank Name"
              options={[
                { value: "baloise", label: "Baloise" },
                { value: "ubs", label: "UBS" },
                { value: "cs", label: "Credit Suisse" },
              ]}
            />
            <div className="grid grid-cols-1 gap-4">
              <Input type="number" label="IBAN Number" />
              <Input type="number" label="SWIFT/BIC Code" />
              <Input
                variant="phone"
                type="tel"
                label="TWINT Mobile Number"
                placeholder="+41 576 889 324"
              />
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-full  p-6">
      <div className="mb-6">
        <button
          onClick={handleEdit}
          className="flex text-[18px] font-bold items-center "
        >
          <ArrowLeft className="w-8 h-5 mr-2" />
          {showDetails ? "Card Details" : "Select Payment Method"}
        </button>
      </div>

      {!showDetails ? (
        <>
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`flex items-center space-x-3 p-4 rounded-lg cursor-pointer ${
                  selectedMethod === method.id
                    ? "bg-theme1-light border border-theme1-dark   "
                    : "bg-gray-50"
                }`}
                onClick={() => setSelectedMethod(method.id)}
              >
                <div
                  className={`w-4 h-4 border-2 ${
                    selectedMethod === method.id
                      ? "border-theme1-dark"
                      : "border-border"
                  } rounded-full flex items-center justify-center`}
                >
                  {selectedMethod === method.id && (
                    <div className="w-2 h-2 bg-theme1-dark rounded-full"></div>
                  )}
                </div>
                <div>
                  <div className="font-bold text-[16px]">{method.title}</div>
                  <div className="text-sm text-gray-500 font-medium">
                    {method.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button
            className="w-full mt-6 bg-[#9FE870] hover:bg-[#8FD460] text-black"
            onClick={handleNext}
            disabled={!selectedMethod}
          >
            Next
          </Button>
        </>
      ) : (
        <>
          {renderMethodDetails()}
          <div className="mt-6">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="peer relative appearance-none shrink-0 w-6 h-6 border-2 border-border rounded-md mt-1 bg-white
                focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-border
                checked:bg-theme2-dark checked:border-0
                disabled:border-steel-400 disabled:bg-steel-400
                after:content-['✔'] after:absolute after:left-[6px] after:top-[6px] after:text-white after:opacity-0 
                checked:after:opacity-100 checked:after:left-[5px] checked:after:top-[1px]"
              />
              <span className="text-[16px] mt-1 text-black font-medium">
                Save this card for future use
              </span>
            </label>
            <Button onClick={handleNavigate} fullWidth className="mt-4">
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
