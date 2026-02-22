import TestimonialCards from "@/helper/UI/TestimonialCards";
import React from "react";

const Testimonial = () => {
  return (
    <section className="flex w-full flex-col items-center">
      <div className="mb-4 flex flex-col items-center px-4 xl:mb-0 xl:px-0">
        <p className="inline font-semibold text-[#FF6D33] text-sm xl:text-lg leading-[1.35] text-center">
          Hear from your fellow homeowners
        </p>
        <h2 className="inline font-normal text-2xl xl:text-[2.5rem] leading-[1.35] text-center">
          <span className="font-semibold text-gray-800">1000+</span> intelligent
          homebuyers trusted us
          <br className="hidden xl:inline" /> with their biggest life decision
          because we helped
          <br className="hidden xl:inline" /> them
          <i className="text-orange-500">know if</i> it was the right one.
        </h2>
      </div>
      <div className="relative flex w-full flex-col xl:w-full">
        <TestimonialCards />
      </div>
    </section>
  );
};

export default Testimonial;
