"use client";
import Image from "next/image";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function RegisterForm() {
    return (
        <div className="w-full bg-gray-800 min-h-screen flex items-center justify-center py-10 px-4">

            {/* MAIN WRAPPER */}
            <div className="bg-white w-full max-w-6xl rounded-md overflow-hidden 
                      grid grid-cols-1 lg:grid-cols-2">

                {/* LEFT — FORM */}
                <div className="px-8 py-10 flex flex-col justify-center">

                    {/* LOGO */}
                    <div className="flex justify-center mb-6">
                        <Image
                            src="/logo.png" // replace with your logo
                            alt="Ascend Academy"
                            width={160}
                            height={60}
                        />
                    </div>

                    {/* TITLE */}
                    <h2 className="text-xl font-semibold text-center mb-6">
                        Create Your Free Account
                    </h2>

                    {/* FORM */}
                    <div className="w-full space-y-4">

                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="Charan s"
                                className="w-1/2 border px-3 py-2 rounded text-sm"
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                className="w-1/2 border px-3 py-2 rounded text-sm"
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="Email address*"
                            className="w-full border px-3 py-2 rounded text-sm"
                        />

                        <input
                            type="text"
                            placeholder="IND/ Phone Number*"
                            className="w-full border px-3 py-2 rounded text-sm"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border px-3 py-2 rounded text-sm"
                        />

                        {/* REGISTER BUTTON */}
                        <Link href="/courseenroll">
                            <button className="w-full bg-blue-600 text-white py-2.5 rounded text-sm font-medium hover:bg-blue-700">
                                Register Now
                            </button>
                        </Link>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-4">
                        <div className="h-px bg-gray-300 w-full"></div>
                        <span className="text-xs text-gray-500">other signup options</span>
                        <div className="h-px bg-gray-300 w-full"></div>
                    </div>

                    {/* SOCIAL ICONS */}
                    <div className="flex justify-center gap-6 text-xl">
                        <FcGoogle className="cursor-pointer" />
                        <FaFacebookF className="cursor-pointer text-blue-600" />
                        <FaLinkedinIn className="cursor-pointer text-blue-700" />
                    </div>

                    {/* TERMS + LOGIN */}
                    <p className="text-xs text-center text-gray-600 mt-6">
                        By registering, you agree to our <b>Terms of Use</b> and <b>Privacy Policy</b>.
                    </p>

                    <p className="text-xs text-center text-gray-600 mt-5">
                        Already have an account? <span className="text-blue-600 cursor-pointer">login</span>
                    </p>

                    <p className="text-xs text-center text-gray-400 mt-4">
                        © 2025 - Ascend Academy Solutions. All Rights Reserved.
                    </p>

                </div>

                {/* RIGHT — IMAGE + TEXT */}
                <div className="relative h-[360px] sm:h-[420px] md:h-[480px] lg:h-auto">

                    {/* TOP IMAGE */}
                    <Image
                        src="/Registerimage.png" // ⬅ replace with your uploaded image later
                        alt="Register Banner"
                        fill
                        className="object-cover"
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-6 md:p-10">
                        <h2 className="text-xl md:text-2xl font-bold mb-3">
                            Build Skills That Power Your Future.
                        </h2>
                        <p className="text-sm mb-4">
                            Unlock hands-on training designed to help you grow faster.
                        </p>

                        <ul className="text-sm space-y-2">
                            <li>• Trusted by 5M+ global learners</li>
                            <li>• Daily live classes & mentor sessions</li>
                            <li>• High success rate in promotions & job transitions</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}
