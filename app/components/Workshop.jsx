"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Workshop() {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Upcoming Workshops
        </h2>

        {/* MAIN WHITE BOX */}
        <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm">

          <div className="flex flex-col md:flex-row gap-10">

            {/* LEFT SIDE */}
            <div className="flex-1">
              <Image
                src="/workshop.png"
                width={40}
                height={40}
                alt="Workshop Icon"
                className="mb-4"
              />

              <h3 className="text-3xl font-bold text-gray-900 leading-snug">
                Full Stack Java Professional <br /> Workshop Series
              </h3>

              <p className="mt-5 text-gray-900 font-semibold">Skills you'll gain:</p>
              <p className="text-gray-600 leading-relaxed">
                Core Java, OOPs, JDBC, Spring Boot, REST APIs, MySQL, HTML/CSS/JS,
                React Basics, Project Architecture, Deployment, Debugging,
                Git & Version Control
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-4">
                <span className="text-blue-600 text-lg">★ 4.6</span>
                <span className="text-gray-600 text-sm">(980 learners)</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-4 text-gray-600 text-sm">
                <span>· Beginner Level</span>
                <span>· Live Workshop</span>
                <span>· 1 Week</span>
              </div>

              {/* Buttons */}
              <div className="flex gap-6 mt-6">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition">
                  Register Now
                </button>
                <button className="text-blue-600 font-medium hover:underline">
                  View details
                </button>
              </div>
            </div>

            {/* RIGHT SLIDER */}
            <div className="flex-1 flex flex-col items-center">

              {/* Slider Cards */}
              <div
                ref={sliderRef}
                className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pr-4"
              >
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="min-w-[260px] bg-white border border-gray-200 rounded-2xl shadow-sm p-4"
                  >
                    <Image
                      src="/workshop.png"
                      width={350}
                      height={200}
                      alt="Workshop"
                      className="w-full h-36 object-cover rounded-xl"
                    />

                    <p className="text-sm text-gray-600 mt-3">
                      🌐 Globally Certified Course
                    </p>

                    <h4 className="text-xl font-semibold text-gray-900 mt-1">
                      Data Analyst
                    </h4>

                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                      A Data Analyst collects, cleans, and interprets data using tools like DS.
                    </p>

                    <p className="mt-4 text-gray-900 font-semibold text-sm">
                      Starts From <span className="text-blue-600">14-12-2025</span>
                    </p>

                    <div className="flex items-center gap-3 mt-3">
                      <Image
                        src="/workshop.png"
                        width={40}
                        height={40}
                        alt="Trainer"
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">Trainer name</p>
                        <p className="text-sm text-gray-600">Trainer</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CENTERED SLIDER BUTTONS */}
              <div className="flex items-center justify-center gap-6 mt-10">

                {/* Left button */}
                <button
                  onClick={slideLeft}
                  className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                  <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                  <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                </div>

                {/* Right button */}
                <button
                  onClick={slideRight}
                  className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
