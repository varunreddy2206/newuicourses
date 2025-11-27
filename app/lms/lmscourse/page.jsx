import LmsCourse from "@/app/components/userdashboard/lms/LmsCourse";
import LmsFooter from "@/app/components/userdashboard/lms/LmsFooter";
import Usernewheader from "@/app/components/userdashboard/Usernewheader";
import UserPopularCourses from "@/app/components/userdashboard/UserPopularCourses";
import UserRecomemded from "@/app/components/userdashboard/UserRecomemded";
import React from "react";
export default function Page() {
  return (
    <div className="pt-[70px]">
        <Usernewheader noOffset />
        <LmsCourse />
        <UserPopularCourses />
        <UserRecomemded />
        <LmsFooter/>
      
    </div>
  );
}