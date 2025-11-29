"use client";

import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";

/**
 * DashBoardCourses.jsx
 *
 * Pixel-faithful responsive dashboard: Sidebar + Filters + Courses Grid + Topbar + Pagination
 * - Tailwind CSS utility classes (make sure Tailwind is set up in your project)
 * - Uses plain <img /> tags for course images (you said you'll add images manually)
 *
 * Notes:
 * - This single-file component aims to reproduce the layout in your screenshot and be responsive
 *   across mobile / tablet / desktop (including 1366px, 1440px, 1536px, 1920px).
 * - If you want small style tweaks (font family, exact color tokens), they can be adapted to your design system.
 */

const SidebarItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer select-none ${
      active ? "bg-slate-50 text-slate-900" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
    }`}
  >
    <span className="w-5 h-5 flex items-center justify-center text-slate-400">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const CourseCard = ({ data }) => {
  const getBadgeColor = (badge) => {
    if (badge === "Active") return "bg-green-50 text-green-700";
    if (badge === "Upcoming") return "bg-blue-50 text-blue-700";
    if (badge === "Published") return "bg-green-50 text-green-700";
    if (badge === "Draft") return "bg-gray-50 text-gray-700";
    return "bg-gray-50 text-gray-700";
  };

  return (
    <div className="bg-white border border-slate-100 shadow-sm rounded-xl overflow-hidden flex flex-col h-full w-full">
      {/* Image section - 40-45% of card */}
      <div className="relative h-36 md:h-40">
        <img
          src={data.image || "/course1.png"}
          alt={data.title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content section - 55-60% of card */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Tags row */}
        <div className="flex items-center justify-between mb-2">
          <span className="bg-blue-400 text-white text-xs rounded-full px-2.5 py-1 font-semibold">{data.tag}</span>
          {data.badge && (
            <span className={`${getBadgeColor(data.badge)} text-xs rounded-full px-2.5 py-1 font-semibold`}>
              {data.badge}
            </span>
          )}
        </div>

        {/* Course title */}
        <h3 className="font-semibold text-sm md:text-base text-slate-900 mb-2 leading-tight line-clamp-2">{data.title}</h3>

        {/* Instructor */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
          <img src={data.authorAvatar} alt="author" className="w-6 h-6 rounded-full" />
          <span>{data.author}</span>
        </div>

        {/* Course details list */}
        <div className="text-xs text-slate-500 flex flex-col gap-1.5 mb-3 flex-1">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-slate-400">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span>{data.mode}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-slate-400">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span>{data.date}</span>
          </div>
          {data.duration && (
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-slate-400">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>{data.duration}</span>
            </div>
          )}
        </div>

        {/* Bottom section: Price and actions */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <div className="text-base font-semibold text-slate-900">${data.price}</div>
            {data.oldPrice && (
              <div className="text-slate-400 text-xs line-through">${data.oldPrice}</div>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <button className="p-1 rounded hover:bg-slate-100">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </button>
            <button className="p-1 rounded hover:bg-slate-100">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </button>
            <button className="p-1 rounded hover:bg-slate-100">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="5" r="1.5" fill="currentColor"/>
                <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                <circle cx="12" cy="19" r="1.5" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DashBoardCourses() {
  const [filterOpen, setFilterOpen] = useState(true);
  const sampleCourses = [
    {
      id: 1,
      image: "/course1.png",
      tag: "Web Development",
      badge: "Active",
      title: "Complete React Development",
      author: "John Smith",
      authorAvatar: "https://i.pravatar.cc/40?img=12",
      mode: "Online",
      date: "Jan 15, 2024",
      duration: "8 weeks",
      price: 299,
      oldPrice: 399,
    },
    {
      id: 2,
      image: "/course2.png",
      tag: "Data Science",
      badge: "Upcoming",
      title: "Python for Data Analytics",
      author: "Sarah Johnson",
      authorAvatar: "https://i.pravatar.cc/40?img=13",
      mode: "Classroom",
      date: "Feb 1, 2024",
      duration: "12 weeks",
      price: 599,
    },
    {
      id: 3,
      image: "/course3.png",
      tag: "UI/UX",
      badge: "Draft",
      title: "Advanced UI/UX Design",
      author: "Emma Wilson",
      authorAvatar: "https://i.pravatar.cc/40?img=14",
      mode: "Hybrid",
      date: "TBD",
      duration: "10 weeks",
      price: 450,
    },
    {
      id: 4,
      image: "/course4.png",
      tag: "Marketing",
      badge: "Published",
      title: "Digital Marketing Mastery",
      author: "Mike Davis",
      authorAvatar: "https://i.pravatar.cc/40?img=15",
      mode: "Online",
      date: "Dec 1, 2023",
      duration: "6 weeks",
      price: 199,
    },
    {
      id: 5,
      image: "/course1.png",
      tag: "Data Science",
      badge: "Draft",
      title: "Machine Learning Fundamentals",
      author: "Alex Chen",
      authorAvatar: "https://i.pravatar.cc/40?img=16",
      mode: "Online",
      date: "Jan 8, 2024",
      duration: "16 weeks",
      price: 799,
      oldPrice: 999,
    },
    {
      id: 6,
      image: "/course2.png",
      tag: "Web Development",
      badge: "Published",
      title: "Mobile App Development",
      author: "David Lee",
      authorAvatar: "https://i.pravatar.cc/40?img=17",
      mode: "Hybrid",
      date: "Mar 1, 2024",
      duration: "14 weeks",
      price: 699,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex">
      {/* Left admin sidebar shared with main Dashboard */}
      <AdminSidebar />

      {/* Top-level container ensures center alignment on very large screens */}
      <div className="flex-1 max-w-[1800px] mx-auto">
        {/* Top navigation */}
        <header className="flex items-center justify-between gap-4 py-6 px-4 md:px-8">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold text-slate-900">Courses</h1>
            <p className="text-sm text-slate-500 ml-2 hidden md:inline">Manage all your online & offline training programs.</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-3 bg-white border border-slate-100 rounded-lg px-3 py-2">
              <button className="flex items-center gap-2 text-slate-600 text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-xs text-slate-600">Search courses...</span>
              </button>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <button className="flex items-center gap-2 border border-slate-100 rounded-lg px-3 py-2 text-sm bg-white">Filters</button>
              <button className="flex items-center gap-2 border border-slate-100 rounded-lg px-3 py-2 text-sm bg-white">Sort</button>
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Add New Course
            </button>
          </div>
        </header>

        <div className="flex gap-6 px-4 md:px-8 pb-12">
          {/* content area */}
          <main className="flex-1">
            <div className="flex gap-6">
              {/* Filters column */}
              <div
                className={`w-full md:w-80 lg:w-80 transition-all duration-200 ${
                  filterOpen ? "block" : "hidden"
                } md:block`}
              >
                <div className="bg-white border border-slate-100 rounded-xl p-5 sticky top-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-slate-900">Filters</h4>
                    <button
                      onClick={() => setFilterOpen(!filterOpen)}
                      className="text-xs text-slate-400 hidden md:inline"
                      aria-label="Toggle filters"
                    >
                      Hide
                    </button>
                  </div>

                  <div className="divide-y divide-slate-100">
                    <div className="pb-4">
                      <label className="text-sm font-medium text-slate-700 mb-3 block">Mode</label>
                      <div className="space-y-2 text-sm text-slate-600">
                        <label className="flex items-center gap-2"><input type="checkbox" /> Self Learning</label>
                        <label className="flex items-center gap-2"><input type="checkbox" /> Online</label>
                        <label className="flex items-center gap-2"><input type="checkbox" /> Classroom</label>
                        <label className="flex items-center gap-2"><input type="checkbox" /> Enterprise</label>
                      </div>
                    </div>

                    <div className="py-4">
                      <label className="text-sm font-medium text-slate-700 mb-3 block">Category</label>
                      <div className="space-y-2 text-sm text-slate-600">
                        <label className="flex items-center gap-2"><input type="checkbox" /> Web Development</label>
                        <label className="flex items-center gap-2"><input type="checkbox" /> Data Science</label>
                        <label className="flex items-center gap-2"><input type="checkbox" /> UI/UX</label>
                        <label className="flex items-center gap-2"><input type="checkbox" /> Marketing</label>
                      </div>
                    </div>

                    <div className="py-4">
                      <label className="text-sm font-medium text-slate-700 mb-3 block">Status</label>
                      <div className="space-y-2 text-sm text-slate-600">
                        <label className="flex items-center gap-2"><input type="checkbox" /> Active</label>
                        <label className="flex items-center gap-2"><input type="checkbox" /> Upcoming</label>
                        <label className="flex items-center gap-2"><input type="checkbox" /> Completed</label>
                        <label className="flex items-center gap-2"><input type="checkbox" /> Draft</label>
                      </div>
                    </div>

                    <div className="py-4">
                      <label className="text-sm font-medium text-slate-700 mb-3 block">Price Range</label>
                      <div className="flex items-center gap-2">
                        <input type="number" placeholder="Min" className="w-1/2 border border-slate-100 rounded px-3 py-2 text-sm" />
                        <input type="number" placeholder="Max" className="w-1/2 border border-slate-100 rounded px-3 py-2 text-sm" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Apply Filters</button>
                    <button className="w-full mt-2 text-sm text-slate-500">Reset Filters</button>
                  </div>
                </div>
              </div>

              {/* Main courses grid section */}
              <div className="flex-1">
                {/* Controls row */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  {/* Search bar */}
                  <div className="flex items-center gap-3 bg-white border border-slate-100 rounded-lg px-3 py-2 flex-1 max-w-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-400">
                      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input className="flex-1 outline-none text-sm text-slate-600" placeholder="Search courses..." />
                  </div>

                  {/* Sort dropdown */}
                  <select className="border border-slate-100 rounded-lg px-3 py-2 text-sm bg-white hidden sm:inline-flex items-center">
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Price low to high</option>
                    <option>Price high to low</option>
                  </select>

                  {/* Course count and view toggles */}
                  <div className="flex items-center gap-3">
                    <div className="text-sm text-slate-500 hidden md:inline">124 courses</div>
                    <button className="bg-white border border-slate-100 p-2 rounded-lg hidden sm:inline">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 3h18M3 12h18M3 21h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                    <button className="bg-blue-600 text-white p-2 rounded-lg hidden sm:inline">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 5h4v4H3zM10 5h4v4h-4zM17 5h4v4h-4zM3 12h4v4H3zM10 12h4v4h-4zM17 12h4v4h-4zM3 19h4v0H3z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                  </div>
                </div>

                {/* Grid – 3 columns consistently */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sampleCourses.map((c) => (
                    <CourseCard key={c.id} data={c} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-8 flex items-center justify-center">
                  <div className="inline-flex items-center gap-3">
                    <button className="p-2 rounded-full bg-white border border-slate-100 shadow-sm">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                    <div className="px-4 py-2 border border-slate-100 rounded-lg bg-white">1</div>
                    <div className="px-4 py-2 border border-slate-100 rounded-lg bg-white/50 text-slate-400">2</div>
                    <div className="px-4 py-2 border border-slate-100 rounded-lg bg-white/50 text-slate-400">3</div>
                    <button className="p-2 rounded-full bg-blue-600 text-white shadow">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}