"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
      <div className="max-w-8xl mx-auto grid grid-cols-1 mt-4 md:grid-cols-2 gap-6 sm:gap-8 py-6 sm:py-8 md:py-10 lg:py-12 items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-4">

          {/* Smart Learning Label */}
          <span className="w-fit inline-block border border-gray-300 bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
            Smart Learning
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900 font-urbanist">
            Trusted <span className="text-yellow-500">Learning</span> <br />
            That Drives Your <br />
            First Career Move
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md sm:max-w-lg font-urbanist">
            Learn from industry experts, earn global certifications, and start your career journey with confidence.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-3">
            <Link href="/courseslist" className="w-full sm:w-auto">
              <button className="cursor-pointer bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-blue-700 transition flex items-center gap-2 w-full sm:w-auto justify-center">
                Explore Courses →
              </button>
            </Link>

            <Link href="/Registrationform" className="w-full sm:w-auto">
              <button className="cursor-pointer border border-gray-400 text-gray-700 px-5 sm:px-6 py-2.5 sm:py-3 md:px-4.5 md:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-gray-100 transition flex items-center gap-2 w-full sm:w-auto justify-center">
                Book A Free Demo →
              </button>
            </Link>
          </div>

          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 sm:mt-6">

            {/* Feature 1 */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl border border-blue-200">
                💻
              </div>
              <p className="text-base sm:text-lg font-medium text-gray-800">Hands-on Experience</p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl border border-blue-200">
                🎓
              </div>
              <p className="text-base sm:text-lg font-medium text-gray-800">Certified Courses</p>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl border border-blue-200">
                📝
              </div>
              <p className="text-base sm:text-lg font-medium text-gray-800">Resume Building</p>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="md:-mt-80 lg:-mt-9">
            <Image
              src="/Hero.png"
              alt="Student Image"
              width={480}
              height={480}
              className="object-contain w-[260px] sm:w-[320px] md:w-[420px] lg:w-[600px] mx-auto md:mx-0"
            />
          </div>
        </div>

      </div>
    </section>
  );
}