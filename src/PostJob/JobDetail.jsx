"use client";

import { useState } from "react";
import JobDetailsForm from "./JobDetailsForm";
import SharingForm from "./SharingForm";
import PreviewJob from "./PreviewJob";
import ProgressBar from "@/components/progress-bar";
import Layout from "./Layout";
import Button from "@/components/button";
import PricingModal from "./PricingModal";

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

  return (
    <Layout>
      <div className=" my-6 w-full">
        <ProgressBar currentStep={currentStep} totalSteps={steps.length} />
        <div className="mb-8">
          <div className="flex gap-4 items-center mb-4">
            <button onClick={goToPreviousStep}>
              <img src="/icons/back.svg" alt="" />
            </button>
            <span className="font-bold text-black-dark  text-[36px] font-sour">
              {steps[currentStep - 1].title}
            </span>
          </div>
          <p className="text-[16px] text-black-medium">
            {steps[currentStep - 1].description}
          </p>
        </div>

        <div className="mt-8">{renderStep()}</div>

        <div className="mt-8 flex flex-col gap-4">
          {currentStep > 1 ? (
            <PricingModal />
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
            <Button fullWidth variant="outlineBold" onClick={goToPreviousStep}>
              Edit Job
            </Button>
          )}
        </div>
      </div>
    </Layout>
  );
}
