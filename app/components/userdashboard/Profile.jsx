"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Usernewheader from "./Usernewheader";

export default function Profile() {
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const storedName = typeof window !== "undefined" ? localStorage.getItem("username") : null;
    if (storedName) setUserName(storedName);
  }, []);

  return (
    <>
     <Usernewheader noOffset />
      <div className="w-full min-h-screen bg-[#f5f7fb] px-4 lg:px-10 py-10 pt-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">

          {/* ---------------------- LEFT PROFILE CARD ---------------------- */}
          <div
            className="
            w-full max-w-[320px] lg:w-[300px] shrink-0
            bg-white border border-gray-200
            rounded-2xl shadow-[0_10px_30px_rgba(15,23,42,0.08)]
            p-8 flex flex-col items-center text-center
            h-[420px]
          "
          >
            <div className="w-36 h-36 rounded-full overflow-hidden mb-4 border border-gray-200">
              <Image
                src="/mnt/data/622b158f-6b7c-4629-86b4-efdafd93e074.png"
                alt="Profile"
                width={144}
                height={144}
                className="object-cover"
              />
            </div>

            <h2 className="text-xl font-semibold text-gray-900 capitalize">{userName}</h2>
            <p className="text-gray-500 text-sm mb-5">xyz@gmail.com</p>

            <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-50 transition">
              ✏ Edit Image
            </button>
          </div>

          {/* ---------------------- RIGHT SIDE ---------------------- */}
          <div className="flex-1 flex flex-col gap-8">

            {/* Edit Details */}
            <div className="bg-white border border-gray-200 rounded-[28px] shadow-[0_15px_35px_rgba(15,23,42,0.08)] overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 bg-[#f9fafc] border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">Edit Details</h3>
                <button className="bg-[#0d68f9] text-white px-6 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-[#0b5ad8] transition">
                  Save
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 pb-8">
                {[
                  { label: "First name", placeholder: "Enter First name" },
                  { label: "Last Name", placeholder: "Enter last name" },
                  { label: "Mobile Number", placeholder: "Enter mobile number" },
                  { label: "Email Address", placeholder: "Enter email" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="text-sm font-semibold text-gray-800">
                      {field.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      placeholder={field.placeholder}
                      className="w-full mt-2 px-4 py-2.5 border border-[#3576ff] rounded-lg focus:ring-2 focus:ring-[#3d7cff40] outline-none text-sm text-gray-800 placeholder:text-gray-400"
                    />
                  </div>
                ))}

                <div className="w-full">
                  <label className="text-sm font-semibold text-gray-800">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <div className="relative mt-2">
                    <select className="w-full px-4 py-2.5 border border-[#3576ff] rounded-lg focus:ring-2 focus:ring-[#3d7cff40] outline-none text-sm text-gray-800 appearance-none bg-white pr-10">
                      <option>Select gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                    <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 pointer-events-none">
                      ▾
                    </span>
                  </div>
                </div>

                <div className="w-full">
                  <label className="text-sm font-semibold text-gray-800">
                    Date Of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="DD/MM/YYYY"
                    className="w-full mt-2 px-4 py-2.5 border border-[#3576ff] rounded-lg focus:ring-2 focus:ring-[#3d7cff40] outline-none text-sm text-gray-800 placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Update Password */}
            <div className="bg-white border border-gray-200 rounded-[24px] shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">Update Password</h3>
                <button className="bg-[#0d68f9] text-white px-6 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-[#0b5ad8] transition">
                  Save
                </button>
              </div>

              <div className="flex flex-col gap-6 px-6 py-6">
                {[
                  { label: "Current Password", placeholder: "Enter Current Password" },
                  { label: "New Password", placeholder: "Enter New Password" },
                  { label: "Confirm New Password", placeholder: "Enter Confirm New Password" },
                ].map((field) => (
                  <div key={field.label} className="max-w-[480px]">
                    <label className="text-sm font-semibold text-gray-800">
                      {field.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      placeholder={field.placeholder}
                      className="w-full mt-2 px-4 py-2.5 border border-[#3576ff] rounded-lg focus:ring-2 focus:ring-[#3d7cff40] outline-none text-sm text-gray-800 placeholder:text-gray-400"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}