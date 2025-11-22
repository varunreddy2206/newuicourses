import React from "react";
import CourseHero from "../components/AI/CourseHero";

import Scholarship from "../components/Scholarship";
import PopularCourses from "../components/PopularCourses";
import CertificateSection from "../components/CertificateSection";
import Footer from "../components/Footer";
import TrainingOptions from "../components/TrainingOptions";
import UserHeader from "../components/userdashboard/UserHeader";
import CourseDetails from "../components/AI/CourseDetails";


export default function Page() {
  return (
    <div>
      <UserHeader />
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