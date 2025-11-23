import React from "react";
// import UserHeader from "../components/userdashboard/userheader";
import UserHeroSection from "../components/userdashboard/UserHeroSection";
import UserPlacement from "../components/userdashboard/UserPlacement";
import UserWorkShop from "../components/userdashboard/UserWorkShop";
import UserExploreCourses from "../components/userdashboard/UserExploreCourses";
import UserPopularCourses from "../components/userdashboard/UserPopularCourses";
import UserWhyTrustUs from "../components/userdashboard/UserWhyTrustUs";
import UserScholarship from "../components/userdashboard/UserScholarship";
import UserCertificateSection from "../components/userdashboard/UserCertificateSection";
import UserContactSection from "../components/userdashboard/UserContactSection";
import UserPrograms from "../components/userdashboard/UserPrograms";
import UserRecomemded from "../components/userdashboard/UserRecomemded";
import UserTestimonials from "../components/userdashboard/UserTestimonials";
import UserFooter from "../components/userdashboard/UserFooter";
import UserSubHeader from "../components/userdashboard/UserSubHeader";
import Usernewheader from "../components/userdashboard/Usernewheader";

export default function Page() {
  return (
    <div className="pt-[140px] md:pt-[120px] lg:pt-[110px]">
      <UserSubHeader />
      {/* <UserHeader /> */}
      <Usernewheader />
      <UserHeroSection />
      <UserPlacement />
      <UserWorkShop />
      <UserExploreCourses />
      <UserPopularCourses />
      <UserWhyTrustUs />
      <UserScholarship />
      <UserCertificateSection />
      <UserContactSection />
      <UserPrograms />
      <UserRecomemded />
      <UserTestimonials />
      <UserFooter />

      
    </div>
  );
}