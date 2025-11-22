"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

export default function SubHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-3 left-0 w-full z-30 bg-white shadow-md px-6 py-4 mt-4 sm:mt-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Ascend Academy"
            width={70}
            height={70}
            className="object-contain"
          />
        </div>

        {/* EXPLORE BUTTON (Visible on all devices) */}
        <Link href="/">
          <button className="flex bg-blue-600 text-white px-8 py-2 mt-5 rounded-full font-medium text-base items-center gap-2 hover:bg-blue-700">
            <span className="text-lg">»»»</span> Explore Courses
          </button>
        </Link>

        {/* SEARCH BAR (Desktop only) */}
        <div className="hidden lg:flex items-center w-[340px] mt-5 border rounded-full shadow-sm overflow-hidden">
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

        {/* LOGIN BUTTON (Desktop only) */}
        <Link href="/login">
          <button className="hidden lg:block bg-blue-600 text-white px-6 py-2 mt-5 rounded-full">
            Login →
          </button>
        </Link>

        {/* JOIN FOR FREE (Desktop + Tablet visible, Mobile hidden) */}
        <Link href="/Registrationform">
        <button className="border border-blue-600 text-blue-600 px-6 mt-5 py-2 rounded-full font-medium flex sm:flex max-sm:hidden">
          Join For Free
        </button>
        </Link>

        {/* HAMBURGER (Mobile + Tablet) */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gray-700"
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
          <button className="w-full bg-blue-600 text-white py-3 rounded-full font-medium">
            Login →
          </button>

          {/* JOIN FOR FREE – Mobile only */}
          <button className="w-full bg-white border border-blue-600 text-blue-600 py-3 rounded-full font-medium sm:hidden">
            Join For Free
          </button>
        </div>
      )}
    </div>
  );
}
