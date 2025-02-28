import Button from "@/components/button";
import Input from "@/components/input";
import React, { useState } from "react";
const faqData = [
  {
    question: "LOREM IPSUM DOLOR SIT AMET?",
    answer:
      "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    question: "LOREM IPSUM DOLOR SIT AMET?",
    answer:
      "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    question: "LOREM IPSUM DOLOR SIT AMET?",
    answer:
      "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    question: "LOREM IPSUM DOLOR SIT AMET?",
    answer:
      "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`mb-2 rounded-lg overflow-hidden bg-white transition-all duration-200 ${
        isOpen ? "border-2 border-theme2-medium" : "border-none"
      }`}
    >
      <button
        className={`w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center gap-4 transition-colors duration-200 ${
          isOpen
            ? "bg-theme2-medium border-2 border-theme2-medium"
            : "bg-transparent border-none"
        }`}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-[#4a7834] font-semibold text-lg sm:text-xl">
          {isOpen ? "−" : "+"}
        </span>
        <span className="font-semibold text-sm  lg:text-lg">{question}</span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out bg-white ${
          isOpen ? "max-h-auto py-2 sm:py-4" : "max-h-0"
        }`}
      >
        <div className="px-6 sm:px-12">
          <p className="text-gray-600 font-medium text-xs  md:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <div className="bg-white border xs:p-4 md:p-4 xl:p-6 rounded-2xl border-gray-200">
      <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-sour">
        Frequently Asked Questions
      </p>
      <div className="border-t border-border w-full my-3" />

      <div className="w-full ">
        {faqData.map((faq, index) => (
          <AccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={index === openIndex}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
