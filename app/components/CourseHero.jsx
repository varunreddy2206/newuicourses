"use client";

import Image from "next/image";
import { Play } from "lucide-react";

export default function CourseHero() {
  return (
    <section className="w-full py-16 px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT SECTION */}
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-block bg-gray-100 text-gray-700 px-6 py-2 rounded-full text-sm font-medium">
            Smart Learning
          </div>

          {/* Heading */}
          <h1 className="text-5xl leading-tight md:text-6xl font-bold text-gray-900">
            The Complete <br />
            <span className="text-yellow-500">Graphic Design</span> for <br />
            Beginners
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-700 max-w-xl">
            Learn from industry experts, earn global certifications, and start your
            career journey with confidence.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-medium flex items-center gap-3">
              Enroll Now
              <span className="text-xl">➡️</span>
            </button>

            <button className="bg-white border px-10 py-4 rounded-full text-lg font-medium flex items-center gap-3 shadow-sm">
              Download Curriculum
              <span className="text-xl">📥</span>
            </button>
          </div>

          {/* Info Row */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-gray-700">
            <div className="flex items-center gap-2 text-lg">
              ⭐ 3.4 (36 Review)
            </div>

            <div className="flex items-center gap-2 text-lg">
              🎥 48 HRS Classes
            </div>

            <div className="flex items-center gap-2 text-lg">
              🎓 Beginner
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative w-full flex items-center justify-center">
          <Image
            src="/coursehero.png"  // Replace with your actual image
            alt="Graphic Design Course"
            width={900}
            height={600}
            className="rounded-3xl w-full h-[420px] md:h-[520px] object-cover shadow-lg"
          />

          {/* Play Button */}
          <button className="absolute bg-white w-20 h-20 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition">
            <Play size={38} fill="blue" color="blue" />
          </button>
        </div>

      </div>
    </section>
  );
}
