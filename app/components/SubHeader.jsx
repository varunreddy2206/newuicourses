"use client";
import React from "react";
import Image from "next/image";

export default function SubHeader() {
  return (
    <div className="fixed top-10 left-0 w-full z-40 bg-white shadow-md py-[-8px] px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Left Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Ascend Academy"
            width={80}
            height={80}
          />
          <h1 className="text-xl font-semibold text-gray-800">Ascend Academy</h1>
        </div>

        {/* Explore Courses */}
        <button className="hidden md:flex bg-blue-600 text-white px-6 py-2 rounded-full font-medium 
          hover:bg-blue-700 transition items-center gap-2">
          <span className="text-lg">»»</span> Explore Courses
        </button>

        {/* Search Bar */}
        <div className="hidden md:flex items-center w-96 border rounded-full shadow-sm overflow-hidden">
          <input
            type="text"
            placeholder="Search courses here……"
            className="w-full px-4 py-2 outline-none text-gray-700"
          />
          <button className="bg-yellow-400 px-5 py-2 font-medium text-white hover:bg-yellow-500 transition">
            Search
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block border-blue-600 text-blue-600 border px-6 py-2 rounded-full font-medium hover:bg-blue-50">
            Sign Up
          </button>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 flex items-center gap-2">
            Login →
          </button>
        </div>

      </div>
    </div>
  );
}
