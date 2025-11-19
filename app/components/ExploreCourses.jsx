"use client";
import Image from "next/image";
import React from "react";
import { Star, Clock } from "lucide-react";

const categories = [
  "All",
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
  "Math and Logic",
];

const courses = [
  {
    title: "Artificial Intelligence & Machine Learning with Python",
    desc: "Learn machine learning algorithms, data processing, and model deployment using Python for real-world AI solutions.",
    level: "Beginner",
    duration: "6 months",
    mode: "Online",
    learners: "1.7M+",
    image: "/course1.png", // update must
  },
  {
    title: "Artificial Intelligence & Machine Learning with Python",
    desc: "Learn machine learning algorithms, data processing, and model deployment using Python for real-world AI solutions.",
    level: "Beginner",
    duration: "6 months",
    mode: "Online",
    learners: "1.7M+",
    image: "/course1.png",
  },
  {
    title: "Artificial Intelligence & Machine Learning with Python",
    desc: "Learn machine learning algorithms, data processing, and model deployment using Python for real-world AI solutions.",
    level: "Beginner",
    duration: "6 months",
    mode: "Online",
    learners: "1.7M+",
    image: "/course1.png",
  },
];

export default function ExploreCourses() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Explore courses
        </h2>

        {/* Category Chips */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat, i) => (
            <button
              key={i}
              className="px-5 py-2 rounded-full bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200 transition text-sm"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Divider */}
        <hr className="my-10 border-gray-200" />

        {/* COURSE LIST */}
        <div className="flex flex-col gap-14">
          {courses.map((course, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

              {/* LEFT DETAILS */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-lg mt-2 leading-relaxed max-w-xl">
                  {course.desc}
                </p>

                {/* Course Info */}
                <div className="flex flex-wrap gap-6 mt-4 text-gray-800">

                  {/* Level */}
                  <div className="flex items-center gap-2">
                    <Image src="/beginner.png" width={22} height={22} alt="level" />
                    <span className="text-sm">{course.level}</span>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-700" />
                    <span className="text-sm">{course.duration}</span>
                  </div>

                  {/* Mode */}
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    <span className="text-sm">{course.mode}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm">{course.learners}</span>
                  </div>
                </div>

                {/* Enroll Button */}
                <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-medium transition">
                  Enroll Now
                </button>

                {/* Divider below each card */}
                <hr className="mt-10 border-gray-200" />
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex justify-center md:justify-end">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={350}
                  height={260}
                  className="rounded-xl shadow-md object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
       <div className="mt-16 mx-auto max-w-5xl bg-blue-700 text-white py-6 rounded-full text-center text-lg font-medium">
  Learn from industry experts, earn global certifications, and start your career journey with confidence. →→→
</div>

      </div>
    </section>
  );
}
