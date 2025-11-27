"use client";

import { useMemo } from "react";
import {
  ArrowLeft,
  BookOpen,
  Award,
  TrendingUp,
  Lock,
  CheckCircle2,
  Play,
} from "lucide-react";

const MODULES = [
  {
    id: 1,
    title: "Understanding AI & ML fundamentals",
    duration: "5 mins",
    completed: true,
  },
  {
    id: 2,
    title: "Core Python libraries for AI, data handling & visualization",
    duration: "8 mins",
    completed: false,
  },
  {
    id: 3,
    title: "Regression, classification, clustering and model evaluation",
    duration: "6 mins",
    completed: false,
  },
  {
    id: 4,
    title: "Neural Networks, CNNs, RNNs and TensorFlow frameworks",
    duration: "6 mins",
    completed: false,
  },
  {
    id: 5,
    title: "Text data processing, sentiment analysis, chatbots",
    duration: "5 mins",
    completed: false,
  },
  {
    id: 6,
    title: "Image recognition, object detection, OpenCV basics",
    duration: "5 mins",
    completed: false,
  },
];

export default function ContinueLearning() {
  const progress = useMemo(() => {
    const completedCount = MODULES.filter((m) => m.completed).length;
    return Math.round((completedCount / MODULES.length) * 100);
  }, []);

  const certificateUnlocked = progress >= 85;

  return (
    <div className="w-full min-h-screen bg-[#f5f5f7] flex flex-col">
      {/* TOP BAR / BREADCRUMB (full-width at top, like reference) */}
      <header className="w-full bg-white border-b shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-2 flex items-center gap-3">
          <button
            type="button"
            className="p-1 text-gray-600 hover:text-black"
            aria-label="Back"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex flex-col">
            <span className="text-[11px] text-gray-400">
              Software Development
            </span>
            <h1 className="text-base md:text-lg font-semibold text-gray-900 leading-snug">
              Artificial Intelligence &amp; Machine Learning with Python
            </h1>
          </div>
        </div>
      </header>

      {/* CONTENT: SIDE NAV + MAIN AREA under the header */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* MOBILE TOP NAV (visible only on small screens) */}
        <nav className="md:hidden w-full bg-[#f5f5f7] border-b border-gray-200 px-4 py-3 flex items-center justify-center gap-3">
          {/* Course Learning (active) */}
          <button
            type="button"
            className="flex flex-col items-center justify-center px-3 py-2 rounded-2xl bg-blue-50 text-blue-600 shadow-sm border border-blue-100 text-xs"
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-blue-600 mb-1">
              <BookOpen size={16} />
            </div>
            <span className="text-[10px] leading-tight text-center">
              Course
              <br />
              Learning
            </span>
          </button>

          {/* Upgrade */}
          <button
            type="button"
            className="flex flex-col items-center justify-center px-3 py-2 rounded-2xl bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 text-xs"
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-700 mb-1">
              <TrendingUp size={16} />
            </div>
            <span className="text-[10px] leading-tight text-center">
              Upgrade
            </span>
          </button>

          {/* Certificate – locked / unlocked depending on progress */}
          <button
            type="button"
            className={`flex flex-col items-center justify-center px-3 py-2 rounded-2xl border text-xs ${
              certificateUnlocked
                ? "bg-green-50 text-green-700 border-green-200"
                : "bg-white text-gray-400 border-gray-200"
            }`}
            title={
              certificateUnlocked
                ? "Certificate unlocked"
                : "Complete at least 85% of the course to unlock certificate"
            }
          >
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full mb-1 ${
                certificateUnlocked
                  ? "bg-white text-green-600"
                  : "bg-gray-50 text-gray-400"
              }`}
            >
              {certificateUnlocked ? <Award size={16} /> : <Lock size={14} />}
            </div>
            <span className="text-[10px] leading-tight text-center">
              Certificate
            </span>
          </button>
        </nav>

        {/* LEFT FIXED SIDE NAV (icon + label stacked, narrow like reference) */}
        <aside className="hidden md:flex flex-col items-center pt-6 pb-6 w-24 bg-[#f5f5f7] border-r border-gray-200 shadow-sm">
          <nav className="space-y-3 w-full flex flex-col items-center">
            {/* Course Learning (active) */}
            <button
              type="button"
              className="w-16 h-20 flex flex-col items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm border border-blue-100"
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-blue-600 mb-1">
                <BookOpen size={18} />
              </div>
              <span className="text-[11px] leading-tight text-center">
                Course
                <br />
                Learning
              </span>
            </button>

            {/* Upgrade */}
            <button
              type="button"
              className="w-16 h-20 flex flex-col items-center justify-center rounded-2xl bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-700 mb-1">
                <TrendingUp size={18} />
              </div>
              <span className="text-[11px] leading-tight text-center">
                Upgrade
              </span>
            </button>

            {/* Certificate – locked / unlocked depending on progress */}
            <button
              type="button"
              className={`w-16 h-20 flex flex-col items-center justify-center rounded-2xl border ${
                certificateUnlocked
                  ? "bg-green-50 text-green-700 border-green-200"
                  : "bg-white text-gray-400 border-gray-200"
              }`}
              title={
                certificateUnlocked
                  ? "Certificate unlocked"
                  : "Complete at least 85% of the course to unlock certificate"
              }
            >
              <div
                className={`w-9 h-9 flex items-center justify-center rounded-full mb-1 ${
                  certificateUnlocked
                    ? "bg-white text-green-600"
                    : "bg-gray-50 text-gray-400"
                }`}
              >
                {certificateUnlocked ? <Award size={18} /> : <Lock size={16} />}
              </div>
              <span className="text-[11px] leading-tight text-center">
                Certificate
              </span>
            </button>
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 flex flex-col">
          {/* BODY */}
          <div className="flex-1 max-w-[1400px] mx-auto w-full px-4 md:px-8 py-6 flex flex-col lg:flex-row gap-6">
            {/* LEFT COLUMN – PROGRESS + MODULE LIST */}
            <section className="w-full lg:w-[360px] flex-shrink-0">
              {/* Learning tracking card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Learning Tracking
                  </h2>
                </div>
                <div className="px-6 py-4">
                  {/* Blue progress pill – styled to match reference UI */}
                  <div className="w-full rounded-2xl overflow-hidden border border-gray-200 bg-[#f4f7ff]">
                    <div className="flex">
                      {/* Left blue part */}
                      <div className="flex items-center gap-3 bg-[#0052CC] text-white px-6 py-3 rounded-2xl w-3/4">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10">
                          <Play size={18} className="text-white" />
                        </div>
                        <p className="text-base font-semibold">
                          {progress}% Completed
                        </p>
                      </div>
                      {/* Right light area */}
                      <div className="flex-1 bg-[#f4f7ff]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Module list */}
              <div className="mt-4 bg-white rounded-2xl shadow-sm border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Module 1
                  </h3>
                </div>
                {/* Module rows styled like reference UI */}
                <ol>
                  {MODULES.map((m) => (
                    <li
                      key={m.id}
                      className="px-4 py-4 flex items-center gap-4 border-b border-gray-100 last:border-b-0"
                    >
                      {/* Number circle */}
                      <div className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-800 flex-shrink-0">
                        {m.id}
                      </div>

                      {/* Title + duration */}
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 leading-snug">
                          {m.title}
                        </p>
                        <div className="mt-1 flex items-center gap-1 text-[11px] text-gray-500">
                          <span className="inline-flex w-4 h-4 items-center justify-center rounded-full border border-gray-300">
                            <Play size={10} className="text-gray-500" />
                          </span>
                          <span>{m.duration}</span>
                        </div>
                      </div>

                      {/* Right check icon */}
                      <div className="flex-shrink-0">
                        {m.completed ? (
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-green-500 text-green-500">
                            <CheckCircle2 size={16} />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-gray-300">
                            <CheckCircle2 size={16} />
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* RIGHT COLUMN – VIDEO AREA */}
            <section className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-200 flex items-center justify-center">
              <div className="flex flex-col items-center justify-center text-center px-6 py-10">
                <button className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-blue-200 flex items-center justify-center text-blue-600 bg-blue-50 mb-4 shadow-sm">
                  <Play size={26} />
                </button>
                <p className="text-xs sm:text-sm text-gray-500">
                  Uploaded video will appear here
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}