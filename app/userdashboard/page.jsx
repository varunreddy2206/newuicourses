import React from "react";
import UserHeader from "../components/userdashboard/userheader";
import LearningSlider from "../components/userdashboard/LearningSlider";
import UserLearning from "../components/userdashboard/UserLearning";
import Placement from "../components/Placement";
import CertificateSection from "../components/CertificateSection";
import Recomemded from "../components/Recomemded";
import UserFooter from "../components/userdashboard/UserFooter";
export default function Page() {
  return (
    <div>
      <UserHeader />
      <LearningSlider />
      <UserLearning />
      <Placement  />
      <CertificateSection />
      <Recomemded />
      <UserFooter />
    </div>
  );
}