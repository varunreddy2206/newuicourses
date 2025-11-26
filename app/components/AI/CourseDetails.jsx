// "use client";
// import React from "react";
// import Image from "next/image";
// import { CheckCircle, Clock, Users, BookOpen, Award, Globe } from "lucide-react";

// export default function CourseDetails() {
//   return (
//     <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12">

//       {/* GRID: LEFT CONTENT + RIGHT SIDEBAR */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">

//         {/* -------------------------------- LEFT CONTENT -------------------------------- */}
//         <div className="lg:col-span-2">

//           {/* Tabs */}
//           <div className="flex flex-wrap gap-6 text-gray-600 border-b pb-4 mb-8">
//             <button className="font-semibold text-gray-900">Overview</button>
//             <button>Curriculum</button>
//             <button>Instructor</button>
//             <button>Reviews</button>
//           </div>

//           {/* Course Description */}
//           <h2 className="text-xl sm:text-2xl font-bold mb-3">Course Descriptions</h2>

//           <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
//             Nuvhan Global Services Pvt. Ltd presents an industry-oriented Artificial Intelligence and Machine Learning course with Python,
//             designed to help you master the most in-demand technologies of the future.
//           </p>

//           <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
//             Our course offers hands-on training, real-time projects, and personalized mentoring to help you build intelligent systems,
//             predictive models, and automation solutions using Python programming and AI frameworks.
//           </p>

//           <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-10">
//             This course bridges the gap between theory and practice, ensuring you gain the skills required to work on real-world AI
//             applications across industries like healthcare, finance, automation, and more.
//           </p>

//           {/* Skills */}
//           <h2 className="text-lg sm:text-xl font-bold mb-3">Skills You will gain:</h2>

//           <p className="text-gray-700 text-sm sm:text-base leading-6 mb-10">
//             Core Java, OOPs, JDBC, Spring Boot, REST APIs, MySQL, HTML/CSS/JS, React Basics, Project Architecture,
//             Deployment, Debugging, Git & Version Control
//           </p>

//           {/* Career Opportunities */}
//           <h2 className="text-xl font-semibold mb-2">Career Opportunities</h2>

//           <p className="text-sm text-gray-600 leading-6 mb-6">
//             After completing this course, you can apply for roles such as:<br />
//             Top recruiters include MNC Companies, IT firms, startups, fintech companies, and research institutions.
//           </p>

//           <ul className="space-y-3">
//             {[
//               "AI Engineer",
//               "Machine Learning Engineer",
//               "Data Scientist",
//               "Research Analyst / Data Analyst",
//               "Deep Learning Engineer",
//               "Automation Engineer",
//               "Research Analyst / Data Analyst",
//             ].map((role, index) => (
//               <li
//                 key={index}
//                 className="flex items-center gap-3 text-sm text-gray-800"
//               >
//                 <CheckCircle className="text-blue-600 w-5 h-5" />
//                 {role}
//               </li>
//             ))}
//           </ul>

//         </div>

//         {/* -------------------------------- RIGHT SIDEBAR -------------------------------- */}
//         <div className="space-y-6">

//           {/* Course Includes Card */}
//           <div className="border rounded-3xl p-6 shadow-sm space-y-6">
//             <h3 className="text-lg sm:text-xl font-semibold">Course includes:</h3>

//             <div className="space-y-4 text-sm sm:text-base text-gray-700">
//               <InfoRow icon={Award} label="Level:" value="Expert" />
//               <InfoRow icon={Clock} label="Duration:" value="6 Months/Fast-track" />
//               <InfoRow icon={BookOpen} label="Lessons:" value="15" />
//               <InfoRow icon={Users} label="Students:" value="120" />
//               <InfoRow icon={Award} label="Certifications:" value="Yes" />
//               <InfoRow icon={Globe} label="Language:" value="English" />
//             </div>

//             {/* Share */}
//             <div className="mt-4 flex flex-col">
//               <p className="text-gray-500 text-xs sm:text-sm mb-3">Share This Course</p>

//               <div className="flex gap-3 sm:gap-4 text-gray-600">
//                 <div className="w-9 h-9 border rounded-full flex justify-center items-center hover:bg-gray-100 cursor-pointer">📘</div>
//                 <div className="w-9 h-9 border rounded-full flex justify-center items-center hover:bg-gray-100 cursor-pointer">📸</div>
//                 <div className="w-9 h-9 border rounded-full flex justify-center items-center hover:bg-gray-100 cursor-pointer">🔗</div>
//               </div>
//             </div>
//           </div>

//           {/* Invite Card */}
//           <div className="border rounded-3xl shadow-sm p-5 flex flex-col items-start gap-3">
//             <Image
//               src="/mnt/data/568f5b2f-40b1-4c47-ae64-62873f376b2b.png"
//               width={120}
//               height={120}
//               alt="Invite Friends"
//               className="object-contain"
//             />

//             <h3 className="font-semibold text-[15px]">Invite your friends</h3>

//             <p className="text-[13px] text-gray-600 leading-5">
//               Enroll for as many SkillUp courses as you like for <b>FREE</b>
//             </p>

//             <button className="text-blue-600 text-sm font-medium border border-blue-600 rounded-md px-4 py-2 hover:bg-blue-100">
//               Invite now
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// /* ---------------- Reusable Item for Sidebar ---------------- */
// function InfoRow({ icon: Icon, label, value }) {
//   return (
//     <div className="flex justify-between items-center">
//       <div className="flex items-center gap-2 text-gray-600">
//         <Icon size={18} className="text-blue-600" />
//         <span>{label}</span>
//       </div>
//       <span className="font-medium">{value}</span>
//     </div>
//   );
// }
