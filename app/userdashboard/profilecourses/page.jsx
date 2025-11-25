import ProfileCourses from "@/app/components/userdashboard/ProfileCourses";
import UserFooter from "@/app/components/userdashboard/UserFooter";
import Usernewheader from "@/app/components/userdashboard/Usernewheader";
import UserPopularCourses from "@/app/components/userdashboard/UserPopularCourses";
import UserRecomemded from "@/app/components/userdashboard/UserRecomemded";
import UserSubHeader from "@/app/components/userdashboard/UserSubHeader";
import React from "react";

export default function Page() {
  return (
    <div>
      <ProfileCourses />
      <UserPopularCourses />
      <UserRecomemded />
      <UserFooter />
    </div>
  );
}