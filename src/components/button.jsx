export default function Button({
  children,
  variant = "primary",
  icon,
  fullWidth,
  onClick,
  type = "button",
  className = "", // Accept className as a prop
  ...props
}) {
  const variants = {
    primary:
      "bg-theme2-dark text-white min-w-[70px] hover:bg-theme2-medium xs:text-[14px]  lg:text-[20px] whitespace-nowrap font-semibold",
    primarySmall:
      "bg-theme2-dark text-white min-w-[70px] px-[20px] sm:px-[10px] hover:bg-theme2-medium xs:text-[11px] sm:text-[14px] whitespace-nowrap font-semibold",
    red: "bg-red-500 text-white min-w-[70px] hover:bg-red-300 xs:text-[11px] sm:text-[14px]  whitespace-nowrap font-semibold",
    primarySmallBlue:
      "bg-theme1-dark text-white min-w-[70px] hover:bg-theme2-medium xs:text-[14px]  lg:text-[20px] whitespace-nowrap px-[20px] sm:px-[26px] font-semibold",
    outline:
      "border border-border bg-white min-w-[70px] text-black hover:border-theme2-medium xs:text-[12px]  lg:text-[16px] whitespace-nowrap font-medium",
    outlineBold:
      "border border-border bg-white min-w-[70px] text-black hover:border-theme2-medium xs:text-[14px]  lg:text-[20px] whitespace-nowrap font-semibold",
    outlineBold2:
      "border border-border bg-white min-w-[70px] text-black hover:border-theme2-medium xs:text-[14px]  whitespace-nowrap font-semibold",
  };

  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full 
      xs:h-[36px] sm:h-[46px] md:h-[56px]
                        xs:px-2 md:px-10
                  focus:outline-none active:border-none active:outline-none
                  ${variants[variant]}
                  ${fullWidth ? "w-full" : ""}
                  ${className}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      {icon && <img src={icon} alt="icon" />}
      {children}
    </button>
  );
}
