import React from "react";
import CourseHero from "../components/CourseHero";
import CourseDetails from "../components/CourseDetails";
import Scholarship from "../components/Scholarship";
import PopularCourses from "../components/PopularCourses";
import CertificateSection from "../components/CertificateSection";
import Footer from "../components/Footer";
import TrainingOptions from "../components/TrainingOptions";


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