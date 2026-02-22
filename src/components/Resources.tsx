import ActionButton from "@/helper/Custom Buttons/ActionBTN";
import ResourcesCards from "@/helper/UI/ResourcesCards";
import { MessageCircle } from "lucide-react";
import React from "react";

const Resources = () => {
  return (
    <div className="flex w-full flex-col items-center py-24">
      <div className="flex w-full max-w-7xl flex-col gap-14 px-4 xl:px-0">
        <div className="flex w-full flex-col xl:w-1/2">
          <span className="inline font-normal text-[#FF6D33] text-sm xl:text-lg leading-[1.35] text-center xl:text-left">
            Join an exclusive club of empowered homebuyers
          </span>
          <h2 className="inline font-regular text-2xl xl:text-[2.5rem] leading-[1.35] text-center xl:text-left">
            Empower yourself with our guides, hacks & resources
          </h2>
        </div>
        <ResourcesCards />
        {/* banner */}
        <div className="relative flex w-full max-w-7xl flex-col items-center gap-4 overflow-hidden rounded-xl p-10 bg-gradient-to-b from-[#FFF3EF] via-[#f2d7cf] to-[#FF9D7E]">
          <div className="flex flex-col items-center space-y-2">
            <div className="inline font-normal text-sm leading-[1.35] text-center text-purple-500">
              Community
            </div>
            <h2 className="inline font-regular text-xl xl:text-[2rem] leading-[1.35] text-center font-semibold">
              Hometrust Collective
            </h2>
            <p className="inline font-regular text-[#66677E] text-sm leading-[1.35] text-center">
              An exclusive community of buyers, owners & experts
              <br className="hidden xl:inline" /> who help each other stay
              updated about the market
            </p>
          </div>
          <div className="flex justify-start pt-0 w-full xl:w-85 gap-3">
            <ActionButton size="sm" variant="neutral">
              Join Bangalore
            </ActionButton>
            <ActionButton size="sm" variant="neutral">
              Join Mumbai
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
