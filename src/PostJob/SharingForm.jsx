import { useState } from "react";

const socialPlatforms = [
  { id: "facebook", name: "Facebook", icon: "/icons/facebook-sm.svg" },
  { id: "whatsapp", name: "WhatsApp", icon: "/icons/whatsapp.svg" },
  { id: "instagram", name: "Instagram", icon: "/icons/instagram.svg" },
  { id: "linkedin", name: "LinkedIn", icon: "/icons/linkedin.svg" },
  { id: "tiktok", name: "TikTok", icon: "/icons/tiktok.svg" },
  { id: "snapchat", name: "Snapchat", icon: "/icons/snapchat.svg" },
  { id: "tumblr", name: "Tumblr", icon: "/icons/tumblr.svg" },
];

export default function SharingForm({ data, onUpdate }) {
  const [isActive, setIsActive] = useState(false);

  const togglePlatform = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-[18px]">Social Sharing</h3>
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
      <div className=" bg-white rounded-lg p-2">
        {socialPlatforms.map((platform) => (
          <div
            key={platform.id}
            className="flex items-center justify-between p-2 border-b border-border"
          >
            <div className="flex items-center gap-3">
              <img src={platform.icon} alt="" />

              <span className="font-semibold text-[18px]">{platform.name}</span>
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
    </div>
  );
}
