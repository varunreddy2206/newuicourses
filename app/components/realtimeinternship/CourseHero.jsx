"use client";
import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function CourseHero() {
  return (
    <section className="w-full bg-white pt-36 pb-16 px-4 sm:px-8 lg:px-20">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* ================= LEFT SIDE ================= */}
        <div className="space-y-5">

          {/* Smart Learning Badge */}
          <span className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-4 py-1 rounded-full">
            Smart Learning
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
            Real-Time project <br />
            internship <br />
            <span className="text-yellow-500">Web/App/AI</span> Training
          </h1>

          {/* Sub Text */}
          <p className="text-gray-600 text-sm sm:text-base">
            Learn from industry experts, earn global certifications, and start your
            career journey with confidence.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white text-sm font-medium px-6 py-2.5 rounded-full shadow hover:bg-blue-700 transition">
              Continue Learning →
            </button>

            <button className="bg-gray-100 text-gray-700 text-sm font-medium px-6 py-2.5 rounded-full hover:bg-gray-200 transition">
              Download Curriculum
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 text-gray-700 text-sm pt-1">
            <span className="flex items-center gap-1">
              ⭐ <span>4.3 (36 Reviews)</span>
            </span>
            <span className="flex items-center gap-1">
              📘 <span>48 HRS Classes</span>
            </span>
            <span className="flex items-center gap-1">
              🟢 <span>Beginner</span>
            </span>
          </div>
        </div>

        {/* ================= RIGHT SIDE IMAGE ================= */}
        <div className="relative w-full h-[240px] sm:h-[300px] lg:h-[380px] rounded-xl overflow-hidden shadow-md">

          {/* Replace this image when you upload the real one */}
          <Image
            src="/placeholder-hero.jpg"
            alt="Training"
            fill
            className="object-cover rounded-xl"
          />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
              <Play size={34} className="text-blue-700" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
