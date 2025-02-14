import React from "react";

const Select = ({
  label,
  options,
  value,
  onChange,
  className = "",
  selectClassName = "",
  icon, // Left icon prop
  ...props
}) => {
  return (
    <div className={className}>
      {label && (
        <label className="block text-[18px] font-semibold text-black-dark">
          {label}
        </label>
      )}
      <div className="relative">
        {/* Left Icon */}
        {icon && (
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <img src={icon} alt="icon" className="w-5 h-5" />
          </div>
        )}
        <select
          className={`w-full h-[48px] text-[16px] rounded-full border border-border focus:border-theme2-medium focus:outline-theme2-medium pl-3 py-2 pr-8 appearance-none bg-no-repeat bg-[length:20px_20px] bg-[right_10px_center] ${
            icon ? "pl-[40px]" : "pl-3"
          } ${selectClassName}`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
          }}
          value={value}
          onChange={onChange}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
