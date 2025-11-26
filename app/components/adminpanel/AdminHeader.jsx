"use client";

import Image from "next/image";
import { Search, Bell, Mail } from "lucide-react";

export default function AdminHeader() {
  return (
    <header className="w-full bg-white border-b px-6 py-3 flex items-center justify-between sticky top-0 z-50">

      {/* LEFT — LOGO */}
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png" // replace with your logo path
          width={32}
          height={32}
          alt="Ascend Academy"
        />
        <div className="flex flex-col -mt-1">
          <p className="text-lg font-semibold leading-none">Ascend</p>
          <p className="text-xs text-gray-500 -mt-1">Academy</p>
        </div>
      </div>

      {/* MIDDLE — SEARCH BAR */}
      <div className="w-full max-w-[700px] mx-10 hidden md:flex">
        <div className="w-full flex items-center bg-[#fafafa] border border-gray-200 rounded-full px-4 py-2">
          <Search size={18} className="text-gray-500 mr-3" />
          <input
            type="text"
            placeholder="Type to search"
            className="w-full bg-transparent outline-none text-sm"
          />
        </div>
      </div>

      {/* RIGHT — ICONS + PROFILE */}
      <div className="flex items-center gap-6">
        <Mail size={22} className="text-gray-700 cursor-pointer" />
        <Bell size={22} className="text-gray-700 cursor-pointer" />

        {/* PROFILE PICTURE */}
        <Image
          src="/profile.jpg" // replace with your user's image
          width={36}
          height={36}
          alt="User"
          className="rounded-full border"
        />
      </div>
    </header>
  );
}
