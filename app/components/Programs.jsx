"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Cutting Edge Curriculum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua......",
    image: "/programs.png",
  },
  {
    id: 2,
    title: "Hands-On Mentorship",
    desc: "Learn from industry practitioners with decades of proven expertise and real-world experience......",
    image: "/programs.png",
  },
  {
    id: 3,
    title: "Career Focused Training",
    desc: "Our programs are structured to ensure job readiness with projects, mock interviews, and hands-on labs......",
    image: "/programs.png",
  },
  {
    id: 4,
    title: "Guaranteed Interview Support",
    desc: "We help you prepare for interviews with 1-on-1 guidance, resume building, and real-time interview preparation......",
    image: "/programs.png",
  },
];

export default function Programs() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex((index - 1 + slides.length) % slides.length);
  const nextSlide = () => setIndex((index + 1) % slides.length);

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 mt-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">
        Why Our Programs Stand Out
      </h2>

      <div className="relative w-full overflow-hidden rounded-3xl">
        {/* IMAGE */}
        <div className="relative h-80 sm:h-[400px] md:h-[520px] w-full">
          <Image
            src={slides[index].image}
            alt="Program"
            fill
            className="object-cover rounded-3xl transition-all duration-500"
          />
        </div>

        {/* CONTENT CARD */}
        <div
          className="
          absolute 
          left-1/2 -translate-x-1/2 
          sm:left-6 sm:translate-x-0
          md:left-16 
          top-[55%] sm:top-1/2 
          -translate-y-1/2 
          bg-white shadow-xl rounded-3xl 
          p-5 sm:p-8 md:p-10 
          w-[90%] sm:w-[60%] md:w-[45%]"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            {slides[index].title}
          </h3>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            {slides[index].desc}
          </p>

          <button className="mt-5 sm:mt-6 text-blue-600 font-semibold flex items-center gap-2">
            Read More <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="
          absolute 
          left-3 sm:left-4 
          top-1/2 -translate-y-1/2 
          bg-white shadow-lg p-2 sm:p-3 
          rounded-full hover:bg-gray-100"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="
          absolute 
          right-3 sm:right-4 
          top-1/2 -translate-y-1/2 
          bg-white shadow-lg p-2 sm:p-3 
          rounded-full hover:bg-gray-100"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* DOT INDICATORS */}
        <div className="absolute bottom-4 w-full flex justify-center gap-3">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === i ? "bg-gray-800" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
