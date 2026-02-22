import React from "react";

const statsData = [
  {
    id: 1,
    value: "2750+",
    label: "Hours of Advice",
  },
  {
    id: 2,
    value: "520M+",
    label: "Sq. Feet Analyzed",
  },
  {
    id: 3,
    value: "210+",
    label: "Partner Builders",
  },
  {
    id: 4,
    value: "500+",
    label: "Projects Across Bangalore",
  },
];

const HeroPoster = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Header Text */}
      <div className="text-center text-gray-600 text-lg md:text-xl">
        Trusted by <span className="text-orange-500 font-bold">1000+</span>{" "}
        intelligent homebuyers
      </div>
      <div className="flex flex-col items-center gap-8 rounded-3xl bg-orange-50/50 p-8 md:p-16">
        {/* Stats Grid */}
        <div className="grid w-full grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4">
          {statsData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center px-2"
            >
              <span className="text-3xl md:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight">
                {item.value}
              </span>
              <span className="mt-2 text-gray-500 text-sm md:text-base leading-snug max-w-[150px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroPoster;
