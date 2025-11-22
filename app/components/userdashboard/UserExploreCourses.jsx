"use client";
import Image from "next/image";
import { useState } from "react";
import { Clock, Globe, Star, User } from "lucide-react";

export default function UserExploreCourses() {
  // -------------------------
  // COURSE CATEGORY DATA
  // -------------------------
  const categories = {
    "Artificial Intelligence, Data & Automation": [
      "Artificial Intelligence & Machine Learning with Python",
      "Data Science & Analytics with Python",
      "Python for Development & Automation",
    ],
    "Web Development": [
      "Full Stack Web Development (MERN / MEAN)",
      "Full Stack Java Development (Spring Boot + React / Angular)",
      "Full Stack Python Development (Django / Flask + React)",
      "Frontend Development (HTML, CSS, JavaScript, React)",
      "Backend Development (Node.js, Express, MongoDB / MySQL)",
    ],
    "Mobile App Development": [
      "Flutter App Development",
      "React Native App Development",
      "Swift App Development (iOS)",
      "Kotlin App Development (Android)",
    ],
    "Cloud, DevOps & Infrastructure": [
      "DevOps Engineer Program",
      "Cloud Computing Fundamentals",
      "Docker, Kubernetes & CI/CD Tools",
    ],
    "Software Testing & QA": [
      "Manual & Automation Testing",
      "Selenium & API Testing (Advanced QA)",
    ],
    "Design & Creative Technologies": [
      "UI/UX Design Fundamentals (Figma & Adobe XD)",
      "Graphic Design (Photoshop, Illustrator, Canva Pro)",
    ],
    "Internship & Corporate Programs": [
      "Real-Time Project Internship (Web/App/AI)",
      "Corporate Upskilling (Custom Modules)",
    ],
  };

  // -------------------------
  // STORE SELECTED CATEGORY
  // -------------------------
  const [selectedCategory, setSelectedCategory] = useState(
    "Artificial Intelligence, Data & Automation"
  );

  // -------------------------
  // Dummy course images
  // -------------------------
  const courseImages = ["/course1.png", "/course1.png", "/course1.png", "/course1.png"];

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-10">

      {/* SECTION TITLE */}
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Explore courses
      </h2>

      {/* CATEGORY TAGS */}
      <div className="flex flex-wrap gap-3 mb-10">
        {Object.keys(categories).map((category, i) => (
          <button
            key={i}
            onClick={() => setSelectedCategory(category)}
            className={`
              text-sm px-4 py-1 border rounded-full shadow-sm
              ${selectedCategory === category ? "bg-blue-600 text-white" : "bg-white text-gray-700"}
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* COURSE LIST */}
      <div className="space-y-12">
        {categories[selectedCategory].map((courseName, index) => (
          <div
            key={index}
            className="
              w-full 
              flex 
              flex-col sm:flex-row 
              items-start sm:items-center 
              justify-between 
              gap-6 
              border-b 
              pb-10
            "
          >

            {/* LEFT CONTENT */}
            <div className="flex-1">

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {courseName}
              </h3>

              {/* DESCRIPTION — placeholder (you can replace later) */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 hidden sm:block">
                Learn professional skills with hands-on projects, industry-level tools, and real-time concepts.
              </p>

              {/* TAG ROW */}
              <div className="flex items-center gap-6 text-sm text-gray-700 mb-5">

                <div className="flex items-center gap-2">
                  <User size={16} className="text-green-600" />
                  <span>Beginner</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-gray-700" />
                  <span>6 months</span>
                </div>

                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-teal-600" />
                  <span>Online</span>
                </div>

                <div className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-500" />
                  <span>17M+</span>
                </div>

              </div>

              {/* BUTTON */}
              <div className="mt-2">
                <button className="bg-blue-600 text-white px-6 py-2 text-sm font-medium hover:bg-blue-700 mt-15">
                  Enroll Now
                </button>
              </div>

            </div>

            {/* COURSE IMAGE */}
            <div className="w-full sm:min-w-[220px] sm:max-w-[240px]">
              <Image
                src={courseImages[index % 4]}
                alt="Course Thumbnail"
                width={240}
                height={200}
                className="rounded-xl object-cover w-full h-[180px] sm:h-full"
              />
            </div>

          </div>
        ))}
      </div>

      {/* BLUE FOOTER BANNER */}
      <div className="mt-12 w-full bg-blue-600 text-white text-center py-4 rounded-full text-sm sm:text-base font-medium shadow">
        Learn from industry experts, earn global certifications, and start your career journey with confidence. »
      </div>

    </div>
  );
}
