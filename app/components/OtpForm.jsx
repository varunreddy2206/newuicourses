"use client";
import React from "react";
import Image from "next/image";
import { Lock } from "lucide-react";
import Link from "next/link";

export default function OtpForm() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col md:flex-row">
      
      {/* LEFT SECTION */}
      <div className="w-full md:w-1/2 flex items-center justify-center py-10 px-6">
        <div className="w-[90%] max-w-md">

          {/* Title */}
          <h1 className="text-[30px] font-semibold text-center mb-2">
            Check your Inbox
          </h1>

          {/* Subtitle */}
          <p className="text-center text-gray-600 mb-6 text-sm">
            Enter the 6-digit code we sent to <b>xyz@gmail.com</b> to finish your sign up
          </p>

          {/* OTP Input */}
          <div className="border border-gray-300 rounded-md w-full flex items-center px-3 py-3 mb-4">
            <input
              type="text"
              placeholder="6-digit Code"
              className="w-full outline-none text-gray-700 text-sm"
            />
            <Lock size={18} className="text-gray-500" />
          </div>

          {/* Register Button */}
          <Link href="/payment">
          <button className="w-full bg-blue-600 text-white py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition">
            Register Now
          </button>
            </Link>

          {/* Resend */}
          <p className="text-center text-sm text-gray-600 mt-3">
            Didn’t receive the code?{" "}
            <span className="text-blue-600 cursor-pointer font-medium">
              Resend code in 29
            </span>
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full md:w-1/2 relative h-[350px] md:h-auto">

        {/* Background Image */}
        <Image
          src="/mnt/data/cd24c830-35b1-43b0-824a-9ff35d3d35e4.png"
          alt="Hero"
          fill
          className="object-cover"
        />

        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Right Side Text */}
        <div className="absolute bottom-10 left-8 text-white max-w-sm">
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            Build Skills That Power Your Future.
          </h2>

          <p className="text-sm mt-2">
            Unlock hands-on training designed to help you grow faster.
          </p>

          <ul className="mt-4 text-sm space-y-1">
            <li>• Trusted by 5M+ global learners</li>
            <li>• Daily live classes & mentor sessions</li>
            <li>• High success rate in promotions & job transitions</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
