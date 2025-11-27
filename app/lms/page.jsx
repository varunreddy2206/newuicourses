import React from "react";
import UserGreetings from "../components/userdashboard/lms/UserGreetings";
import UserPopularCourses from "../components/userdashboard/UserPopularCourses";
import UserRecomemded from "../components/userdashboard/UserRecomemded";
import LmsFooter from "../components/userdashboard/lms/LmsFooter";
import Usernewheader from "../components/userdashboard/Usernewheader";


export default function page() {
    return (
        <div className="pt-[80px] ">
            <Usernewheader noOffset />
            <UserGreetings />
            <UserPopularCourses />
            <UserRecomemded />
            <LmsFooter/>
            

        </div>
    );
}