import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import Button from "@/components/button";
import useRoleLocalStorage from "../hooks/useRoleLocalStorage";

export default function Role() {
  const [selectedRole, setSelectedRole] = useRoleLocalStorage("selectedRole");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    selectedRole === "company" ? navigate("/setup-profile") : navigate("/");
  };

  return (
    <Layout heading={"Select Role"}>
      {/* Parent container */}
      <div className="xs:flex xs:flex-col xs:min-h-[65dvh] md:min-h-0">
        {/* Content area */}
        <div className="xs:flex-grow md:flex-grow-0">
          <p className="text-gray-500 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>

          <div className="flex xs:flex-col md:flex-row w-full gap-4 mb-8">
            <button
              onClick={() => setSelectedRole("company")}
              className={`relative flex items-center text-[18px] font-medium xs:h-auto md:h-[108px] xs:w-full md:w-[269px] justify-center gap-2 px-6 py-3 rounded-full transition-all duration-200 ${
                selectedRole === "company"
                  ? "bg-theme2-dark text-white"
                  : "bg-white border border-border text-gray-700 hover:border-theme2-medium"
              }`}
            >
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.1351 10.97C30.8601 9.56003 28.7301 8.85503 25.6401 8.85503H25.2801V8.79503C25.2801 6.27503 25.2801 3.15503 19.6401 3.15503H17.3601C11.7201 3.15503 11.7201 6.29003 11.7201 8.79503V8.87003H11.3601C8.25506 8.87003 6.14006 9.57503 4.86506 10.985C3.38006 12.635 3.42506 14.855 3.57506 16.37L3.59006 16.475L3.71751 17.8133C3.73178 17.9631 3.81224 18.0982 3.93795 18.1808C4.27524 18.4026 4.96336 18.8496 5.36006 19.07C5.57006 19.205 5.79506 19.325 6.02006 19.445C8.58506 20.855 11.4051 21.8 14.2701 22.265C14.4051 23.675 15.0201 25.325 18.3051 25.325C21.5901 25.325 22.2351 23.69 22.3401 22.235C25.4001 21.74 28.3551 20.675 31.0251 19.115C31.1151 19.07 31.1751 19.025 31.2501 18.98C31.8765 18.626 32.5276 18.1853 33.1137 17.7592C33.2265 17.6773 33.2988 17.5513 33.3142 17.4128L33.3501 17.09L33.4251 16.385C33.4401 16.295 33.4401 16.22 33.4551 16.115C33.5751 14.6 33.5451 12.53 32.1351 10.97ZM20.1351 21.245C20.1351 22.835 20.1351 23.075 18.2901 23.075C16.4451 23.075 16.4451 22.79 16.4451 21.26V19.37H20.1351V21.245ZM13.8651 8.85503V8.79503C13.8651 6.24503 13.8651 5.30003 17.3601 5.30003H19.6401C23.1351 5.30003 23.1351 6.26003 23.1351 8.79503V8.87003H13.8651V8.85503Z"
                  fill={selectedRole === "company" ? "white" : "black"}
                />
                <path
                  d="M32.2157 20.9072C32.5685 20.7373 32.9743 21.0177 32.9389 21.4077L32.36 27.785C32.045 30.785 30.815 33.845 24.215 33.845H12.785C6.18501 33.845 4.95501 30.785 4.64001 27.8L4.0893 21.7422C4.05426 21.3567 4.45032 21.0764 4.80227 21.2375C6.40334 21.9701 10.0496 23.5871 12.1449 24.1082C12.3098 24.1492 12.4447 24.267 12.5126 24.4227C13.3964 26.4499 15.3937 27.53 18.305 27.53C21.1875 27.53 23.2114 26.4084 24.0973 24.3779C24.1653 24.2221 24.3005 24.1043 24.4654 24.0632C26.6862 23.5097 30.5484 21.7099 32.2157 20.9072Z"
                  fill={selectedRole === "company" ? "white" : "black"}
                />
              </svg>
              Company User
              {selectedRole === "company" && (
                <div className="absolute xs:hidden md:block -bottom-4 left-1/2 -translate-x-1/2">
                  <div className="bg-theme2-dark border-4 border-background rounded-full p-1">
                    <Check className="w-4 h-4" />
                  </div>
                </div>
              )}
            </button>

            <button
              onClick={() => setSelectedRole("applicant")}
              className={`relative flex items-center text-[18px] font-medium xs:h-auto md:h-[108px] xs:w-full md:w-[269px] justify-center gap-2 px-6 py-3 rounded-full transition-all duration-200 ${
                selectedRole === "applicant"
                  ? "bg-theme2-dark text-white"
                  : "bg-white border border-border text-gray-700 hover:border-theme2-medium"
              }`}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.16 11.37C12.06 11.36 11.94 11.36 11.83 11.37C9.45 11.29 7.56 9.34 7.56 6.94C7.56 4.49 9.54 2.5 12 2.5C14.45 2.5 16.44 4.49 16.44 6.94C16.43 9.34 14.54 11.29 12.16 11.37Z"
                  stroke={selectedRole === "applicant" ? "white" : "#202020"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.15997 15.06C4.73997 16.68 4.73997 19.32 7.15997 20.93C9.90997 22.77 14.42 22.77 17.17 20.93C19.59 19.31 19.59 16.67 17.17 15.06C14.43 13.23 9.91997 13.23 7.15997 15.06Z"
                  stroke={selectedRole === "applicant" ? "white" : "#202020"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Applicant
              {selectedRole === "applicant" && (
                <div className="absolute -bottom-4  xs:hidden md:block left-1/2 -translate-x-1/2">
                  <div className="bg-theme2-dark border-4 border-background rounded-full p-1">
                    <Check className="w-4 h-4" />
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Button container */}
        <div className="xs:mt-auto xs:pt-6 md:mt-6 md:pt-0">
          <Button onClick={handleSubmit} fullWidth>
            Continue
          </Button>
        </div>
      </div>
    </Layout>
  );
}
