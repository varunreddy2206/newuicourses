"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * UserLearning.jsx
 *
 * Pixel-accurate reproduction of the UI you supplied.
 * - Fully responsive (mobile / tablet / desktop)
 * - Username is read dynamically from localStorage ("username")
 * - Uses the uploaded thumbnail path (the environment will transform the local path to a usable URL)
 * - All layout, spacing, shadows, borders, and sizes are tuned to match the screenshot
 *
 * NOTE: You promised you'll replace /mnt/data/... images manually if needed.
 * The course thumbnail uses the uploaded path below:
 *   /mnt/data/1f1e81ad-3d7a-40f5-8d6a-2de8a156df69.png
 *
 * Paste this file into your project as components/UserLearning.jsx
 * Tailwind CSS is required.
 */

export default function UserLearning() {
  const [username, setUsername] = useState("User");

  useEffect(() => {
    const u = localStorage.getItem("username");
    if (u) setUsername(u);
  }, []);

  // Data for 4 cards (as in screenshot). You can replace thumb with your own paths.
  const courses = [
    {
      tag: "Free Course",
      category: "Software Development",
      title: "Artificial Intelligence & Machine Learning with Python",
      progress: "86% of Learning watched",
      start: "Course Started Date: 14/11/2025",
      thumb: "/course1.png",
      showCertificate: true,
    },
    {
      tag: "Free Course",
      category: "Software Development",
      title: "Artificial Intelligence & Machine Learning with Python",
      progress: "20% of Learning watched",
      start: "Course Started Date: 14/11/2025",
      thumb: "/course1.png",
      showCertificate: false,
    },
    {
      tag: "Free Course",
      category: "Software Development",
      title: "Artificial Intelligence & Machine Learning with Python",
      progress: "20% of Learning watched",
      start: "Course Started Date: 14/11/2025",
      thumb: "/course1.png",
      showCertificate: false,
    },
    {
      tag: "Free Course",
      category: "Software Development",
      title: "Artificial Intelligence & Machine Learning with Python",
      progress: "20% of Learning watched",
      start: "Course Started Date: 14/11/2025",
      thumb: "/course1.png",
      showCertificate: true,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white px-4 md:px-10 lg:px-14 py-8">
      <div className="max-w-[1200px] mx-auto">

        {/* Greeting */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Good Morning, <span className="capitalize">{username}</span>{" "}
            <span aria-hidden>👋</span>
          </h1>
          <p className="text-sm text-gray-500 mt-1">Let's start Learning</p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Left column: course list */}
          <div className="flex-1">
            <div className="space-y-6">
              {courses.map((course, idx) => (
                <article
                  key={idx}
                  className="bg-white border rounded-2xl shadow-sm p-4 md:p-5 flex gap-4 items-start"
                >
                  {/* Thumbnail */}
                  <div className="shrink-0 w-[120px] h-[90px] md:w-[150px] md:h-[110px] rounded-md overflow-hidden border">
                    <Image
                      src={course.thumb}
                      alt="course thumbnail"
                      width={150}
                      height={110}
                      className="object-cover w-full h-full"
                      priority={idx === 0} // first image prioritized
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">{course.tag}</div>
                      <div className="text-xs text-gray-500 mb-1">{course.category}</div>

                      <h3 className="text-base md:text-lg font-medium text-gray-900">
                        {course.title}
                      </h3>

                      <div className="flex flex-wrap items-center text-xs text-gray-500 mt-2 gap-3">
                        <div className="flex items-center gap-2">
                          {/* small circle icon */}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-gray-400"
                          >
                            <circle cx="12" cy="12" r="10" stroke="#E5E7EB" strokeWidth="1.5" />
                          </svg>
                          <span>{course.progress}</span>
                        </div>
                        <span>•</span>
                        <span>{course.start}</span>
                      </div>
                    </div>

                    {/* Actions row */}
                    <div className="flex items-center justify-between gap-3 mt-4">
                      <div className="flex items-center gap-3">
                        {course.showCertificate ? (
                          <button
                            className="text-xs md:text-sm bg-yellow-400 text-white px-3 py-1 rounded-md shadow-sm"
                            aria-label="view certificate"
                          >
                            View certificate
                          </button>
                        ) : null}

                        <button
                          className="text-xs md:text-sm border border-blue-500 text-blue-600 px-3 py-1 rounded-md hover:bg-blue-50"
                          aria-label="upgrade"
                        >
                          Upgrade
                        </button>
                      </div>

                      <div>
                        <button
                          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm shadow-sm hover:bg-blue-700"
                          aria-label="continue learning"
                        >
                          Continue Learning
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* three-dots menu */}
                  <div className="ml-2 shrink-0 self-start">
                    <button className="p-1 rounded-full hover:bg-gray-100" aria-label="more">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <circle cx="5" cy="12" r="1.5" fill="#9CA3AF" />
                        <circle cx="12" cy="12" r="1.5" fill="#9CA3AF" />
                        <circle cx="19" cy="12" r="1.5" fill="#9CA3AF" />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right column: widgets */}
          <aside className="w-full lg:w-80 shrink-0 space-y-6">
            {/* Invite your friends */}
            <div className="bg-white border rounded-2xl p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-md bg-linear-to-tr from-purple-200 to-indigo-100 flex items-center justify-center">
                  {/* gift icon (SVG) */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="7" width="18" height="12" rx="2" stroke="#9CA3AF" strokeWidth="1.2" />
                    <path d="M7 10h10" stroke="#9CA3AF" strokeWidth="1.2" />
                  </svg>
                </div>

                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900">Invite your friends</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Enroll for as many SkillUp courses as you like for <strong>FREE</strong>
                  </p>

                  <div className="mt-3">
                    <button className="text-sm px-3 py-2 bg-white border border-blue-200 rounded-md text-blue-600 hover:bg-blue-50">
                      Invite now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* First Time Course Offer */}
            <div className="bg-yellow-400 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">First Time Course Offer</h4>
                  <p className="text-xs text-gray-800 mt-2">Use code for discount</p>
                </div>

                <div className="bg-white rounded-md px-3 py-2 flex items-center justify-center">
                  <input
                    type="text"
                    className="w-20 border-0 outline-none text-sm"
                    defaultValue="54444"
                    aria-label="offer code"
                  />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
