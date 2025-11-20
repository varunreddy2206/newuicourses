"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function SubHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-10 left-0 w-full z-40 bg-white shadow-md px-6 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Ascend Academy"
            width={80}
            height={80}
          />
          <h1 className="text-xl font-semibold text-gray-800">Ascend Academy</h1>
        </div>

        {/* DESKTOP NAV — now only on lg (1024px and up) */}
        <div className="hidden lg:flex items-center gap-6">

          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium 
            hover:bg-blue-700 transition flex items-center gap-2">
            <span className="text-lg">»»</span> Explore Courses
          </button>

          <div className="flex items-center w-96 border rounded-full shadow-sm overflow-hidden">
            <input
              type="text"
              placeholder="Search courses here……"
              className="w-full px-4 py-2 outline-none text-gray-700"
            />
            <button className="bg-yellow-400 px-5 py-2 font-medium text-white hover:bg-yellow-500 transition">
              Search
            </button>
          </div>

          <button className="border-blue-600 text-blue-600 border px-6 py-2 rounded-full font-medium hover:bg-blue-50">
            Sign Up
          </button>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 flex items-center gap-2">
            Login →
          </button>
        </div>

        {/* MOBILE/TABLET MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE & TABLET DROPDOWN */}
      {open && (
        <div className="lg:hidden mt-3 bg-gray-50 p-4 rounded-md shadow-md space-y-4">

          <button className="w-full bg-blue-600 text-white py-3 rounded-full font-medium flex justify-center gap-2">
            <span className="text-lg">»»</span> Explore Courses
          </button>

          <div className="flex items-center w-full border rounded-full shadow-sm overflow-hidden">
            <input
              type="text"
              placeholder="Search courses here……"
              className="w-full px-4 py-2 outline-none text-gray-700"
            />
            <button className="bg-yellow-400 px-5 py-2 font-medium text-white">
              Search
            </button>
          </div>

          <button className="w-full border-blue-600 text-blue-600 border py-3 rounded-full font-medium text-center">
            Sign Up
          </button>

          <button className="w-full bg-blue-600 text-white py-3 rounded-full font-medium">
            Login →
          </button>
        </div>
      )}
    </div>
  );
}
