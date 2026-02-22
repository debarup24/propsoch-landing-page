"use client";
import React, { useState } from "react";
import { Plus, X } from "lucide-react";

interface InsightData {
  id: number;
  accordianTitle: string;
  accordianDescription: string;
  videoUrl: string;
}

const mockInsights: InsightData[] = [
  {
    id: 1,
    accordianTitle: "1. Floor Plan Analysis",
    accordianDescription:
      "See every floor plan's design, privacy, efficiency & compare with peer projects.",
    videoUrl:
      "https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/landing-page/insights-video-1.mp4",
  },
  {
    id: 2,
    accordianTitle: "2. Lighting & Ventilation",
    accordianDescription:
      "See how sunlight and winds enter and flow through your future home.",
    videoUrl:
      "https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/landing-page/insights-video-2.mp4",
  },
  {
    id: 3,
    accordianTitle: "3. Flood & Air Quality Risk",
    accordianDescription:
      "Detailed analysis of environmental risks including historical flood data and AQI trends.",
    videoUrl:
      "https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/landing-page/insights-video-3.mp4",
  },
  {
    id: 4,
    accordianTitle: "4. Future Development",
    accordianDescription:
      "Understand upcoming infrastructure, roads, and commercial hubs near your property.",
    videoUrl:
      "https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/landing-page/insights-video-4.mp4",
  },
  {
    id: 5,
    accordianTitle: "5. Investment Potential",
    accordianDescription:
      "Understand upcoming infrastructure, roads, and commercial hubs near your property.",
    videoUrl:
      "https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/landing-page/insights-video-5.mp4",
  },
  {
    id: 6,
    accordianTitle: "6. Cost Sheet Breakdown",
    accordianDescription:
      "Understand upcoming infrastructure, roads, and commercial hubs near your property.",
    videoUrl:
      "https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/landing-page/insights-video-6.mp4",
  },
];

export default function InsightsPanel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row w-full gap-8 bg-[#F8FAFC] rounded-3xl p-6 lg:p-10 shadow-sm border border-slate-100">
      {/* LEFT: Accordion Section */}
      <div className="flex-1 flex flex-col divide-y divide-slate-200">
        {mockInsights.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div key={item.id} className="py-5 first:pt-0 last:pb-0">
              <button
                onClick={() => setActiveIndex(index)}
                className="w-full flex items-center justify-between text-left group"
              >
                <span
                  className={`text-lg font-medium cursor-pointer transition-colors duration-300 ${isActive ? "text-[#FF6D33]" : "text-slate-500 group-hover:text-slate-800"}`}
                >
                  {item.accordianTitle}
                </span>
                {isActive ? (
                  <X className="text-slate-400 w-5 h-5" />
                ) : (
                  <Plus className="text-slate-400 w-5 h-5 group-hover:text-slate-600" />
                )}
              </button>

              {/* Description (Accordion Content) */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isActive ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                  {item.accordianDescription}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* RIGHT: Video Display */}
      <div className="flex-1 relative bg-white rounded-2xl overflow-hidden shadow-inner border border-slate-100 min-h-[350px] ">
        <video
          key={mockInsights[activeIndex].videoUrl}
          src={mockInsights[activeIndex].videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full  object-fill transition-opacity duration-500"
        />

        {/* Optional: Visual Overlays like in your screenshot */}
        <div className="absolute top-6 left-6 flex flex-col gap-2 pointer-events-none">
          {/* {activeIndex === 0 && (
            <>
              <span className="bg-white/90 border border-rose-100 px-3 py-1 rounded text-[10px] text-rose-500">
                Too many common walls
              </span>
              <span className="bg-white/90 border border-blue-100 px-3 py-1 rounded text-[10px] text-blue-500">
                Large Balcony Space
              </span>
            </>
          )} */}
          {/* {activeIndex === 1 && (
            <div className="flex gap-2">
              <span className="bg-white/90 px-3 py-1 rounded text-[10px] flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-yellow-400" /> Sunlight
              </span>
              <span className="bg-white/90 px-3 py-1 rounded text-[10px] flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-purple-500" /> Windflow
              </span>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
