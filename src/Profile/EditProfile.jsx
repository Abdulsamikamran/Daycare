import { useState } from "react";
import Button from "@/components/button";
import Input from "@/components/input";
import Select from "@/components/select";
import Card1 from "@/components/card1";

export default function EditProfile() {
  const [activeTab, setActiveTab] = useState("Basic Information");

  const positions = [
    { value: "", label: "Select Position" },
    { value: "owner", label: "Owner" },
    { value: "manager", label: "Manager" },
    { value: "employee", label: "Employee" },
  ];
  const tabs = [
    "Basic Information",
    "Location",
    "Contact",
    "Description",
    "Attachments",
  ];

  return (
    <div className="bg-white border xs:p-4 md:p-4 xl:p-6 rounded-2xl border-gray-200">
      <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-sour">
        Edit Profile
      </p>
      <div className="border-t border-border w-full my-3" />

      {/* Tabs */}
      <div className="flex overflow-x-scroll hide-scrollbar gap-2 sm:gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 lg:px-12 border border-border py-2 lg:py-4 rounded-full text-xs whitespace-nowrap sm:text-base transition-colors 
              ${
                activeTab === tab
                  ? "bg-theme2-dark text-white"
                  : "text-black-medium hover:text-gray-700"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === "Basic Information" && (
          <>
            <Input type="text" placeholder="John" label="First Name" />
            <Input type="text" placeholder="Smith" label="Middlename" />
            <Input type="text" placeholder="Doe" label="Last Name" />
            <Select label="Position in company" options={positions} />
          </>
        )}

        {activeTab === "Location" && (
          <>
            <Input type="text" placeholder="3523" label="Company" />
            <Select
              label="Country"
              options={[{ value: "us", label: "United States" }]}
            />
            <Input
              rightIcon="/icons/location.svg"
              type="text"
              placeholder="Street Address"
              label="Street Address"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Select
                label="City"
                options={[
                  { value: "evergreen-hills", label: "Evergreen Hills" },
                ]}
              />
              <Input type="number" placeholder="3523" label="ZIP Code" />
            </div>
          </>
        )}

        {activeTab === "Contact" && (
          <>
            <Input
              label="Email"
              type="email"
              placeholder="example@domain.com"
              icon="/icons/email.svg"
            />
            <Input
              variant="phone"
              label="Phone Number"
              type="tel"
              placeholder="+41 576 889 324"
              icon="/icons/country.svg"
            />
          </>
        )}

        {activeTab === "Description" && (
          <>
            <label className="block text-lg font-semibold text-black-dark">
              Description
            </label>
            <textarea
              className="w-full p-2 border rounded-lg min-h-[150px]"
              placeholder="Enter your description here"
            />
          </>
        )}

        {activeTab === "Attachments" && (
          <>
            <p className="text-lg my-2 font-semibold text-black-dark">
              Daycare Logo
            </p>
            <Card1
              logoSrc="/assets/daycare-logo.svg"
              fileName="LogoImage.jpg"
              fileSize="1.2 MB"
            />
            <p className="text-lg my-2 font-semibold text-black-dark">
              Daycare Gallery
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {[...Array(3)].map((_, i) => (
                <Card1
                  key={i}
                  logoSrc="/assets/daycare-logo.svg"
                  fileName="GalleryImage.jpg"
                  fileSize="1.2 MB"
                />
              ))}
            </div>
            <p className="text-lg my-2 font-semibold text-black-dark">
              Daycare Video
            </p>
            <Card1
              logoSrc="/assets/daycare-logo.svg"
              fileName="Video.mp4"
              fileSize="5.4 MB"
            />
          </>
        )}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-4 mt-5 justify-end w-full">
        <Button className="px-4 sm:px-6" variant="primarySmall">
          Save Changes
        </Button>
        <Button className="px-4 sm:px-6" variant="outlineBold2">
          Cancel
        </Button>
      </div>
    </div>
  );
}
