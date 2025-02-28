import { useState } from "react";
import useRoleLocalStorage from "../../hooks/useRoleLocalStorage";
import LogoutModal from "@/components/logoutModal";

export default function Sidebar({ activeTab, setActiveTab, navigation }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [selectedRole] = useRoleLocalStorage("selectedRole");

  const handleLogout = () => {
    console.log("Logging out...");
    setShowLogoutModal(false);
    // Add logout logic here (e.g., clearing tokens, redirecting)
  };

  // const menuItems = selectedRole === "company" ? navigation : navigation2;

  return (
    <div className="w-[250px] xl:w-[330px] bg-white border rounded-2xl pb-2 border-gray-200 h-full">
      <h2 className="text-[20px] font-bold font-sour p-4">Account Settings</h2>
      <nav>
        {navigation.map((item) => (
          <button
            key={item.name}
            onClick={() =>
              item.name === "Logout"
                ? setShowLogoutModal(true)
                : setActiveTab(item.name)
            }
            className={`flex items-center font-medium gap-3 w-full h-[56px] pl-4 text-sm ${
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

      <LogoutModal
        open={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
}
