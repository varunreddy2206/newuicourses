"use client";
import Image from "next/image";
import React from "react";

export default function CertificateSection() {
  return (
    <section className="w-full px-6 md:px-16 lg:px-24 my-20">
      <div className="bg-white rounded-3xl border shadow-sm p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12">

        {/* ------------------ LEFT SIDE CERTIFICATE IMAGE ------------------ */}
        <div className="flex-1">
          <div className="w-full rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/certificates/certificate.png"  
              alt="Certificate"
              width={900}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* ------------------ RIGHT SIDE CONTENT ------------------ */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Earn a Globally Recognized Certificate
          </h2>

          <p className="text-gray-600 mt-3 text-lg max-w-lg">
            Your certificate validates your skills and boosts your professional credibility.
          </p>

          {/* --------- POINTS --------- */}
          <div className="mt-10 space-y-8">

            {/* 1. Industry Recognition */}
            <div className="flex items-start gap-4">
              <Image
                src="/certificates/SVG.png"
                width={40}
                height={40}
                alt="Industry Icon"
                className="object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Industry Recognition</h3>
                <p className="text-gray-600 mt-1 text-base">
                  Our certificate is accepted by hiring partners and trusted employers.
                </p>
              </div>
            </div>

            {/* 2. Verification ID */}
            <div className="flex items-start gap-4">
              <Image
                src="/certificates/Clip path group.png"
                width={40}
                height={40}
                alt="Verification Icon"
                className="object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Verification ID</h3>
                <p className="text-gray-600 mt-1 text-base">
                  Each certificate comes with a unique verification ID that employers can validate instantly.
                </p>
              </div>
            </div>

            {/* 3. Shareable on LinkedIn */}
            <div className="flex items-start gap-4">
              <Image
                src="/certificates/arcticons_linkedin.png"
                width={40}
                height={40}
                alt="LinkedIn Icon"
                className="object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Shareable on LinkedIn</h3>
                <p className="text-gray-600 mt-1 text-base">
                  Share your certificate directly to LinkedIn, your resume, or portfolio.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
