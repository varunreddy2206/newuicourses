import React from "react";
import CourseHero from "../components/CourseHero";
import CourseDetails from "../components/CourseDetails";
import Scholarship from "../components/Scholarship";
import PopularCourses from "../components/PopularCourses";
import CertificateSection from "../components/CertificateSection";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div>
        <CourseHero />
        <CourseDetails />
        <Scholarship />
        <PopularCourses />
        <CertificateSection />
        <Footer />
    </div>
  );
}