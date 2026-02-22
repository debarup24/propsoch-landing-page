"use client";

import React from "react";

type ActionButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  size: "xs" | "sm" | "md" | "lg";
  variant?: "brand" | "primary" | "secondary" | "ghost" | "banner" | "neutral";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function ActionButton({
  children,
  onClick,
  size = "md",
  variant = "brand",
  className = "",
  type = "button",
  disabled = false,
}: ActionButtonProps) {
  const sizeStyles = {
    xs: "w-full px-3 py-1 text-xs xl:text-xs",
    sm: "w-full px-4 py-2 text-xs xl:text-sm",
    md: "w-full xl:w-90 px-6 py-2 text-xs xl:text-sm",
    lg: "w-full xl:w-100 px-8 py-2 text-xs xl:text-sm",
  };

  const variantStyles = {
    brand: "bg-orange-500 text-white hover:bg-orange-400",
    primary: "bg-white text-slate800 hover:bg-slate-50",
    secondary:
      "bg-white text-orange-500 border border-orange-500 hover:bg-orange-50",
    ghost: "bg-transparent border border-slate-100 text-white",
    banner: "bg-violet-500 text-white",
    neutral: "bg-slate-950 text-white hover:bg-slate-800",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
         rounded-md font-semibold cursor-pointer transition-all duration-200
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

// How to use ?

{
  /* <ActionButton 
  size="lg" 
  variant="brand">
  Book An Appointment
</ActionButton>; */
}
