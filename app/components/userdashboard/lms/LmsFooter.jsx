"use client";

import Image from "next/image";
import Link from "next/link";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function LmsFooter() {
  return (
    <footer className="w-full bg-[#f5f7fb] pt-12 pb-6 px-4 sm:px-8 lg:px-16 xl:px-24 font-urbanist">

      {/* Top Section */}
      <div
        className="
        max-w-7xl mx-auto 
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
        gap-6 lg:gap-10
        items-start
      "
      >

        {/* Logo + Social + Text */}
        <div className="flex flex-col gap-5">
          {/* Logo Row */}
          <div className="flex flex-col xs:flex-row xs:items-center gap-4 justify-between">
            <Image
              src="/logo.png"
              alt="Ascend Logo"
              width={160}
              height={60}
              className="object-contain"
            />

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <button
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition"
              >
                <FaXTwitter className="w-4 h-4" />
              </button>
              <button
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-pink-500 hover:bg-gray-100 transition"
              >
                <FaInstagram className="w-4 h-4" />
              </button>
              <button
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-sky-700 hover:bg-gray-100 transition"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </button>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Subscribe to Ascend Academy for Latest workshops &amp; Internships
            Offers
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Solutions</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Resources 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>

        {/* Resources 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
      </div>

      {/* Middle Divider */}
      <div className="max-w-7xl mx-auto text-center mt-6 text-sm text-gray-600">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-700">
          <Link href="#" className="hover:underline">
            Terms and Conditions
          </Link>
          <span>·</span>
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <span>·</span>
          <Link href="#" className="hover:underline">
            Refund Policy
          </Link>
        </div>

        {/* Address */}
        <p className="mt-4 text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Address: 5851 Legacy Circle, 6th Floor, Plano, TX 75024 United
          States. Phone No: 844-LEARN-88 (844-532-7688)
        </p>

        {/* Bottom Note */}
        <p className="mt-3 text-xs text-gray-500">
          © 2025 – Simplilearn Americas Inc. All Rights Reserved. The
          certification names are the trademarks of their respective owners.
        </p>
      </div>
    </footer>
  );
}
