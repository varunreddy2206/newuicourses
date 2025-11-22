"use client";
import Image from "next/image";
import { useState } from "react";
import { Clock, Globe, Star, User } from "lucide-react";
import { useGetAPI } from "@/common/hooks/useGetAPI";
import { getCourseServiceApi } from "@/features/courses/service/get-course.service";
import Link from "next/link";

export default function ExploreCourses() {
  const newCat = [
    "Artificial Intelligence, Data & Automation",
    "Web Development",
    "Mobile App Development",
    "Cloud, DevOps & Infrastructure",
    "Software Testing & QA",
    "Design & Creative Technologies",
    "Internship & Corporate Programs",
  ];

  // Selected category
  const [selectedCategory, setSelectedCategory] = useState(newCat[0]);

  // API CALL
  const { data, loading, error } = useGetAPI(getCourseServiceApi, {
    category: selectedCategory,
    page: 1,
    limit: 5,
  });

  const serverCourses = data?.data || [];

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-10">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Explore courses
      </h2>

      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap gap-3 mb-10">
        {newCat.map((category, i) => (
          <button
            key={i}
            onClick={() => setSelectedCategory(category)}
            className={`text-sm px-4 py-1 border rounded-full shadow-sm ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center text-gray-500 py-10">Loading courses...</p>
      )}

      {/* No courses from server */}
      {!loading && serverCourses.length === 0 && (
        <div className="text-center text-gray-600 py-10">
          <p className="text-lg font-medium">
            No courses found in this category
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Try selecting another category.
          </p>
        </div>
      )}

      {/* COURSE LIST */}
      <div className="space-y-12">
        {!loading &&
          serverCourses.length > 0 &&
          serverCourses.map((course, index) => (
            <div
              key={index}
              className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b pb-10"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 hidden sm:block">
                  {course.subtitle}
                </p>

                <div className="flex items-center gap-6 text-sm text-gray-700 mb-5">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-green-600" />
                    <span>{course.level}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gray-700" />
                    <span>{course.totalHours}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Globe size={16} className="text-teal-600" />
                    <span>Online</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Star size={16} className="text-yellow-500" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <Link
                  href={`/course/${course._id}`}
                  className="bg-blue-600 text-white px-6 py-2 text-sm font-medium hover:bg-blue-700"
                >
                  Enroll Now
                </Link>
              </div>

              <div className="w-full sm:min-w-[220px] sm:max-w-[240px]">
                <Image
                  src="/course1.png"
                  alt="Course Image"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
            </div>
          ))}
      </div>

      {/* Banner */}
      <div className="mt-12 w-full bg-blue-600 text-white text-center py-4 rounded-full text-sm sm:text-base font-medium shadow">
        Learn from industry experts, earn global certifications, and start your
        career journey with confidence. »
      </div>
    </div>
  );
}
