import Button from "@/components/button";
import Card3 from "@/components/card3";
import Input from "@/components/input";
import Select from "@/components/select";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const socialPlatforms = [
  { id: "facebook", name: "Facebook", icon: "/icons/facebook-sm.svg" },
  { id: "whatsapp", name: "WhatsApp", icon: "/icons/whatsapp.svg" },
  { id: "instagram", name: "Instagram", icon: "/icons/instagram.svg" },
  { id: "linkedin", name: "LinkedIn", icon: "/icons/linkedin.svg" },
  { id: "tiktok", name: "TikTok", icon: "/icons/tiktok.svg" },
  { id: "snapchat", name: "Snapchat", icon: "/icons/snapchat.svg" },
  { id: "tumblr", name: "Tumblr", icon: "/icons/tumblr.svg" },
];

const MyJobs = () => {
  const navigate = useNavigate();
  const [editClick, setEditClick] = useState(false);
  const [saveClick, setSaveClick] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const togglePlatform = () => {
    setIsActive((prev) => !prev);
  };

  const handleBack = () => {
    setEditClick(false);
  };

  const handleSave = () => {
    navigate("/profile");
    setSaveClick(true);
    setEditClick(true);
  };

  return (
    <div className="bg-white border xs:p-4 md:p-4 xl:p-6 rounded-2xl border-gray-200">
      {saveClick ? (
        <div className="space-y-8">
          <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-sour">
            Share & Publishing
          </p>
          <div className="border-t border-border w-full my-6" />

          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl">
              Social Sharing
            </h3>
            <button
              onClick={togglePlatform}
              className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${
                isActive ? "bg-theme2-dark" : "bg-gray-200"
              }`}
            >
              <span
                className={`block w-5 h-5 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out ${
                  isActive ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
          <div className="bg-white rounded-lg p-2">
            {socialPlatforms.map((platform) => (
              <div
                key={platform.id}
                className="flex items-center justify-between p-2 border-b border-border"
              >
                <div className="flex items-center gap-3">
                  <img src={platform.icon} alt="" />
                  <span className="font-semibold text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl">
                    {platform.name}
                  </span>
                </div>
                <input
                  type="checkbox"
                  className="peer relative appearance-none shrink-0 w-6 h-6 border-2 border-border rounded-md mt-1 bg-white
focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-border
checked:bg-theme2-dark checked:border-0
disabled:border-steel-400 disabled:bg-steel-400
after:content-['✔'] after:absolute after:left-[6px] after:top-[6px] after:text-white after:opacity-0 
checked:after:opacity-100 checked:after:left-[5px] checked:after:top-[1px]"
                />
              </div>
            ))}
          </div>

          <Button onClick={handleSave} fullWidth>
            Save Changes
          </Button>
        </div>
      ) : editClick ? (
        <div>
          <div className="flex items-center gap-2">
            <img onClick={handleBack} src="/icons/back.svg" alt="Back" />
            <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-sour">
              Edit Job
            </p>
          </div>
          <div className="border-t border-border w-full my-6" />
          <div className="space-y-6">
            <Input type="text" placeholder="Job Title" label="Job Title" />

            <Select
              className="space-y-2"
              label="Category"
              options={[{ value: "Group Leader", label: "Group Leader" }]}
            />

            <Select
              className="space-y-2"
              label="Job Type"
              options={[{ value: "Full Time", label: "Full Time" }]}
            />

            <div>
              <label className="block text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl font-semibold text-black-dark">
                Job Description
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#9CD323] focus:border-[#9CD323]"
                placeholder="Enter job description..."
              />
            </div>

            <Button onClick={handleSave} fullWidth>
              Save Changes
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-sour">
            My Jobs
          </p>
          <div className="border-t border-border w-full my-6" />
          <div className=" flex-col flex lg:flex-row justify-evenly items-start md:items-end gap-4">
            <div className=" flex-1 w-full">
              <Input
                label="Job Title"
                placeholder="Experienced Teacher"
                icon="/icons/search-green.svg"
                className="flex-1 w-[500px]"
              />
            </div>

            <div className=" flex-1 w-full">
              <Select
                className="flex-1"
                label="Location"
                icon="/icons/location-green.svg"
                options={[{ value: "Phuket", label: "Phuket" }]}
              />
            </div>
            <div className=" flex-1 w-full">
              <Select
                className="flex-1"
                label="Category"
                icon="/icons/search-green.svg"
                options={[{ value: "Infants", label: "Infants" }]}
              />
            </div>

            <div className=" flex-1 w-full">
              <Button
                fullWidth
                variant="primarySmall"
                className="whitespace-nowrap px-16"
              >
                Search
              </Button>
            </div>
          </div>
          <div className="space-y-4 mt-4">
            <Card3 button setEditClick={setEditClick} />
            <Card3 button setEditClick={setEditClick} />
            <Card3 button setEditClick={setEditClick} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyJobs;
