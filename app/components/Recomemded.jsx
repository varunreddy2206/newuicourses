"use client";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";

export default function Recomemded() {
  const courses = [
    {
      title: "Generative AI",
      desc: "Build intelligent solutions with real-world AI & ML training.",
      img: "/course1.png",
    },
    {
      title: "Generative AI",
      desc: "Build intelligent solutions with real-world AI & ML training.",
      img: "/course2.png",
    },
    {
      title: "Generative AI",
      desc: "Build intelligent solutions with real-world AI & ML training.",
      img: "/course3.png",
    },
    {
      title: "Generative AI",
      desc: "Build intelligent solutions with real-world AI & ML training.",
      img: "/course4.png",
    },
  ];

  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.course-card');
      const gap = 16; // gap-4 = 1rem = 16px
      const scrollAmount = card ? card.offsetWidth + gap : 356;
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.course-card');
      const gap = 16; // gap-4 = 1rem = 16px
      const scrollAmount = card ? card.offsetWidth + gap : 356;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-6">

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Courses</h2>

      {/* DESKTOP GRID — ONLY FROM 1280px (xl) */}
      <div className="hidden xl:grid xl:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-white border shadow-md rounded-2xl p-4">
            <Image
              src={course.img}
              alt="Course"
              width={400}
              height={300}
              className="rounded-xl object-cover w-full h-[170px]"
            />

            <div className="flex items-center gap-3 mt-3 text-xs text-gray-600">
              <span>🛡 Beginner</span>
              <span>🟢 Online</span>
              <span>⭐ 17M+</span>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mt-2">
              {course.title}
            </h3>

            <div className="h-[60px] overflow-hidden">
              <p className="text-gray-600 text-sm leading-snug">{course.desc}</p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <button className="bg-blue-600 cursor-pointer text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 flex items-center gap-1">
                Enroll Now →
              </button>
              <button className="cursor-pointer border px-5 py-2 rounded-full text-sm flex items-center gap-1">
                Know More ⓘ
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE + TABLET + LAPTOP SLIDER (ONLY <1280px) */}
      <div className="xl:hidden relative mt-2">

        <button
          onClick={slideLeft}
          className="absolute left-1 top-[40%] bg-white shadow-md border p-2 rounded-full z-10"
        >
          <ChevronLeft size={22} />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory scroll-pl-4"
        >
          {courses.map((course, index) => (
            <div
              key={index}
              className="course-card w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] md:min-w-[280px] lg:min-w-[300px] md:w-auto bg-white border shadow-md rounded-2xl p-4 snap-start shrink-0"
            >
              <Image
                src={course.img}
                alt="Course"
                width={400}
                height={300}
                className="rounded-xl object-cover w-full h-[170px]"
              />

              <div className="flex items-center gap-3 mt-3 text-xs text-gray-600">
                <span>🛡 Beginner</span>
                <span>🟢 Online</span>
                <span>⭐ 17M+</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mt-2">
                {course.title}
              </h3>

              <div className="h-[65px] overflow-hidden flex items-start">
                <p className="text-gray-600 text-sm leading-snug">{course.desc}</p>
              </div>

              <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4 mt-4">
                <button className="bg-blue-600 text-white px-4 sm:px-5 md:px-6 md:min-w-[150px] py-2 cursor-pointer rounded-full text-sm hover:bg-blue-700 flex items-center justify-center gap-1 whitespace-nowrap flex-1 md:flex-initial">
                  Enroll Now →
                </button>

                <button className="border border-gray-800 text-gray-800 px-4 sm:px-5 md:px-6 md:min-w-[150px] py-2 cursor-pointer rounded-full text-sm hover:bg-gray-50 flex items-center justify-center gap-1 whitespace-nowrap flex-1 md:flex-initial">
                  Know More ⓘ
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={slideRight}
          className="absolute right-1 top-[40%] bg-white shadow-md border p-2 rounded-full"
        >
          <ChevronRight size={22} />
        </button>

      </div>

    </div>
  );
}