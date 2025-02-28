import { useState, useEffect } from "react"; // Add useEffect
import { X, ArrowLeft, Upload, Check } from "lucide-react";
import Input from "./input";
import Button from "./button";

const steps = [
  "Full Name",
  "Contact Information",
  "Upload Resume",
  "Cover Letter",
  "Review Application",
  "Thank You",
];

export default function ApplyJobModal({ isOpen, setIsOpen }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
  });

  // Prevent scrolling behind the modal
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }

    // Cleanup function to reset overflow when the modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  const handleNext = () => {
    if (currentStep === steps.length - 1) {
      // If it's the last step, close the modal
      setIsOpen(false);
    } else {
      // Otherwise, go to the next step
      setCurrentStep((prev) => prev + 1);
    }
  };
  const handleBack = () => setCurrentStep((prev) => prev - 1);

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <Input type="text" placeholder="John" label="First Name" />
            <Input type="text" placeholder="Smith" label="Middlename" />
            <Input type="text" placeholder="Doe" label="Last Name" />
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="example@domain.com"
              icon={"/icons/email.svg"}
            />
            <Input
              variant="phone"
              label="Phone Number"
              type="tel"
              placeholder="+41 576 889 324"
              icon={"/icons/country.svg"}
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <p className="text-lg font-semibold">Resume</p>

            <div className="flex items-center gap-3 w-full h-[95px] p-3 bg-white rounded-lg shadow">
              <div className="flex items-center justify-center">
                <img src="/icons/pdf.svg" alt="logo" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[18px] font-semibold text-black-dark truncate">
                  TourGuide.ppt
                </p>
                <p className="text-xs text-gray-500">4.5 MB</p>
              </div>
              <div className="flex items-center gap-4">
                <button className="ml-1">
                  <img src="/icons/trash.svg" alt="Delete" />
                </button>

                <button className="ml-1">
                  <img src="/icons/download-black.svg" alt="Delete" />
                </button>

                <button className="ml-1">
                  <img src="/icons/green-dot.svg" alt="Delete" />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-end justify-center">
              <button className=" px-5 py-2 rounded-full border-black-dark border-2 text-[16px] font-semibold">
                Upload Resume
              </button>
              <p className="font-medium text-[14px] text-black-medium">
                DOC, DOCX, PDF (2 MB)
              </p>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <p className="text-lg font-semibold">Cover Letter (Optional)</p>
            <textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              placeholder="Write text here..."
              className="min-h-[200px] w-full border rounded p-2"
            />
          </div>
        );
      case 4:
        return (
          <div class=" p-2 space-y-6">
            <div>
              <h3 class="font-bold font-sour text-[20px]">Full Name</h3>
              <div class="flex justify-between gap-4 text-sm text-gray-700 mt-2">
                <div>
                  <p className="font-bold text-[18px]">First Name</p>
                  <p class="text-[18px] mt-2 text-black-medium text-sm md:text-[18px]">
                    John
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[18px]">Middle Name</p>
                  <p class="text-[18px] mt-2 text-black-medium text-sm md:text-[18px]">
                    Smith
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[18px]">Last Name</p>
                  <p class="text-[18px] mt-2 text-black-medium text-sm md:text-[18px]">
                    Doe
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 class="font-bold font-sour text-[20px]">
                Contact Information
              </h3>
              <div class="grid grid-cols-2 gap-4 text-sm text-gray-700 mt-2">
                <div>
                  <p className="font-bold text-[18px]">Email Address</p>
                  <p class="text-sm md:text-[18px] mt-2 text-black-medium ">
                    example@domain.com
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[18px]">Phone Number</p>
                  <p class="text-sm md:text-[18px] mt-2 text-black-medium ">
                    +41 576 889 324
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full h-[95px] p-3 bg-white rounded-lg shadow">
              <div className="flex items-center justify-center">
                <img src="/icons/pdf.svg" alt="logo" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[18px] font-semibold text-black-dark truncate">
                  TourGuide.ppt
                </p>
                <p className="text-xs text-gray-500">4.5 MB</p>
              </div>

              <button className="ml-1">
                <img src="/icons/download-black.svg" alt="Delete" />
              </button>
            </div>

            <div>
              <h3 class="font-bold font-sour text-[20px]">Cover Letter</h3>
              <h3 className="font-bold text-[18px] mt-2">
                Cover Letter (Optional)
              </h3>
              <p class="text-[18px] mt-2 text-black-medium text-sm md:text-[18px]">
                Write your text here...
              </p>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="text-center space-y-4">
            <div className=" flex items-center justify-center mx-auto">
              <img src=" /icons/success-tick.svg" alt="" />
            </div>
            <h2 className="text-[36px] font-bold font-sour">
              Thank you for applying!
            </h2>
            <p className="text-black-medium text-[20px]">
              Your application has been sent to
              <span className="font-bold text-theme2-dark ml-1">
                Marchielle Daycare
              </span>
              . They will review your details and get in touch if you're
              shortlisted. Best of luck!
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    isOpen && (
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 z-50 flex  items-center justify-center bg-black-dark/50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-background  mx-4 rounded-[24px] max-w-[640px] w-full relative"
        >
          {currentStep < 5 && (
            <div className=" bg-white w-full border-b border-border rounded-t-[24px] p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-1 ">
                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <img src="/icons/back.svg" className="w-7" alt="" />{" "}
                  </button>
                )}
                <h2 className="text-xl font-sour font-bold">
                  {steps[currentStep]}
                </h2>
              </div>
            </div>
          )}
          <div className="p-5">
            {renderStep()}

            <Button fullWidth onClick={handleNext} className="mt-4">
              {currentStep === 4 ? "Submit Application" : "Continue"}
            </Button>
          </div>
        </div>
      </div>
    )
  );
}
