"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function CourseEnrollPayment() {
    const searchParams = useSearchParams();
    const router = useRouter();


    const mode = (searchParams.get("mode") || "online").toUpperCase();
    const batch = searchParams.get("batch") || "";

    const [student, setStudent] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="w-full flex justify-center bg-white min-h-screen px-4 py-10 print:bg-white">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl border overflow-hidden print:shadow-none print:border print:max-w-full">

                {/* HEADER */}
                <div className="w-full bg-[#e9f1ff] py-6 text-center border-b-2 border-[#1b4edb]">
                    <h2 className="text-3xl font-bold text-[#1b4edb]">Course Enrollment</h2>
                </div>

                {/* BODY */}
                <div className="px-6 py-6 space-y-5">

                    {/* NAME & EMAIL */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[14px] text-[#1b4edb] mb-1 font-medium">
                                Student name
                            </label>
                            <input
                                placeholder="Enter your name"
                                value={student}
                                onChange={(e) => setStudent(e.target.value)}
                                className="w-full border-2 border-[#1b4edb] px-3 py-2 rounded-md text-[14px]"
                            />
                        </div>

                        <div>
                            <label className="block text-[14px] text-[#1b4edb] mb-1 font-medium">
                                E-mail
                            </label>
                            <input
                                placeholder="Enter email id"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border-2 border-[#1b4edb] px-3 py-2 rounded-md text-[14px]"
                            />
                        </div>
                    </div>

                    {/* Selected Course */}
                    <div>
                        <label className="block text-[14px] text-[#1b4edb] mb-1 font-medium">Selected Course</label>
                        <input
                            placeholder="Enter selected course"
                            className="w-full border-2 border-[#1b4edb] px-3 py-2 rounded-md text-[14px]"
                        />
                    </div>

                    {/* Payment option */}
                    <div>
                        <label className="block text-[14px] text-[#1b4edb] mb-1 font-medium">Selected Payment Option</label>
                        <div className="relative">
                            <select className="w-full border-2 border-[#1b4edb] px-3 py-2 rounded-md bg-white appearance-none text-[14px]">
                                <option>Registration Fee (500/-)</option>
                            </select>

                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[18px]">
                                ▼
                            </span>
                        </div>
                    </div>

                    {/* COURSE MODE BOX */}
                    <div>
                        <label className="block text-[14px] text-black font-medium mb-1">Course Mode</label>

                        <div className="border-2 border-[#1b4edb] rounded-lg px-3 py-2 inline-block">
                            <p className="text-[14px] font-medium text-[#1b4edb]">
                                {mode} {batch && `- ${batch.toUpperCase()}`}
                            </p>
                        </div>
                    </div>

                    {/* CHECKBOX */}
                    <div className="flex items-start gap-2">
                        <input type="checkbox" className="mt-[3px] w-4 h-4" />
                        <p className="text-[11px] text-gray-600 leading-4">
                            RememberBy registering, you agree to our <b>Terms of Use</b> and <b>Privacy Policy</b>. Me
                        </p>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex justify-between gap-4 pt-2">
                        <button
                            onClick={() => router.push("/courseenroll")}
                            className="w-1/3 py-2 border-2 border-gray-300 rounded-lg text-[14px] text-gray-700"
                        >
                            back
                        </button>


                        <button className="w-2/3 py-2 bg-[#1b4edb] text-white rounded-lg text-[14px]">
                            Make Payment
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
