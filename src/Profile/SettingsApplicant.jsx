import { useState } from "react";
import Button from "@/components/button";

export default function SettingsApplicant() {
  const [activeTab, setActiveTab] = useState("Resume");

  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const togglePlatform1 = () => setIsActive((prev) => !prev);
  const togglePlatform2 = () => setIsActive2((prev) => !prev);
  const togglePlatform3 = () => setIsActive3((prev) => !prev);

  const tabs = ["Resume", "Cover Letter", "Notifications"];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8">
      <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-sour">
        Settings
      </p>
      <div className="border-t border-border w-full my-3" />

      {/* Tabs */}
      <div className="flex overflow-x-scroll hide-scrollbar gap-2 sm:gap-4 mb-6">
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

      {/* Resume Tab */}
      {activeTab === "Resume" && (
        <div className="space-y-4">
          <p className="text-lg sm:text-xl font-semibold">Resume</p>

          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-3 w-full p-3 bg-white rounded-lg shadow"
            >
              <div className="flex items-center justify-center">
                <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-16 md:h-16">
                  <img
                    src="/icons/pdf.svg"
                    className="rounded-full w-full h-full object-cover"
                    alt="logo"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="  xs:text-[12px] md:text-[16px]  font-semibold text-black-dark truncate">
                  Resume of John Doe.pdf
                </p>
                <p className="xs:text-[10px]   md:text-xs text-gray-500">
                  4.5 MB
                </p>
              </div>
              <div className="flex items-center gap-1">
                <button className="xs:w-4 xs:h-4  md:w-8 md:h-8">
                  <img src="/icons/trash.svg" alt="Delete" />
                </button>
                <button className="xs:w-4 xs:h-4  md:w-8 md:h-8">
                  <img src="/icons/download-black.svg" alt="Download" />
                </button>
                <button className="xs:w-4 xs:h-4  md:w-8 md:h-8">
                  <img src="/icons/green-dot.svg" alt="Status" />
                </button>
              </div>
            </div>
          ))}

          <div className="flex flex-col items-center sm:items-end">
            <button className="px-3 py-2 rounded-full border-black-dark border-2 xs:text-[11px] sm:text-[14px]  font-semibold">
              Upload Resume
            </button>
            <p className="font-medium mt-2 text-[12px] md:text-[14px] text-black-medium">
              DOC, DOCX, PDF (2 MB)
            </p>
          </div>
        </div>
      )}

      {/* Cover Letter Tab */}
      {activeTab === "Cover Letter" && (
        <div className="space-y-4">
          <p className="text-lg sm:text-xl font-semibold">
            Cover Letter (Optional)
          </p>
          <textarea
            id="coverLetter"
            name="coverLetter"
            placeholder="Write text here..."
            className="min-h-[150px] sm:min-h-[200px] w-full border rounded p-3"
          />
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === "Notifications" && (
        <div className="space-y-6">
          {[
            {
              title: "New Job Postings",
              desc: "Get notified when new daycare jobs are posted in your area.",
              state: isActive,
              toggle: togglePlatform1,
            },
            {
              title: "New Feedback",
              desc: "Get notified when new feedbacks are posted in your jobs.",
              state: isActive2,
              toggle: togglePlatform2,
            },
            {
              title: "Saved Jobs Expiring",
              desc: "Get a reminder when a saved job will be to expire or be removed.",
              state: isActive3,
              toggle: togglePlatform3,
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-[18px] sm:text-[20px]">
                  {item.title}
                </h3>
                <p className="text-[14px] sm:text-[16px] text-black-medium">
                  {item.desc}
                </p>
              </div>
              <button
                onClick={item.toggle}
                className={`w-[75px] md:w-12 h-5 sm:h-6 rounded-full transition-colors duration-200 ease-in-out ${
                  item.state ? "bg-theme2-dark" : "bg-gray-200"
                }`}
              >
                <span
                  className={`block w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out ${
                    item.state
                      ? "translate-x-[26px]   md:translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Save & Cancel Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-end w-full">
        <Button className="px-4 py-2 sm:px-6" variant="primarySmall">
          Save Changes
        </Button>
        <Button className="px-4 py-2 sm:px-6" variant="outlineBold2">
          Cancel
        </Button>
      </div>
    </div>
  );
}
