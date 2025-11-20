"use client";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="
        max-w-7xl mx-auto 
        grid grid-cols-1 md:grid-cols-2 
        gap-10 
        py-10 
        px-4 sm:px-6 md:px-10 lg:px-6
        items-center
      ">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6">

          {/* Smart Learning Label */}
          <span className="
            w-fit 
            inline-block 
            border border-gray-300 
            bg-gray-100 
            text-gray-700 
            px-4 py-1 
            rounded-full 
            text-xs sm:text-sm 
            font-medium
          ">
            Smart Learning
          </span>

          {/* Heading */}
          <h1 className="
            text-3xl sm:text-4xl 
            md:text-5xl lg:text-6xl 
            font-semibold 
            leading-tight 
            text-gray-900 
            font-urbanist
          ">
            Trusted <span className="text-yellow-500">Learning</span> <br />
            That Drives Your <br />
            First Career Move
          </h1>

          {/* Subtext */}
          <p className="
            text-gray-600 
            text-base sm:text-lg 
            leading-relaxed 
            max-w-md sm:max-w-lg 
            font-urbanist
          ">
            Learn from industry experts, earn global certifications, and start your career
            journey with confidence.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="
              bg-blue-600 
              text-white 
              px-5 sm:px-6 
              py-2.5 sm:py-3 
              rounded-full 
              text-sm sm:text-base 
              font-medium 
              hover:bg-blue-700 
              transition 
              flex items-center gap-2
            ">
              Explore Courses →
            </button>

            <button className="
              border border-gray-400 
              text-gray-700 
              px-5 sm:px-6 
              py-2.5 sm:py-3 
              rounded-full 
              text-sm sm:text-base 
              font-medium 
              hover:bg-gray-100 
              transition 
              flex items-center gap-2
            ">
              Book A Free Demo →
            </button>
          </div>

          {/* Feature List */}
          <div className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            gap-5 
            mt-6 sm:mt-8
          ">

            {/* Feature 1 */}
            <div className="flex items-center gap-3">
              <div className="
                w-10 h-10 sm:w-12 sm:h-12 
                flex items-center justify-center 
                bg-blue-50 text-blue-600 
                rounded-xl 
                border border-blue-200
              ">
                💻
              </div>
              <p className="text-base sm:text-lg font-medium text-gray-800">
                Hands-on Experience
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-3">
              <div className="
                w-10 h-10 sm:w-12 sm:h-12 
                flex items-center justify-center 
                bg-blue-50 text-blue-600 
                rounded-xl 
                border border-blue-200
              ">
                🎓
              </div>
              <p className="text-base sm:text-lg font-medium text-gray-800">
                Certified Courses
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-3">
              <div className="
                w-10 h-10 sm:w-12 sm:h-12 
                flex items-center justify-center 
                bg-blue-50 text-blue-600 
                rounded-xl 
                border border-blue-200
              ">
                📝
              </div>
              <p className="text-base sm:text-lg font-medium text-gray-800">
                Resume Building
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/Hero.png"
            alt="Student Image"
            width={480}
            height={480}
            className="
              object-contain
              w-[260px] sm:w-[320px] md:w-[420px] lg:w-[520px]
              mx-auto md:mx-0
            "
          />
        </div>

      </div>
    </section>
  );
}
