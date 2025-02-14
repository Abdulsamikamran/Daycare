"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import Select from "@/components/select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/button";
// import { Input } from "@/components/input";
// import { Label } from "@/components/ui/label"
// import { Checkbox } from "@/components/ui/checkbox"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PaymentForm() {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("card");

  const [activeIndex, setActiveIndex] = useState(null);

  const handleNavigate = () => {
    navigate("/");
  };

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const paymentOptions = [
    {
      value: "card",
      label: "Credit or Debit Card",
      desc: "Visa, MasterCard, PayPal, Amex",
    },
    {
      value: "twint",
      label: "Twint Payment",
      desc: "Pay quickly and securely with TWINT.",
    },
    {
      value: "prepayment",
      label: "Pre-Payment",
      desc: "Avail easy & upfront transactions.",
    },
  ];
  const images = ["/icons/visa.svg", "/icons/circles.svg", "/icons/amex.svg"];

  const PaymentMethodSelector = () => (
    <div className="flex justify-around space-x-4 mb-6">
      {paymentOptions.map((option) => (
        <label
          key={option.value}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <input
            type="radio"
            name="payment"
            value={option.value}
            checked={paymentMethod === option.value}
            onChange={() => setPaymentMethod(option.value)}
            className="hidden"
          />
          <div
            className={`w-4 h-4 border-2 ${
              paymentMethod === option.value
                ? "border-theme1-dark"
                : "border-border"
            } rounded-full flex items-center justify-center`}
          >
            {paymentMethod === option.value && (
              <div className="w-2 h-2 bg-theme1-dark rounded-full"></div>
            )}
          </div>
          <div>
            <p className="font-bold text-[20px]">{option.label}</p>
            <p className="font-medium text-black-medium text-[14px]">
              {option.desc}
            </p>
          </div>
        </label>
      ))}
    </div>
  );

  const CardForm = () => (
    <div className="space-y-4">
      <div className="flex gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={` flex px-4 py-2 items-center justify-center text-white font-bold cursor-pointer transition-all duration-300 rounded-lg border-2 ${
              activeIndex === index
                ? "border-theme1-dark bg-theme1-light"
                : "border-border bg-white"
            }`}
            onClick={() => handleClick(index)}
          >
            <img src={image} alt={`Image ${index + 1}`} className="" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Input
          id="accountHolder"
          label={"Account Holder Name"}
          placeholder="John Doe"
        />

        <Input
          id="cardNumber"
          label={"Card Number"}
          placeholder="0000 0000 0000 0000"
        />

        <Input
          rightIcon={"/icons/calender.svg"}
          id="expiryDate"
          label={"Expiry Date"}
          placeholder="Expiry Date"
        />

        <Input id="cvv" label="CVV" placeholder="CVV" />
      </div>
    </div>
  );

  const TwintForm = () => (
    <div className="space-y-4">
      <Select
        // className="space-y-2"
        label="Bank Name"
        options={[{ value: "bank", label: "Baloise" }]}
      />
      <Input id="iban" type="number" label="IBAN number" />
      <Input
        variant={"phone"}
        type="tel"
        label={"TWINT Mobile Number"}
        placeholder="+41 576 889 324"
      />
    </div>
  );

  const PrepaymentForm = () => (
    <div className="space-y-4">
      <Select
        // className="space-y-2"
        label="Bank Name"
        options={[{ value: "bank", label: "Baloise" }]}
      />
      <div className="grid grid-cols-2 gap-4">
        <Input type="number" label="IBAN number" />
        <Input type="number" label="SWIFT/BIC Code" />
        <Input type="text" label="Account Holder Name" />
        <Input type="number" label="Card number" />
        <Input
          rightIcon={"/icons/calender.svg"}
          id="expiryDate"
          label={"Expiry Date"}
          placeholder="Expiry Date"
        />

        <Input label="CVV" placeholder="CVV" />
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <PaymentMethodSelector />

      {paymentMethod === "card" && <CardForm />}
      {paymentMethod === "twint" && <TwintForm />}
      {paymentMethod === "prepayment" && <PrepaymentForm />}
      <label className="flex items-center my-6 gap-2">
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

      <Button onClick={handleNavigate} fullWidth>
        Pay
      </Button>
    </div>
  );
}
