"use client";

import { useState } from "react";

type TabSwitchProps = {
  tabs: string[];
  defaultTab?: string;
  onChange?: (value: string) => void;
  label: string;
  size?: "sm" | "lg" | "xl";
};

export default function TabSwitch({
  tabs,
  defaultTab,
  onChange,
  size = "sm",
  label,
}: TabSwitchProps) {
  const [active, setActive] = useState(defaultTab || tabs[0]);

  const handleClick = (tab: string) => {
    setActive(tab);
    onChange?.(tab);
  };

  const sizeStyles = {
    sm: "px-5 py-1.5 text-sm",
    lg: "px-8 py-1 text-md",
    xl: "px-11 py-3 text-base",
  };

  return (
    <>
      {" "}
      <p className="text-sm font-light text-gray-600">{label}</p>
      <div className="w-full bg-gray-100 p-1.5 rounded-md flex gap-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleClick(tab)}
            className={` ${sizeStyles[size]} rounded-lg font-medium transition-all duration-200
            ${
              active === tab
                ? "bg-white text-orange-500 shadow-sm w-full rounded-md"
                : "text-gray-600 hover:text-black w-full rounded-md"
            }
          `}
          >
            {tab}
          </button>
        ))}
      </div>
    </>
  );
}

// How to use :

{
  /* <TabSwitch
  tabs={["Bangalore", "Mumbai"]}
  defaultTab="Bangalore"
  onChange={(city) => console.log("Selected:", city)}
  size="sm"
  label="Select City"
/>; */
}
