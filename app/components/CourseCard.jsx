"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, BookOpen } from "lucide-react";
import { imageUrl } from "@/core/url";

export default function CourseCard({ course }) {
  // Calculate total lessons
  const totalLessons =
    course?.curriculum?.reduce(
      (sum, module) => sum + (module.lessons?.length || 0),
      0
    ) || 0;

  // Calculate pricing
  const finalPrice = course?.basePrice || 0;
  const discountedPrice = course?.discount
    ? finalPrice - (finalPrice * course.discount) / 100
    : finalPrice;

  // Helper function to normalize image path
  const normalizeImagePath = (imagePath) => {
    if (!imagePath) return "/course1.png"; // Fallback image
    if (imagePath.startsWith("http")) return imagePath;
    const normalizedPath = imagePath.replace(/\\/g, "/").replace(/^\//, "");
    return `${imageUrl}/${normalizedPath}`;
  };

  return (
    <article className="bg-white rounded-2xl sm:rounded-2xl md:rounded-3xl border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden p-3 sm:p-3 md:p-4 lg:p-4 flex flex-col h-full">
      {/* Thumbnail */}
      <div className="w-full rounded-xl sm:rounded-xl md:rounded-2xl overflow-hidden">
        <Image
          src={normalizeImagePath(course?.thumbnail)}
          alt={course?.title || "Course"}
          width={500}
          height={300}
          className="object-cover w-full h-40 sm:h-44 md:h-44 lg:h-48 rounded-xl sm:rounded-xl md:rounded-2xl"
          unoptimized
        />
      </div>

      {/* Badges */}
      <div className="flex items-center gap-2 sm:gap-2 md:gap-3 lg:gap-4 mt-3 sm:mt-3 md:mt-4 lg:mt-4 flex-wrap">
        <span className="flex items-center gap-1 text-green-700 bg-green-50 px-2 py-0.5 rounded-full text-[10px] md:text-xs">
          🟩 {course?.level || "Beginner"}
        </span>
        <span className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-0.5 rounded-full text-[10px] md:text-xs">
          🟢 {course?.trainingOptions || "Online"}
        </span>
        <span className="flex items-center gap-1 text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-full text-[10px] md:text-xs">
          ⭐ {course?.rating || 0}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-2 md:mt-3 text-base md:text-lg font-bold text-gray-900 leading-tight">
        {course?.title}
      </h3>

      {/* Description */}
      <p className="text-xs md:text-sm text-gray-500 mt-1 mb-3 md:mb-4 grow line-clamp-2">
        {course?.subtitle || course?.description || "Build intelligent solutions with real-world training."}
      </p>

      {/* Course Info */}
      <div className="flex items-center gap-3 text-xs text-gray-600 mb-3 flex-wrap">
        {totalLessons > 0 && (
          <span className="flex items-center gap-1">
            <BookOpen size={14} />
            {totalLessons} Lessons
          </span>
        )}
        {course?.totalHours && (
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {course.totalHours}
          </span>
        )}
      </div>

      {/* Price */}
      {finalPrice > 0 && (
        <div className="mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              ₹{discountedPrice.toFixed(0)}
            </span>
            {course?.discount > 0 && (
              <>
                <span className="text-sm text-gray-500 line-through">
                  ₹{finalPrice.toFixed(0)}
                </span>
                <span className="text-xs text-green-600 font-medium">
                  {course.discount}% off
                </span>
              </>
            )}
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex items-center gap-2 md:gap-3 lg:gap-4 mt-auto pt-2">
        <Link
          href={`/course/${course?._id || course?.id}`}
          className="bg-blue-600 text-white px-3 md:px-4 lg:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium hover:bg-blue-700 transition flex items-center gap-1 flex-1 justify-center"
        >
          Enroll Now →
        </Link>

        <Link
          href={`/course/${course?._id || course?.id}`}
          className="border border-gray-300 px-3 md:px-4 lg:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium text-gray-700 flex items-center gap-1 hover:bg-gray-50 transition flex-1 justify-center"
        >
          Know More →
        </Link>
      </div>
    </article>
  );
}
