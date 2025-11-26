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

export default function Usernewheader({ noOffset = false }) {
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
    <header className={`fixed ${topClass} left-0 w-full bg-white shadow-sm px-0 py-3 border-b z-40`}>



      <div className="w-full px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">

        {/* LEFT SIDE → MOBILE & TABLET: LOGO + USER IMAGE */}
        <div className="flex items-center gap-4 flex-wrap">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              width={42}
              height={42}
              alt="logo"
              className="object-contain"
            />
            {/* <div className="flex flex-col leading-tight">
              <span className="text-[18px] font-semibold">Ascend</span>
              <span className="text-[10px] -mt-1 text-gray-600 tracking-wider">
                Academy
              </span>
            </div> */}
          </div>

          {/* EXPLORE (Tablet + Desktop + Laptop) */}
          <Link
            href="/courses"
            className="
              bg-blue-600 text-white px-5 py-2 rounded-full gap-2 text-sm font-medium hover:bg-blue-700
              inline-flex md:inline-flex
              items-center
            "
          >
            <span className="text-lg">»»»</span>
            Explore Courses
          </Link>

          {/* MY LEARNING (Desktop only) */}
          <button className="text-gray-700 hover:text-black text-sm font-medium hidden lg:flex">
            My Learning
          </button>
        </div>

        {/* RIGHT SIDE — DESKTOP ONLY */}
        <div className="hidden lg:flex items-center gap-5 ml-auto">

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
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
            <MessageCircle size={21} />
          </button>

          {/* NOTIFICATION ICON */}
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
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
                <Link href="/userdashboard/profile-courses" className="block px-4 py-2 hover:bg-gray-100">
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
        <div className="lg:hidden flex items-center gap-3">

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
          <button className="w-full text-left px-2 py-2 text-gray-800">Profile</button>
          <Link href="/userdashboard/profile-courses" className="w-full block px-2 py-2 text-gray-800">My Courses</Link>
          <button className="w-full text-left px-2 py-2 text-gray-800">Certificates</button>
          <button className="w-full text-left px-2 py-2 text-gray-800">Help Center</button>
          <button className="w-full text-left px-2 py-2 text-gray-800">Logout</button>
        </div>
      )}
    </header>
  );
}