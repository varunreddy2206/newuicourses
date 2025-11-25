"use client";
import React from "react";
import { Circle } from "lucide-react";

export default function UserSubHeader() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black text-white px-0 py-1.5 sm:py-2 shadow">
      <div className="w-full px-4 sm:px-6 lg:px-10 flex items-center gap-2 
                      text-[10px] sm:text-xs md:text-sm leading-tight truncate">
        
        <Circle className="text-yellow-400 w-3 h-3 sm:w-4 sm:h-4" />

        <p className="text-gray-200 whitespace-nowrap overflow-hidden text-ellipsis">
          <span className="font-semibold text-yellow-300">Join Our</span> 
          {" "}New On - Demand Courses & Get Live Projects Experience
        </p>
      </div>
    </div>
  );
}