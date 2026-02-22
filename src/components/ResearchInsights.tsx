import ActionButton from "@/helper/Custom Buttons/ActionBTN";
import InsightsPanel from "@/helper/UI/InsightsPanel";
import React from "react";

const ResearchInsights = () => {
  return (
    <div className="flex w-full flex-col items-center px-4 py-14 xl:px-0">
      <div className="flex w-full max-w-7xl flex-col gap-12">
        <div className="flex w-full max-w-3xl flex-col gap-3">
          <p className="inline font-regular text-[#FF6D33] text-sm xl:text-lg leading-[1.35]">
            Meet India’s most advanced real estate platform
          </p>
          <h2 className="inline font-normal text-2xl xl:text-[2.5rem] leading-[1.35]">
            We deliver deeply researched insights for every house till you call
            it your home
          </h2>
        </div>
        {/* 2nd part */}
        <div className="flex flex-col space-y-14">
          <div className="relative rounded-xl p-8 bg-transparent">
            <InsightsPanel />
          </div>

          {/* Peace of mind  */}
          <div className="relative bg-violet-100 flex flex-col items-center gap-4 overflow-hidden rounded-xl p-8 xl:flex-row xl:justify-between max-w-(--breakpoint-xl bg-tertiarylight w-full">
            <div className="z-10 flex flex-col items-center gap-4 xl:flex-row">
              <div className="flex flex-col items-center space-y-2 xl:items-start">
                <h2 className="text-violet-600 text-xl xl:text-[2rem] leading-[1.35] flex items-center gap-2 text-center font-semibold xl:text-left text-tertiary">
                  All this & lot more, for your peace of mind
                </h2>
                <p className="inline font-regular text-[#66677E] text-sm leading-[1.35] text-center xl:text-left">
                  Insights you won't find anywhere else on locations, builders &
                  projects
                </p>
              </div>
            </div>
            {/*buttons*/}
            <div className="flex justify-start pt-0 w-full flex-col gap-4 xl:w-100 xl:flex-row">
              <ActionButton size="sm" variant="banner">
                See Sample Report
              </ActionButton>
              <ActionButton size="sm" variant="primary">
                Book An Appointment
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchInsights;
