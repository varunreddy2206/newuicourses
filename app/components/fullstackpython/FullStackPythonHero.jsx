"use client";

import Image from "next/image";
import { Play } from "lucide-react";

export default function FullStackPythonHero() {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

        <div className="space-y-5 sm:space-y-6">
          <div className="inline-block bg-gray-100 text-gray-700 px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium">
            Smart Learning
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-gray-900">
            The Complete <br />
            <span className="text-yellow-500">Full Stack Python</span> <br />
            Development
          </h1>

          <p className="text-base sm:text-lg text-gray-700 max-w-xl">
            Learn from industry experts, earn global certifications, and start your
            career journey with confidence.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium flex items-center gap-3">
              Enroll Now ➡
            </button>
            <button className="bg-white border px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium flex items-center gap-3 shadow-sm">
              Download Curriculum 📥
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-gray-700">
            <div className="flex items-center gap-1 text-sm sm:text-lg">⭐ 3.4 (36 Review)</div>
            <div className="flex items-center gap-1 text-sm sm:text-lg">🎥 48 HRS Classes</div>
            <div className="flex items-center gap-1 text-sm sm:text-lg">🎓 Beginner</div>
          </div>
        </div>

        <div className="relative w-full flex items-center justify-center">
          <Image src="/coursehero.png" alt="" width={900} height={600}
            className="rounded-3xl w-full h-[260px] sm:h-[360px] md:h-[420px] lg:h-[520px] object-cover shadow-lg" />
          <button className="absolute bg-white w-14 h-14 sm:w-20 sm:h-20 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition">
            <Play size={30} className="sm:w-[38px] sm:h-[38px]" fill="blue" color="blue" />
          </button>
        </div>

      </div>
    </section>
  );
}