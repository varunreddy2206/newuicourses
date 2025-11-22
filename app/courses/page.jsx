"use client";
import React, { useState } from "react";
import CourseHero from "../components/CourseHero";
import CourseDetails from "../components/CourseDetails";
import Scholarship from "../components/Scholarship";
import PopularCourses from "../components/PopularCourses";
import CertificateSection from "../components/CertificateSection";
import Footer from "../components/Footer";
import TrainingOptions from "../components/TrainingOptions";
import { useCourseHook } from "@/features/courses/hooks/courses.hook";

export default function Page() {
  const [page, setPage] = useState(1);
  const limit = 5;

  const { data, loading, error } = useCourseHook(page, limit);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span>Loading</span>
      </div>
    );
  }

  return (
    <div>
      <CourseHero course={data?.data?.[0]} />
      <CourseDetails course={data?.data?.[0]} />
      <TrainingOptions />
      <Scholarship />
      <PopularCourses courses={data?.data?.slice(1, 5)} />
      <CertificateSection />

      <Footer />
    </div>
  );
}
