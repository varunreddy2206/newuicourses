"use client";
import Image from "next/image";
import React from "react";

export default function Placement() {
  return (
    <section className="w-full bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl border border-gray-200 overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className="p-10 flex flex-col justify-center">

          {/* Tag */}
          <span className="w-fit inline-block px-4 py-1 mb-4 bg-gray-100 border border-gray-300 text-gray-700 rounded-full text-sm font-medium">
            2-Year Access
          </span>

          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight font-urbanist">
            Premium Placement Assistance
          </h2>

          {/* Subtext */}
          <p className="text-gray-600 text-lg mt-4 leading-relaxed font-urbanist">
            Your Career, Supported for 24 Months — Even After Course Completion
          </p>

          {/* FEATURE LIST */}
          <div className="mt-8 flex flex-col gap-6">

            {/* Feature 1 */}
            <div>
              <p className="flex items-center gap-2 text-lg font-semibold text-gray-900 font-urbanist">
                ✔ Direct Access to Hiring Partners
              </p>
              <p className="text-gray-600 text-sm mt-1 font-urbanist">
                Get shortlisted faster with exclusive referrals through our partnered companies.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <p className="flex items-center gap-2 text-lg font-semibold text-gray-900 font-urbanist">
                ✔ Exclusive Job Opportunities
              </p>
              <p className="text-gray-600 text-sm mt-1 font-urbanist">
                Access curated openings matched to your skillset and career goals.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <p className="flex items-center gap-2 text-lg font-semibold text-gray-900 font-urbanist">
                ✔ Dedicated Career Mentoring & Interview Prep
              </p>
              <p className="text-gray-600 text-sm mt-1">
                1-on-1 guidance, mock interviews, and personalized improvement plans.
              </p>
            </div>

            {/* Feature 4 */}
            <div>
              <p className="flex items-center gap-2 text-lg font-semibold text-gray-900 font-urbanist">
                ✔ Unlimited Interview Attempts for 2 Years
              </p>
              <p className="text-gray-600 text-sm mt-1 font-urbanist">
                Apply multiple times across companies until you successfully land a job.
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition flex items-center gap-2 w-fit font-urbanist">
            Explore Courses →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-full ">
          <Image
            src="/placement.png"   // ⭐ Replace with your actual image path
            alt="Placement Support"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />

          {/* Gradient overlay for soft fade effect */}
          <div className="absolute inset-0 bg-linear-to-l  md:bg-linear-to-l"></div>
        </div>
      </div>
    </section>
  );
}
