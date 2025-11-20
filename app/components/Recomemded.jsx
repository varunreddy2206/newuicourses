"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Generative AI",
    desc: "Build intelligent solutions with real-world AI & ML training.",
    img: "/course1.png",
  },
  {
    id: 2,
    title: "Generative AI",
    desc: "Build intelligent solutions with real-world AI & ML training.",
    img: "/course2.png",
  },
  {
    id: 3,
    title: "Generative AI",
    desc: "Build intelligent solutions with real-world AI & ML training.",
    img: "/course3.png",
  },
  {
    id: 4,
    title: "Generative AI",
    desc: "Build intelligent solutions with real-world AI & ML training.",
    img: "/course4.png",
  },
];

export default function Recomemded() {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -360, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 360, behavior: "smooth" });
  };

  return (
    <section className="w-full py-10 px-4 sm:px-6 md:px-10 lg:px-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
        Recommended Courses
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={slideLeft}
          className="hidden md:flex absolute -left-5 lg:-left-7 
          top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl border 
          rounded-full p-3 hover:bg-gray-100 transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-6 overflow-x-scroll scroll-smooth 
          no-scrollbar pr-2 sm:pr-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {courses.map((item) => (
            <div
              key={item.id}
              className="
                  min-w-60 sm:min-w-[260px] md:min-w-[300px] 
                  max-w-60 sm:max-w-[260px] md:max-w-[300px]
                  h-[420px] sm:h-[440px] md:h-[460px]
                  bg-white border shadow-md rounded-3xl p-4 sm:p-5 
                  flex flex-col justify-between hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 sm:h-[180px] md:h-[200px] 
                object-cover rounded-2xl"
              />

              {/* Text */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold mt-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
              </div>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-3 gap-2 sm:gap-3">
                <button
                  className="bg-blue-600 text-white px-3 py-2 rounded-full 
                  text-xs sm:text-sm font-medium hover:bg-blue-700 transition 
                  flex items-center gap-2 whitespace-nowrap"
                >
                  Enroll Now <ArrowRight size={16} />
                </button>

                <button
                  className="border border-gray-400 text-gray-800 px-3 py-2 
                  rounded-full text-xs sm:text-sm font-medium hover:bg-gray-100 
                  transition flex items-center gap-2 whitespace-nowrap"
                >
                  Know More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={slideRight}
          className="hidden md:flex absolute -right-5 lg:-right-7 
          top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl border 
          rounded-full p-3 hover:bg-gray-100 transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
