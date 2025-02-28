import { ArrowLeft } from "lucide-react"; // Import Lucide back arrow icon
import Button from "./button";

export default function FormStep({
  title,
  heading,
  description,
  children,
  onNext,
  onSkip,
  onBack,
  step,
}) {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center gap-4 mb-4">
        {step > 1 && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-theme2-dark font-semibold hover:opacity-80 transition-opacity"
          >
            <img src="/icons/back.svg" alt="" />
          </button>
        )}
        <h2 className="font-bold font-sour xs:text-[24px] md:text-[36px]">
          {heading}
        </h2>
      </div>

      {/* Description & Title */}
      {description && (
        <p className="text-black-medium xs:py-0 md:py-6 xs:text-[14px] md:text-[16px]">
          {description}
        </p>
      )}
      <h2 className="font-bold font-sour py-2 xs:text-[18px] md:text-[28px]">
        {title}
      </h2>

      {/* Form Content */}
      <div>{children}</div>

      {/* Buttons */}
      <div className="flex flex-col mt-8 space-y-3">
        <Button fullWidth onClick={onNext}>
          Next
        </Button>
        <Button
          onClick={onSkip}
          fullWidth
          variant="outline"
          className="text-[20px] font-semibold"
        >
          Skip
        </Button>
      </div>
    </div>
  );
}
