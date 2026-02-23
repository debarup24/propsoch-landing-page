import { Home } from "lucide-react";
import { Instagram, Linkedin, Youtube, Mail } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black z-0 w-full text-white">
      <div className="relative mx-auto flex max-w-[500px] flex-col items-center justify-end gap-12 px-4 py-10 xl:max-w-7xl xl:pb-6">
        {/* Breadcrumb */}
        <nav className="relative mx-auto mb-4 w-full max-w-7xl bg-transparent text-left text-sm">
          <ol className="flex max-w-[80%] flex-wrap items-center space-x-1">
            <li className="flex items-start gap-2 font-medium">
              <Home className="text-orange-500 size-5" />
              Home
            </li>
          </ol>
          <div className="mt-12 h-px w-full bg-white/20"></div>
        </nav>

        {/* Main Footer Content */}
        <div className="flex w-full flex-col items-start justify-between gap-12 xl:flex-row">
          {/* Left Section */}
          <div className="order-last mt-12 w-full xl:order-first xl:mt-0 xl:max-w-96">
            <div className="mb-6 flex flex-col gap-4">
              <h3 className="text-lg font-semibold">Propsoch</h3>
              <p className="text-sm text-gray-400">
                Propsoch is the most advanced real estate research platform for
                homebuyers in India
              </p>
            </div>

            {/* Social Icons */}
            <nav className="mb-6 flex gap-4">
              <div className="rounded-md bg-white/10 p-2 hover:bg-white/20 cursor-pointer">
                <Instagram size={18} />
              </div>
              <div className="rounded-md bg-white/10 p-2 hover:bg-white/20 cursor-pointer">
                <Linkedin size={18} />
              </div>
              <div className="rounded-md bg-white/10 p-2 hover:bg-white/20 cursor-pointer">
                <Youtube size={18} />
              </div>
              <div className="rounded-md bg-white/10 p-2 hover:bg-white/20 cursor-pointer">
                <Mail size={18} />
              </div>
            </nav>
            <div className="text-xs text-gray-400 space-y-1">
              <p>Think Proptech Private Limited</p>
              <p>RERA: PRM/KA/RERA/1251/446/AG/220927/003103</p>
              <p>GSTIN: 12314ASDAD213 &nbsp; CIN: 2131215151661</p>
            </div>
          </div>

          {/* Right Links */}
          <nav className="grid w-full grid-cols-2 gap-10 xl:grid-cols-3">
            <div className="space-y-3">
              <h4 className="font-medium">Top Developers in Bengaluru</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Prestige Developers</li>
                <li>Godrej Properties</li>
                <li>Brigade Developers</li>
                <li>Sobha Developers</li>
                <li>Assetz Developers</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">Top Areas in Bengaluru</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Whitefield</li>
                <li>Sarjapur Road</li>
                <li>Bellandur</li>
                <li>Yelahanka</li>
                <li>HSR Layout</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">Top Filters</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Luxury Homes</li>
                <li>Properties &lt;3Cr</li>
                <li>Properties &lt;2Cr</li>
                <li>Ready To Move In</li>
                <li>Townships</li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="flex w-full flex-col gap-6">
          <div className="h-px w-full bg-white/20"></div>
          <div className="flex w-full flex-col items-center justify-between gap-4 text-xs text-gray-400 md:flex-row">
            <div className="flex gap-4">
              <span className="cursor-pointer hover:text-white">
                Privacy Policy
              </span>
              <span className="cursor-pointer hover:text-white">
                Terms & Conditions
              </span>
            </div>
            <span>© Copyright Think Proptech Pvt Ltd 2026</span>
          </div>
        </div>

        <div className="mt-4 mb-6 lg:mb-0 flex w-full items-center justify-center">
          <span className="select-none bg-gradient-to-b from-[#ff7a45] to-[#3a1c12] bg-clip-text text-center text-6xl font-bold text-transparent md:text-5xl lg:text-[12rem]">
            Propsoch
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
