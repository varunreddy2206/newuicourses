import ContinueLearning from "@/app/components/userdashboard/lms/ContinueLearning";
import Usernewheader from "@/app/components/userdashboard/Usernewheader";
import React from "react"; 
export default function Page() {
  return (
    <div className="pt-[80px]"> 
        <Usernewheader noOffset />
       <ContinueLearning/>
      
    </div>
  );
}