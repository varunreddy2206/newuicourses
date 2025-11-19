"use client";

import Image from "next/image";
import { Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F3F5FB] border-t pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* --------- TOP SECTION --------- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
          
          {/* Left – Logo + Social */}
          <div>
            <Image
              src="/logo.svg"
              alt="Ascend Academy"
              width={150}
              height={40}
              className="mb-6"
            />

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full border cursor-pointer hover:bg-gray-100">
                <Facebook size={18} />
              </div>
              <div className="p-3 rounded-full border cursor-pointer hover:bg-gray-100">
                <Instagram size={18} />
              </div>
              <div className="p-3 rounded-full border cursor-pointer hover:bg-gray-100">
                <Linkedin size={18} />
              </div>
            </div>

            <p className="text-gray-700 font-medium">
              Subscribe to Ascend Academy for Latest<br />
              workshops & Internship Offers
            </p>

            {/* Email Box */}
            <div className="mt-5 flex">
              <input
                type="email"
                placeholder="Enter your Email"
                className="border px-4 py-3 rounded-l-full w-full focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-r-full hover:bg-blue-700">
                Sign up
              </button>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Explore</h3>

            <ul className="space-y-3 text-gray-700">
              <li>Home</li>
              <li>About Us</li>
              <li>Non IT Courses</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Resources 1 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Resources</h3>

            <ul className="space-y-3 text-gray-700">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>

          {/* Resources 2 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Resources</h3>

            <ul className="space-y-3 text-gray-700">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
        </div>

        {/* --------- TRENDING TRACKS (REPEATED SECTION) --------- */}

        <FooterTrackSection />
        <FooterTrackSection />
        <FooterTrackSection />

        {/* --------- BOTTOM LINKS --------- */}
        <div className="text-center mt-10 space-x-4 text-gray-600 text-sm">
          <span>• Terms and Conditions</span>
          <span>• Privacy Policy</span>
          <span>• Refund Policy</span>
        </div>

        <p className="mt-4 text-center text-gray-500 text-xs">
          © 2025 – Simplilearn Americas Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

/* Reusable Footer Track Component */
function FooterTrackSection() {
  return (
    <div className="py-6 border-t">
      <h4 className="font-semibold text-gray-900 mb-4">Trending Post-Graduate Tracks</h4>

      <div className="flex flex-wrap gap-3 text-sm text-gray-700">
        <span>PG in Data Science</span> |
        <span>Cloud Computing and DevOps - IITG</span> |
        <span>Data Analytics Program</span> |
        <span>AI and ML Course</span> |
        <span>Business Analysis Certification Course</span> |
        <span>Data Engineering</span> |
        <span>Certification Courses</span>
      </div>
    </div>
  );
}
