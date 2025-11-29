"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Usernewheader from "./Usernewheader";
import { useGetAPI } from "@/common/hooks/useGetAPI";
import { getMyEnrolledCoursesApi } from "@/features/courses/service/get-course.service";
import { imageUrl } from "@/core/url";

// Helper function to normalize image path
const normalizeImagePath = (imagePath) => {
  if (!imagePath) return "/course1.png"; // Fallback image
  if (imagePath.startsWith("http")) return imagePath;
  const normalizedPath = imagePath.replace(/\\/g, "/").replace(/^\//, "");
  return `${imageUrl}/${normalizedPath}`;
};

// Helper function to format date
const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } catch (error) {
    return "N/A";
  }
};

export default function ProfileCourses() {
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch enrolled courses from API
  const { data, loading, error } = useGetAPI(getMyEnrolledCoursesApi);

  // Get courses from API response
  const enrolledCourses = data?.data || [];

  // Filter courses by search query
  const filteredCourses = useMemo(() => {
    if (!searchQuery.trim()) return enrolledCourses;
    const query = searchQuery.toLowerCase();
    return enrolledCourses.filter(
      (course) =>
        course.title?.toLowerCase().includes(query) ||
        course.subtitle?.toLowerCase().includes(query) ||
        course.category?.toLowerCase().includes(query)
    );
  }, [enrolledCourses, searchQuery]);
  return (
    <>
      <Usernewheader noOffset />
      <div className="w-full bg-[#f8f9fb] px-4 md:px-10 py-10 pt-28">
        <div className="max-w-6xl mx-auto">
          {/* ---------------- SEARCH BAR ---------------- */}
          <div className="w-full flex flex-col md:flex-row md:items-center gap-4 mb-10">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search courses here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 pl-12 rounded-full border border-gray-200 shadow-sm text-sm outline-none focus:ring-2 focus:ring-yellow-300 bg-white"
              />
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>
          </div>

          {/* ---------------- LOADING STATE ---------------- */}
          {loading && (
            <div className="flex items-center justify-center py-12">
              <div className="text-gray-500">Loading your enrolled courses...</div>
            </div>
          )}

          {/* ---------------- ERROR STATE ---------------- */}
          {error && (
            <div className="flex items-center justify-center py-12">
              <div className="text-red-500">
                Failed to load enrolled courses. Please try again later.
              </div>
            </div>
          )}

          {/* ---------------- EMPTY STATE ---------------- */}
          {!loading && !error && filteredCourses.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="text-gray-500 text-center mb-4">
                {searchQuery
                  ? "No courses found matching your search."
                  : "You haven't enrolled in any courses yet."}
              </div>
              {!searchQuery && (
                <a
                  href="/courseslist"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
                >
                  Browse Courses
                </a>
              )}
            </div>
          )}

          {/* ---------------- COURSE LIST ---------------- */}
          {!loading && !error && filteredCourses.length > 0 && (
            <div className="flex flex-col gap-6">
              {filteredCourses.map((course) => {
                // Calculate progress (placeholder - will be 0% until progress tracking is implemented)
                const completionPercent = 0; // TODO: Implement progress tracking
                const progressText = completionPercent > 0
                  ? `${completionPercent}% self Learning watched`
                  : "Not started";

                // Get enrollment date (use createdAt as fallback)
                const enrolledDate = course.enrolledAt || course.createdAt;

                return (
                  <div
                    key={course._id || course.id}
                    className="w-full bg-white border border-gray-200 rounded-2xl shadow-[0_10px_30px_rgba(15,23,42,0.08)] p-6"
                  >
                    <div className="flex flex-col gap-4">
                      {/* Top row */}
                      <div className="flex items-start justify-between text-sm text-gray-500">
                        <span className="font-medium">
                          {course.basePrice === 0 || !course.basePrice
                            ? "Free Course"
                            : `₹${course.basePrice}`}
                        </span>
                        <button className="text-2xl text-gray-400 hover:text-gray-600 leading-none">
                          ⋯
                        </button>
                      </div>

                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Thumbnail */}
                        <div className="w-full lg:w-[210px] h-[140px] rounded-[20px] overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center flex-shrink-0">
                          <Image
                            src={normalizeImagePath(course?.thumbnail)}
                            alt={course?.title || "Course Thumbnail"}
                            width={210}
                            height={140}
                            className="object-cover w-full h-full"
                            unoptimized
                            onError={(e) => {
                              e.target.src = "/course1.png";
                            }}
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 flex flex-col gap-4">
                          <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-gray-500">
                              {course.category || "Course"}
                            </p>
                            <h2 className="text-[22px] font-bold text-gray-900">
                              {course.title || "Untitled Course"}
                            </h2>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
                              <span>• {course.trainingOptions || "Online"}</span>
                              <span>• {progressText}</span>
                              <span>
                                • Course Started Date: {formatDate(enrolledDate)}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            {completionPercent >= 80 ? (
                              <button className="bg-[#fcbc0a] text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:bg-[#f2b003] transition flex items-center gap-2">
                                View certificate <span>🏆</span>
                              </button>
                            ) : (
                              <span className="text-sm text-gray-500">
                                Complete at least 80% to unlock certificate
                              </span>
                            )}

                            <div className="flex gap-3">
                              <button className="border border-blue-500 text-blue-600 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition flex items-center gap-2">
                                Upgrade
                              </button>
                              <a
                                href={`/course/${course._id || course.id}`}
                                className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow hover:bg-blue-700 transition text-center"
                              >
                                Continue Learning
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}