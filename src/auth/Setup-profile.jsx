import { useState } from "react";

import Layout from "./Layout";
import FormStep from "@/components/form-steps";
import FileUpload from "@/components/file-upload";
import ProgressBar from "@/components/progress-bar";
import Input from "@/components/input";
import Select from "@/components/select";
import { Switch } from "@/components/switch";
import { FileImage, Trash2 } from "lucide-react";
import Button from "@/components/button";
import { useNavigate } from "react-router-dom";

const TOTAL_STEPS = 8;

export default function SetupProfile() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    personalInfo: {},
    contactInfo: {},
    location: {},
    notifications: [],
    logo: null,
    images: [],
    video: null,
    mission: "",
  });
  const positions = [
    { value: "", label: "Select Position" },
    { value: "owner", label: "Owner" },
    { value: "manager", label: "Manager" },
    { value: "employee", label: "Employee" },
  ];

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    } else {
      navigate("/post-job");
    }
  };

  const handleSkip = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    } else {
      navigate("/post-job");
    }
  };

  const updateFormData = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };
  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <FormStep
            step={currentStep}
            onBack={handleBack}
            heading="Setup your profile"
            title="Tell us how you'd like to be addressed."
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            }
            onNext={handleNext}
            onSkip={handleSkip}
          >
            <div className="space-y-4">
              <Input type="text" placeholder="John" label="First Name" />
              <Input type="text" placeholder="Smith" label="Middlename" />
              <Input type="text" placeholder="Doe" label="Last Name" />

              <Select
                className="space-y-2"
                label="Position in company"
                options={positions}
              />
            </div>
          </FormStep>
        );

      case 2:
        return (
          <FormStep
            step={currentStep}
            onBack={handleBack}
            heading={"Setup your profile"}
            title="Where are you located?"
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            }
            onNext={handleNext}
            onSkip={handleSkip}
          >
            <div className="space-y-4">
              <Input type="text" placeholder="3523" label="Company Name" />

              <Select
                className="space-y-2"
                label="Country"
                options={[{ value: "us", label: "United States" }]}
              />
              <Input
                rightIcon="/icons/location.svg"
                type="text"
                placeholder="Street Address"
                label="Street Address"
              />

              <div className="grid grid-cols-2 gap-4">
                <Select
                  className="space-y-2"
                  label="City"
                  options={[
                    { value: "evertgreen-hills", label: "Evergreen Hills" },
                  ]}
                />
                <Input type="number" placeholder="3523" label="ZIP Code" />
              </div>
            </div>
          </FormStep>
        );

      case 3:
        return (
          <FormStep
            step={currentStep}
            onBack={handleBack}
            heading="Setup your profile"
            title="How can we reach you?"
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            }
            onNext={handleNext}
            onSkip={handleSkip}
          >
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
          </FormStep>
        );

      case 4:
        return (
          <FormStep
            step={currentStep}
            onBack={handleBack}
            heading="Setup your profile"
            title="How you'd like to receive updates?"
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            }
            onNext={handleNext}
            onSkip={handleSkip}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between bg-white p-2 rounded-md">
                <div className="space-y-0.5">
                  <h4 className="xs:text-[16px] md:text-[20px] font-semibold">
                    New Job Postings
                  </h4>
                  <p className="xs:text-[14px] md:text-[16px] text-gray-500">
                    Get notified when new daycare jobs are posted in your area.
                  </p>
                </div>
                <Switch
                  checked={formData.notifications.includes("jobs")}
                  onCheckedChange={(checked) => {
                    updateFormData(
                      "notifications",
                      checked
                        ? [...formData.notifications, "jobs"]
                        : formData.notifications.filter((n) => n !== "jobs")
                    );
                  }}
                />
              </div>

              <div className="flex items-center justify-between bg-white p-2 rounded-md">
                <div className="space-y-0.5">
                  <h4 className="xs:text-[16px] md:text-[20px] font-semibold">
                    New Feedback
                  </h4>
                  <p className="xs:text-[14px] md:text-[16px] text-gray-500">
                    Get notified when new feedbacks are posted in your jobs.
                  </p>
                </div>
                <Switch
                  checked={formData.notifications.includes("feedback")}
                  onCheckedChange={(checked) => {
                    updateFormData(
                      "notifications",
                      checked
                        ? [...formData.notifications, "feedback"]
                        : formData.notifications.filter((n) => n !== "feedback")
                    );
                  }}
                />
              </div>

              <div className="flex items-center justify-between bg-white p-2 rounded-md">
                <div className="space-y-0.5">
                  <h4 className="xs:text-[16px] md:text-[20px] font-semibold">
                    Saved Jobs Expiring
                  </h4>
                  <p className="xs:text-[14px] md:text-[16px] text-gray-500">
                    Get a reminder when a saved job will be to expire or be
                    removed.
                  </p>
                </div>
                <Switch
                  checked={formData.notifications.includes("expiring")}
                  onCheckedChange={(checked) => {
                    updateFormData(
                      "notifications",
                      checked
                        ? [...formData.notifications, "expiring"]
                        : formData.notifications.filter((n) => n !== "expiring")
                    );
                  }}
                />
              </div>
            </div>
          </FormStep>
        );

      case 5:
        return (
          <FormStep
            step={currentStep}
            onBack={handleBack}
            heading={"Build Your Company Profile"}
            title="What's your mission and values?"
            description="Add your company details, showcase your facility, and share what makes your daycare a special place to work."
            onNext={handleNext}
            onSkip={handleSkip}
          >
            <div>
              <label className="block text-[18px] font-semibold text-black-dark">
                Description
              </label>
              <textarea
                className="w-full p-2 border rounded-lg min-h-[150px]"
                placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus sapiente praesentium voluptates dolorum similique quod architecto, rem autem modi sunt."
                onChange={(e) => updateFormData("mission", e.target.value)}
              />
            </div>
          </FormStep>
        );

      case 6:
        return (
          <FormStep
            step={currentStep}
            onBack={handleBack}
            heading={"Build Your Company Profile"}
            title="What's your daycare's logo?"
            description="Add your company details, showcase your facility, and share what makes your daycare a special place to work."
            onNext={handleNext}
            onSkip={handleSkip}
          >
            <FileUpload
              acceptedTypes="image/*"
              instruction="Drag and drop your files here"
              onFileSelect={(files) => updateFormData("logo", files[0])}
            />
            <p className="font-bold text-[20px] my-4">Uploaded Files</p>
            <div className="flex items-center gap-3 max-w-[277px] h-[95px] p-3 bg-white rounded-lg ">
              <div className="flex items-center justify-center w-10 h-10 bg-violet-100 rounded-full">
                <img src="/assets/daycare-logo.svg" alt="logo" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[18px] font-semibold text-theme2-dark truncate">
                  LogoImage.jpg
                </p>
                <p className="text-xs text-gray-500">1.2 MB</p>
              </div>
              <button variant="ghost" size="icon">
                <img src="/icons/trash.svg" className="ml-1" alt="trash" />
              </button>
            </div>
          </FormStep>
        );

      case 7:
        return (
          <FormStep
            step={currentStep}
            onBack={handleBack}
            heading={"Build Your Company Profile"}
            title="What does your daycare look like?"
            description="Add your company details, showcase your facility, and share what makes your daycare a special place to work."
            onNext={handleNext}
            onSkip={handleSkip}
          >
            <FileUpload
              acceptedTypes="image/*"
              multiple={true}
              instruction="Drag and drop your images here"
              onFileSelect={(files) => updateFormData("images", files)}
            />
            <p className="font-bold text-[20px] my-4">Uploaded Files</p>
            <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 xs:max-w-full md:max-w-[277px] h-[95px] p-3 bg-white rounded-lg ">
                <div className="">
                  <img src="/assets/upload-img1.svg" alt="logo" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[18px] font-semibold text-theme2-dark truncate">
                    Image.jpg
                  </p>
                  <p className="text-xs text-gray-500">1.2 MB</p>
                </div>
                <button variant="ghost" size="icon">
                  <img src="/icons/trash.svg" className="ml-1" alt="trash" />
                </button>
              </div>
              <div className="flex items-center gap-3 xs:max-w-full md:max-w-[277px] h-[95px] p-3 bg-white rounded-lg ">
                <div className="">
                  {/* <FileImage className="w-5 h-5 text-violet-600" /> */}
                  <img src="/assets/upload-img2.svg" alt="logo" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[18px] font-semibold text-theme2-dark truncate">
                    LogoImage.jpg
                  </p>
                  <p className="text-xs text-gray-500">1.2 MB</p>
                </div>
                <button variant="ghost" size="icon">
                  <img src="/icons/trash.svg" className="ml-1" alt="trash" />
                  {/* <Trash2 className="h-4 w-4" /> */}
                </button>
              </div>
              <div className="flex items-center gap-3 xs:max-w-full md:max-w-[277px] h-[95px] p-3 bg-white rounded-lg ">
                <div className="">
                  {/* <FileImage className="w-5 h-5 text-violet-600" /> */}
                  <img src="/assets/upload-img3.svg" alt="logo" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[18px] font-semibold text-theme2-dark truncate">
                    LogoImage.jpg
                  </p>
                  <p className="text-xs text-gray-500">1.2 MB</p>
                </div>
                <button variant="ghost" size="icon">
                  <img src="/icons/trash.svg" className="ml-1" alt="trash" />
                  {/* <Trash2 className="h-4 w-4" /> */}
                </button>
              </div>
            </div>
          </FormStep>
        );

      case 8:
        return (
          <FormStep
            step={currentStep}
            onBack={handleBack}
            heading={"Build Your Company Profile"}
            title="What's a glimpse inside your daycare?"
            description="Add your company details, showcase your facility, and share what makes your daycare a special place to work."
            onNext={handleNext}
            onSkip={handleSkip}
          >
            <FileUpload
              acceptedTypes="video/*"
              instruction="Drag and drop your videos here"
              onFileSelect={(files) => updateFormData("video", files[0])}
            />
            <p className="font-bold text-[20px] my-4">Uploaded Files</p>

            <div className="flex items-center gap-3 max-w-full h-[95px] p-3 bg-white rounded-lg ">
              <div className="">
                {/* <FileImage className="w-5 h-5 text-violet-600" /> */}
                <img src="/assets/upload-img3.svg" alt="logo" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[18px] font-semibold text-theme2-dark truncate">
                  DaycareTour.mp4{" "}
                </p>
                <p className="text-xs text-gray-500">1.2 MB</p>
              </div>
              <button variant="ghost" size="icon">
                <img src="/icons/trash.svg" className="ml-1" alt="trash" />
              </button>
            </div>
          </FormStep>
        );

      default:
        return null;
    }
  };

  return (
    <Layout start>
      <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />
      <div
        className={`flex justify-center xs:items-start md:items-center md:hidden xs:block" 
        }`}
      >
        <img
          src="/assets/logoLarge.svg"
          alt="Kinderkrippenjobs Logo"
          className="xs:max-w-[214.89px] xs:mb-4  "
        />
      </div>

      {renderStep()}
    </Layout>
  );
}
