"use client";
import React from "react";
import { Check, Video, Download, Infinity, Hammer, Award, Clock, Users, MapPin, Laptop } from "lucide-react";

export default function TrainingOptions() {
  return (
    <section className="w-full bg-white py-8 px-4 sm:py-10 sm:px-6 lg:py-12 lg:px-8 print:bg-white print:px-0 print:py-4">
      <div className="max-w-[1366px] mx-auto">

        {/* Right-aligned heading */}
        <div className="flex w-full justify-start mb-6">
          <div className="max-w-[520px] md:max-w-[640px] text-left">
            <h2 className="text-2xl md:text-3xl font-bold">Training Options</h2>
            <p className="text-gray-600 text-sm md:text-base mt-2">
              Choose the learning mode that best fits your schedule and learning style
            </p>
          </div>
        </div>

        {/* UPDATED GRID ROW — ONLY CHANGE MADE HERE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-7 auto-rows-fr items-stretch">

          {/* ---------------------------------------------------------------- */}
          {/* 1. Recorded Videos */}
          {/* ---------------------------------------------------------------- */}
          <div className="border rounded-2xl bg-white shadow-sm overflow-hidden relative flex flex-col h-full min-h-[560px] lg:min-h-[700px] print:shadow-none print:border-gray-200 print:rounded-none print:break-inside-avoid">

            <div className="bg-[#EEDDFE] text-[#8A33E1] text-xs font-semibold text-center py-2">
              Self-Paced
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold">Recorded Videos</h3>
              <p className="text-gray-500 text-sm mb-5">Learn at your own pace with premium recorded content</p>

              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2 text-[#8A33E1]"><Video size={16} /> 50+ HD Video Lessons</li>
                <li className="flex items-center gap-2 text-[#8A33E1]"><Download size={16} /> Download for Offline Access</li>
                <li className="flex items-center gap-2 text-[#8A33E1]"><Infinity size={16} /> Lifetime Access</li>
                <li className="flex items-center gap-2 text-[#8A33E1]"><Hammer size={16} /> Hands-on Projects</li>
                <li className="flex items-center gap-2 text-[#8A33E1]"><Award size={16} /> Completion Certificate</li>
              </ul>

              <div className="bg-[#F5E9FC] p-4 rounded-xl mt-6 text-sm text-gray-700">
                <p className="font-semibold text-[#8A33E1] mb-2">Self-Paced Benefits</p>
                <ul className="space-y-1">
                  <li>• Learn anytime, anywhere</li>
                  <li>• Repeat lessons as needed</li>
                  <li>• No schedule constraints</li>
                  <li>• Mobile app access</li>
                </ul>
              </div>

              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                <div className="text-sm">
                  <span className="text-blue-600 font-semibold">11% Off</span>
                  <span className="text-gray-400 line-through ml-2">₹899</span>
                  <span className="font-bold text-lg ml-2">₹799</span>
                </div>

                <div className="shrink-0 w-32 sm:w-auto">
                  <button className="w-full bg-blue-600 text-white text-sm py-2.5 px-3 rounded-full font-semibold hover:bg-blue-700 transition">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* 2. Online Live Classes */}
          {/* ---------------------------------------------------------------- */}
          <div className="border rounded-2xl bg-white shadow-sm overflow-hidden relative flex flex-col h-full min-h-[560px] lg:min-h-[700px] print:shadow-none print:border-gray-200 print:rounded-none print:break-inside-avoid">

            <div className="bg-[#CFE2FF] text-[#0058E6] text-xs font-semibold text-center py-2">
              Most Popular
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold">Online Live Classes</h3>
              <p className="text-gray-500 text-sm mb-5">Interactive live sessions with expert instructors</p>

              <div className="bg-[#E7F6E7] p-4 rounded-xl border border-green-300 mb-4">
                <p className="text-sm font-semibold text-gray-800">Started On: 15 Nov 2024</p>
                <p className="text-sm text-gray-700">Weekday Batch · 7PM - 9PM</p>
                <p className="text-green-700 text-xs font-medium mt-1">You can still join</p>
              </div>

              <p className="font-semibold text-sm text-gray-800">Upcoming Batches</p>
              <ul className="mt-2 text-xs text-gray-700 space-y-2">
                <li>○ 1 Dec 2024 – Weekend Batch (11 AM - 1 PM)</li>
                <li>○ 1 Dec 2024 – Weekday Batch (2 PM - 4 PM)</li>
                <li>○ 1 Dec 2024 – Weekday Batch (6 PM - 8 PM)</li>
              </ul>

              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><Laptop size={16} className="text-[#0058E6]" /> Live Interactive Classes</li>
                <li className="flex items-center gap-2"><Users size={16} className="text-[#0058E6]" /> Expert Instructors</li>
                <li className="flex items-center gap-2"><Clock size={16} className="text-[#0058E6]" /> Session Recordings</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-[#0058E6]" /> Live Doubt Clearing</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-[#0058E6]" /> Soft Skills Sessions</li>
              </ul>

              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                <div className="text-sm">
                  <span className="text-blue-600 font-semibold">11% Off</span>
                  <span className="text-gray-400 line-through ml-2">₹899</span>
                  <span className="font-bold text-lg ml-2">₹799</span>
                </div>

                <div className="shrink-0 w-32 sm:w-auto">
                  <button className="w-full bg-blue-600 text-white text-sm py-2.5 px-3 rounded-full font-semibold hover:bg-blue-700 transition">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* 3. Offline Classroom */}
          {/* ---------------------------------------------------------------- */}
          <div className="border rounded-2xl bg-white shadow-sm overflow-hidden relative flex flex-col h-full min-h-[560px] lg:min-h-[700px] print:shadow-none print:border-gray-200 print:rounded-none print:break-inside-avoid">

            <div className="bg-[#FFE8D6] text-[#D47100] text-xs font-semibold text-center py-2">
              Premium
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold">Offline Classroom</h3>
              <p className="text-gray-500 text-sm mb-5">
                Traditional classroom experience with hands-on lab
              </p>

              <div className="bg-[#FFF3D6] p-4 rounded-xl border border-yellow-300 mb-4">
                <p className="text-sm font-semibold">Started On: 15 Nov 2024</p>
                <p className="text-sm">Weekday Batch · 7PM - 9PM</p>
                <p className="text-yellow-700 text-xs font-medium mt-1">Limited Seats</p>
              </div>

              <p className="font-semibold text-sm text-gray-800">Upcoming Batches</p>
              <ul className="mt-2 text-xs text-gray-700 space-y-2">
                <li>○ 1 Dec 2024 – Weekend Batch (11 AM - 1 PM)</li>
                <li>○ 1 Dec 2024 – Weekday Batch (2 PM - 4 PM)</li>
                <li>○ 1 Dec 2024 – Weekday Batch (6 PM - 8 PM)</li>
              </ul>

              <div className="mt-5 text-sm text-gray-700">
                <p className="font-semibold">Training Center</p>
                <p>Hitech City</p>
                <p>Hyderabad, Telangana</p>

                <p className="text-orange-600 text-xs mt-1 flex items-center gap-1 cursor-pointer hover:underline">
                  <MapPin size={14} /> View Map
                </p>

                <ul className="mt-4 space-y-2 text-xs">
                  <li>🏫 Modern Lab Access</li>
                  <li>📘 Physical Study Materials</li>
                  <li>👨‍🏫 Personal Mentor</li>
                  <li>🏢 Campus Support</li>
                </ul>
              </div>

              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                <div className="text-sm">
                  <span className="text-blue-600 font-semibold">11% Off</span>
                  <span className="text-gray-400 line-through ml-2">₹899</span>
                  <span className="font-bold text-lg ml-2">₹799</span>
                </div>

                <div className="shrink-0 w-32 sm:w-auto">
                  <button className="w-full bg-blue-600 text-white text-sm py-2.5 px-3 rounded-full font-semibold hover:bg-blue-700 transition">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* 4. Corporate Training */}
          {/* ---------------------------------------------------------------- */}
          <div className="border rounded-2xl bg-white shadow-sm overflow-hidden relative flex flex-col h-full min-h-[560px] lg:min-h-[700px] print:shadow-none print:border-gray-200 print:rounded-none print:break-inside-avoid">

            <div className="bg-[#DDE8FF] text-[#0040C1] text-xs font-semibold text-center py-2">
              PREFERRED
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold">Corporate Training</h3>
              <p className="text-gray-500 text-sm mb-5">Custom Enterprise Solutions</p>

              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Tailored training modules</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Flexible schedules</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Dedicated manager</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Team progress dashboard</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Billing/custom contracts</li>
              </ul>

              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                <div className="text-sm">
                  <span className="text-blue-600 font-semibold">11% Off</span>
                  <span className="text-gray-400 line-through ml-2">₹899</span>
                  <span className="font-bold text-lg ml-2">₹799</span>
                </div>

                <div className="shrink-0 w-32 sm:w-auto">
                  <button className="w-full border border-blue-600 text-blue-700 text-sm py-2.5 px-3 rounded-full font-semibold flex justify-center items-center gap-2 hover:bg-blue-50 transition">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
