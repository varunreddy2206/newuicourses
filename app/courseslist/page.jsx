import React from "react";
import CourseListing from "../components/CourseListing";
// import Header from "../components/Header";
// import SubHeader from "../components/SubHeader";
import WhyTrustUs from "../components/WhyTrustUs";
import Scholarship from "../components/Scholarship";
import CertificateSection from "../components/CertificateSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import PopularCourses from "../components/PopularCourses";
export default function Page() {
  return (
    <div className="space-y-[3px]">
     {/* <Header />
     <SubHeader /> */}
      <CourseListing />
      <PopularCourses/>
      <WhyTrustUs />
      <Scholarship />
      <CertificateSection />
      <ContactSection />
      <Footer />
    </div>
  );
}