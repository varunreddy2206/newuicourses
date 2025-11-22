import React from "react";
import CourseDetails from "../components/datascience/CourseDetails";
import CourseHero from "../components/datascience/CourseHero";
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
