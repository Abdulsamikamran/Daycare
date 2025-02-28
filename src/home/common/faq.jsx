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
    <div className="w-full bg-theme2-light py-10 md:py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 px-6">
        <div className="text-start md:text-left space-y-4 md:space-y-6">
          <img
            src="/assets/faq-img.png"
            alt=""
            className="w-48 sm:w-56 md:w-64 lg:w-72 block pb-4 md:hidden mx-auto md:mx-0"
          />
          <h3 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Frequently Asked Questions
          </h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-lg text-black-medium">
            We are always committed to connecting quality caregivers with
            trusted daycares, creating positive experiences for both staff and
            families.
          </p>
          <img
            src="/assets/faq-img.png"
            alt=""
            className="w-48 sm:w-56 md:w-64 lg:w-72 hidden md:block mx-auto md:mx-0"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3 lg:w-1/2">
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
