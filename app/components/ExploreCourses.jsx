"use client";
import Image from "next/image";
import { useState } from "react";
import { Clock, Globe, Star, User } from "lucide-react";

export default function ExploreCourses() {
  // -------------------------
  // COURSE CATEGORY DATA (UPDATED)
  // -------------------------
  const categories = {
    "Artificial Intelligence, Data & Automation": [
      { 
        name: "Artificial Intelligence & Machine Learning with Python",
        slug: "/ai"
      },
      { 
        name: "Data Science & Analytics with Python",
        slug: "/datascience"
      },
      { 
        name: "Python for Development & Automation",
        slug: "/pythondevelopment"
      },
    ],

    "Web Development": [
      { name: "Full Stack Web Development (MERN / MEAN)", slug: "/fullstackweb" },
      { name: "Full Stack Java Development (Spring Boot + React / Angular)", slug: "/fullstackjava" },
      { name: "Full Stack Python Development (Django / Flask + React)", slug: "/fullstackpython" },
      { name: "Frontend Development (HTML, CSS, JavaScript, React)", slug: "/frontend" },
      { name: "Backend Development (Node.js, Express, MongoDB / MySQL)", slug: "/backend" },
    ],

    "Mobile App Development": [
      { name: "Flutter App Development", slug: "/flutterapp" },
      { name: "React Native App Development", slug: "/reactnative" },
      { name: "Swift App Development (iOS)", slug: "/swiftapp" },
      { name: "Kotlin App Development (Android)", slug: "/kotlin" },
    ],

    "Cloud, DevOps & Infrastructure": [
      { name: "DevOps Engineer Program", slug: "/devops" },
      { name: "Cloud Computing Fundamentals", slug: "/cloud" },
      { name: "Docker, Kubernetes & CI/CD Tools", slug: "/docker" },
    ],

    "Software Testing & QA": [
      { name: "Manual & Automation Testing", slug: "/manual" },
      { name: "Selenium & API Testing (Advanced QA)", slug: "/selenium" },
    ],

    "Design & Creative Technologies": [
      { name: "UI/UX Design Fundamentals (Figma & Adobe XD)", slug: "/uiux" },
      { name: "Graphic Design (Photoshop, Illustrator, Canva Pro)", slug: "graphic-design" },
    ],

    "Internship & Corporate Programs": [
      { name: "Real-Time Project Internship (Web/App/AI)", slug: "/realtime" },
      { name: "Corporate Upskilling (Custom Modules)", slug: "corporate-upskilling" },
    ],
  };

  // -------------------------
  // SELECTED CATEGORY
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
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Explore courses</h2>

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
        {categories[selectedCategory].map((course, index) => (
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
                {course.name}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 hidden sm:block">
                Learn professional skills with hands-on projects, industry-level tools, and real-time concepts.
              </p>

              {/* TAG ROW */}
              <div className="flex items-center gap-6 text-sm text-gray-700 mb-5">

                <div className="flex items-center gap-2">
                  <User size={16} className="text-green-600" /><span>Beginner</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-gray-700" /><span>6 months</span>
                </div>

                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-teal-600" /><span>Online</span>
                </div>

                <div className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-500" /><span>17M+</span>
                </div>

              </div>

              {/* ⭐ ENROLL BUTTON (GOES TO COURSE PAGE) */}
              <div className="mt-15">
                <button
                  onClick={() => window.location.href = `${course.slug}`}
                  className="bg-blue-600 text-white px-6 py-2 text-sm font-medium hover:bg-blue-700"
                >
                  Enroll
                </button>
              </div>

            </div>

            {/* RIGHT IMAGE */}
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
