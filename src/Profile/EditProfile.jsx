"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Button from "@/components/button";
import Input from "@/components/input";
import Select from "@/components/select";
import Card1 from "@/components/card1";

export default function EditProfile() {
  const [activeTab, setActiveTab] = useState("Basic Information");

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
  const tabs = [
    "Basic Information",
    "Location",
    "Contact",
    "Description",
    "Attachments",
  ];

  return (
    <div className="bg-white border p-6 rounded-2xl border-gray-200">
      <p className="font-bold text-[28px] font-sour">Edit Profile</p>
      <div className="border-t border-border w-full my-6" />
      <div className="flex gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-12 border border-border py-4 rounded-full text-[16px] transition-colors
              ${
                activeTab === tab
                  ? "bg-theme2-dark text-white"
                  : "text-black-medium hover:text-gray-700"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Basic Information" && (
        <div className="space-y-6">
          <Input type="text" placeholder="John" label="First Name" />
          <Input type="text" placeholder="Smith" label="Middlename" />
          <Input type="text" placeholder="Doe" label="Last Name" />

          <Select
            className="space-y-2"
            label="Position in company"
            options={positions}
          />
        </div>
      )}

      {/* Other tab content components would go here */}
      {activeTab === "Location" && (
        <div className="text-gray-500">
          <div className="space-y-6">
            <Input type="text" placeholder="3523" label="Company" />

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
        </div>
      )}
      {activeTab === "Contact" && (
        <div className="text-gray-500">
          <div className="space-y-6">
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
        </div>
      )}
      {activeTab === "Description" && (
        <div className="text-gray-500">
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
        </div>
      )}
      {activeTab === "Attachments" && (
        <div>
          <p className="text-[18px] my-2 font-semibold text-black-dark">
            Daycare Logo
          </p>
          <div className="w-1/2 mr-3">
            <Card1
              logoSrc={"/assets/daycare-logo.svg"}
              fileName={"LogoImage.jpg"}
              fileSize={"1.2 MB"}
            />
          </div>
          <p className="text-[18px] my-2 font-semibold text-black-dark">
            Daycare Gallery
          </p>
          <div className="grid grid-cols-2 w-full gap-3">
            <Card1
              logoSrc={"/assets/daycare-logo.svg"}
              fileName={"LogoImage.jpg"}
              fileSize={"1.2 MB"}
            />{" "}
            <Card1
              logoSrc={"/assets/daycare-logo.svg"}
              fileName={"LogoImage.jpg"}
              fileSize={"1.2 MB"}
            />{" "}
            <Card1
              logoSrc={"/assets/daycare-logo.svg"}
              fileName={"LogoImage.jpg"}
              fileSize={"1.2 MB"}
            />
          </div>
          <p className="text-[18px] my-2 font-semibold text-black-dark">
            Daycare Video
          </p>
          <Card1
            logoSrc={"/assets/daycare-logo.svg"}
            fileName={"LogoImage.jpg"}
            fileSize={"1.2 MB"}
          />
        </div>
      )}
      <div className="flex gap-4 mt-5 justify-end w-full ">
        <Button className="px-6" variant="primarySmall">
          Save Changes
        </Button>
        <Button className="px-6" variant="outlineBold2">
          Cancel
        </Button>
      </div>
    </div>
  );
}
