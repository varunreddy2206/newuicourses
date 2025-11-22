"use client";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";

export default function PopularCourses({ courses }) {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -260, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 260, behavior: "smooth" });
  };

  // Default placeholder images (or use courses[i].image if available)
  const courseImages = [
    "/course1.png",
    "/course2.png",
    "/course3.png",
    "/course4.png",
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-10">
      {" "}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Courses</h2>
      {/* DESKTOP GRID */}
      <div className="hidden xl:grid xl:grid-cols-4 gap-6">
        {courses?.map((course, index) => (
          <div
            key={index}
            className="bg-white border shadow-md rounded-2xl p-4"
          >
            <Image
              src={courseImages[index % courseImages.length]}
              alt={course.title}
              width={400}
              height={300}
              className="rounded-xl object-cover w-full h-[170px]"
            />

            {/* Info badges from server data */}
            <div className="flex items-center gap-3 text-xs text-gray-600 flex-nowrap mt-3">
              {" "}
              <span>🛡 {course.level?.slice(0, 9)}</span> <span>🟢 Online</span>{" "}
              <span>
                ⭐ {course.rating} ({course.totalReviews} Reviews)
              </span>{" "}
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mt-2">
              {course.title}
            </h3>

            <div className="h-[60px] overflow-hidden">
              <p className="text-gray-600 text-sm leading-snug">
                {course.description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 flex items-center gap-1">
                Enroll Now →
              </button>
              <button className="border px-5 py-2 rounded-full text-sm flex items-center gap-1">
                Know More ⓘ
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* MOBILE / TABLET SLIDER */}
      <div className="xl:hidden relative mt-2">
        <button
          onClick={slideLeft}
          className="absolute left-1 top-[40%] bg-white shadow-md border p-2 rounded-full z-10"
        >
          <ChevronLeft size={22} />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory"
        >
          {courses?.map((course, index) => (
            <div
              key={index}
              className="
            min-w-[260px] max-w-[260px]
            bg-white border shadow-md rounded-2xl p-4
            snap-start
          "
            >
              <Image
                src={courseImages[index % courseImages.length]}
                alt={course.title}
                width={400}
                height={300}
                className="rounded-xl object-cover w-full h-[170px]"
              />

              <div className="flex items-center gap-3 mt-3 text-xs text-gray-600">
                <span>🛡 {course.level}</span>
                <span>🟢 Online</span>
                <span>
                  ⭐ {course.rating} ({course.totalReviews})
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mt-2">
                {course.title}
              </h3>

              <div className="h-[65px] overflow-hidden flex items-start">
                <p className="text-gray-600 text-sm leading-snug">
                  {course.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 flex items-center justify-center gap-2 leading-none">
                  <span className="inline-block">Enroll Now</span>
                  <span className="inline-block translate-y-px">→</span>
                </button>

                <button className="border px-5 py-2 rounded-full text-sm flex items-center gap-1 justify-center leading-none">
                  <span className="inline-block">Know More</span>
                  <span className="inline-block translate-y-px">ⓘ</span>
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
