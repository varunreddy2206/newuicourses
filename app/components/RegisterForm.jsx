"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function RegistrationForm() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col md:flex-row">
      
      {/* LEFT SECTION */}
      <div className="w-full md:w-1/2 flex items-center justify-center py-10 px-4">
        <div className="w-[90%] max-w-md">

          {/* Title */}
          <h1 className="text-[30px] font-semibold text-center mb-6">
            Create Your Free Account
          </h1>

          {/* Form */}
          <div className="space-y-4">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Charan s"
                className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm"
              />
            </div>

            <input
              type="email"
              placeholder="Email address*"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />

            <div className="flex gap-3">
              <select className="w-1/3 border border-gray-300 rounded-md px-3 py-2 text-sm">
                <option>IND</option>
              </select>
              <input
                type="text"
                placeholder="Phone Number*"
                className="w-2/3 border border-gray-300 rounded-md px-3 py-2 text-sm"
              />
            </div>

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />

            {/* Register Button */}
            <Link href="/otp">
            <button className="w-full bg-blue-600 text-white py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition">
              Register Now
            </button>
            </Link>

            {/* Divider Text */}
            <p className="text-center text-xs text-gray-500">other signup options</p>

            {/* Social Buttons */}
            <div className="flex items-center justify-center gap-6">
              <div className="border p-3 rounded-md shadow-sm cursor-pointer">
                <Image src="/google.png" alt="Google" width={22} height={22} />
              </div>
              <div className="border p-3 rounded-md shadow-sm cursor-pointer">
                <Image src="/facebook.png" alt="Facebook" width={22} height={22} />
              </div>
              <div className="border p-3 rounded-md shadow-sm cursor-pointer">
                <Image src="/linkedin.png" alt="LinkedIn" width={22} height={22} />
              </div>
            </div>

            {/* Terms */}
            <p className="text-xs text-center text-gray-600 leading-5">
              By registering, you agree to our{" "}
              <span className="font-semibold">Terms of Use</span> and{" "}
              <span className="font-semibold">Privacy Policy</span>.
            </p>

            {/* Login */}
            <p className="text-xs text-center text-gray-600">
              Already have an account?{" "}
              <Link href="/login">
              <span className="text-blue-600 cursor-pointer font-medium">login</span>
                </Link>
            </p>

            {/* Footer */}
            <p className="text-[10px] text-center text-gray-400 mt-2">
              © 2025 - Ascend Academy Solutions. All Rights Reserved. | Privacy Policy
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full md:w-1/2 relative h-[350px] md:h-auto">

        {/* Background Image */}
        <Image
          src="/mnt/data/3315ee59-bb06-40b4-8c2c-bb1476b4e238.png"
          alt="Hero"
          fill
          className="object-cover"
        />

        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

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
