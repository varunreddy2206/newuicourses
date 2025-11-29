"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  CheckCircle,
  Clock,
  Users,
  BookOpen,
  Award,
  Globe,
  Download,
  Play,
  FileText,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { imageUrl } from "@/core/url";

export default function CourseDetails({ course }) {
  const [activeTab, setActiveTab] = useState("Overview");
  const [expandedModules, setExpandedModules] = useState({});

  const totalLessons = course?.curriculum?.reduce(
    (sum, module) => sum + (module.lessons?.length || 0),
    0
  );

  const hasReviews = course?.reviews && course.reviews.length > 0;

  // Handle curriculum PDF download
  const handleDownloadCurriculum = () => {
    if (!course?.curriculumPdf) {
      alert("Curriculum PDF not available");
      return;
    }

    const pdfPath = course.curriculumPdf.replace(/\\/g, "/");
    const pdfUrl = pdfPath.startsWith("http") 
      ? pdfPath 
      : `${imageUrl}/${pdfPath.replace(/^\//, "")}`;
    
    // Open in new tab for download
    window.open(pdfUrl, "_blank");
  };

  // Toggle module expansion
  const toggleModule = (moduleIndex) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleIndex]: !prev[moduleIndex],
    }));
  };

  const tabs = [
    "Overview",
    "Curriculum",
    "Instructor",
    ...(hasReviews ? ["Reviews"] : []),
  ];

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12">
      {/* GRID: LEFT CONTENT + RIGHT SIDEBAR */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
        <div className="lg:col-span-2">
          <div className="flex flex-wrap gap-6 text-gray-600 border-b border-gray-200 pb-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`transition-colors ${
                  activeTab === tab
                    ? "font-semibold text-gray-900 border-b-2 border-blue-600 pb-2"
                    : "hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "Overview" && (
            <div>
              {/* Download Curriculum Button */}
              

              <h2 className="text-xl sm:text-2xl font-bold mb-3">
                Course Descriptions
              </h2>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
                {course?.description}
              </p>

              <h2 className="text-lg sm:text-xl font-bold mb-3">
                Skills You will gain:
              </h2>

              <p className="text-gray-700 text-sm sm:text-base leading-6 mb-10">
                {course?.skills?.map((each, index) => (
                  <span key={index}>{each}, </span>
                ))}
              </p>

              {/* Career Opportunities */}
              <h2 className="text-xl font-semibold mb-2">Career Opportunities</h2>

              <p className="text-sm text-gray-600 leading-6 mb-6">
                After completing this course, you can apply for roles such as:
                <br />
                Top recruiters include MNC Companies, IT firms, startups, fintech
                companies, and research institutions.
              </p>

              <ul className="space-y-3">
                {course?.careerOpportunities?.map((role, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-sm text-gray-800"
                  >
                    <CheckCircle className="text-blue-600 w-5 h-5" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "Curriculum" && (
            <div>
              {course?.curriculumPdf && (
                <div className="mb-6">
                  <button
                    onClick={handleDownloadCurriculum}
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <Download size={20} />
                    Download Curriculum PDF
                  </button>
                </div>
              )}

              {course?.curriculum && course.curriculum.length > 0 ? (
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">
                    Course Curriculum
                  </h2>
                  {course.curriculum.map((module, moduleIndex) => (
                    <div
                      key={moduleIndex}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleModule(moduleIndex)}
                        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-gray-900">
                            Module {moduleIndex + 1}: {module.moduleTitle}
                          </span>
                          <span className="text-sm text-gray-600">
                            ({module.lessons?.length || 0} lessons)
                          </span>
                        </div>
                        {expandedModules[moduleIndex] ? (
                          <ChevronUp size={20} className="text-gray-600" />
                        ) : (
                          <ChevronDown size={20} className="text-gray-600" />
                        )}
                      </button>

                      {expandedModules[moduleIndex] && (
                        <div className="p-4 space-y-3 bg-white">
                          {module.lessons?.map((lesson, lessonIndex) => (
                            <div
                              key={lessonIndex}
                              className="flex items-start gap-3 p-3 border-l-4 border-blue-500 bg-gray-50 rounded"
                            >
                              <div className="mt-1">
                                {lesson.type === "video" && (
                                  <Play
                                    size={18}
                                    className="text-blue-600"
                                    fill="currentColor"
                                  />
                                )}
                                {lesson.type === "material" && (
                                  <FileText
                                    size={18}
                                    className="text-green-600"
                                  />
                                )}
                                {lesson.type === "quiz" && (
                                  <HelpCircle
                                    size={18}
                                    className="text-purple-600"
                                  />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-medium text-gray-900">
                                    {lesson.title}
                                  </h4>
                                  {lesson.duration && (
                                    <span className="text-xs text-gray-500">
                                      ({lesson.duration})
                                    </span>
                                  )}
                                </div>
                                <span className="text-xs text-gray-500 capitalize">
                                  {lesson.type}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 text-gray-600">
                  <p>Curriculum not available for this course.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === "Instructor" && (
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-6">
                About the Instructor
              </h2>
              {course?.instructorName ? (
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-semibold">
                      {course.instructorName.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {course.instructorName}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Experienced instructor with expertise in{" "}
                        {course.category || "this field"}. Dedicated to providing
                        quality education and helping students achieve their
                        learning goals.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 text-gray-600">
                  <p>Instructor information not available.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === "Reviews" && hasReviews && (
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-6">
                Student Reviews
              </h2>
              <div className="space-y-4">
                {course.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">
                        {review.userName}
                      </h4>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < review.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    {review.comment && (
                      <p className="text-gray-600 text-sm">{review.comment}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* -------------------------------- RIGHT SIDEBAR -------------------------------- */}
        <div className="space-y-6">
          {/* Course Includes Card */}
          <div className="border border-gray-200 rounded-3xl p-6 shadow-sm space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold">
              Course includes:
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-gray-700">
              <InfoRow icon={Award} label="Level:" value={course?.level} />
              <InfoRow
                icon={Clock}
                label="Duration:"
                // value="6 Months/Fast-track"
                value={course?.totalHours}
              />
              <InfoRow
                icon={BookOpen}
                label="Lessons:"
                //  value="15"
                value={totalLessons}
              />
              <InfoRow
                icon={Users}
                label="Students:"
                value={course?.studentLimit}
              />
              <InfoRow icon={Award} label="Certifications:" value={course?.certificate ? "Yes" : "No"} />
              <InfoRow icon={Globe} label="Language:" value={course?.language} />
            </div>

            {/* Share */}
            <div className="mt-4 flex flex-col">
              <p className="text-gray-500 text-xs sm:text-sm mb-3">
                Share This Course
              </p>

              <div className="flex gap-3 sm:gap-4 text-gray-600">
                <div className="w-9 h-9 border rounded-full flex justify-center items-center hover:bg-gray-100 cursor-pointer">
                  📘
                </div>
                <div className="w-9 h-9 border rounded-full flex justify-center items-center hover:bg-gray-100 cursor-pointer">
                  📸
                </div>
                <div className="w-9 h-9 border rounded-full flex justify-center items-center hover:bg-gray-100 cursor-pointer">
                  🔗
                </div>
              </div>
            </div>
          </div>

          {/* Invite Card */}
          <div className="border border-gray-200 rounded-3xl shadow-sm p-5 flex flex-col items-start gap-3">
            <Image
              src="/mnt/data/568f5b2f-40b1-4c47-ae64-62873f376b2b.png"
              width={120}
              height={120}
              alt="Invite Friends"
              className="object-contain"
            />

            <h3 className="font-semibold text-[15px]">Invite your friends</h3>

            <p className="text-[13px] text-gray-600 leading-5">
              Enroll for as many SkillUp courses as you like for <b>FREE</b>
            </p>

            <button className="text-blue-600 text-sm font-medium border border-blue-600 rounded-md px-4 py-2 hover:bg-blue-100">
              Invite now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Reusable Item for Sidebar ---------------- */
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