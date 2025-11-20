"use client";
import { useState } from "react";

export default function CourseEnrollment() {
  const [mode, setMode] = useState("online");

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-10">

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl border pb-10">

        {/* HEADER */}
        <div className="w-full bg-[#e9f1ff] py-6 rounded-t-2xl text-center">
          <h2 className="text-2xl font-bold text-[#1b4edb]">
            Course Enrollment
          </h2>
        </div>

        {/* BODY */}
        <div className="px-6 mt-6 space-y-5">

          {/* Preferred Category */}
          <div>
            <label className="text-sm font-medium text-gray-700">Preferred Category</label>
            <select className="w-full mt-1 border rounded-lg px-3 py-2 text-sm">
              <option>Select Category</option>
            </select>
          </div>

          {/* Preferred Course */}
          <div>
            <label className="text-sm font-medium text-gray-700">Preferred Course</label>
            <select className="w-full mt-1 border rounded-lg px-3 py-2 text-sm">
              <option>Select Course</option>
            </select>
          </div>

          {/* COURSE MODE */}
          <div>
            <label className="text-sm font-medium text-gray-700">Course Mode</label>
            <div className="flex gap-3 mt-2">

              {/* ONLINE */}
              <button
                onClick={() => setMode("online")}
                className={`px-3 py-1 border rounded-lg text-sm ${
                  mode === "online" ? "bg-[#1b4edb] text-white" : "bg-white"
                }`}
              >
                Online
              </button>

              {/* OFFLINE */}
              <button
                onClick={() => setMode("offline")}
                className={`px-3 py-1 border rounded-lg text-sm ${
                  mode === "offline" ? "bg-[#1b4edb] text-white" : "bg-white"
                }`}
              >
                Offline
              </button>

              {/* LIVE CLASSES */}
              <button
                onClick={() => setMode("live")}
                className={`px-3 py-1 border rounded-lg text-sm ${
                  mode === "live" ? "bg-[#1b4edb] text-white" : "bg-white"
                }`}
              >
                Live Classes
              </button>

            </div>
          </div>

          {/* CONDITIONAL SECTIONS */}
          {mode === "online" && (
            <div className="pt-3 text-sm text-gray-700">
              {/* NOTHING EXTRA — EXACTLY LIKE IMAGE 1 */}
            </div>
          )}

          {mode === "offline" && (
            <div className="pt-3 text-sm text-gray-700">
              <label className="font-medium">Batch Timings</label>
              <div className="flex gap-3 mt-2">
                <button className="px-3 py-1 border rounded-lg text-sm bg-white">Morning</button>
                <button className="px-3 py-1 border rounded-lg text-sm bg-white">Afternoon</button>
                <button className="px-3 py-1 border rounded-lg text-sm bg-white">Evening</button>
              </div>
            </div>
          )}

          {mode === "live" && (
            <div className="pt-3 text-sm text-gray-700">
              <label className="font-medium">Batch Timings</label>
              <div className="flex gap-3 mt-2">
                <button className="px-3 py-1 border rounded-lg text-sm bg-white">Morning</button>
                <button className="px-3 py-1 border rounded-lg text-sm bg-white">Afternoon</button>
                <button className="px-3 py-1 border rounded-lg text-sm bg-white">Evening</button>
              </div>
            </div>
          )}

          {/* SUBMIT BUTTON */}
          <div className="pt-4">
            <button className="w-full bg-[#1b4edb] text-white py-2 rounded-lg text-sm font-medium">
              Enroll Course
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
