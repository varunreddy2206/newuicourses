import React from "react";
import CourseHero from "../components/AI/CourseHero";
import CourseDetails from "../components/AI/CourseDetails";
import TrainingOptions from "../components/TrainingOptions";
import Scholarship from "../components/Scholarship";
import PopularCourses from "../components/PopularCourses";
import CertificateSection from "../components/CertificateSection";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div>
      <CourseHero />
      <CourseDetails />
      <TrainingOptions />
      <Scholarship />
      <PopularCourses />
      <CertificateSection />
      <Footer />
    </div>
  );
}
