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
  return (
    <div className="bg-white border border-slate-100 shadow-sm rounded-xl overflow-hidden">
      <div className="relative h-40 md:h-44 lg:h-44">
        <img
          src={data.image || "/mnt/data/05351aa1-ef83-41ac-91a6-780b10cc2b3c.png"}
          alt={data.title}
          className="object-cover w-full h-full"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="bg-white/90 text-xs rounded-full px-2 py-1 font-semibold">{data.tag}</span>
          {data.badge && (
            <span className="bg-emerald-50 text-emerald-700 text-xs rounded-full px-2 py-1 font-semibold">
              {data.badge}
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-sm md:text-base text-slate-900 mb-2 leading-tight">{data.title}</h3>

        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
          <div className="flex items-center gap-2">
            <img src={data.authorAvatar} alt="author" className="w-6 h-6 rounded-full" />
            <span>{data.author}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="text-xs text-slate-500 flex flex-col">
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 7V12L15 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{data.mode}</span>
            </span>
            <span className="flex items-center gap-2 mt-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M21 10V21H3V6A2 2 0 0 1 5 4h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 10h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{data.date}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-sm font-semibold text-slate-900">${data.price}</div>
            <div className="text-slate-300 text-sm line-through">{data.oldPrice ? `$${data.oldPrice}` : ""}</div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-slate-400">
          <div className="flex items-center gap-3">
            <button className="p-1 rounded hover:bg-slate-100">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 12H9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 15V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className="p-1 rounded hover:bg-slate-100">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 12v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 10l5-5 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

          <div className="text-slate-300 text-xs flex items-center gap-3">
            <button className="p-1 hover:bg-slate-50 rounded">⋯</button>
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
      image: "/mnt/data/05351aa1-ef83-41ac-91a6-780b10cc2b3c.png",
      tag: "Web Development",
      badge: "Active",
      title: "Complete React Development",
      author: "John Smith",
      authorAvatar: "https://i.pravatar.cc/40?img=12",
      mode: "Online",
      date: "Jan 15, 2024",
      price: 299,
      oldPrice: 399,
    },
    {
      id: 2,
      image: "/mnt/data/05351aa1-ef83-41ac-91a6-780b10cc2b3c.png",
      tag: "Data Science",
      badge: "Upcoming",
      title: "Python for Data Analytics",
      author: "Sarah Johnson",
      authorAvatar: "https://i.pravatar.cc/40?img=13",
      mode: "Classroom",
      date: "Feb 1, 2024",
      price: 599,
    },
    {
      id: 3,
      image: "/mnt/data/05351aa1-ef83-41ac-91a6-780b10cc2b3c.png",
      tag: "UI/UX",
      badge: "Draft",
      title: "Advanced UI/UX Design",
      author: "Emma Wilson",
      authorAvatar: "https://i.pravatar.cc/40?img=14",
      mode: "Hybrid",
      date: "TBD",
      price: 450,
    },
    {
      id: 4,
      image: "/mnt/data/05351aa1-ef83-41ac-91a6-780b10cc2b3c.png",
      tag: "Marketing",
      badge: "Published",
      title: "Digital Marketing Mastery",
      author: "Mike Davis",
      authorAvatar: "https://i.pravatar.cc/40?img=15",
      mode: "Online",
      date: "Dec 1, 2023",
      price: 199,
    },
    {
      id: 5,
      image: "/mnt/data/05351aa1-ef83-41ac-91a6-780b10cc2b3c.png",
      tag: "Data Science",
      badge: "Draft",
      title: "Machine Learning Fundamentals",
      author: "Alex Chen",
      authorAvatar: "https://i.pravatar.cc/40?img=16",
      mode: "Online",
      date: "Jan 8, 2024",
      price: 799,
      oldPrice: 999,
    },
    {
      id: 6,
      image: "/mnt/data/05351aa1-ef83-41ac-91a6-780b10cc2b3c.png",
      tag: "Web Development",
      badge: "Published",
      title: "Mobile App Development",
      author: "David Lee",
      authorAvatar: "https://i.pravatar.cc/40?img=17",
      mode: "Hybrid",
      date: "Mar 1, 2024",
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
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3 w-full">
                    <div className="flex items-center gap-3 w-full bg-white border border-slate-100 rounded-lg px-3 py-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-400">
                        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <input className="w-full outline-none text-sm text-slate-600" placeholder="Search courses..." />
                      <select className="border border-slate-100 rounded px-3 py-2 text-sm hidden sm:inline">
                        <option>Newest</option>
                        <option>Oldest</option>
                        <option>Price low to high</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 ml-4">
                    <div className="text-sm text-slate-500 hidden md:inline">124 courses</div>
                    <button className="bg-white border border-slate-100 p-2 rounded-lg hidden sm:inline">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 3h18M3 12h18M3 21h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                    <button className="bg-white border border-slate-100 p-2 rounded-lg hidden sm:inline">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 5h4v4H3zM10 5h4v4h-4zM17 5h4v4h-4zM3 12h4v4H3zM10 12h4v4h-4zM17 12h4v4h-4zM3 19h4v0H3z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                  </div>
                </div>

                {/* Grid – 4 columns on large screens to match reference */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
