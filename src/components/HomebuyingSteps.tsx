import ActionButton from "@/helper/Custom Buttons/ActionBTN";
import GHBstepsCarousal from "@/helper/UI/GHBstepsCarousal";
import React from "react";

const HomebuyingSteps = () => {
  return (
    <section className="flex w-full flex-col items-center gap-8 py-28">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <div className="flex w-full max-w-7xl flex-col px-4 xl:px-0">
          <p className="inline font-normal text-[#FF6D33] text-sm xl:text-lg leading-[1.35]">
            We're with you every step of the journey
          </p>
          <h2 className="inline font-regular text-2xl xl:text-[2.5rem] leading-[1.35]">
            Lost souls fall prey to FOMO, spam & deceit.
            <br className="hidden xl:inline" /> Not you. Our experts will guide
            you home.
          </h2>
        </div>
        <div className="flex w-98">
          <ActionButton size="sm" variant="brand">
            Book An Appointment
          </ActionButton>
        </div>
      </div>

      <div className="min-w-0 shrink-0 grow-0 pl-4 w-full max-w-7xl basis-5/6 xl:basis-5/6">
        {" "}
        <GHBstepsCarousal />{" "}
      </div>
    </section>
  );
};

export default HomebuyingSteps;
