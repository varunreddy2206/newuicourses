"use client";
import React from "react";
import { CheckCircle, Clock, Users, BookOpen, Award, Globe } from "lucide-react";

export default function DataScience() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">

        {/* ---------------- LEFT CONTENT ---------------- */}
        <div className="lg:col-span-2">

          {/* Tabs */}
          <div className="flex flex-wrap gap-4 sm:gap-8 text-gray-600 border-b pb-3 sm:pb-4 mb-5 sm:mb-6">
            <button className="font-semibold text-gray-900">Overview</button>
            <button>Curriculum</button>
            <button>Instructor</button>
            <button>Reviews</button>
          </div>

          {/* Course Description */}
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Course Descriptions</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-8 sm:mb-10">
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.
          </p>

          {/* Skills */}
          <h2 className="text-lg sm:text-xl font-bold mb-3">Skills You will gain:</h2>
          <p classname="text-gray-700 text-sm sm:text-base mb-8 sm:mb-10">
            Core Java, OOPs, JDBC, Spring Boot, REST APIs, MySQL, HTML/CSS/JS, React Basics, 
            Project Architecture, Deployment, Debugging, Git & Version Control
          </p>

          {/* Requirements */}
          <h2 className="text-lg sm:text-xl font-bold mb-3">Requirements for The Course</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-5 sm:mb-6">
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.
          </p>

          {/* Requirement List */}
          <ul className="space-y-3 sm:space-y-4">
            {[
              "Ut Viverra Bibendum Lorem. At Tempus Nibh Mattis",
              "Quis Nostrud Exercitation Ullamco Laboris Nisi",
              "Duis Aute Irure And Dolor In Reprehenderit",
              "Ante Rutrum Sed The Is Sodales Augue Consequat",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                <CheckCircle className="text-blue-600 min-w-5" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- RIGHT SIDEBAR CARD ---------------- */}
        <div>
          <div className="border rounded-3xl p-5 sm:p-6 shadow-sm space-y-6">

            <h3 className="text-lg sm:text-xl font-semibold">Course includes:</h3>

            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-gray-700">
              <InfoRow icon={Award} label="Level:" value="Expert" />
              <InfoRow icon={Clock} label="Duration:" value="8h 30m" />
              <InfoRow icon={BookOpen} label="Lessons:" value="15" />
              <InfoRow icon={Users} label="Students:" value="120" />
              <InfoRow icon={Award} label="Certifications:" value="Yes" />
              <InfoRow icon={Globe} label="Language:" value="English" />
            </div>

            {/* Pricing Button */}
            <button className="w-full py-3 bg-blue-50 border border-blue-600 rounded-full 
            text-blue-700 font-medium hover:bg-blue-100 transition text-sm sm:text-base">
              Course Fee: 45,000 / 3 Months
            </button>

            {/* Join Button */}
            <button className="w-full py-3 bg-blue-600 text-white rounded-full 
            font-medium hover:bg-blue-700 flex justify-center items-center gap-2 
            transition text-sm sm:text-base">
              Join This Course →
            </button>

            {/* Share */}
            <div className="flex flex-col">
              <p className="text-gray-500 text-xs sm:text-sm mb-3">Share This Course</p>

              <div className="flex gap-3 sm:gap-4 text-gray-600">
                <div className="w-9 sm:w-10 h-9 sm:h-10 border rounded-full flex justify-center items-center hover:bg-gray-100 cursor-pointer">📘</div>
                <div className="w-9 sm:w-10 h-9 sm:h-10 border rounded-full flex justify-center items-center hover:bg-gray-100 cursor-pointer">📸</div>
                <div className="w-9 sm:w-10 h-9 sm:h-10 border rounded-full flex justify-center items-center hover:bg-gray-100 cursor-pointer">🔗</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------------- Reusable Sidebar Row ---------------- */
function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2 text-gray-600">
        <Icon size={18} className="text-blue-600" />
        <span>{label}</span>
      </div>
      <span className="font-medium">{value}</span>
    </div>
  );
}
