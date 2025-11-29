"use client";
import Image from "next/image";
import React from "react";

export default function Scholarship() {
  return (
    <section className="w-full py-6 px-2 sm:px-4 md:px-8 lg:px-20 my-6 sm:my-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

        {/* ------------ LEFT CARD ------------ */}
        <div
          className="bg-[#EEF4FE] rounded-3xl p-5 sm:p-6 
          flex flex-col sm:flex-row 
          items-start sm:items-start 
          justify-between 
          gap-4 sm:gap-0
          h-auto"
        >
          <div className="max-w-xs sm:max-w-sm">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
              Flexible Payments That <br /> Make Learning Easy
            </h2>

            <ul className="mt-3 space-y-1 text-gray-700 text-sm sm:text-base">
              <li>Easy EMI Options</li>
              <li>Monthly EMI starting from ₹2,499</li>
              <li>Zero-Cost EMI available (select banks)</li>
            </ul>
          </div>

          <Image
            src="/scholership1.png"
            width={200}
            height={160}
            alt="EMI Option"
            className="object-contain w-[110px] sm:w-[150px] md:w-[180px] lg:w-[200px]"
          />
        </div>

        {/* ------------ RIGHT CARD ------------ */}
        <div
          className="bg-[#ECFBF9] rounded-3xl p-5 sm:p-6 
          flex flex-col sm:flex-row 
          items-start sm:items-start 
          justify-between 
          gap-4 sm:gap-0
          h-auto"
        >
          <div className="max-w-xs sm:max-w-sm">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              Scholarship Program
            </h2>

            <p className="text-gray-800 mt-3 text-sm sm:text-base">
              Student Scholarship Program
            </p>

            <p className="text-gray-700 mt-1 text-sm sm:text-base">
              Merit-based scholarships
            </p>

            <p className="text-gray-700 mt-1 text-sm sm:text-base leading-snug">
              10% – 30% fee concession for eligible students
            </p>
          </div>

          <Image
            src="/scholership2.png"
            width={220}
            height={160}
            alt="Scholarship"
            className="object-contain w-[120px] sm:w-40 md:w-[190px] lg:w-[220px]"
          />
        </div>

      </div>
    </section>
  );
}
