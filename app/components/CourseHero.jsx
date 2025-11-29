"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Play, Loader2 } from "lucide-react";
import { imageUrl } from "@/core/url";
import { useAuthStore } from "@/store/auth.store";
import { enrollCourseApi } from "@/features/courses/service/get-course.service";
import { successfully, errorMsgApi } from "@/core/toast";

export default function CourseHero({ course }) {
  const router = useRouter();
  const { isAuthenticated, token, user } = useAuthStore();
  const [enrolling, setEnrolling] = useState(false);

  // Check if user is already enrolled
  const userId = user?._id || user?.id;
  const enrolledUsers = course?.enrolledUsers || [];
  const isAlreadyEnrolled = isAuthenticated && userId && enrolledUsers.some(
    (enrolledUserId) => {
      // Handle both string and ObjectId comparison
      const enrolledId = enrolledUserId?.toString();
      const currentUserId = userId?.toString();
      return enrolledId === currentUserId;
    }
  );

  const handleDownloadCurriculum = () => {
    if (!course?.curriculumPdf) {
      alert("Curriculum PDF not available");
      return;
    }

    const pdfPath = course.curriculumPdf.replace(/\\/g, "/");
    const pdfUrl = pdfPath.startsWith("http") 
      ? pdfPath 
      : `${imageUrl}/${pdfPath.replace(/^\//, "")}`;
    
    // Open in new tab for download
    window.open(pdfUrl, "_blank");
  };

  const handleEnroll = async () => {
    // Check if already enrolled
    if (isAlreadyEnrolled) {
      errorMsgApi("You are already enrolled in this course");
      return;
    }

    // Check if user is logged in
    if (!isAuthenticated || !token) {
      errorMsgApi("Please login to enroll in this course");
      router.push("/login");
      return;
    }

    // Check if course ID exists
    if (!course?._id && !course?.id) {
      errorMsgApi("Course information not available");
      return;
    }

    const courseId = course._id || course.id;
    setEnrolling(true);

    try {
      const response = await enrollCourseApi(courseId);
      
      if (response.status) {
        successfully("Successfully enrolled in course!");
        // Refresh the page to update course data with enrollment status
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        // Optionally redirect to LMS or course dashboard
        // router.push(`/lms/${courseId}`);
      } else {
        errorMsgApi(response.error || "Failed to enroll in course");
      }
    } catch (error) {
      errorMsgApi("An error occurred while enrolling. Please try again.");
    } finally {
      setEnrolling(false);
    }
  };

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* LEFT TEXT SECTION */}
        <div className="space-y-5 sm:space-y-6">
          {/* Badge */}
          <div className="inline-block bg-gray-100 text-gray-700 px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium">
            Smart Learning
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-gray-900">
            The Complete <br />
            <span className="text-yellow-500">
              {/* Artificial Intelligence & Machine Learning With Python */}
              {course?.title}
            </span>{" "}
            {/* for <br />
            Beginners */}
            {course?.subtitle}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-700 max-w-xl">
            Learn from industry experts, earn global certifications, and start
            your career journey with confidence.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
            <button
              onClick={handleEnroll}
              disabled={enrolling || isAlreadyEnrolled}
              className={`px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium flex items-center gap-3 transition-colors ${
                isAlreadyEnrolled
                  ? "bg-green-600 text-white cursor-not-allowed opacity-80"
                  : enrolling
                  ? "bg-blue-600 text-white opacity-70 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {enrolling ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Enrolling...
                </>
              ) : isAlreadyEnrolled ? (
                <>
                  ✓ Already Enrolled
                </>
              ) : (
                <>
                  Enroll Now
                  <span className="text-lg sm:text-xl">➡</span>
                </>
              )}
            </button>

            <button onClick={handleDownloadCurriculum} className="bg-white border border-gray-200 px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium flex items-center gap-3 shadow-sm">
              Download Curriculum
              <span className="text-lg sm:text-xl">📥</span>
            </button>
          </div>

          {/* Info Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-gray-700">
            <div className="flex items-center gap-1 text-sm sm:text-lg">
              ⭐ {course?.rating}({course?.totalReviews ?? 0} Review)
            </div>

            <div className="flex items-center gap-1 text-sm sm:text-lg">
              🎥 {course?.totalHours} Classes
            </div>

            <div className="flex items-center gap-1 text-sm sm:text-lg">
              🎓 {course?.level}
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative w-full flex items-center justify-center">
          <Image
            src="/coursehero.png"
            alt="Graphic Design Course"
            width={900}
            height={600}
            className="rounded-3xl w-full h-[260px] sm:h-[360px] md:h-[420px] lg:h-[520px] object-cover shadow-lg"
          />

          {/* Play Button */}
          <button className="absolute bg-white w-14 h-14 sm:w-20 sm:h-20 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition">
            <Play
              size={30}
              className="sm:w-[38px] sm:h-[38px]"
              fill="blue"
              color="blue"
            />
          </button>
        </div>
      </div>
    </section>
  );
}