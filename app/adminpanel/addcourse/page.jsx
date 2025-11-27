import AddCourse from "@/app/components/adminpanel/AddCourse";
import AdminHeader from "@/app/components/adminpanel/AdminHeader";
import React from "react";
export default function page(){
    return(
        <div>
            <AdminHeader/>
            <AddCourse/>
        </div>
    );
}