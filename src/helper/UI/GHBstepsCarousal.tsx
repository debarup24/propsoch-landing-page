"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface StepData {
  id: number;
  title: string;
  stageNumber: string;
  stagetitle: string;
  bulletsTitle?: string;
  bullets: string[];
  videoUrl: string;
}

const mockStepsData: StepData[] = [
  {
    id: 1,
    title: "Tell us about you & your ideal home",
    stageNumber: "Stage 1",
    stagetitle: "Discovery",
    bullets: [
      "You can start with the location, budget & purpose",
      "We'll help prioritise your family's top deal-breakers",
      "We'll dig deeper on past homes to tailor the search",
    ],
    videoUrl:
      "https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/product-page/ghb-1.mp4",
  },
  {
    id: 2,
    title: "Cherry-pick from the best options",
    stageNumber: "Stage 2",
    stagetitle: "Shortlisting",
    bullets: [
      "Explore homes sorted by location and budget",
      "Get insights on areas, returns, and legality",
      "Cherry-pick the ones you like for site visits",
    ],
    videoUrl:
      "https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/product-page/ghb-2.mp4",
  },
  {
    id: 3,
    title: "Community & Premium features",
    stageNumber: "Stage 3",
    stagetitle: "Premium",
    bullets: [
      "Large clubhouse and amenities",
      "Swimming pool and recreation zones",
      "24x7 security and smart surveillance",
    ],
    videoUrl:
      "https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/product-page/ghb-3.mp4",
  },
  {
    id: 4,
    title: "Foresee design, legal & financial risks",
    stageNumber: "Stage 4",
    stagetitle: "Analysis",
    bullets: [
      "Technical due diligence on construction quality",
      "Verification of legal titles and approvals",
      "Analysis of long-term appreciation trends",
    ],
    videoUrl:
      "https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/product-page/ghb-4.mp4",
  },
  {
    id: 5,
    title: "Negotiation and Finalization",
    stageNumber: "Stage 5",
    stagetitle: "Negotiation",
    bulletsTitle: "Armed with insights & risk assessments, we will:",
    bullets: [
      "Secure the best possible pricing for you",
      "Finalize payment plans and inclusions",
      "Coordinate the booking and documentation process",
    ],
    videoUrl:
      "https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/product-page/ghb-5.mp4",
  },
  {
    id: 6,
    title: "Connect with financial & legal experts",
    stageNumber: "Stage 6",
    stagetitle: "Closure",
    bulletsTitle: "Our trusted experts handle:",
    bullets: [
      "Assistance with loan processing and registration",
      "Final snagging and inspection before handover",
      "Continued support for home-related services",
    ],
    videoUrl:
      "https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/product-page/ghb-6.mp4",
  },
];

const GHBstepsCarousal = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setActiveIndex((prev) =>
      prev === mockStepsData.length - 1 ? 0 : prev + 1,
    );
  };

  const prev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? mockStepsData.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(next, 5000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [activeIndex]);

  return (
    <div className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <div className="relative overflow-hidden rounded-[40px]">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              transform: `translateX(-${activeIndex * 82}%)`,
            }}
          >
            {mockStepsData.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={item.id}
                  className={`w-full lg:w-[82%] shrink-0 pr-6 transition-all duration-700 ${
                    isActive
                      ? "opacity-100 scale-100"
                      : "opacity-40 scale-[0.97]"
                  }`}
                >
                  <div className="flex flex-col md:flex-row min-h-130 w-full overflow-hidden rounded-4xl bg-[#F1F5F9] shadow-sm">
                    {/* LEFT Content */}
                    <div className="flex flex-[1.3] flex-col justify-center p-8 md:p-14">
                      <div className="mb-6 inline-flex w-fit items-center rounded-full bg-[#1A1A1A] px-4 py-1.5 text-white">
                        <span className="text-[10px] font-bold uppercase tracking-wider">
                          {item.stageNumber} — {item.stagetitle}
                        </span>
                      </div>

                      <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl lg:text-5xl leading-tight">
                        {item.title}
                      </h2>

                      <div className="mt-8 space-y-4">
                        {item.bulletsTitle && (
                          <p className="text-sm font-semibold text-slate-800 italic">
                            {item.bulletsTitle}
                          </p>
                        )}
                        <ul className="space-y-4">
                          {item.bullets.map((bullet, i) => (
                            <li
                              key={i}
                              className="flex items-start text-base text-gray-600"
                            >
                              <span className="mr-3 text-orange-500 font-bold">
                                ✦
                              </span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* RIGHT Video */}
                    <div className="relative flex-1 p-6 md:p-8">
                      <div className="h-full w-full overflow-hidden rounded-3xl">
                        <video
                          src={item.videoUrl}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="mt-10 flex justify-center items-center gap-6">
          <button
            onClick={prev}
            className="group flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 hover:bg-orange-50 transition-all active:scale-90"
            aria-label="Previous slide"
          >
            <ChevronLeft
              className="text-slate-400 group-hover:text-orange-500 transition-colors"
              size={28}
            />
          </button>

          <button
            onClick={next}
            className="group flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 hover:bg-orange-50 transition-all active:scale-90"
            aria-label="Next slide"
          >
            <ChevronRight
              className="text-slate-400 group-hover:text-orange-500 transition-colors"
              size={28}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GHBstepsCarousal;
