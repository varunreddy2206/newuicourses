"use client";

import React from "react";
import Image from "next/image";
import UserGreetings from "./UserGreetings";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "Artificial Intelligence & Machine Learning with Python",
    category: "Software Development",
    progress: "86% self Learning watched",
    startDate: "14/11/2025",
    type: "Online Course",
    img: "/course1.png",
  },
  {
    id: 2,
    title: "Artificial Intelligence & Machine Learning with Python",
    category: "Software Development",
    progress: "86% self Learning watched",
    startDate: "14/11/2025",
    type: "OnlineCourse",
    img: "/course1.png",
  },
  {
    id: 3,
    title: "Artificial Intelligence & Machine Learning with Python",
    category: "Software Development",
    progress: "20% self Learning watched",
    startDate: "14/11/2025",
    type: "OnlineCourse",
    img: "/course1.png",
  },
  {
    id: 4,
    title: "Artificial Intelligence & Machine Learning with Python",
    category: "Software Development",
    progress: "86% self Learning watched",
    startDate: "14/11/2025",
    type: "OnlineCourse",
    img: "/course1.png",
  },
];

export default function LmsCourse() {
  return (
    <>
      <UserGreetings />

      <div className="w-full min-h-screen bg-white px-4 md:px-10 py-10 pt-2">

        {/* LEFT ALIGNED instead of CENTER */}
        <div className="max-w-6xl mx-0">

          {/* COURSE LIST */}
          <div className="flex flex-col gap-6">
            {courses.map((course) => {
              const completionPercent = parseInt(course.progress, 10) || 0;

              return (
                <div
                  key={course.id}
                  className="w-full bg-white border border-gray-200 rounded-2xl shadow-[0_10px_30px_rgba(15,23,42,0.08)] p-6"
                >
                  <div className="flex flex-col gap-4">

                    {/* Top row */}
                    <div className="flex items-start justify-between text-sm text-gray-500">
                      <span className="font-medium">Free Course</span>
                      <button className="text-2xl text-gray-400 hover:text-gray-600 leading-none">
                        ⋯
                      </button>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6">

                      {/* Image */}
                      <div className="w-full lg:w-[210px] h-[140px] rounded-[20px] overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center">
                        <Image
                          src={course.img}
                          alt="Course Thumbnail"
                          width={210}
                          height={140}
                          className="object-cover w-full h-full"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                          <p className="text-sm font-medium text-gray-500">
                            {course.category}
                          </p>

                          <h2 className="text-[22px] font-bold text-gray-900">
                            {course.title}
                          </h2>

                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
                            <span>• {course.type}</span>
                            <span>• {course.progress}</span>
                            <span>• Course Started Date: {course.startDate}</span>
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

                            <Link href="/lms/continuelearning">
                            <button className="cursor-pointer bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow hover:bg-blue-700 transition">
                              Continue Learning
                            </button>
                            </Link>

                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
}
