"use client";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10 px-6">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6">
          
          {/* Smart Learning Label */}
          <span className="w-fit inline-block border border-gray-300 bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm font-medium">
            Smart Learning
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-gray-900 font-urbanist">
            Trusted <span className="text-yellow-500">Learning</span> <br />
            That Drives Your <br />
            First Career Move
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-lg font-urbanist">
            Learn from industry experts, earn global certifications, and start your career
            journey with confidence.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition flex items-center gap-2">
              Explore Courses →
            </button>

            <button className="border border-gray-400 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition flex items-center gap-2">
              Book A Free Demo →
            </button>
          </div>

          {/* Feature List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            
            {/* Feature 1 */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl border border-blue-200">
                💻
              </div>
              <p className="text-lg font-medium text-gray-800">Hands-on Experience</p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl border border-blue-200">
                🎓
              </div>
              <p className="text-lg font-medium text-gray-800">Certified Courses</p>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl border border-blue-200">
                📝
              </div>
              <p className="text-lg font-medium text-gray-800">Resume Building</p>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/Hero.png"   // <-- Replace with your image
            alt="Student Image"
            width={520}
            height={520}
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}
