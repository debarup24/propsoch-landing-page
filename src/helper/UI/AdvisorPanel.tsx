"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { CheckCircle2, Home, ChevronLeft, ChevronRight } from "lucide-react";

interface Benefit {
  id: number;
  text: string;
}

interface AdvisorInfo {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  tags: string[];
}

interface AdvisorPanelProps {
  title: React.ReactNode;
  subtitle?: string;
  benefits: Benefit[];
  advisors: AdvisorInfo[];
}

export default function AdvisorPanel({
  title,
  subtitle,
  benefits,
  advisors,
}: AdvisorPanelProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const currentAdvisor = advisors[currentIndex];

  // Memoize next function so useEffect doesn't trigger unnecessarily
  const nextAdvisor = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % advisors.length);
  }, [advisors.length]);

  const prevAdvisor = () => {
    setCurrentIndex((prev) => (prev - 1 + advisors.length) % advisors.length);
  };

  // Autoscroll
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(nextAdvisor, 2000);
    }

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [nextAdvisor, isPaused, currentIndex]);

  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT PORTION: Static Content */}
        <div className="flex flex-col space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-700">
              {title}
            </h2>
            {subtitle && (
              <p className="text-orange-500 font-light text-lg leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          <ul className="space-y-5">
            {benefits.map((benefit) => (
              <li key={benefit.id} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-600 shrink-0 mt-0.5" />
                <span className="text-slate-600 text-base md:text-lg leading-snug">
                  {benefit.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT PORTION: Advisor Profile Card */}
        <div
          className="bg-gray-50 rounded-4xl p-6 md:p-8 shadow-sm border border-orange-50/50 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex flex-col md:flex-row gap-8 min-h-[420px]">
            {/* Left Col: Image Container */}
            <div className="relative w-full md:w-70 shrink-0">
              <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-lg border-b-4 border-slate-800">
                <img
                  key={currentAdvisor.id}
                  src={currentAdvisor.image}
                  alt={currentAdvisor.name}
                  className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm p-4">
                  <h3 className="text-white font-bold text-lg">
                    {currentAdvisor.name}
                  </h3>
                  <p className="text-orange-400 text-xs uppercase tracking-wider">
                    {currentAdvisor.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Col: Quote & Details */}
            <div className="flex flex-col flex-1 space-y-6">
              <div className="bg-white p-2 rounded-full w-fit shadow-sm">
                <Home className="text-orange-700 w-6 h-6" />
              </div>

              <h4 className="text-2xl md:text-3xl font-serif font-bold text-orange-900 leading-tight">
                "{currentAdvisor.quote}"
              </h4>

              <div className="flex flex-col gap-3">
                {currentAdvisor.tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="bg-white px-4 py-2 rounded-xl text-sm font-medium text-slate-700 shadow-sm border border-slate-100 hover:border-orange-200 transition-colors"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={prevAdvisor}
              className="p-2 rounded-full border border-slate-200 bg-white hover:bg-orange-50 transition-all shadow-sm active:scale-90"
            >
              <ChevronLeft size={20} className="text-slate-600" />
            </button>
            <button
              onClick={nextAdvisor}
              className="p-2 rounded-full border border-slate-200 bg-white hover:bg-orange-50 transition-all shadow-sm active:scale-90"
            >
              <ChevronRight size={20} className="text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import React from "react";
// import { CheckCircle2, GraduationCap, Home } from "lucide-react";

// interface Benefit {
//   id: number;
//   text: string;
// }

// interface AdvisorInfo {
//   name: string;
//   role: string;
//   image: string;
//   quote: string;
//   tags: string[];
// }

// interface AdvisorPanelProps {
//   title: React.ReactNode;
//   subtitle?: string;
//   benefits: Benefit[];
//   advisor: AdvisorInfo;
// }

// export default function AdvisorPanel({
//   title,
//   subtitle,
//   benefits,
//   advisor,
// }: AdvisorPanelProps) {
//   return (
//     <div className="w-full max-w-7xl mx-auto py-16 px-4">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* LEFT PORTION: Heading & Bullet Points */}
//         <div className="flex flex-col space-y-8">
//           <div className="space-y-4">
//             <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-700">
//               {title}
//             </h2>
//             {subtitle && (
//               <p className="text-orange-500 font-light text-lg leading-relaxed">
//                 {subtitle}
//               </p>
//             )}
//           </div>

//           <ul className="space-y-5">
//             {benefits.map((benefit) => (
//               <li key={benefit.id} className="flex items-start gap-3">
//                 <CheckCircle2 className="w-6 h-6 text-orange-600 shrink-0 mt-0.5" />
//                 <span className="text-slate-600 text-base md:text-lg leading-snug">
//                   {benefit.text}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* RIGHT PORTION: Advisor Profile Card */}
//         <div className="bg-gray-50 rounded-4xl p-6 md:p-8 shadow-sm border border-orange-50/50">
//           <div className="flex flex-col md:flex-row gap-8">
//             {/* Left Col: Image Container */}
//             <div className="relative w-full md:w-70 shrink-0">
//               <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-lg border-b-4 border-slate-800">
//                 <img
//                   src={advisor.image}
//                   alt={advisor.name}
//                   className="w-full h-full object-cover"
//                 />
//                 {/* Floating Name Overlay */}
//                 <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm p-4">
//                   <h3 className="text-white font-bold text-lg">
//                     {advisor.name}
//                   </h3>
//                   <p className="text-orange-400 text-xs uppercase tracking-wider">
//                     {advisor.role}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Col: Quote & Details */}
//             <div className="flex flex-col flex-1 space-y-6">
//               <div className="bg-white p-2 rounded-full w-fit shadow-sm">
//                 <Home className="text-orange-700 w-6 h-6" />
//               </div>

//               <h4 className="text-2xl md:text-3xl font-serif font-bold text-orange-900 leading-tight">
//                 "{advisor.quote}"
//               </h4>

//               <div className="flex flex-col gap-3">
//                 {advisor.tags.map((tag, idx) => (
//                   <div
//                     key={idx}
//                     className="bg-white px-4 py-2 rounded-xl text-sm font-medium text-slate-700 shadow-sm border border-slate-100 hover:border-orange-200 transition-colors"
//                   >
//                     {tag}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
