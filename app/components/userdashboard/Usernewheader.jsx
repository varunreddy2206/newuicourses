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
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";
import { successfully } from "@/core/toast";

export default function Usernewheader({ noOffset = false }) {
  const [openMenu, setOpenMenu] = useState(false);  
  const [openUser, setOpenUser] = useState(false);   

  const [userName, setUserName] = useState("User");
  const router = useRouter();
  const { clearAuth, user } = useAuthStore();

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const mobileMenuRef = useRef(null); // ⭐ added

  // Logout handler
  const handleLogout = () => {
    clearAuth(); // Clear auth state and localStorage
    successfully("Logged out successfully!");
    setOpenUser(false); // Close dropdown if open
    setOpenMenu(false); // Close mobile menu if open
    router.push("/login"); // Navigate to login page
  };

  // Load user name
  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) setUserName(storedName);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleDocClick(e) {
      if (
        openUser &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpenUser(false);
      }
    }
    document.addEventListener("mousedown", handleDocClick);
    return () => document.removeEventListener("mousedown", handleDocClick);
  }, [openUser]);

  // ⭐ NEW: Close mobile menu when clicking outside
  useEffect(() => {
    function handleMobileClick(e) {
      if (
        openMenu &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setOpenMenu(false);
      }
    }

    document.addEventListener("mousedown", handleMobileClick);
    return () => document.removeEventListener("mousedown", handleMobileClick);
  }, [openMenu]); // ⭐ added

  const topClass = noOffset ? "top-0" : "top-[24px] sm:top-[32px]";

  return (
    <header className={`fixed ${topClass} left-0 w-full bg-white shadow-sm px-0 py-3 border-b z-40`}>
      <div className="w-full px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">

        {/* LEFT: logo + desktop-only actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" width={42} height={42} alt="logo" />
          </div>

          {/* Desktop-only button */}
          <button className="hidden lg:inline-flex text-gray-700 hover:text-black text-sm font-medium">
            My Learning
          </button>
        </div>

        {/* CENTER: Explore */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <Link
            href="/courseslist"
            className="bg-blue-600 text-white px-5 py-2 rounded-full gap-2 text-sm font-medium hover:bg-blue-700 inline-flex items-center"
          >
            <span className="text-lg">»»»</span>
            <span>Explore Courses</span>
          </Link>
        </div>

        {/* RIGHT SIDE — DESKTOP */}
        <div className="hidden lg:flex items-center gap-5 ml-auto">
          <div className="flex items-center border border-gray-200 rounded-full px-4 py-2 w-[300px] shadow-sm">
            <Search size={18} className="text-gray-400" />
            <input type="text" placeholder="Search courses here....." className="ml-2 w-full outline-none text-sm text-gray-700" />
            <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-1.5 rounded-full text-sm text-white font-medium">Search</button>
          </div>

          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
            <MessageCircle size={21} />
          </button>

          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
            <Bell size={21} />
          </button>

          {/* USER DROPDOWN */}
          <div className="relative">
            <button
              ref={buttonRef}
              onClick={() => setOpenUser(!openUser)}
              className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full text-white text-sm font-medium"
            >
              <div className="w-7 h-7 rounded-full bg-white overflow-hidden">
                <Image src="/dashboard/profile.png" alt="user" width={40} height={40} />
              </div>

              <span className="capitalize">{userName}</span>
              <ChevronDown size={16} />
            </button>

            {openUser && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-48 bg-white shadow-lg border rounded-lg py-2 z-50"
              >
                <Link href="/userdashboard/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                <Link href="/userdashboard/profilecourses" className="block px-4 py-2 hover:bg-gray-100">My Courses</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Certificates</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Help Center</Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-red-600"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE + TABLET RIGHT */}
        <div className="lg:hidden flex items-center gap-3">

          <div className="hidden md:flex lg:hidden items-center border rounded-full shadow-sm overflow-hidden px-3 py-1.5 w-[220px]">
            <Search size={16} className="text-gray-500" />
            <input type="text" placeholder="Search courses..." className="w-full px-2 text-sm outline-none text-gray-700" />
          </div>

          <Link href="/userdashboard/profile" className="flex items-center gap-2 text-gray-700 text-sm font-medium">
            <div className="w-8 h-8 rounded-full bg-white overflow-hidden border">
              <Image src="/dashboard/profile.png" alt="user" width={32} height={32} />
            </div>
            <span className="hidden sm:inline">Profile</span>
          </Link>

          <button onClick={() => setOpenMenu(!openMenu)} className="text-gray-700">
            {openMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE + TABLET DROPDOWN */}
      {openMenu && (
        <div
          ref={mobileMenuRef}  // ⭐ added
          className="lg:hidden mt-3 bg-gray-50 p-4 rounded-md shadow-md space-y-4"
        >
          <div className="flex md:hidden items-center border rounded-full shadow-sm overflow-hidden px-3">
            <Search size={18} className="text-gray-500" />
            <input type="text" placeholder="Search courses here……" className="w-full px-2 py-2 outline-none text-gray-700" />
          </div>

          <button className="flex items-center gap-3 text-gray-700 text-sm">
            <MessageCircle size={20} /> Messages
          </button>

          <button className="flex items-center gap-3 text-gray-700 text-sm">
            <Bell size={20} /> Notifications
          </button>

          <Link
            href="/userdashboard/profile"
            onClick={() => setOpenMenu(false)}
            className="block w-full text-left px-2 py-2 text-gray-800"
          >
            Profile
          </Link>

          <Link
            href="/userdashboard/profilecourses"
            onClick={() => setOpenMenu(false)}
            className="block w-full text-left px-2 py-2 text-gray-800"
          >
            My Courses
          </Link>

          <Link href="#" className="block w-full text-left px-2 py-2 text-gray-800">Certificates</Link>
          <Link href="#" className="block w-full text-left px-2 py-2 text-gray-800">Help Center</Link>
          <button
            onClick={handleLogout}
            className="w-full text-left flex items-center gap-2 px-2 py-2 text-red-600 hover:bg-gray-100 rounded"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
