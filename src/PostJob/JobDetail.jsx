import { useState } from "react";
import JobDetailsForm from "./JobDetailsForm";
import SharingForm from "./SharingForm";
import PreviewJob from "./PreviewJob";
import ProgressBar from "@/components/progress-bar";
import Layout from "./Layout";
import Button from "@/components/button";
import PricingModal from "./PricingModal";
import MobilePricing from "./MobilePricing";

const steps = [
  {
    id: 1,
    title: "Job Details",
    description:
      "Provide the key information about the job, including the title, description, and category. This helps candidates understand the role and its requirements, ensuring they know exactly what to expect.",
  },
  {
    id: 2,
    title: "Sharing & Publishing",
    description:
      "Enable social media sharing and review the job posting before publishing. Make sure everything is complete and accurate before the listing goes live.",
  },
  {
    id: 3,
    title: "Preview Job",
    description:
      "Take a final look at your job posting before it goes live. Review all the details, make any necessary edits, and ensure everything is accurate before publishing.",
  },
  {
    id: 4,
    title: "Pricing & Plans",
    description:
      "Choose the subscription that works best for your hiring goals. Whether you need short-term access or multiple job postings, we’ve got you covered with affordable and manageable plans.",
  },
];

export default function JobDetail() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    jobTitle: "",
    category: "",
    jobType: "",
    description: "",
    responsibilities: "",
    qualifications: "",
    benefits: [],
    socialSharing: {
      facebook: false,
      whatsapp: false,
      instagram: false,
      linkedin: false,
      tiktok: false,
      snapchat: false,
    },
  });
  //   const handleNavigate=()=>{
  // navigate("/")
  //   }

  const handleUpdateForm = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <JobDetailsForm data={formData} onUpdate={handleUpdateForm} />;
      case 2:
        return <SharingForm data={formData} onUpdate={handleUpdateForm} />;
      case 3:
        return <PreviewJob />;
      case 4:
        return <MobilePricing />;
      default:
        return null;
    }
  };

  const goToNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  const goToPreviousStep2 = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 2);
    }
  };
  const goToLastStep = () => {
    setCurrentStep(4);
  };

  return (
    <Layout>
      <div className=" my-6 w-full">
        <ProgressBar currentStep={currentStep} totalSteps={steps.length} />
        <div className="mb-8">
          <div className="flex gap-4 items-center mb-4">
            <button onClick={goToPreviousStep}>
              <img src="/icons/back.svg" alt="" />
            </button>
            <span className="font-bold text-black-dark xs:text-[24px] lg:text-[36px] font-sour">
              {steps[currentStep - 1].title}
            </span>
          </div>
          <p className="xs:text-[14px] lg:text-[16px] text-black-medium">
            {steps[currentStep - 1].description}
          </p>
        </div>

        <div className="mt-8">{renderStep()}</div>

        <div className="mt-8  flex flex-col gap-4">
          {currentStep > 1 ? (
            <div>
              <div className=" xs:hidden md:block">
                <PricingModal />
                {/* the publish job button is inside the pricing  modal as a trigger*/}
              </div>
              {currentStep < 4 && (
                <div className=" xs:block md:hidden">
                  <Button onClick={goToLastStep} fullWidth>
                    Publish Job
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <Button onClick={goToNextStep} fullWidth>
              Next
            </Button>
          )}
          {currentStep === 2 && (
            <Button fullWidth variant="outlineBold" onClick={goToNextStep}>
              Preview
            </Button>
          )}
          {currentStep === 3 && (
            <Button fullWidth variant="outlineBold" onClick={goToPreviousStep2}>
              Edit Job
            </Button>
          )}
        </div>
      </div>
    </Layout>
  );
}
