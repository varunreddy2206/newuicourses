"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Bell,
  MessageCircle,
  Search,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

export default function userheader({ noOffset = false }) {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("User");

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Load user name
  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) setUserName(storedName);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleDocClick(e) {
      if (
        open &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleDocClick);
    return () => document.removeEventListener("mousedown", handleDocClick);
  }, [open]);

  const topClass = noOffset ? "top-0" : "top-[24px] sm:top-[32px]";

  return (
    <header className={`fixed ${topClass} left-0 w-full bg-white shadow-sm px-6 py-3 border-b z-40`}>



      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LEFT SIDE → MOBILE & TABLET: LOGO + USER IMAGE */}
        <div className="flex items-center gap-4 md:gap-5">

          {/* LOGO */}
          <div className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              width={40}
              height={40}
              alt="logo"
              className="object-contain"
            />
          </div>

          {/* EXPLORE (Tablet + Desktop + Laptop) */}
          <Link
            href="/course"
            className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-full gap-2 text-[11px] sm:text-sm font-medium hover:bg-blue-700 inline-flex items-center whitespace-nowrap"
          >
            <span className="text-lg">»»»</span>
            <span>Explore Courses</span>
          </Link>

          {/* MY LEARNING (Desktop only) */}
          <button className="text-gray-700 hover:text-black text-sm font-medium hidden lg:flex">
            My Learning
          </button>
        </div>

        {/* RIGHT SIDE — DESKTOP ONLY */}
        <div className="hidden lg:flex items-center gap-6">

          {/* SEARCH BAR */}
          <div className="flex items-center border rounded-full px-4 py-2 w-[300px] shadow-sm">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search courses here....."
              className="ml-2 w-full outline-none text-sm text-gray-700"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-1.5 rounded-full text-sm text-white font-medium">
              Search
            </button>
          </div>

          {/* MESSAGE ICON */}
          <button className="relative text-gray-700 hover:text-black">
            <MessageCircle size={21} />
          </button>

          {/* NOTIFICATION ICON */}
          <button className="relative text-gray-700 hover:text-black">
            <Bell size={21} />
          </button>

          {/* USER DROPDOWN */}
          <div className="relative">
            <button
              ref={buttonRef}
              onClick={() => setOpen((s) => !s)}
              className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full text-white text-sm font-medium"
            >
              <div className="w-7 h-7 rounded-full bg-white overflow-hidden">
                <Image
                  src="/dashboard/profile.png"
                  alt="user"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>

              <span className="capitalize">{userName}</span>
              <ChevronDown size={16} />
            </button>

            {/* DROPDOWN MENU */}
            {open && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-48 bg-white shadow-lg border rounded-lg py-2 z-50"
              >
                <Link href="/userdashboard/profile" className="block px-4 py-2 hover:bg-gray-100">
                  Profile
                </Link>
                <Link href="/userdashboard/profilecourses" className="block px-4 py-2 hover:bg-gray-100">
                  My Courses
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Certificates
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Help Center
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE + TABLET RIGHT CONTROLS (≤1024px) */}
        <div className="lg:hidden flex items-center gap-4 ml-10 md:ml-4">

          {/* TABLET SEARCH BAR */}
          <div className="hidden md:flex lg:hidden items-center border rounded-full shadow-sm overflow-hidden px-3 py-1.5 w-[220px]">
            <Search size={16} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full px-2 text-sm outline-none text-gray-700"
            />
          </div>

          {/* PROFILE QUICK ACCESS */}
          <button className="flex items-center gap-2 text-gray-700 text-sm font-medium">
            <div className="w-8 h-8 rounded-full bg-white overflow-hidden border">
              <Image
                src="/dashboard/profile.png"
                alt="user"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <span className="hidden sm:inline">Profile</span>
          </button>

          {/* TOGGLE BUTTON */}
          <button onClick={() => setOpen(!open)} className="text-gray-700">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE + TABLET DROPDOWN */}
      {open && (
        <div className="lg:hidden mt-3 bg-gray-50 p-4 rounded-md shadow-md space-y-4">

          {/* SEARCH BAR */}
          <div className="flex md:hidden items-center border rounded-full shadow-sm overflow-hidden px-3">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search courses here……"
              className="w-full px-2 py-2 outline-none text-gray-700"
            />
          </div>

          {/* MESSAGE */}
          <button className="flex items-center gap-3 text-gray-700 text-sm">
            <MessageCircle size={20} /> Messages
          </button>

          {/* NOTIFICATION */}
          <button className="flex items-center gap-3 text-gray-700 text-sm">
            <Bell size={20} /> Notifications
          </button>

          {/* PROFILE MENU */}
          <Link href="/userdashboard/profile" className="w-full block px-2 py-2 text-gray-800">Profile</Link>
          <Link href="/userdashboard/profilecourses" className="w-full block px-2 py-2 text-gray-800">My Courses</Link>
          <button className="w-full text-left px-2 py-2 text-gray-800">Certificates</button>
          <button className="w-full text-left px-2 py-2 text-gray-800">Help Center</button>
          <button className="w-full text-left px-2 py-2 text-gray-800">Logout</button>
        </div>
      )}
    </header>
  );
}