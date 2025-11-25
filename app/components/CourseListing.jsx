"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* Local image */
const THUMB_URL = "/mnt/data/d4eb4c91-fb62-4670-99da-2fdbcfae3ec2.png";

/* ----------------------------- MAIN CATEGORIES ----------------------------- */

const MAIN_CATEGORIES = [
    "Most Popular",
    "Artificial Intelligence, Data & Automation",
    "Web Development",
    "Mobile App Development",
    "Cloud, DevOps & Infrastructure",
    "Software Testing & Quality Assurance",
    "Design & Creative Technologies",
    "Internship & Corporate Programs",
];

/* ------------------------------ SUBCOURSES -------------------------------- */

const SUBCOURSES_BY_CATEGORY = {
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

    "Software Testing & Quality Assurance": [
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

/* Popular = ALL SUBCOURSES */
const POPULAR_SUBCOURSES = Object.values(SUBCOURSES_BY_CATEGORY).flat();

/* --------------------------- HELPER: CREATE CARDS -------------------------- */

function createCards(list) {
    return list.map((title, index) => ({
        id: `${title.replace(/\s+/g, "-").toLowerCase()}-${index + 1}`,
        title,
        thumbnail: THUMB_URL,
        price: 799,
        oldPrice: 899,
        rating: (4 + (index % 2) * 0.5).toFixed(1),
        students: 800 + index * 30,
    }));
}

/* ----------------------------- MAIN COMPONENT ------------------------------ */

export default function CourseListing() {
    const [activeCategory, setActiveCategory] = useState("Most Popular");
    const [query, setQuery] = useState("");
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    /* Get subcourses for selected category */
    const subcourses =
        activeCategory === "Most Popular"
            ? POPULAR_SUBCOURSES
            : SUBCOURSES_BY_CATEGORY[activeCategory] || [];

    /* Prepare cards */
    const cards = useMemo(() => {
        let base = createCards(subcourses);
        if (!query.trim()) return base;
        return base.filter((c) =>
            c.title.toLowerCase().includes(query.toLowerCase())
        );
    }, [subcourses, query]);

    return (
        <section className="w-full bg-white py-4 sm:py-6 md:py-6 lg:py-8 px-3 sm:px-4 md:px-6 lg:px-12">
            <div className="max-w-[1400px] mx-auto">

                {/* -------------------------- HEADER + SEARCH -------------------------- */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-5 md:mb-6 lg:mb-8 gap-3 sm:gap-0">
                    <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold leading-tight">
                        Explore Our Top Trending <span className="text-yellow-500 text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold">IT Courses</span>
                    </h2>

                    {/* Desktop Search */}
                    <div className="hidden md:flex items-center gap-3">
                        <div className="relative">
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search courses..."
                                className="w-[280px] md:w-[320px] lg:w-[420px] px-3 md:px-4 lg:px-4 py-1.5 md:py-2 lg:py-2 rounded-full border border-gray-300 text-xs md:text-sm lg:text-sm outline-none focus:ring-2 focus:ring-yellow-300"
                            />
                            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-yellow-400 px-3 md:px-4 lg:px-4 py-1 md:py-1.5 lg:py-1.5 rounded-full text-white text-xs md:text-sm lg:text-sm font-medium hover:bg-yellow-500">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Mobile Filter Button */}
                    <button
                        onClick={() => setMobileFiltersOpen((s) => !s)}
                        className="md:hidden px-3 py-2 border rounded-md text-sm shadow-sm"
                    >
                        {mobileFiltersOpen ? "Close" : "Filters"}
                    </button>
                </div>

                {/* ----------------------- TABLET HORIZONTAL CATEGORIES (md only) --------------------------- */}
                <div className="hidden md:flex lg:hidden mb-4 w-full overflow-x-auto">
                    <div className="flex items-center gap-2 min-w-max pb-2">
                        {MAIN_CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActiveCategory(cat);
                                    setQuery("");
                                }}
                                className={`whitespace-nowrap px-3 py-2 rounded-lg border text-xs transition-all shrink-0
                    ${activeCategory === cat
                                            ? "bg-blue-600 text-white border-blue-600 font-medium"
                                            : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                                        }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ----------------------- SIDEBAR + CONTENT --------------------------- */}
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 lg:gap-8">

                    {/* --------- DESKTOP SIDEBAR (lg only) --------- */}
                    <aside className="hidden lg:block w-full lg:w-[240px] shrink-0">
                        <div className="space-y-2">
                            {MAIN_CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        setActiveCategory(cat);
                                        setQuery("");
                                    }}
                                    className={`w-full text-left px-4 py-2.5 rounded-lg border text-sm transition-all
                    ${activeCategory === cat
                                            ? "bg-blue-600 text-white border-blue-600 font-medium"
                                            : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* --------- MOBILE SIDEBAR --------- */}
                    {mobileFiltersOpen && (
                        <div className="md:hidden mb-4 w-full">
                            <div className="grid grid-cols-2 gap-2 border p-3 rounded-lg shadow-sm">
                                {MAIN_CATEGORIES.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => {
                                            setActiveCategory(cat);
                                            setQuery("");
                                            setMobileFiltersOpen(false);
                                        }}
                                        className={`px-3 py-2 text-sm border rounded-md
                      ${activeCategory === cat
                                                ? "bg-blue-600 text-white border-blue-600"
                                                : "bg-white text-gray-700 border-gray-300"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* --------------------------- RIGHT CONTENT --------------------------- */}
                    <main className="flex-1">

                        {/* ------------------------------ GRID ------------------------------ */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-4 md:gap-5 lg:gap-6">
                            {cards.map((course) => (
                                <article
                                    key={course.id}
                                    className="bg-white rounded-2xl sm:rounded-2xl md:rounded-3xl border shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden p-3 sm:p-3 md:p-4 lg:p-4 flex flex-col h-full"
                                >

                                    {/* Thumbnail */}
                                    <div className="w-full rounded-xl sm:rounded-xl md:rounded-2xl overflow-hidden">
                                        <Image
                                            src={course.thumbnail}
                                            alt={course.title}
                                            width={500}
                                            height={300}
                                            className="object-cover w-full h-40 sm:h-44 md:h-44 lg:h-48 rounded-xl sm:rounded-xl md:rounded-2xl"
                                        />
                                    </div>

                                    {/* Badges */}
                                    <div className="flex items-center gap-2 sm:gap-2 md:gap-3 lg:gap-4 mt-3 sm:mt-3 md:mt-4 lg:mt-4 flex-wrap">
                                        <span className="flex items-center gap-1 text-green-700 bg-green-50 px-2 py-0.5 sm:py-0.5 md:py-1 lg:py-1 rounded-full text-[10px] sm:text-[10px] md:text-xs lg:text-xs">
                                            🟩 Beginner
                                        </span>

                                        <span className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-0.5 sm:py-0.5 md:py-1 lg:py-1 rounded-full text-[10px] sm:text-[10px] md:text-xs lg:text-xs">
                                            🟢 Online
                                        </span>

                                        <span className="flex items-center gap-1 text-yellow-600 bg-yellow-50 px-2 py-0.5 sm:py-0.5 md:py-1 lg:py-1 rounded-full text-[10px] sm:text-[10px] md:text-xs lg:text-xs">
                                            ⭐ 17 M+
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-2 sm:mt-2 md:mt-3 lg:mt-3 text-base sm:text-base md:text-lg lg:text-lg font-bold text-gray-900 leading-tight">
                                        {course.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs sm:text-xs md:text-sm lg:text-sm text-gray-500 mt-1 mb-3 sm:mb-3 md:mb-4 lg:mb-4 flex-grow">
                                        Build intelligent solutions with real-world AI & ML training.
                                    </p>

                                    {/* Buttons */}
                                    <div className="flex items-center gap-2 sm:gap-2 md:gap-3 lg:gap-4 mt-auto pt-2">
                                        <Link
                                            href={`/courses/${course.id}`}
                                            className="bg-blue-600 text-white px-3 py-1.5 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2 rounded-full text-xs sm:text-xs md:text-sm lg:text-sm font-medium hover:bg-blue-700 transition flex items-center gap-1 flex-1 sm:flex-1 md:flex-none lg:flex-none justify-center"
                                        >
                                            Enroll Now →
                                        </Link>

                                        <button className="border border-gray-300 px-3 py-1.5 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2 rounded-full text-xs sm:text-xs md:text-sm lg:text-sm font-medium text-gray-700 flex items-center gap-1 hover:bg-gray-50 transition flex-1 sm:flex-1 md:flex-none lg:flex-none justify-center">
                                            Know More →
                                        </button>
                                    </div>
                                </article>

                            ))}
                        </div>

                    </main>
                </div>
            </div>
        </section>
    );
}