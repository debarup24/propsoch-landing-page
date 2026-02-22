import {
  Home,
  ShieldCheck,
  Calculator,
  Star,
  Percent,
  PaintRoller,
} from "lucide-react";
import React from "react";

const accessoriesData = [
  { icon: <Home size={32} />, label: "Home Loan Offers" },
  { icon: <ShieldCheck size={32} />, label: "Legal Due Diligence" },
  { icon: <Calculator size={32} />, label: "Tax Planning" },
  { icon: <Star size={32} />, label: "Quality Inspection" },
  { icon: <Percent size={32} />, label: "Vastu Advisors" },
  { icon: <PaintRoller size={32} />, label: "Interior Designers" },
];

const AccessoriesCard = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-6 py-8 md:grid-cols-3 xl:grid-cols-6">
      {accessoriesData.map((item, index) => (
        <div
          key={index}
          className="group flex flex-col items-center justify-center gap-4 rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
        >
          {/* Icon Container with the yellow stars effect from your image */}
          <div className="relative text-orange-500">
            {/* Decorative small stars/sparkles */}
            <span className="absolute -left-2 -top-1 text-[10px] text-yellow-400">
              ✦
            </span>
            <span className="absolute -right-1 -top-2 text-[8px] text-yellow-400">
              ✦
            </span>
            {item.icon}
          </div>

          <p className="text-center text-sm font-medium text-slate-500 leading-tight">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AccessoriesCard;
