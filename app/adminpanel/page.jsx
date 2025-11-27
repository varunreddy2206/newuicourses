import React from "react";
import DashBoard from "../components/adminpanel/DashBoard";
import AdminHeader from "../components/adminpanel/AdminHeader";
export default function page() {

    return(
        <div>
            <AdminHeader/>
            <DashBoard />
        </div>

    );
}