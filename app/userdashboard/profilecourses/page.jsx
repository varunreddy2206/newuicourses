import ProfileCourses from "@/app/components/userdashboard/ProfileCourses";
import UserFooter from "@/app/components/userdashboard/UserFooter";

import UserPopularCourses from "@/app/components/userdashboard/UserPopularCourses";
import UserRecomemded from "@/app/components/userdashboard/UserRecomemded";

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