"use client";
import React from "react";
import { Check, Video, Download, Infinity, Hammer, Award, Clock, Users, MapPin, Laptop } from "lucide-react";

export default function TrainingOptions() {
  return (
    <section className="w-full py-12 px-4 md:px-10 lg:px-20 bg-white">
      {/* Heading Section */}
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Training Options</h2>
      <p className="text-gray-600 text-sm md:text-base mb-10">
        Choose the learning mode that best fits your schedule and learning style
      </p>

      {/* GRID FOR 4 CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">

        {/* ---------------------------------------------------------------- */}
        {/* 1. Recorded Videos */}
        {/* ---------------------------------------------------------------- */}
        <div className="border rounded-2xl bg-white shadow-sm p-0 overflow-hidden relative">

          {/* Badge */}
          <div className="bg-[#EEDDFE] text-[#8A33E1] text-xs font-semibold text-center py-2">
            Self-Paced
          </div>

          <div className="p-6">

            {/* Title */}
            <h3 className="text-lg font-semibold">Recorded Videos</h3>
            <p className="text-gray-500 text-sm mb-5">
              Learn at your own pace with premium recorded content
            </p>

            {/* Feature List */}
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2 text-[#8A33E1]"><Video size={16} /> 50+ HD Video Lessons</li>
              <li className="flex items-center gap-2 text-[#8A33E1]"><Download size={16} /> Download for Offline Access</li>
              <li className="flex items-center gap-2 text-[#8A33E1]"><Infinity size={16} /> Lifetime Access</li>
              <li className="flex items-center gap-2 text-[#8A33E1]"><Hammer size={16} /> Hands-on Projects</li>
              <li className="flex items-center gap-2 text-[#8A33E1]"><Award size={16} /> Completion Certificate</li>
            </ul>

            {/* Self-paced Benefits Box */}
            <div className="bg-[#F5E9FC] p-4 rounded-xl mt-6 text-sm text-gray-700">
              <p className="font-semibold text-[#8A33E1] mb-2">Self-Paced Benefits</p>
              <ul className="space-y-1">
                <li>• Learn anytime, anywhere</li>
                <li>• Repeat lessons as needed</li>
                <li>• No schedule constraints</li>
                <li>• Mobile app access</li>
              </ul>
            </div>

            {/* Pricing */}
            <div className="mt-6 text-sm">
              <span className="text-blue-600 font-semibold">11% Off</span>&nbsp;&nbsp;
              <span className="text-gray-400 line-through">₹899</span>
              <span className="font-bold text-lg"> ₹799</span>
            </div>

            {/* Enroll Button */}
            <button className="mt-4 w-full bg-blue-600 text-white text-sm py-2.5 rounded-full font-semibold hover:bg-blue-700 transition">
              Enroll Now
            </button>
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* 2. Online Live Classes */}
        {/* ---------------------------------------------------------------- */}
        <div className="border rounded-2xl bg-white shadow-sm p-0 overflow-hidden relative">

          {/* Badge */}
          <div className="bg-[#CFE2FF] text-[#0058E6] text-xs font-semibold text-center py-2">
            Most Popular
          </div>

          <div className="p-6">

            {/* Title */}
            <h3 className="text-lg font-semibold">Online Live Classes</h3>
            <p className="text-gray-500 text-sm mb-5">
              Interactive live sessions with expert instructors
            </p>

            {/* Ongoing Batch Box */}
            <div className="bg-[#E7F6E7] p-4 rounded-xl border border-green-300 mb-4">
              <p className="text-sm font-semibold text-gray-800">
                Started On: 15 Nov 2024
              </p>
              <p className="text-sm text-gray-700">
                Weekday Batch · 7PM - 9PM
              </p>
              <p className="text-green-700 text-xs font-medium mt-1">You can still join</p>
            </div>

            {/* Upcoming Batches */}
            <p className="font-semibold text-sm text-gray-800">Upcoming Batches</p>
            <ul className="mt-2 text-xs text-gray-700 space-y-2">
              <li>○ 1 Dec 2024 – Weekend Batch (11 AM - 1 PM)</li>
              <li>○ 1 Dec 2024 – Weekday Batch (2 PM - 4 PM)</li>
              <li>○ 1 Dec 2024 – Weekday Batch (6 PM - 8 PM)</li>
            </ul>

            {/* Features */}
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><Laptop size={16} className="text-[#0058E6]" /> Live Interactive Classes</li>
              <li className="flex items-center gap-2"><Users size={16} className="text-[#0058E6]" /> Expert Instructors</li>
              <li className="flex items-center gap-2"><Clock size={16} className="text-[#0058E6]" /> Session Recordings</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-[#0058E6]" /> Live Doubt Clearing</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-[#0058E6]" /> Soft Skills Sessions</li>
            </ul>

            {/* Pricing */}
            <div className="mt-6 text-sm">
              <span className="text-blue-600 font-semibold">11% Off</span>&nbsp;&nbsp;
              <span className="line-through text-gray-400">₹899</span>
              <span className="font-bold text-lg"> ₹799</span>
            </div>

            <button className="mt-4 w-full bg-blue-600 text-white text-sm py-2.5 rounded-full font-semibold hover:bg-blue-700 transition">
              Enroll Now
            </button>
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* 3. Offline Classroom */}
        {/* ---------------------------------------------------------------- */}
        <div className="border rounded-2xl bg-white shadow-sm p-0 overflow-hidden relative">

          {/* Badge */}
          <div className="bg-[#FFE8D6] text-[#D47100] text-xs font-semibold text-center py-2">
            Premium
          </div>

          <div className="p-6">

            <h3 className="text-lg font-semibold">Offline Classroom</h3>
            <p className="text-gray-500 text-sm mb-5">
              Traditional classroom experience with hands-on lab
            </p>

            {/* Ongoing Batch */}
            <div className="bg-[#FFF3D6] p-4 rounded-xl border border-yellow-300 mb-4">
              <p className="text-sm font-semibold">Started On: 15 Nov 2024</p>
              <p className="text-sm">Weekday Batch · 7PM - 9PM</p>
              <p className="text-yellow-700 text-xs font-medium mt-1">Limited Seats</p>
            </div>

            {/* Upcoming Batches */}
            <p className="font-semibold text-sm text-gray-800">Upcoming Batches</p>
            <ul className="mt-2 text-xs text-gray-700 space-y-2">
              <li>○ 1 Dec 2024 – Weekend Batch (11 AM - 1 PM)</li>
              <li>○ 1 Dec 2024 – Weekday Batch (2 PM - 4 PM)</li>
              <li>○ 1 Dec 2024 – Weekday Batch (6 PM - 8 PM)</li>
            </ul>

            {/* Center Info */}
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

            {/* Pricing */}
            <div className="mt-6 text-sm">
              <span className="text-blue-600 font-semibold">11% Off</span>&nbsp;&nbsp;
              <span className="line-through text-gray-400">₹899</span>
              <span className="font-bold text-lg"> ₹799</span>
            </div>

            <button className="mt-4 w-full bg-blue-600 text-white text-sm py-2.5 rounded-full font-semibold hover:bg-blue-700 transition">
              Enroll Now
            </button>
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* 4. Corporate Training */}
        {/* ---------------------------------------------------------------- */}
        <div className="border rounded-2xl bg-white shadow-sm p-0 overflow-hidden relative">

          {/* Badge */}
          <div className="bg-[#DDE8FF] text-[#0040C1] text-xs font-semibold text-center py-2">
            PREFERRED
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold">Corporate Training</h3>
            <p className="text-gray-500 text-sm mb-5">Custom Enterprise Solutions</p>

            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Tailored training modules</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Flexible schedules</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Dedicated manager</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Team progress dashboard</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Billing/custom contracts</li>
            </ul>

            {/* Contact Button */}
            <button className="mt-8 w-full border border-blue-600 text-blue-700 text-sm py-2.5 rounded-full font-semibold flex justify-center items-center gap-2 hover:bg-blue-50 transition">
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
