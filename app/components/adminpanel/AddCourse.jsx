"use client";

import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import Link from "next/link";

/* ---------------------------------------------------------------------
   TAG PILL COMPONENT
------------------------------------------------------------------------ */
const TagPill = ({ text, onRemove }) => (
  <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full flex items-center gap-2">
    {text}
    <button
      className="text-blue-400 hover:text-blue-600"
      onClick={onRemove}
    >
      ✕
    </button>
  </span>
);

/* ---------------------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------------------------ */
export default function AddCourse() {
  const [skills, setSkills] = useState(["Python", "AI Basics", "REST APIs"]);
  const [careerRoles, setCareerRoles] = useState([
    "AI Engineer",
    "Machine Learning Developer",
    "Data Scientist",
  ]);

  const [skillInput, setSkillInput] = useState("");
  const [careerInput, setCareerInput] = useState("");

  /* ---------------------- SKILLS ADD HANDLER ---------------------- */
  const handleAddSkill = () => {
    if (!skillInput.trim()) return;
    setSkills([...skills, skillInput.trim()]);
    setSkillInput("");
  };

  /* ---------------------- CAREER ADD HANDLER ---------------------- */
  const handleAddCareer = () => {
    if (!careerInput.trim()) return;
    setCareerRoles([...careerRoles, careerInput.trim()]);
    setCareerInput("");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Shared admin sidebar on the left */}
      <AdminSidebar />

      {/* TOP WRAPPER TO CENTER CONTENT */}
      <div className="flex-1 max-w-[1800px] mx-auto px-4 md:px-8 py-8">
        {/* ------------------------------------------------------------------
            MAIN CONTENT WRAPPER
        ------------------------------------------------------------------- */}
        <main className="flex-1">

          {/* PAGE HEADING */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-slate-900">Add Course</h1>
            <p className="text-sm text-slate-500 mt-1">
              Create a new online / offline learning course.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

            {/* ------------------------------------------------------------------
                LEFT — MAIN FORM (2 COLUMNS WIDE)
            ------------------------------------------------------------------- */}
            <div className="xl:col-span-2 bg-white rounded-xl p-8 border border-slate-100">

              {/* CATEGORY / SKILL LEVEL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-sm font-medium text-slate-700">Category</label>
                  <select className="w-full mt-2 px-3 py-2 border border-slate-200 rounded-lg text-sm">
                    <option>Select category</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">Skill level</label>
                  <select className="w-full mt-2 px-3 py-2 border border-slate-200 rounded-lg text-sm">
                    <option>Select Skill Level</option>
                  </select>
                </div>
              </div>

              {/* COURSE TITLE */}
              <div className="mb-6">
                <label className="text-sm font-medium text-slate-700">Course Title</label>
                <input
                  className="mt-2 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                  placeholder="Enter course title"
                />
              </div>

              {/* SUB HEADLINE */}
              <div className="mb-6">
                <label className="text-sm font-medium text-slate-700">Sub Headline</label>
                <input
                  className="mt-2 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                  placeholder="Enter course title"
                />
              </div>

              {/* DESCRIPTION */}
              <div className="mb-6">
                <label className="text-sm font-medium text-slate-700">Course Description</label>

                <div className="mt-2 border rounded-lg border-slate-200">
                  {/* Rich Text Toolbar */}
                  <div className="px-3 py-2 border-b border-slate-200 flex items-center gap-4 text-slate-500 text-sm">
                    <button>B</button>
                    <button>I</button>
                    <button>U</button>
                    <button>●</button>
                  </div>

                  {/* Text area */}
                  <textarea
                    rows={5}
                    className="w-full px-3 py-3 text-sm outline-none"
                    placeholder="Detailed course information, objectives, outcomes…"
                  ></textarea>
                </div>
              </div>

              {/* SKILLS INPUT */}
              <div className="mb-6">
                <label className="text-sm font-medium text-slate-700">
                  Skills You Will Gain
                </label>

                <div className="flex items-center gap-2 mt-2">
                  <input
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                    placeholder="Type a skill and press Enter"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAddSkill()}
                  />
                  <button
                    onClick={handleAddSkill}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    + Add
                  </button>
                </div>

                {/* Skill Pills */}
                <div className="flex gap-2 flex-wrap mt-3">
                  {skills.map((s, idx) => (
                    <TagPill
                      key={idx}
                      text={s}
                      onRemove={() => {
                        setSkills(skills.filter((x) => x !== s));
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* CAREER OPPORTUNITIES */}
              <div className="mb-6">
                <label className="text-sm font-medium text-slate-700">
                  Career Opportunities
                </label>

                <div className="flex items-center gap-2 mt-2">
                  <input
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                    placeholder="Add new role"
                    value={careerInput}
                    onChange={(e) => setCareerInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAddCareer()}
                  />
                  <button
                    onClick={handleAddCareer}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    + Add
                  </button>
                </div>

                {/* Career Tags */}
                <div className="mt-3 space-y-2">
                  {careerRoles.map((role, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-slate-700"
                    >
                      <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                      <span>{role}</span>
                      <button
                        onClick={() =>
                          setCareerRoles(careerRoles.filter((r) => r !== role))
                        }
                        className="text-blue-400 hover:text-blue-600 text-xs"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* TRAINER NAME */}
              <div className="mb-6">
                <label className="text-sm font-medium text-slate-700">Trainer Name (optional)</label>
                <input
                  className="mt-2 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm"
                  placeholder="Enter Trainer Name"
                />
              </div>

              {/* UPLOAD SECTIONS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                {/* Cover Image */}
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Cover Image (1280 × 720)
                  </label>

                  <div className="mt-2 h-40 border border-dashed border-slate-300 rounded-xl flex items-center justify-center text-center text-slate-400 text-sm">
                    Click to upload or drag and drop
                    <br />
                    PNG, JPG, JPEG up to 5MB
                  </div>
                </div>

                {/* Curriculum */}
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Add course Curriculum
                  </label>

                  <div className="mt-2 h-40 border border-dashed border-slate-300 rounded-xl flex items-center justify-center text-center text-slate-400 text-sm">
                    PDF, ZIP files
                  </div>
                </div>
              </div>

              {/* BOTTOM BUTTONS */}
              <div className="flex items-center justify-end gap-4 mt-10 pt-6 border-t border-slate-200">
                <button className="px-5 py-2 rounded-lg border border-slate-200 text-slate-600 text-sm">
                  Cancel
                </button>

                <button className="px-5 py-2 rounded-lg border border-slate-200 text-slate-600 text-sm">
                  Save Draft
                </button>

                <Link href="/adminpanel/courseadding">
                <button className=" cursor-pointer px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium">
                  Save & Next
                </button>
                </Link>
              </div>

            </div>

            {/* ------------------------------------------------------------------
                RIGHT — META PANEL (matches reference layout)
            ------------------------------------------------------------------- */}
            <div className="bg-white border border-slate-100 rounded-xl p-6 xl:p-7 shadow-sm h-fit">

              <h3 className="text-lg font-semibold text-slate-900 mb-6">
                Course Meta
              </h3>

              {/* DURATION */}
              <div className="mb-5">
                <label className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Duration
                </label>
                <input
                  className="mt-2 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm placeholder:text-slate-400"
                  placeholder="e.g. 6 Months / Fast-track"
                />
              </div>

              {/* LESSONS COUNT */}
              <div className="mb-5">
                <label className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Lessons Count
                </label>
                <input
                  type="number"
                  className="mt-2 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm placeholder:text-slate-400"
                  placeholder="0"
                />
              </div>

              {/* STUDENTS LIMIT */}
              <div className="mb-5">
                <label className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Students Limit
                </label>
                <input
                  className="mt-2 w-full border border-slate-200 rounded-lg px-3 py-2 text-sm placeholder:text-slate-400"
                  placeholder="Unlimited"
                />
              </div>

              {/* LANGUAGE */}
              <div className="mb-6">
                <label className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Language
                </label>
                <select className="w-full mt-2 px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-700">
                  <option>Select Language</option>
                </select>
              </div>

              {/* CERTIFICATION */}
              <div className="mb-1">
                <label className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Certification
                </label>

                <div className="flex items-center gap-4 mt-3">
                  {/* YES */}
                  <label
                    className="flex items-center gap-2 px-4 py-2 border border-blue-600 rounded-lg cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="certification"
                      defaultChecked
                    />
                    <span className="text-sm text-blue-600 font-medium">
                      Yes
                    </span>
                  </label>

                  {/* NO */}
                  <label
                    className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="certification"
                    />
                    <span className="text-sm text-slate-600">No</span>
                  </label>
                </div>
              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
