"use client";
import Image from "next/image";
import React from "react";

export default function UserFooter() {
  return (
    <footer className="w-full bg-[#F4F7FF] pt-10 pb-6">
      
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">

        {/* LOGO + SOCIAL + TEXT */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/logo.png" // <-- you can replace manually
              width={42}
              height={42}
              alt="Ascend Logo"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-[18px] font-semibold">Ascend</span>
              <span className="text-[10px] -mt-0.5 text-gray-600 tracking-wider">
                Academy
              </span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mb-4">
            <Image src="/icons/facebook.png" width={20} height={20} alt="fb" />
            <Image src="/icons/linkedin.png" width={20} height={20} alt="linkedin" />
            <Image src="/icons/youtube.png" width={20} height={20} alt="youtube" />
          </div>

          {/* Subtitle */}
          <p className="text-[13px] text-gray-600 leading-relaxed max-w-[200px]">
            Subscribe to Ascend Academy for Latest workshops & Internships Offers
          </p>
        </div>

        {/* EXPLORE */}
        <div>
          <h3 className="text-[15px] font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-[13px] text-gray-700">
            <li>Home</li>
            <li>About Us</li>
            <li>Solutions</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* RESOURCES 1 */}
        <div>
          <h3 className="text-[15px] font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-[13px] text-gray-700">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>

        {/* RESOURCES 2 */}
        <div>
          <h3 className="text-[15px] font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-[13px] text-gray-700">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-full flex justify-center mt-10">
        <p className="text-[11px] text-gray-600 flex gap-4">
          <span>Terms and Conditions</span>
          <span>•</span>
          <span>Privacy Policy</span>
          <span>•</span>
          <span>Refund Policy</span>
        </p>
      </div>

      {/* ADDRESS + COPYRIGHT */}
      <div className="text-center mt-2">
        <p className="text-[10px] text-gray-500">
          Address: 5851 Legacy Circle 8th Floor, Plano, TX 75024 United States Phone No: 844-LEARN-8 (844-532-7688)
        </p>

        <p className="text-[10px] text-gray-400 mt-1">
          © 2025 - Simplilearn Americas Inc. All Rights Reserved. The certification names are the trademarks of their respective owners.
        </p>
      </div>

    </footer>
  );
}
