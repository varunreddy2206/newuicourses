"use client";

import Image from "next/image";
import React from "react";

export default function WhyTrustUs() {
  return (
    <section className="w-full py-10 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Outer Card */}
      <div className="bg-white border rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-8 sm:mb-10">
          Why Students Trust Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

          {/* Left Image */}
          <div>
            <Image
              src="/whychooseus.png"
              alt="Students discussing data"
              width={900}
              height={600}
              className="w-full 
              h-[260px] sm:h-[340px] md:h-[420px] lg:h-[480px] 
              object-cover rounded-3xl"
            />
          </div>

          {/* Right Stats */}
          <div
            className="grid grid-cols-2 gap-8 sm:gap-10 
            place-items-start sm:place-items-start"
          >

            {/* 1️⃣ Stat */}
            <div>
              <h3 className="text-4xl sm:text-5xl font-bold">3000+</h3>
              <p className="text-gray-600 text-base sm:text-lg mt-1">
                Students Trained
              </p>
              <div className="h-2 w-28 sm:w-40 mt-3 rounded-full bg-linear-to-r from-blue-500 via-indigo-400 to-yellow-300"></div>
            </div>

            {/* 2️⃣ Stat */}
            <div>
              <h3 className="text-4xl sm:text-5xl font-bold">92%</h3>
              <p className="text-gray-600 text-base sm:text-lg mt-1">
                Interview Shortlisting Success
              </p>
              <div className="h-2 w-28 sm:w-40 mt-3 rounded-full bg-linear-to-r from-blue-500 via-indigo-400 to-yellow-300"></div>
            </div>

            {/* 3️⃣ Stat */}
            <div>
              <h3 className="text-4xl sm:text-5xl font-bold">50+</h3>
              <p className="text-gray-600 text-base sm:text-lg mt-1">
                Industry Mentors
              </p>
              <div className="h-2 w-28 sm:w-40 mt-3 rounded-full bg-linear-to-r from-blue-500 via-indigo-400 to-yellow-300"></div>
            </div>

            {/* 4️⃣ Stat */}
            <div>
              <h3 className="text-4xl sm:text-5xl font-bold">2 Year</h3>
              <p className="text-gray-600 text-base sm:text-lg mt-1">
                Unlimited Placement Support
              </p>
              <div className="h-2 w-28 sm:w-40 mt-3 rounded-full bg-linear-to-r from-blue-500 via-indigo-400 to-yellow-300"></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
