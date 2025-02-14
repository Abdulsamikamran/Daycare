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
      "bg-theme2-dark text-white hover:bg-theme2-medium text-[20px] font-semibold",
    primarySmall:
      "bg-theme2-dark text-white hover:bg-theme2-medium text-[16px] font-semibold",
    red: "bg-red-500 text-white hover:bg-red-300 text-[16px] font-semibold",
    primarySmallBlue:
      "bg-theme1-dark text-white hover:bg-theme2-medium text-[20px] px-[26px] font-semibold",
    outline:
      "border border-border bg-white text-black hover:border-theme2-medium text-[16px] font-medium",
    outlineBold:
      "border border-border bg-white text-black hover:border-theme2-medium text-[20px] font-semibold",
    outlineBold2:
      "border border-border bg-white text-black hover:border-theme2-medium text-[16px] font-semibold",
  };

  return (
    <button
      className={`flex bg-red items-center justify-center gap-2 rounded-full px-4 h-[56px]  
            focus:outline-none active:border-none active:outline-none
            ${variants[variant]}
            ${fullWidth ? "w-full" : ""}
            ${className} `}
      onClick={onClick}
      type={type}
      {...props}
    >
      {icon && <img src={icon} alt="icon" />}
      {children}
    </button>
  );
}
