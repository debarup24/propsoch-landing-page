"use client";
import SearchBar from "@/components/SearchBar";
import ActionButton from "@/helper/Custom Buttons/ActionBTN";
import {
  ChevronDown,
  Heart,
  Share2,
  Home,
  Search,
  Menu,
  HandHeart,
} from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  return (
    <>
      {/* TOP NAVBAR (Desktop & Mobile) */}
      <nav className="bg-white sticky top-0 z-40 flex w-full flex-col items-center shadow-md">
        {/* Banner Section */}
        <div className="bg-orange-500 flex w-full items-center justify-center">
          <div className="w-full max-w-7xl px-4 py-1">
            <div className="flex text-white text-[10px] md:text-sm w-full justify-center gap-1.5 items-center">
              <p className="font-light">Check any property's </p>
              <span className="font-semibold underline">fair price</span> &
              negotiate confidently.
            </div>
          </div>
        </div>

        {/* Main Nav Section */}
        <div className="flex w-full max-w-7xl items-center justify-between px-4 py-2 md:py-4">
          {/* Logo prt */}
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

          {/* Desktop Menu */}
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

            {/* Mobile-only */}
            <div className="flex gap-1.5 md:hidden">
              <button className="md:hidden p-2 rounded-md bg-slate-100">
                <Search className="size-5 text-gray-700" />
              </button>
              <button className="md:hidden p-2 rounded-md bg-slate-100">
                <Share2 className="size-5 text-gray-700" />
              </button>
            </div>

            {/* Desktop-only */}
            <div className="hidden lg:block">
              <ActionButton variant="brand" size="sm">
                Get Started
              </ActionButton>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE BOTTOM NAVIGATION */}
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
            </div>
            <span className="text-[10px] font-medium">Shortlist</span>
          </button>

          <button className="flex flex-col items-center gap-1 text-gray-400">
            <HandHeart className="size-6 " />{" "}
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
