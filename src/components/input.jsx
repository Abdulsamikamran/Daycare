import { ChevronDown, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const countryCodes = [
  { code: "+1", flag: "/icons/country.svg" },
  { code: "+44", flag: "/icons/country.svg" },
  { code: "+92", flag: "/icons/country.svg" },
  { code: "+33", flag: "/icons/country.svg" },
];

export default function Input({
  label,
  type = "text",
  placeholder,
  icon: Icon,
  showPasswordToggle,
  className,
  rightIcon,
  variant, // "text", "password", "phone"
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPassword ? "text" : type;

  // Phone Input States
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState(countryCodes[0]);
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, "");
    return digits.replace(/(\d{3})(?=\d)/g, "$1 ").trim();
  };

  return (
    <div className="space-y-2">
      {label && (
        <label className="block xs:text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-black-dark">
          {label}
        </label>
      )}
      <div className="relative">
        {/* Phone Input Variant */}
        {variant === "phone" ? (
          <div className="flex items-center border border-border rounded-full px-3  xs:h-[36px] sm:h-[46px] md:h-[56px]  bg-white focus-within:ring-2 focus-within:ring-theme2-medium">
            {/* Country Code Dropdown */}
            <button
              type="button"
              className="flex items-center gap-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                src={selectedCode.flag}
                alt="flag"
                className="w-5 h-5 rounded-sm"
              />
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>

            {/* Phone Number Input */}
            <input
              type="tel"
              className="w-full xs:text-[12px] sm:text-[16px] focus:outline-none pl-1 py-2 bg-transparent"
              placeholder={placeholder || "576 889 324"}
              value={phoneNumber}
              onChange={(e) =>
                setPhoneNumber(formatPhoneNumber(e.target.value))
              }
              {...props}
            />
          </div>
        ) : (
          // Default Input Variant (Text, Password, etc.)
          <div className="relative">
            {Icon && (
              <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <img src={Icon} alt="" />
              </div>
            )}
            <input
              type={inputType}
              placeholder={placeholder}
              className={`w-full xs:h-[36px] sm:h-[46px] md:h-[56px]  ${className} xs:text-[12px] md:text-[14px] rounded-full border border-border focus:border-theme2-medium focus:outline-none 
                ${Icon ? "pl-10" : "pl-3"} ${
                rightIcon ? "pr-10" : "pr-3"
              } py-2`}
              {...props}
            />
            {rightIcon && (
              <div className="absolute inset-y-0 right-3 flex items-center">
                <img src={rightIcon} alt="right-icon" className="w-5 h-5" />
              </div>
            )}

            {showPasswordToggle && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400"
              >
                {showPassword ? (
                  <p className="xs:text-[14px] sm:text-[16px] font-medium text-theme3-dark">
                    hide
                  </p>
                ) : (
                  <p className="xs:text-[14px] sm:text-[16px] font-medium text-theme2-dark">
                    show
                  </p>
                )}
              </button>
            )}
          </div>
        )}

        {/* Country Code Dropdown */}
        {variant === "phone" && isOpen && (
          <div className="absolute ml-3 -mt-2 z-10 w-10 bg-white border border-border rounded-lg shadow-lg">
            <ul className="py-1">
              {countryCodes.map((country) => (
                <li key={country.code}>
                  <button
                    type="button"
                    className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => {
                      setSelectedCode(country);
                      setIsOpen(false);
                    }}
                  >
                    <img
                      src={country.flag}
                      alt="flag"
                      className="w-5 h-4 rounded-sm"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
