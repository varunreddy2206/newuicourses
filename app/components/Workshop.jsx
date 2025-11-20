"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function WorkShop() {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -260, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 260, behavior: "smooth" });
  };

  // 🔥 NEW — Different images for different cards
  const cardImages = [
    "/workshop.png",
    "/workshop.png",
    "/workshop.png",
    "/workshop.png",
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-10">

      {/* SECTION TITLE */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Workshops</h2>

      {/* MAIN WRAPPER */}
      <div className="w-full bg-white rounded-2xl shadow-md border p-6 md:p-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

          {/* LEFT BOX */}
          <div className="flex-1">
            <Image
              src="/workshop-icon.png"
              alt="Workshop Icon"
              width={40}
              height={40}
              className="mb-3"
            />

            <h3 className="text-2xl font-bold mb-2">
              Full Stack Java Professional Workshop Series
            </h3>

            <p className="font-semibold text-gray-800 text-sm mb-1">
              Skills you'll gain:
              <span className="font-normal text-gray-600">
                {" "}
                Core Java, OOPs, JDBC, Spring Boot, REST APIs, MySQL, HTML/CSS/JS,
                React Basics, Project Architecture, Deployment, Debugging, Git &
                Version Control
              </span>
            </p>

            <div className="flex items-center gap-1 mb-2">
              <span>⭐</span>
              <span className="text-sm font-medium">
                4.6 <span className="text-gray-500">(980 learners)</span>
              </span>
            </div>

            <div className="flex gap-5 text-sm text-gray-700 mb-4">
              <span>• Beginner Level</span>
              <span>• Live Workshop</span>
              <span>• 1 Week</span>
            </div>

            <div className="flex gap-4 mt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium">
                Register Now
              </button>
              <button className="text-blue-600 font-medium text-sm">View details</button>
            </div>
          </div>

          {/* RIGHT — SLIDER */}
          <div className="flex-1 relative lg:max-w-[630px] lg:overflow-hidden lg:pr-4">

            {/* SLIDER CARDS */}
            <div
              ref={sliderRef}
              className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar pb-4"
            >
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="min-w-[230px] max-w-[230px] bg-white rounded-xl shadow-md border p-4"
                >
                  <Image
                    src={cardImages[i - 1]}   // 🌟 DIFFERENT IMAGE FOR EACH CARD
                    alt="Workshop Image"
                    width={300}
                    height={200}
                    className="rounded-md object-cover w-full h-[130px] mb-3"
                  />

                  <p className="text-xs text-gray-500 mb-1">🌍 Globally Certified Course</p>

                  <h4 className="font-semibold text-lg mb-1">Data Analyst</h4>

                  <p className="text-sm text-gray-700 mb-2 leading-snug">
                    A Data Analyst collects, cleans, and interprets data using tools.
                  </p>

                  <p className="text-sm font-semibold">
                    Starts From <span className="text-blue-600">14-12-2025</span>
                  </p>

                  <div className="flex items-center gap-3 mt-3">
                    <Image
                      src="/trainer.png"
                      alt="Trainer"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium">Trainer name</p>
                      <p className="text-xs text-gray-500">Trainer</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* BOTTOM ARROWS */}
            <div className="flex justify-center items-center gap-6 mt-4">
              <button
                onClick={slideLeft}
                className="bg-white shadow p-2 rounded-full"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={slideRight}
                className="bg-white shadow p-2 rounded-full"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* DOT INDICATORS */}
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
