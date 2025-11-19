"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [selected, setSelected] = useState("");

  return (
    <section className="w-full px-6 md:px-16 lg:px-24 py-16">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-3xl 
        bg-white shadow-sm p-6 md:p-10"
      >
        {/* LEFT IMAGE */}
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/contact.png" // replace with your image
            width={900}
            height={600}
            alt="Support Image"
            className="object-cover w-full h-full"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="flex flex-col justify-center">
          {/* info badge */}
          <div className="bg-gray-100 text-gray-700 text-sm px-4 py-1 rounded-full w-max mb-4">
            We’ll reach out within 12 hours.
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need Help? Contact Us
          </h2>

          <p className="text-gray-600 mb-8 max-w-md text-lg leading-relaxed">
            Our team is here to help you choose the right course for your career.
          </p>

          {/* FORM FIELDS */}
          <div className="space-y-6">

            {/* Full Name */}
            <input
              type="text"
              placeholder="Full name"
              className="w-full border border-gray-300 rounded-xl px-5 py-3 text-[15px] outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full border border-gray-300 rounded-xl px-5 py-3 text-[15px] outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Phone */}
            <input
              type="text"
              placeholder="Enter your mobile number here"
              className="w-full border border-gray-300 rounded-xl px-5 py-3 text-[15px] outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Dropdown */}
            <div className="relative">
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="appearance-none w-full border border-gray-300 rounded-xl px-5 py-3 text-[15px] outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select course</option>
                <option value="ai">Artificial Intelligence</option>
                <option value="ml">Machine Learning</option>
                <option value="frontend">Frontend Development</option>
              </select>

              <ChevronDown
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={20}
              />
            </div>
             <div className="relative">
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="appearance-none w-full border border-gray-300 rounded-xl px-5 py-3 text-[15px] outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Category</option>
                <option value="ai">Artificial Intelligence</option>
                <option value="ml">Machine Learning</option>
                <option value="frontend">Frontend Development</option>
              </select>

              <ChevronDown
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={20}
              />
            </div>

            {/* Checkbox */}
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" className="w-4 h-4" />
              I agree to the terms & privacy policy.
            </label>

            {/* Submit Button */}
            <button
              className="w-full bg-blue-600 text-white py-3 rounded-xl 
              text-lg font-medium hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
