"use client";

import React, { useState } from "react";
import TabSwitch from "@/helper/UI/TabSwitch";
import ProductComparisonTable from "@/helper/UI/ProductComparisonTable";

const ProductDifference = () => {
  const [activeTab, setActiveTab] = useState("Online Portal");

  return (
    <section className="flex w-full flex-col items-center pb-14">
      <div className="flex flex-col gap-2 w-full max-w-[1280px]">
        <div className="flex flex-col items-center gap-6 px-4 xl:flex-row xl:items-end xl:justify-between xl:px-0">
          <header className="flex flex-col gap-1">
            <span className="inline font-medium text-[#FF6D33] text-sm xl:text-lg">
              What makes us different?
            </span>
            <h4 className="inline font-regular text-2xl xl:text-[2.5rem] leading-[1.35]">
              Our homebuyers say we're refreshing,
              <br className="hidden xl:inline" /> intelligent and supportive.
              Here's why.
            </h4>
          </header>
          <div className="flex w-full flex-col items-center gap-2 xl:w-fit">
            <TabSwitch
              tabs={["Online Portal", "Local Broker"]}
              defaultTab="Online Portal"
              onChange={(value) => setActiveTab(value)}
              size="lg"
              label="Compare Our Service with"
            />
          </div>
        </div>

        <div className="mt-6 px-4 xl:px-0">
          <ProductComparisonTable activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
};

export default ProductDifference;
