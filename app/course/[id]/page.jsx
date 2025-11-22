// app/course/[id]/page.js
"use client";
import CertificateSection from "@/app/components/CertificateSection";
import CourseDetails from "@/app/components/CourseDetails";
import CourseHero from "@/app/components/CourseHero";
import Footer from "@/app/components/Footer";
import PopularCourses from "@/app/components/PopularCourses";
import Scholarship from "@/app/components/Scholarship";
import TrainingOptions from "@/app/components/TrainingOptions";
import { useGetAPI } from "@/common/hooks/useGetAPI";
import { getSingleCourse } from "@/features/courses/service/get-course.service";
import { use } from "react";

const SingleCourse = ({ params }) => {
  const { id } = use(params);

  const { data, loading, error } = useGetAPI(getSingleCourse, { id });

  if (loading) return <p className="text-center py-10">Loading course...</p>;
  if (error)
    return (
      <p className="text-center py-10 text-red-600">Error: {error.message}</p>
    );
  if (!data?.data) return <p className="text-center py-10">Course not found</p>;

  const course = data.data;
  const relatedCourses = data.related || [];

  return (
    <div>
      <CourseHero course={course} />
      <CourseDetails course={course} />
      <TrainingOptions />
      <Scholarship />
      <PopularCourses courses={relatedCourses} />
      <CertificateSection />

      <Footer />
    </div>
  );
};

export default SingleCourse;
