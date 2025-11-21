"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function LearningSlider() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      text: "77% of learners report career benefits, like landing a new job, earning a promotion, gaining applicable skills, and more.",
      img: "/dashboard/learning1.png",
    },
    {
      text: "77% of learners report career benefits, like landing a new job, earning a promotion, gaining applicable skills, and more.",
      img: "/dashboard/learning2.png",
    },
  ];

  const scrollToIndex = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cardWidth = slider.children[0].clientWidth + 24; 
    slider.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const nextCard = () => {
    if (activeIndex < cards.length - 1) scrollToIndex(activeIndex + 1);
  };

  const prevCard = () => {
    if (activeIndex > 0) scrollToIndex(activeIndex - 1);
  };

  return (
    <div className="w-full flex flex-col items-center mt-24 md:mt-28 lg:mt-32">

      {/* SLIDER ROW */}
      <div
        ref={sliderRef}
        className="
          flex overflow-x-scroll scrollbar-hide scroll-smooth 
          gap-6 px-2 snap-x snap-mandatory
        "
      >
        {cards.map((c, idx) => (
          <div
            key={idx}
            className="
              min-w-[86%] sm:min-w-[70%] md:min-w-[48%] lg:min-w-[48%]
              bg-[#F5F9FF]
              rounded-2xl p-8 snap-center shadow-sm
              flex flex-col justify-between
              h-[320px] sm:h-[330px] md:h-[310px] lg:h-[310px]
            "
          >

            {/* TEXT */}
            <p className="text-[17px] text-gray-800 leading-relaxed w-[85%]">
              {c.text}
            </p>

            {/* BUTTON + IMAGE */}
            <div className="flex justify-between items-end mt-4">

              {idx === 0 ? (
                <>
                  {/* LEFT CARD → Button → Image */}
                  <button className="
                    bg-blue-600 text-white px-5 py-2 
                    rounded-md text-sm font-medium hover:bg-blue-700
                  ">
                    Continue Learning
                  </button>

                  <Image
                    src={c.img}
                    width={150}
                    height={150}
                    alt="illustration"
                    className="object-contain"
                  />
                </>
              ) : (
                <>
                  {/* RIGHT CARD → Image → Button */}
                  <Image
                    src={c.img}
                    width={150}
                    height={150}
                    alt="illustration"
                    className="object-contain"
                  />

                  <button className="
                    bg-blue-600 text-white px-5 py-2 
                    rounded-md text-sm font-medium hover:bg-blue-700
                  ">
                    Continue Learning
                  </button>
                </>
              )}

            </div>
          </div>
        ))}
      </div>

      {/* ARROWS + DOTS */}
      <div className="flex items-center gap-6 mt-6">

        {/* LEFT ARROW */}
        <button
          onClick={prevCard}
          disabled={activeIndex === 0}
          className={`
            w-10 h-10 flex items-center justify-center 
            rounded-full border shadow-sm
            ${activeIndex === 0 ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
          `}
        >
          <ChevronLeft size={20} />
        </button>

        {/* DOTS */}
        <div className="flex gap-3">
          {cards.map((_, i) => (
            <div
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`
                w-3 h-3 rounded-full cursor-pointer
                ${activeIndex === i ? "bg-blue-600" : "bg-gray-300"}
              `}
            ></div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={nextCard}
          disabled={activeIndex === cards.length - 1}
          className={`
            w-10 h-10 flex items-center justify-center 
            rounded-full border shadow-sm
            ${activeIndex === cards.length - 1 ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
          `}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
