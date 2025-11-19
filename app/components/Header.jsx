"use client";
import React from "react";
import { Circle } from "lucide-react";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black text-white py-2 px-4 shadow">
      <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm md:text-base">
        <Circle className="text-yellow-400 w-4 h-4" />
        <p className="text-gray-200">
          <span className="font-semibold text-yellow-300">Join Our</span> New On - Demand Courses &amp; Get Live Projects Experience
        </p>
      </div>
    </div>
  );
}
