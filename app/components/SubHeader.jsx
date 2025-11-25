"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

export default function SubHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-3 left-0 w-full z-30 bg-white shadow-md px-0 py-4 mt-4 sm:mt-0">
      <div className="w-full px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-3 lg:mt-3">

        {/* LEFT CLUSTER: LOGO + EXPLORE */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Ascend Academy"
              width={70}
              height={70}
              className="object-contain"
            />
          </div>

          {/* EXPLORE BUTTON (ALL DEVICES) */}
          <Link href="/courseslist">
            <button className="bg-blue-600 text-white px-4 sm:px-8 py-2 sm:py-2 mt-3 sm:mt-3 md:mt-5 lg:mt-0 rounded-full font-medium text-base inline-flex items-center gap-2 hover:bg-blue-700 lg:px-6 lg:py-3 max-[360px]:w-full max-[360px]:justify-center max-[360px]:text-sm">
              <span className="text-lg sm:text-base">»»»</span> Explore Courses
            </button>
          </Link>
        </div>

        {/* RIGHT CLUSTER (Desktop) */}
        <div className="hidden lg:flex items-center gap-4 ml-auto mt-5 lg:mt-0">
          {/* SEARCH BAR */}
          <div className="flex items-center w-[360px] border rounded-full shadow-sm overflow-hidden">
            <div className="px-3 text-gray-500">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Search courses here……"
              className="w-full px-2 py-2 outline-none text-gray-700"
            />
            <button className="bg-yellow-400 px-6 py-2 font-medium text-white hover:bg-yellow-500">
              Search
            </button>
          </div>

          {/* LOGIN BUTTON */}
          <Link href="/login">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
              Login →
            </button>
          </Link>

          {/* JOIN FOR FREE (Desktop) */}
          <Link href="/Registrationform">
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-medium">
              Join For Free
            </button>
          </Link>
        </div>

        {/* JOIN FOR FREE (Tablet only) */}
        <Link href="/Registrationform" className="hidden sm:flex lg:hidden">
          <button className="border border-blue-600 text-blue-600 px-6 mt-5 py-2 ml-55 rounded-full font-medium">
            Join For Free
          </button>
        </Link>

        {/* HAMBURGER MENU (Mobile + Tablet) */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gray-700 mt-4"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE / TABLET DROPDOWN */}
      {open && (
        <div className="lg:hidden mt-3 bg-gray-50 p-4 rounded-md shadow-md space-y-4">

          {/* SEARCH (Mobile + Tablet) */}
          <div className="flex items-center w-full border mt-2 rounded-full shadow-sm overflow-hidden">
            <div className="px-3 text-gray-500">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Search courses here……"
              className="w-full px-2 py-2 outline-none text-gray-700"
            />
            <button className="bg-yellow-400 px-6 py-2 font-medium text-white">
              Search
            </button>
          </div>

          {/* LOGIN (Mobile + Tablet) */}
          <Link href="/login">
            <button className="w-full bg-blue-600 text-white py-3 rounded-full font-medium mb-3">
              Login →
            </button>
          </Link>

          {/* JOIN FOR FREE – Mobile only */}
          <Link href="/Registrationform">
            <button className="w-full bg-white border border-blue-600 text-blue-600 py-3 rounded-full font-medium sm:hidden">
              Join For Free
            </button>
          </Link>

        </div>
      )}
    </div>
  );
}