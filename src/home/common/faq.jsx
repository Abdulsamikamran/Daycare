"use client";

import { useState } from "react";

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
      className={`mb-2 rounded-lg max-w-[608px] overflow-hidden bg-white ${
        isOpen ? " border-2 border-theme2-medium" : " border-none"
      }`}
    >
      <button
        className={`w-full px-6 py-4 text-left flex items-center gap-4 transition-colors duration-200 ${
          isOpen
            ? "bg-theme2-medium border-2 border-theme2-medium"
            : "bg-transparent border-none"
        }`}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-[#4a7834] font-semibold text-[20px]">
          {isOpen ? "−" : "+"}
        </span>
        <span className="font-semibold text-[20px]">{question}</span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out bg-white ${
          isOpen ? "max-h-[106px]" : "max-h-0"
        }`}
      >
        <div className="px-12 py-4">
          <p className="text-gray-600 font-medium text-[18px]">{answer}</p>
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
    <div className="w-full h-[568px] bg-theme2-light ">
      <div className="flex items-center justify-between h-full gap-20 container mx-auto">
        <div>
          <h3 className="font-bold text-[36px]">Frequently Asked Questions</h3>
          <p className="text-[20px] max-w-[628px] text-black-medium">
            We are always committed to connecting quality caregivers with
            trusted daycares, creating positive experiences for both staff and
            families.
          </p>
          <img src="/assets/faq-img.png" alt="" />
        </div>
        <div>
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
    </div>
  );
};

export default Faq;
