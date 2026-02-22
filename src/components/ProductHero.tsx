"use client";

import ActionButton from "@/helper/Custom Buttons/ActionBTN";
import TabSwitch from "@/helper/UI/TabSwitch";
import { Home, Play, Sparkle } from "lucide-react";
import React from "react";
import HeroPoster from "./HeroPoster";

const ProductHero = () => {
  return (
    <section className="flex w-full flex-col items-center justify-around pt-14">
      <div className="grid w-full max-w-7xl grid-cols-1 gap-2 px-4 xl:grid-cols-2 xl:gap-20 xl:px-0">
        {/* Left text */}
        <div className="flex size-full flex-col justify-center gap-4">
          <p className="relative text-slate-400  inline font-regular text-sm xl:text-base leading-[1.35] font-semibold">
            {" "}
            Stop wasting countless weekends on irrelevant visits
          </p>
          <h1 className="inline font-regular text-[2.4rem] leading-[1.10] font-semibold xl:text-[3rem]">
            Visit curated homes,
            <br className="hidden xl:inline" /> negotiate smarter
            <br className="hidden xl:inline" /> & buy intelligently.
          </h1>
          <p className="inline font-regular text-base xl:text-xl">
            Get end-to-end guidance from property wizards
            <br className="hidden xl:inline" /> who've helped intelligent
            homebuyers like you
            <br className="hidden xl:inline" /> buy 200+ homes in the last year
            alone.
          </p>
          <div className="mt-2 space-y-4">
            <div className="flex w-full flex-col gap-2 xl:w-100">
              <div className="flex flex-col gap-2">
                <TabSwitch
                  tabs={["Bangalore", "Mumbai"]}
                  defaultTab="Bangalore"
                  onChange={(city) => console.log("Selected:", city)}
                  size="sm"
                  label="Select City"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 xl:flex-row xl:gap-6">
              {/* <button className="items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-lg transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-orange-500 text-white shadow-sm hover:bg-orange-400 h-9 px-4 py-2 inline font-semibold text-xs xl:text-sm leading-[1.35] w-full xl:w-100">
                Book An Appointment
              </button> */}
              <ActionButton size="lg" variant="brand">
                Book An Appointment
              </ActionButton>
            </div>
            <div className="hidden w-100 justify-center xl:flex">
              <p className="inline font-regular text-sm leading-[1.35]">
                Already a member?{" "}
                <span className="text-orange-500 font-semibold ">Login</span>
              </p>
            </div>
          </div>
        </div>
        {/* Right Youtube */}
        <div className="relative flex items-center">
          <div className="relative hidden w-fit px-4 xl:block xl:px-0 xl:pb-8">
            <img
              src="https://i.ytimg.com/vi/RXrC_Rnzj3s/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAehcLPvh5oqTvUlxmC2IIrxuiAXQ"
              alt="product video"
              className="relative z-10 w-125 h-70 rounded-4xl"
            />
            <div className="absolute inset-0 z-20 flex size-full items-center justify-center">
              <div className="flex items-center size-16 justify-center rounded-full bg-white">
                <Play className="size-10 text-orange-500" />
              </div>
            </div>
            <Sparkle className="absolute text-orange-300 -top-6 right-1 z-20 size-12 xl:-top-10 xl:-right-6 xl:size-20" />
          </div>
          <Home className="absolute text-orange-200 -top-10 -left-2 hidden size-25 xl:-top-8 xl:-left-16 xl:block xl:size-50" />
          <Home className="absolute text-orange-100 -right-2 -bottom-4 hidden size-[75px] xl:right-10 xl:bottom-2 xl:block xl:size-[152px]" />
        </div>
      </div>
      <HeroPoster />
    </section>
  );
};

export default ProductHero;
