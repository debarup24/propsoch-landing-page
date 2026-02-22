import AccessoriesCard from "@/helper/UI/AccessoriesCard";
import React from "react";

const Accessories = () => {
  return (
    <div className="flex  w-full flex-col items-center px-4 py-14 xl:px-0 xl:py-24">
      <div className="relative flex flex-col items-center gap-4 bg-slate-100 overflow-hidden rounded-xl p-10 bg-card w-full max-w-7xl">
        <div className="flex flex-col items-center space-y-2">
          <div className="inline text-orange-500 text-sm leading-[1.35] text-center max-w-3/4">
            That’s not all, we’re really with you every step of the way
          </div>
          <h2 className="inline text-xl xl:text-[2rem] leading-[1.35] text-center font-normal xl:max-w-1/2">
            From home loans, legal, taxes, interiors to printing housewarming
            invites, we’ve got you covered
          </h2>
        </div>
        <div className="flex justify-start pt-0">
          <AccessoriesCard />
        </div>
      </div>
    </div>
  );
};

export default Accessories;
