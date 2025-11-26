"use client";

import { useEffect, useState } from "react";
import { Search, Play, Monitor, Users, Building } from "lucide-react";

export default function UserGreetings() {
  const [username, setUsername] = useState("");

  // 👉 Fetch username (replace with your real logic)
  useEffect(() => {
    const stored = localStorage.getItem("username");
    setUsername(stored || "User");
  }, []);

  return (
    <div className="w-full bg-white py-10 flex justify-center">
      <div className="w-full max-w-[1400px] px-4 grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-10">

        {/* LEFT SECTION ----------------------------- */}
        <div>
          {/* Greeting */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center gap-2">
            Good Morning, <span className="lowercase">{username}</span>
            <span className="text-4xl md:text-5xl">👋</span>
          </h1>

          <p className="text-gray-600 text-base mt-2">
            This is where you'll find the courses you’re enrolled in.
          </p>

          {/* Category Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <button className="flex items-center gap-2 bg-gray-100 px-5 py-2 rounded-full text-sm font-medium">
              <Play size={18} /> Self Learning
            </button>

            <button className="flex items-center gap-2 bg-gray-100 px-5 py-2 rounded-full text-sm font-medium">
              <Monitor size={18} /> Online Courses
            </button>

            <button className="flex items-center gap-2 bg-gray-100 px-5 py-2 rounded-full text-sm font-medium">
              <Building size={18} /> Classroom Courses
            </button>

            <button className="flex items-center gap-2 bg-gray-100 px-5 py-2 rounded-full text-sm font-medium">
              <Users size={18} /> Free Courses
            </button>
          </div>

          {/* Search Bar */}
          <div className="mt-6 flex items-center w-full max-w-full md:max-w-3xl bg-white rounded-full border border-gray-300 overflow-hidden">
            <div className="pl-3 md:pl-4">
              <Search size={16} className="text-gray-500 md:size-[18px]" />
            </div>
            <input
              type="text"
              placeholder="Search courses here......"
              className="flex-1 px-3 md:px-4 py-2.5 md:py-3 outline-none text-xs md:text-sm"
            />
            <button className="bg-yellow-400 text-black font-medium px-4 md:px-6 py-2.5 md:py-3 rounded-r-full text-xs md:text-sm">
              Search
            </button>
          </div>
        </div>

        {/* RIGHT SECTION - INVITE CARD ----------------------------- */}
        <div className="w-full">
          <div className="bg-[#f4f8ff] border border-[#dbe7ff] rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-center md:items-stretch gap-4">
            {/* Gift illustration on the left */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <img
                src="/invite-gift.png"
                alt="gift"
                className="w-24 md:w-28"
              />
            </div>

            {/* Text + CTA on the right */}
            <div className="flex-1 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-semibold">Invite your friends</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Enroll for as many SkillUp courses as you like for <b>FREE</b>
                </p>
              </div>

              <button className="mt-4 w-full flex items-center justify-between bg-white border border-gray-300 px-4 py-3 rounded-xl font-medium text-blue-600">
                Invite now
                <span className="text-blue-600 font-bold text-lg">→</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}