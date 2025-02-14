import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import { useState } from "react";
import MyJobs from "./MyJob";
import Sidebar from "./common/sidebar";
import Applicant from "./Applicant";
import EditProfile from "./EditProfile";
import Settings from "./Settings";
import ChangePassword from "./ChnagePassword";
import PaymentMethod from "./PaymentMethods";
import Subscription from "./Subscription";
import Language from "./Language";
import Faq from "./Faq";
import Terms from "./Terms";

const componentMap = {
  "My Jobs": <MyJobs />,
  Applicants: <Applicant />,
  "Edit Profile": <EditProfile />,
  Settings: <Settings />,
  "Change Password": <ChangePassword />,
  "Payment Methods": <PaymentMethod />,
  "Subscription Plans": <Subscription />,
  Languages: <Language />,
  FAQs: <Faq />,
  "Terms and Conditions": <Terms />,
};

const Layout = ({ children }) => {
  const [activeTab, setActiveTab] = useState("My Jobs");

  return (
    <div className="flex w-full bg-background min-h-screen flex-col">
      <Navbar search profile />
      <div className="flex container mx-auto gap-10 mb-[300px] mt-10 flex-grow">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 overflow-auto ">
          {componentMap[activeTab] || children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
