"use client";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";
import { useGetAPI } from "@/common/hooks/useGetAPI";
import { getPopularCoursesApi } from "@/features/courses/service/get-course.service";
import CourseCard from "./CourseCard";

export default function PopularCourses() {
  // Fetch popular courses from API
  const { data, loading, error } = useGetAPI(getPopularCoursesApi, {
    limit: 4,
  });

  // Get courses from API response
  const courses = data?.data || [];

  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('article');
      const gap = 16; // gap-4 = 1rem = 16px
      const scrollAmount = card ? card.offsetWidth + gap : 356;
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('article');
      const gap = 16; // gap-4 = 1rem = 16px
      const scrollAmount = card ? card.offsetWidth + gap : 356;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div className="w-full px-2 sm:px-4 md:px-10 lg:px-20 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Courses</h2>
        <div className="flex items-center justify-center py-12">
          <div className="text-gray-500">Loading popular courses...</div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="w-full px-2 sm:px-4 md:px-10 lg:px-20 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Courses</h2>
        <div className="flex items-center justify-center py-12">
          <div className="text-red-500">Failed to load popular courses. Please try again later.</div>
        </div>
      </div>
    );
  }

  // Show empty state
  if (!courses || courses.length === 0) {
    return (
      <div className="w-full px-2 sm:px-4 md:px-10 lg:px-20 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Courses</h2>
        <div className="flex items-center justify-center py-12">
          <div className="text-gray-500">No popular courses available at the moment.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-2 sm:px-4 md:px-10 lg:px-20 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Courses</h2>

      {/* DESKTOP GRID — ONLY FROM 1280px (xl) */}
      <div className="hidden xl:grid xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CourseCard key={course._id || course.id} course={course} />
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
          {courses.map((course) => (
            <div
              key={course._id || course.id}
              className="w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] md:min-w-[280px] lg:min-w-[300px] md:w-auto snap-start flex-shrink-0"
            >
              <CourseCard course={course} />
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