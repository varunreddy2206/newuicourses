"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Workshop() {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-10">
      <h2 className="text-3xl font-bold mb-6">Upcoming Workshops</h2>

      {/* MAIN WRAPPER */}
      <div className="w-full bg-white rounded-xl shadow-md p-6 md:p-10">

        {/* LEFT SECTION */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Text Section */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">
              Full Stack Java Professional Workshop Series
            </h3>

            <p className="text-sm font-semibold mb-1">Skills you’ll gain:</p>

            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              Core Java, OOPs, JDBC, Spring Boot, REST APIs, MySQL, HTML/CSS/JS,
              React Basics, Project Architecture, Deployment, Debugging,
              Git & Version Control
            </p>

            <div className="flex items-center gap-1 mb-3">
              <span>⭐</span>
              <p className="text-sm font-medium">4.6 (980 learners)</p>
            </div>

            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Beginner Level</li>
              <li>• Live Workshop</li>
              <li>• 1 Week</li>
            </ul>

            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md">
                Register Now
              </button>
              <button className="text-blue-600 font-medium">View details</button>
            </div>
          </div>

          {/* SLIDER SECTION */}
          <div className="flex-1 relative">
            {/* Slider Buttons */}
            <button
              onClick={slideLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={slideRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
            >
              <ChevronRight size={20} />
            </button>

            {/* CARD SLIDER */}
            <div
              ref={sliderRef}
              className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar py-2"
            >
              {[1, 2, 3].map((_, idx) => (
                <div
                  key={idx}
                  className="min-w-[260px] max-w-[260px] bg-white rounded-lg shadow-sm border p-4"
                >
                  <Image
                    src="/workshop.png"
                    width={300}
                    height={150}
                    alt="Data Analyst"
                    className="rounded-md object-cover h-[150px] w-full"
                  />

                  <p className="text-xs mt-2 text-gray-500">Globally Certified Course</p>

                  <h4 className="text-lg font-semibold mt-1">Data Analyst</h4>

                  <p className="text-sm text-gray-600 mt-1">
                    A Data Analyst collects, cleans, and interprets data using tools & techniques.
                  </p>

                  <p className="text-sm font-semibold mt-3">
                    Starts From <span className="text-blue-600">14-12-2025</span>
                  </p>

                  <div className="flex items-center gap-3 mt-3">
                    <Image
                      src="/workshop.png"
                      width={35}
                      height={35}
                      alt="Trainer"
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium">Trainer name</p>
                      <p className="text-xs text-gray-500">Trainer</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
