import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Sidebar from "./common/sidebar";
import Hero from "./common/hero";
import useRoleLocalStorage from "../hooks/useRoleLocalStorage";
import MyJobs from "./MyJob";
import Applicant from "./Applicant";
import EditProfile from "./EditProfile";
import Settings from "./Settings";
import ChangePassword from "./ChnagePassword";
import PaymentMethod from "./PaymentMethods";
import Subscription from "./Subscription";
import Language from "./Language";
import Faq from "./Faq";
import Terms from "./Terms";
import History from "./History";
import EditProfileApplicant from "./EditProfileApplicant";
import SettingsApplicant from "./SettingsApplicant";
import Feedbacks from "./Feedbacks";
import Favourites from "./Favourites";

const Layout = ({ children }) => {
  const [selectedRole] = useRoleLocalStorage("selectedRole");

  const navigation =
    selectedRole === "company"
      ? [
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
        ]
      : [
          { name: "History", icon: "/icons/side-history.svg" },
          { name: "Edit Profile", icon: "/icons/side-profile.svg" },
          { name: "Settings", icon: "/icons/side-setting.svg" },
          { name: "Change Password", icon: "/icons/side-password.svg" },
          { name: "Languages", icon: "/icons/side-language.svg" },
          { name: "Feedbacks", icon: "/icons/side-feedback.svg" },
          { name: "Favourites", icon: "/icons/side-favourite.svg" },
          { name: "FAQs", icon: "/icons/side-faq.svg" },
          { name: "Terms and Conditions", icon: "/icons/side-term.svg" },
          { name: "Logout", icon: "/icons/side-logout.svg" },
        ];

  const componentMap = {
    "My Jobs": <MyJobs />,
    History: <History />,
    Applicants: <Applicant />,
    Favourites: <Favourites />,
    Feedbacks: <Feedbacks />,
    "Edit Profile":
      selectedRole === "company" ? <EditProfile /> : <EditProfileApplicant />,
    Settings: selectedRole === "company" ? <Settings /> : <SettingsApplicant />,
    "Change Password": <ChangePassword />,
    "Payment Methods": <PaymentMethod />,
    "Subscription Plans": <Subscription />,
    Languages: <Language />,
    FAQs: <Faq />,
    "Terms and Conditions": <Terms />,
  };

  // Load active tab from localStorage (default to first item)
  const getInitialTab = () => {
    const savedTab = localStorage.getItem("activeTab");
    return savedTab && navigation.some((item) => item.name === savedTab)
      ? savedTab
      : navigation[0].name;
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <div className="flex w-full bg-background min-h-screen flex-col">
      <Navbar search profile />
      <Hero />

      {/* Mobile Tabs */}
      <div className="flex lg:hidden overflow-auto hide-scrollbar whitespace-nowrap bg-white shadow-sm border-b">
        {navigation
          .filter((item) => item.name !== "Logout") // Exclude Logout
          .map((item) => (
            <button
              key={item.name}
              onClick={() => {
                if (item.name === "Logout") {
                  console.log("Logging out...");
                } else {
                  setActiveTab(item.name);
                }
              }}
              className={`flex items-center gap-3 w-full h-[56px] px-5 text-sm ${
                activeTab === item.name
                  ? "bg-theme2-light border-b-2 font-bold border-theme2-medium"
                  : "hover:bg-gray-50 font-medium"
              }`}
            >
              {item.name}
            </button>
          ))}
      </div>

      <div className="container mx-auto px-6 flex gap-4 xl:gap-10 mb-[300px] mt-10 flex-grow">
        {/* Sidebar */}
        <div className="hidden lg:flex">
          <Sidebar
            navigation={navigation}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        <main className="flex-1 overflow-auto">
          {componentMap[activeTab] || children}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
