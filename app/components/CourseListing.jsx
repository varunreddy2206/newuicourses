"use client";

import React, { useMemo, useState } from "react";
import { useGetAPI } from "@/common/hooks/useGetAPI";
import { getCourseServiceApi } from "@/features/courses/service/get-course.service";
import CourseCard from "./CourseCard";

export default function CourseListing() {
  // Categories - same as ExploreCourses component
  const categories = [
    "All",
    "Artificial Intelligence, Data & Automation",
    "Web Development",
    "Mobile App Development",
    "Cloud, DevOps & Infrastructure",
    "Software Testing & QA",
    "Design & Creative Technologies",
    "Internship & Corporate Programs",
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [query, setQuery] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // API CALL - Fetch courses based on selected category
  const { data, loading, error } = useGetAPI(getCourseServiceApi, {
    category: selectedCategory,
    page: 1,
    limit: 50, // Fetch more courses for grid display
  });

  // Get courses from API response
  const serverCourses = data?.data || [];

  // Filter courses by search query
  const filteredCourses = useMemo(() => {
    if (!query.trim()) return serverCourses;
    return serverCourses.filter(
      (course) =>
        course.title?.toLowerCase().includes(query.toLowerCase()) ||
        course.subtitle?.toLowerCase().includes(query.toLowerCase())
    );
  }, [serverCourses, query]);

  return (
    <section className="w-full bg-white py-4 sm:py-6 md:py-6 lg:py-8 px-3 sm:px-4 md:px-6 lg:px-12">
      <div className="max-w-8xl mx-auto">

                {/* HEADER */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start mb-4 sm:mb-5 md:mb-6 lg:mb-8 gap-3 sm:gap-0">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                        Explore Our Top Trending
                        <span className="block text-yellow-500 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold">
                            IT Courses
                        </span>
                    </h2>
                    {/* Mobile Filter Button */}
                    <button
                        onClick={() => setMobileFiltersOpen((s) => !s)}
                        className="md:hidden px-3 py-2 border rounded-md text-sm shadow-sm"
                    >
                        {mobileFiltersOpen ? "Close" : "Filters"}
                    </button>
                </div>

                {/* TABLET CATEGORIES */}
                <div className="hidden md:flex lg:hidden mb-4 w-full overflow-x-auto">
                    <div className="flex items-center gap-2 min-w-max pb-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setQuery("");
                                }}
                                className={`whitespace-nowrap px-3 py-2 rounded-lg border text-xs transition-all shrink-0 ${
                                    selectedCategory === category
                                        ? "bg-blue-600 text-white border-blue-600 font-medium"
                                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* SIDEBAR + CONTENT */}
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 lg:gap-8">

                    {/* DESKTOP SIDEBAR */}
                    <aside className="hidden lg:block w-full lg:w-60 shrink-0">
                        <div className="space-y-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setQuery("");
                                    }}
                                    className={`w-full text-left px-4 py-2.5 rounded-lg border text-sm transition-all ${
                                        selectedCategory === category
                                            ? "bg-blue-600 text-white border-blue-600 font-medium"
                                            : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* MOBILE SIDEBAR */}
                    {mobileFiltersOpen && (
                        <div className="md:hidden mb-4 w-full">
                            <div className="grid grid-cols-2 gap-2 border p-3 rounded-lg shadow-sm">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => {
                                            setSelectedCategory(category);
                                            setQuery("");
                                            setMobileFiltersOpen(false);
                                        }}
                                        className={`px-3 py-2 text-sm border rounded-md ${
                                            selectedCategory === category
                                                ? "bg-blue-600 text-white border-blue-600"
                                                : "bg-white text-gray-700 border-gray-300"
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* RIGHT CONTENT */}
                    <main className="flex-1">
                        {/* Loading State */}
                        {loading && (
                            <div className="text-center py-10 text-gray-500">
                                Loading courses...
                            </div>
                        )}

                        {/* Error State */}
                        {error && !loading && (
                            <div className="text-center py-10 text-red-600">
                                Error loading courses. Please try again.
                            </div>
                        )}

                        {/* No Courses */}
                        {!loading && !error && filteredCourses.length === 0 && (
                            <div className="text-center py-10 text-gray-600">
                                <p className="text-lg font-medium">
                                    No courses found
                                    {query ? ` matching "${query}"` : " in this category"}
                                </p>
                                <p className="text-sm text-gray-500 mt-1">
                                    Try selecting another category or search term.
                                </p>
                            </div>
                        )}

                        {/* GRID */}
                        {!loading && filteredCourses.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-4 md:gap-5 lg:gap-6">
                                {filteredCourses.map((course) => (
                                    <CourseCard key={course._id || course.id} course={course} />
                                ))}
                            </div>
                        )}

                    </main>
                </div>
            </div>
        </section>
    );
}
