"use client";
import SearchBar from "@/components/SearchBar";
import ActionButton from "@/helper/Custom Buttons/ActionBTN";
import { ChevronDown, Heart, Share2, Home, Search, Menu } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  return (
    <>
      {/* TOP NAVBAR (Desktop & Mobile) */}
      <div className="bg-white sticky top-0 z-40 flex w-full flex-col items-center shadow-md">
        {/* Banner Section */}
        <div className="bg-orange-500 flex w-full items-center justify-center">
          <div className="w-full max-w-screen-xl px-4 py-1">
            <div className="flex text-white text-[10px] md:text-sm w-full justify-center gap-1.5 items-center">
              <p className="font-light">Check any property's </p>
              <span className="font-semibold underline">fair price</span> &
              negotiate confidently.
            </div>
          </div>
        </div>

        {/* Main Nav Section */}
        <div className="flex w-full max-w-screen-xl items-center justify-between px-4 py-2 md:py-4">
          {/* Logo */}
          <div className="flex gap-1.5 items-center shrink-0">
            <img
              className="w-7 h-7"
              src="https://www.propsoch.com/blogs/content/images/size/w256h256/2025/01/Logo-Mark.png"
              alt="Propsoch Logo"
            />
            <div className="flex font-semibold text-xl">
              <p className="text-orange-500">Prop</p>
              <span>soch</span>
            </div>
          </div>

          {/* Desktop Menu (Hidden on Mobile) */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <ul className="flex gap-1">
              {["Properties", "Services", "Resources", "Company"].map(
                (item) => (
                  <li key={item}>
                    <button className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-orange-50 transition-colors">
                      {item}
                      <ChevronDown className="size-3 text-slate-700 ml-1 mt-0.5" />
                    </button>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Action Buttons (Search & Mobile Toggle) */}
          <div className=" flex items-center gap-2 md:gap-4">
            <div className="hidden md:block ">
              <SearchBar />
            </div>

            {/* Icons visible on larger mobile/desktop */}
            <div className="hidden sm:flex gap-2">
              <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors">
                <Share2 className="size-4 text-gray-800" />
              </button>
              <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors">
                <Heart className="size-4 text-gray-800" />
              </button>
            </div>

            {/* Mobile-only Search Trigger */}
            <button className="md:hidden p-2">
              <Search className="size-6 text-gray-700" />
            </button>

            {/* Desktop-only Get Started */}
            <div className="hidden lg:block">
              <ActionButton variant="brand" size="sm">
                Get Started
              </ActionButton>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE BOTTOM NAVIGATION (Matches Reference Image) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 px-6 py-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-between">
          <button className="flex flex-col items-center gap-1 group">
            <Home className="size-6 text-orange-500" />
            <span className="text-[10px] font-medium text-orange-500">
              Home
            </span>
          </button>

          <button className="flex flex-col items-center gap-1 text-gray-400">
            <div className="relative">
              <Heart className="size-6" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[8px] rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </div>
            <span className="text-[10px] font-medium">Shortlist</span>
          </button>

          <button className="flex flex-col items-center gap-1 text-gray-400">
            <Heart className="size-6 rotate-180" />{" "}
            {/* Placeholder for similar icon */}
            <span className="text-[10px] font-medium">Activity</span>
          </button>

          <button className="flex flex-col items-center gap-1 text-gray-400">
            <Menu className="size-6" />
            <span className="text-[10px] font-medium">Menu</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

// import SearchBar from "@/components/SearchBar";
// import ActionButton from "@/helper/Custom Buttons/ActionBTN";
// import { ChevronDown, Heart, Share2 } from "lucide-react";
// import React from "react";

// const Navbar = () => {
//   return (
//     <div className="bg-white sticky top-0 z-40 flex w-full flex-col items-center shadow-md sm:hidden lg:visible ">
//       <div className="bg-orange-500 flex w-full items-center justify-center">
//         <div className="w-full max-w-screen-xl px-4 py-1 xl:px-0">
//           <div className="flex text-white text-sm w-full justify-center gap-2 xl:items-center">
//             <p className="font-light">Check any property's </p>{" "}
//             <span className="font-semibold underline">fair price</span> &
//             negotiate confidently.
//           </div>
//         </div>
//         {/* Check any property's <span className="text-md">fair price</span> */}
//       </div>
//       <div className="flex w-full max-w-7xl items-center justify-between px-4 py-2 xl:px-0 xl:py-4">
//         {/* Logo */}
//         <div className="flex gap-1.5">
//           <img
//             className="w-7 h-7"
//             src="https://www.propsoch.com/blogs/content/images/size/w256h256/2025/01/Logo-Mark.png"
//             alt=""
//           />
//           <div className="flex font-semibold text-xl">
//             <p className="text-orange-500">Prop</p>
//             <span>soch</span>{" "}
//           </div>
//         </div>
//         {/* Menu */}
//         <div className="relative max-w-max flex-1 items-center justify-center sm:hidden xl:flex">
//           <div className="relative ">
//             <ul className="group flex flex-1 list-none items-center justify-center gap-1">
//               <li className="relative">
//                 {/* <button className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-primarylight hover:text-accent-foreground focus:bg-primarylight focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-primarylight data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-primarylight data-[state=open]:bg-primarylight focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 group"></button> */}
//                 <button className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium hover:bg-orange-50 hover:text-accent-foreground focus:bg-primarylight focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-primarylight data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-primarylight data-[state=open]:bg-primarylight focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 group">
//                   Properties
//                   <ChevronDown className="size-3 text-slate-700 p-0.5 ml-1" />
//                 </button>
//               </li>
//               <li className="relative">
//                 <button className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium hover:bg-orange-50 hover:text-accent-foreground focus:bg-primarylight focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-primarylight data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-primarylight data-[state=open]:bg-primarylight focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 group">
//                   Services
//                   <ChevronDown className="size-3 text-slate-700 p-0.5 ml-1" />
//                 </button>{" "}
//               </li>
//               <li className="relative">
//                 <button className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium hover:bg-orange-50 hover:text-accent-foreground focus:bg-primarylight focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-primarylight data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-primarylight data-[state=open]:bg-primarylight focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 group">
//                   Resources
//                   <ChevronDown className="size-3 text-slate-700 p-0.5 ml-1" />
//                 </button>
//               </li>
//               <li className="relative">
//                 <button className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium hover:bg-orange-50 hover:text-accent-foreground focus:bg-primarylight focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-primarylight data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-primarylight data-[state=open]:bg-primarylight focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 group">
//                   Company
//                   <ChevronDown className="size-3 text-slate-700 p-0.5 ml-1" />
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//         {/* Buttons */}
//         <div className="flex items-center justify-end gap-4 xl:mx-0 xl:w-auto">
//           <SearchBar />
//           <div className="ml-auto items-center flex"></div>
//           <button className="cursor-pointer justify-center whitespace-nowrap rounded-lg text-xs font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gray-100 text-foreground shadow-xs hover:bg-accent/80 h-9 w-9 flex items-center gap-2">
//             <Share2 className="size-4 text-gray-800" />
//           </button>
//           <button className="cursor-pointer justify-center whitespace-nowrap rounded-lg text-xs font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gray-100 text-foreground shadow-xs hover:bg-accent/80 h-9 w-9 flex items-center gap-2">
//             <Heart className="size-5 text-gray-800" />
//           </button>
//           <div className="hidden items-center justify-end gap-4 xl:flex">
//             {/* <button className="items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-lg transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-orange-500 text-white shadow-sm hover:bg-orange-400 h-9 px-4 py-2 inline font-semibold text-xs xl:text-sm leading-[1.35] w-full text-left xl:w-fit xl:text-center">
//               Get Started
//             </button> */}
//             <ActionButton variant="brand" size="sm">
//               Get Started
//             </ActionButton>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
