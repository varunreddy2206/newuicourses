"use client";
import Image from "next/image";
import { Clock, Globe, Star, User } from "lucide-react";

export default function ExploreCourses() {
  const courseImages = [
    "/course1.png",
    "/course1.png",
    "/course1.png",
    "/course1.png",
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-10">

      {/* SECTION TITLE */}
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Explore courses
      </h2>

      {/* TAGS LIST */}
      <div className="flex flex-wrap gap-3 mb-10">
        {[
          "AI",
          "Artificial Intelligence",
          "Data Science",
          "Computer Science",
          "Information Technology",
          "Personal Development",
          "Healthcare",
          "Language Learning",
          "Social Sciences",
          "Arts and Humanities",
          "Physical Science and Engineering",
          "Math and Logic"
        ].map((tag, i) => (
          <span
            key={i}
            className="text-sm px-4 py-1 border rounded-full bg-white shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* COURSE LIST */}
      <div className="space-y-12">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="
              w-full 
              flex 
              flex-col sm:flex-row 
              items-start sm:items-center 
              justify-between 
              gap-6 
              border-b 
              pb-10
            "
          >

            {/* LEFT CONTENT */}
            <div className="flex-1">

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Artificial Intelligence & Machine Learning with Python
              </h3>

              {/* DESCRIPTION — hidden on mobile */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 hidden sm:block">
                Learn machine learning algorithms, data processing, and model deployment
                using Python for real-world AI solutions.
              </p>

              {/* TAG ROW */}
              <div className="flex items-center gap-6 text-sm text-gray-700 mb-5">

                <div className="flex items-center gap-2">
                  <User size={16} className="text-green-600" />
                  <span>Beginner</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-gray-700" />
                  <span>6 months</span>
                </div>

                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-teal-600" />
                  <span>Online</span>
                </div>

                <div className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-500" />
                  <span>17M+</span>
                </div>

              </div>

              {/* BUTTON */}
              <div className="mt-2">
                <button className="bg-blue-600 text-white px-6 py-2 text-sm font-medium hover:bg-blue-700">
                  Enroll Now
                </button>
              </div>

            </div>

            {/* RIGHT IMAGE — vertical on mobile, right side on tablet+ */}
            <div className="w-full sm:min-w-[220px] sm:max-w-[240px]">
              <Image
                src={courseImages[index - 1]}
                alt="AI Course"
                width={240}
                height={200}
                className="
                  rounded-xl 
                  object-cover 
                  w-full 
                  h-[180px] 
                  sm:h-full
                "
              />
            </div>

          </div>
        ))}
      </div>

      {/* BLUE FOOTER BANNER */}
      <div className="mt-12 w-full bg-blue-600 text-white text-center py-4 rounded-full text-sm sm:text-base font-medium shadow">
        Learn from industry experts, earn global certifications, and start your career journey with confidence. »
      </div>

    </div>
  );
}
