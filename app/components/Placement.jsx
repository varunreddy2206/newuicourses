"use client";
import Image from "next/image";
import React from "react";

export default function Placement() {
  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-6">
      <div
        className="
          max-w-7xl mx-auto 
          bg-white rounded-3xl border border-gray-200 
          overflow-hidden 
          grid grid-cols-1 md:grid-cols-2
        "
      >

        {/* LEFT CONTENT */}
        <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">

          {/* Tag */}
          <span className="
            w-fit inline-block px-4 py-1 mb-4 
            bg-gray-100 border border-gray-300 
            text-gray-700 rounded-full 
            text-xs sm:text-sm font-medium
          ">
            2-Year Access
          </span>

          {/* Heading */}
          <h2 className="
            text-2xl sm:text-3xl md:text-4xl 
            font-bold text-gray-900 leading-tight font-urbanist
          ">
            Premium Placement Assistance
          </h2>

          {/* Subtext */}
          <p className="
            text-gray-600 
            text-base sm:text-lg 
            mt-4 leading-relaxed font-urbanist
          ">
            Your Career, Supported for 24 Months — Even After Course Completion
          </p>

          {/* FEATURES */}
          <div className="mt-6 sm:mt-8 flex flex-col gap-5 sm:gap-6">

            {/* Feature 1 */}
            <div>
              <p className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-gray-900 font-urbanist">
                ✔ Direct Access to Hiring Partners
              </p>
              <p className="text-gray-600 text-sm sm:text-base mt-1 font-urbanist">
                Get shortlisted faster with exclusive referrals through our partnered companies.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <p className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-gray-900 font-urbanist">
                ✔ Exclusive Job Opportunities
              </p>
              <p className="text-gray-600 text-sm sm:text-base mt-1 font-urbanist">
                Access curated openings matched to your skillset and career goals.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <p className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-gray-900 font-urbanist">
                ✔ Dedicated Career Mentoring & Interview Prep
              </p>
              <p className="text-gray-600 text-sm sm:text-base mt-1 font-urbanist">
                1-on-1 guidance, mock interviews, and personalized improvement plans.
              </p>
            </div>

            {/* Feature 4 */}
            <div>
              <p className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-gray-900 font-urbanist">
                ✔ Unlimited Interview Attempts for 2 Years
              </p>
              <p className="text-gray-600 text-sm sm:text-base mt-1 font-urbanist">
                Apply multiple times across companies until you successfully land a job.
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="
            mt-8 sm:mt-10 
            bg-blue-600 text-white 
            px-6 sm:px-8 py-3 
            rounded-full 
            text-sm sm:text-base 
            font-medium 
            hover:bg-blue-700 
            transition flex items-center gap-2 w-fit font-urbanist
          ">
            Explore Courses →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[260px] sm:h-80 md:h-full">
          <Image
            src="/placement.png"
            alt="Placement Support"
            fill
            className="object-cover w-full h-full"
          />
        </div>

      </div>
    </section>
  );
}
