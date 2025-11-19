"use client";
import Image from "next/image";
import React from "react";

export default function Scholarship() {
  return (
    <section className="w-full px-6 md:px-16 lg:px-24 my-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* ------------ LEFT CARD ------------ */}
        <div className="bg-[#EEF4FE] rounded-3xl p-8 flex items-center justify-between h-[230px]">
          <div className="max-w-sm">
            <h2 className="text-xl font-bold text-gray-900 leading-snug">
              Flexible Payments That <br /> Make Learning Easy
            </h2>

            <ul className="mt-3 space-y-1 text-gray-700 text-base">
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
            className="object-contain"
          />
        </div>

        {/* ------------ RIGHT CARD ------------ */}
        <div className="bg-[#ECFBF9] rounded-3xl p-8 flex items-center justify-between h-[230px]">
          <div className="max-w-sm">
            <h2 className="text-xl font-bold text-gray-900">
              Scholarship Program
            </h2>

            <p className="text-gray-800 mt-3 text-base">
              Student Scholarship Program
            </p>

            <p className="text-gray-700 mt-1 text-base">
              Merit-based scholarships
            </p>

            <p className="text-gray-700 mt-1 text-base leading-snug">
              10% – 30% fee concession for eligible students
            </p>
          </div>

          <Image
            src="/scholership2.png"
            width={220}
            height={160}
            alt="Scholarship"
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}
