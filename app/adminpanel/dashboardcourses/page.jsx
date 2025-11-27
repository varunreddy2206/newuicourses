import AdminHeader from "@/app/components/adminpanel/AdminHeader";
import DashBoardCourses from "@/app/components/adminpanel/DashBoardCourses";
import React from "react";
export default function page(){
    return(

        <div>
            <AdminHeader/>
            <DashBoardCourses/>
        </div>
    );
}