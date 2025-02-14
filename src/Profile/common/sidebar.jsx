import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/dialog";
import Button from "@/components/button";
// import { Button } from "@/components/button";

const navigation = [
  { name: "My Jobs", icon: "/icons/side-job.svg" },
  { name: "Applicants", icon: "/icons/side-applicant.svg" },
  { name: "Edit Profile", icon: "/icons/side-profile.svg" },
  { name: "Settings", icon: "/icons/side-setting.svg" },
  { name: "Change Password", icon: "/icons/side-password.svg" },
  { name: "Payment Methods", icon: "/icons/side-payment.svg" },
  { name: "Subscription Plans", icon: "/icons/side-subscription.svg" },
  { name: "Languages", icon: "/icons/side-language.svg" },
  { name: "FAQs", icon: "/icons/side-faq.svg" },
  { name: "Terms and Conditions", icon: "/icons/side-term.svg" },
  { name: "Logout", icon: "/icons/side-logout.svg" },
];

export default function Sidebar({ activeTab, setActiveTab }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    console.log("Logging out...");
    setShowLogoutModal(false);
    // Add your logout logic here (e.g., clearing auth tokens, redirecting)
  };

  return (
    <div className="w-[330px] bg-white border rounded-2xl pb-2 border-gray-200 h-full">
      <h2 className="text-[20px] font-bold font-sour p-4">Account Settings</h2>
      <nav>
        {navigation.map((item) => (
          <button
            key={item.name}
            onClick={() => {
              if (item.name === "Logout") {
                setShowLogoutModal(true);
              } else {
                setActiveTab(item.name);
              }
            }}
            className={`flex items-center gap-3 w-full h-[56px] pl-4 text-sm ${
              activeTab === item.name
                ? "bg-theme2-light border-b-2 border-theme2-medium"
                : "hover:bg-gray-50"
            }`}
          >
            <img src={item.icon} alt="" />
            {item.name}
          </button>
        ))}
      </nav>

      {/* Logout Confirmation Modal */}
      <Dialog
        // className={"rounded-3xl"}
        open={showLogoutModal}
        onOpenChange={setShowLogoutModal}
      >
        <DialogContent className="flex flex-col justify-center  text-center">
          <DialogHeader className="flex flex-col items-center justify-center text-center">
            <img src="/icons/logout.svg" alt="Logout Icon" />
            <DialogTitle className="text-[36px] font-sour font-bold mt-4">
              Logging out?
            </DialogTitle>
            <p className="text-black-medium text-[20px]">
              Are you sure you want to log out?
            </p>
          </DialogHeader>
          <DialogFooter className="flex justify-center gap-4 mt-4">
            <Button className="bg-theme2-dark w-full" onClick={handleLogout}>
              Logout
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setShowLogoutModal(false)}
            >
              Not Now
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
