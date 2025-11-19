"use client";
import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function Testimonials() {
    return (
        <section className="w-full px-6 md:px-16 lg:px-24 mt-24 mb-32">

            {/* Badge */}
            <div className="flex justify-center mb-3">
                <span className="px-4 py-1 text-sm bg-gray-100 rounded-full text-gray-600">
                    Testimonials
                </span>
            </div>

            {/* Title */}
            <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                What Our Students Say
            </h2>

            <p className="text-center text-gray-500 max-w-3xl mx-auto text-lg">
                ShipX ensures smooth supply chains with reliable service and timely deliveries,
                and here’s what our customers say
            </p>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

                {/* ---------------- CARD 1 ---------------- */}
                <div className="bg-gray-100 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-6 relative">

                    {/* User Image */}
                    <div className="flex items-center gap-4">
                        <Image
                            src="/testimonial1.png"
                            width={70}
                            height={70}
                            alt="Marie Jane"
                            className="rounded-full"
                        />

                        <p className="text-4xl text-blue-500 font-bold leading-none">“</p>
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 text-base leading-relaxed mt-4">
                        Ship X has completely changed the way we manage logistics.
                        The platform is easy to use, and their tracking system keeps us
                        updated at every step.
                    </p>

                    {/* User Info */}
                    <div className="mt-5 flex items-center justify-between">
                        <div>
                            <h4 className="font-semibold text-gray-900">Marie Jane</h4>
                            <p className="text-gray-500 text-sm">CFO at Movix</p>
                        </div>

                        <div className="flex items-center gap-1 text-blue-600 font-medium text-sm">
                            <CheckCircle size={16} />
                            Verified
                        </div>
                    </div>
                </div>


                {/* ---------------- CARD 2 ---------------- */}
                <div className="bg-gray-100 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-8 relative">

                    {/* User Image */}
                    <div className="flex items-center gap-4">
                        <Image
                            src="/testimonial2.png"
                            width={90}
                            height={90}
                            alt="Olivia Jonathan"
                            className="rounded-full"
                        />

                        <p className="text-5xl text-blue-500 font-bold leading-none">“</p>
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 text-lg leading-relaxed mt-5">
                        From booking to final delivery, Ship X delivers excellence.
                        Their support team is responsive, and shipments always arrive
                        on time. It’s the reliability we’ve been looking for.
                    </p>

                    {/* User Info */}
                    <div className="mt-8 flex items-center justify-between">
                        <div>
                            <h4 className="font-semibold text-gray-900">Olivia Jonathan</h4>
                            <p className="text-gray-500 text-sm">CEO at Shipzo</p>
                        </div>

                        <div className="flex items-center gap-1 text-blue-600 font-medium text-sm">
                            <CheckCircle size={18} />
                            Verified
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
