"use client";
import Image from "next/image";
import React from "react";

export default function UpdatePassword() {
  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="flex flex-col items-center justify-center bg-white px-10">
        <h2 className="text-2xl font-semibold mb-6">Update Password?</h2>

        <input
          type="password"
          placeholder="Enter New Password"
          className="w-full max-w-sm border border-gray-300 rounded-md p-3 mb-4 focus:outline-none"
        />

        <input
          type="password"
          placeholder="Re-Enter New Password"
          className="w-full max-w-sm border border-gray-300 rounded-md p-3 mb-6 focus:outline-none"
        />

        <button className="w-full max-w-sm bg-blue-600 text-white py-3 rounded-md font-medium">
          Update password
        </button>

        <button className="mt-4 text-sm text-gray-700 hover:underline">
          Back To Login
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative w-full h-full">
        <Image
          src="/mnt/data/8c382afc-6f73-499a-a8bc-0399a0f44825.png"
          alt="Right Side Banner"
          fill
          className="object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/70 to-transparent text-white">
          <h2 className="text-3xl font-bold mb-2">
            Build Skills That Power Your Future.
          </h2>
          <p className="text-gray-200 mb-4">
            Unlock hands-on training designed to help you grow faster.
          </p>

          <ul className="space-y-2 text-gray-200">
            <li>• Trusted by 5M+ global learners</li>
            <li>• Daily live classes & mentor sessions</li>
            <li>• High success rate in promotions & job transitions</li>
          </ul>
        </div>
      </div>

    </div>
  );
}