import ActionButton from "@/helper/Custom Buttons/ActionBTN";
import {
  Award,
  Eye,
  MessageSquare,
  ReceiptIndianRupee,
  SquareCheckBig,
  UserCheck,
} from "lucide-react";
import React from "react";

const ROIsection = () => {
  return (
    <div className="bg-slate-950 my-14 flex w-full flex-col items-center py-14">
      <div className="grid w-full max-w-7xl grid-cols-1 gap-10 px-4 xl:grid-cols-2 xl:px-0">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="inline font-normal text-white text-2xl xl:text-[2.5rem] leading-[1.35]">
              Choose the smart way to save
              <br /> ~₹ 4.78 L & 3 months of your life.
            </h3>
            <p className="inline font-normal text-[#D5D8E3] text-sm xl:text-base leading-[1.35]">
              You're about to make the biggest purchase of your life.
              <br /> We make sure you do it intelligently.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div className="flex items-center gap-2">
              <UserCheck className="text-orange-500 text-xl font-bold size-5" />{" "}
              <span className="inline font-normal text-white text-sm xl:text-base leading-[1.35]">
                Work with trained architects
              </span>
            </div>
            <div className="flex items-center gap-2">
              <SquareCheckBig className="text-orange-500 text-xl font-bold size-5" />{" "}
              <span className="inline font-normal text-white text-sm xl:text-base leading-[1.35]">
                Check builders, areas & projects
              </span>
            </div>

            <div className="flex items-center gap-2">
              <MessageSquare className="text-orange-500 text-xl font-bold size-5" />{" "}
              <span className="inline font-normal text-white text-sm xl:text-base leading-[1.35]">
                See pros & cons exhaustively
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="text-orange-500 text-xl font-bold size-5" />{" "}
              <span className="inline font-normal text-white text-sm xl:text-base leading-[1.35]">
                Assess livability & financial risks
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ReceiptIndianRupee className="text-orange-500 text-xl font-bold size-5" />{" "}
              <span className="inline font-normal text-white text-sm xl:text-base leading-[1.35]">
                Lowest price negotiations
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="text-orange-500 text-xl font-bold size-5" />{" "}
              <span className="inline font-normal text-white text-sm xl:text-base leading-[1.35]">
                Get rewarded handsomely
              </span>
            </div>
          </div>
        </div>
        <div className="text-card-foreground relative h-full overflow-hidden rounded-xl bg-zinc-700/30 p-[2px]">
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] [mask-composite:intersect] [mask-clip:padding-box,border-box]"></div>
          <div className="relative flex h-full w-full flex-col justify-between gap-6 rounded-xl bg-black p-6">
            <div className="flex flex-col gap-4">
              <h4 className="inline font-regular text-white text-xl xl:text-[2rem] leading-[1.35]">
                Guided Home Buying
              </h4>
              <p className="inline font-regular text-[#D5D8E3] text-sm xl:text-base leading-[1.35]">
                9 in 10 homebuyers have bought a home via us within 25 days.
                <br /> Trusted by 1000+ buyers from Google, Amazon, Peak XV etc.
              </p>
            </div>
            <span className="inline font-regular text-white text-2xl xl:text-[2.5rem] leading-[1.35] font-semibold">
              Save ₹4,78,125 /-
            </span>
            <div className="flex flex-col gap-4">
              <p className="inline font-regular text-[#D5D8E3] text-sm xl:text-base leading-[1.35]">
                Experience truly unbiased advisory & get total peace of mind
              </p>
              <div className="flex w-full flex-col items-center gap-4 xl:flex-row">
                <ActionButton size="lg" variant="brand">
                  Book An Appointment
                </ActionButton>
                <ActionButton size="lg" variant="ghost">
                  See How You Will Save
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default ROIsection;
