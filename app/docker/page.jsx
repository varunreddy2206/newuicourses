import React from "react";
import CourseHero from "../components/dockerkubernetes/CourseHero";
import CourseDetails from "../components/dockerkubernetes/CourseDetails";
import TrainingOptions from "../components/TrainingOptions";
import Scholarship from "../components/Scholarship";
import CertificateSection from "../components/CertificateSection";
import PopularCourses from "../components/PopularCourses";
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
