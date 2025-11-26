"use client";

import React, { useState } from "react";
import { ChevronDown, MoreHorizontal, LogOut } from "lucide-react";

export default function AdminSidebar() {
  const [coursesOpen, setCoursesOpen] = useState(true);

  return (
    <aside className="hidden lg:flex flex-col w-60 bg-white border-r border-gray-200">
      {/* Profile */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-100">
        <div className="w-10 h-10 rounded-full bg-gray-200" />
        <div>
          <p className="text-xs text-gray-400">Admin</p>
          <p className="text-sm font-semibold">xyz@admin.com</p>
        </div>
      </div>

      {/* Nav groups */}
      <div className="flex-1 px-3 py-4 space-y-6 overflow-y-auto">
        {/* Dashboard */}
        <div>
          <p className="px-3 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
            Dashboard
          </p>
          <button className="mt-2 flex w-full items-center gap-3 rounded-lg bg-[#eef2ff] px-3 py-2 text-sm font-medium text-indigo-600">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
            </span>
            Overview
          </button>
        </div>

        {/* Analytics */}
        <div>
          <p className="px-3 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
            Analytics
          </p>
          <nav className="mt-2 space-y-1">
            {/* Students */}
            <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
              <span>Students</span>
            </button>

            {/* Courses with nested items */}
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => setCoursesOpen((o) => !o)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-700 bg-gray-50"
              >
                <span>Courses</span>
                <ChevronDown
                  size={14}
                  className={`text-gray-400 transition-transform ${
                    coursesOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {coursesOpen && (
                <div className="pl-6 space-y-1 text-xs mt-1">
                  <button className="block w-full text-left text-indigo-600 font-medium">
                    Courses List
                  </button>
                  <button className="block w-full text-left text-gray-500 hover:text-gray-800">
                    Add Courses
                  </button>
                </div>
              )}
            </div>

            {/* Payments */}
            <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
              <span>Payments</span>
            </button>

            {/* Registrations */}
            <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50">
              <span>Registrations</span>
            </button>
          </nav>
        </div>

        {/* Support */}
        <div>
          <p className="px-3 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
            Support
          </p>
          <nav className="mt-2 space-y-1">
            {["Support Tickets", "Reports"].map((item) => (
              <button
                key={item}
                className="flex w-full items-center rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom actions */}
      <div className="border-t border-gray-100 px-3 py-4 space-y-2">
        <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs text-gray-500 hover:bg-gray-50">
          <span>Settings</span>
          <MoreHorizontal size={14} />
        </button>
        <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs text-red-500 hover:bg-red-50">
          <span>Logout</span>
          <LogOut size={14} />
        </button>
      </div>
    </aside>
  );
}


