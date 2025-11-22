import React from "react";
import CourseHero from "../components/deveops/CourseHero";
import CourseDetails from "../components/deveops/CourseDetails";
import TrainingOptions from "../components/TrainingOptions";
import Scholarship from "../components/Scholarship";
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
      <Footer />
    </div>
  );
}
