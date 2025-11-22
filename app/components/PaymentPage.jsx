"use client";
import React, { useState } from "react";
import Image from "next/image";

/**
 * PaymentPage.jsx
 * - Place in: app/payment/page.jsx  (or components/PaymentPage.jsx and import into a page)
 * - Uses Tailwind CSS for styling
 * - Uses the uploaded local file path as an image source (logo/placeholder)
 *
 * Note: Replace card icons and actual payment integrations with your preferred libs (Razorpay, Stripe).
 */

export default function PaymentPage() {
  const [activeTab, setActiveTab] = useState("credit");
  const [promo, setPromo] = useState("");
  const [appliedPromo, setAppliedPromo] = useState("");
  const [price, setPrice] = useState(14990);
  const discount = 1499; // example
  const gst = 1249.95; // example
  const total = 17990;

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      {/* Top logo row */}
      <header className="max-w-[1200px] mx-auto mb-6">
        <div className="flex items-center">
          <div className="w-36">
            {/* Developer note: using uploaded path as image src per environment instructions */}
            <Image
              src="/mnt/data/b278dcdc-ef8e-4e44-858f-1130a6c3c164.png"
              alt="Ascend Academy (placeholder)"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT: Main form and payment panels */}
        <section className="lg:col-span-2 space-y-6">
          {/* Basic Details card */}
          <div className="bg-white border rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Basic Details</h3>
              <button className="text-gray-400 text-sm">▾</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700 mb-1 block">Full name <span className="text-red-500">*</span></label>
                <input className="w-full border border-gray-300 rounded px-3 py-2 text-sm" placeholder="Enter Full Name" />
              </div>
              <div>
                <label className="text-sm text-gray-700 mb-1 block">Mobile Number <span className="text-red-500">*</span></label>
                <input className="w-full border border-gray-300 rounded px-3 py-2 text-sm" placeholder="Enter mobile number" />
              </div>

              <div>
                <label className="text-sm text-gray-700 mb-1 block">Email Address <span className="text-red-500">*</span></label>
                <input className="w-full border border-gray-300 rounded px-3 py-2 text-sm" placeholder="Enter email" />
              </div>
              <div>
                <label className="text-sm text-gray-700 mb-1 block">State <span className="text-red-500">*</span></label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
                  <option>Select state</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <button className="bg-blue-600 text-white px-5 py-2 rounded text-sm font-medium">
                🔒 Proceed to Payment
              </button>
            </div>
          </div>

          {/* Secure Payment card */}
          <div className="bg-white border rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium mb-4">Secure Payment</h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left tabs + fields */}
              <div className="col-span-1">
                <div className="bg-gray-50 border rounded-md">
                  {/* Tabs */}
                  <div className="flex flex-col md:flex-row">
                    <button
                      onClick={() => setActiveTab("credit")}
                      className={`flex-1 text-left px-4 py-3 border-b md:border-b-0 md:border-r ${activeTab === "credit" ? "bg-white font-medium" : "bg-transparent text-gray-600"}`}
                    >
                      Credit Card
                    </button>
                    <button
                      onClick={() => setActiveTab("debit")}
                      className={`flex-1 text-left px-4 py-3 border-b md:border-b-0 md:border-r ${activeTab === "debit" ? "bg-white font-medium" : "bg-transparent text-gray-600"}`}
                    >
                      Debit Card
                    </button>
                    <button
                      onClick={() => setActiveTab("netbank")}
                      className={`flex-1 text-left px-4 py-3 ${activeTab === "netbank" ? "bg-white font-medium" : "bg-transparent text-gray-600"}`}
                    >
                      Net Banking
                    </button>
                    <button
                      onClick={() => setActiveTab("upi")}
                      className={`flex-1 text-left px-4 py-3 ${activeTab === "upi" ? "bg-white font-medium" : "bg-transparent text-gray-600"}`}
                    >
                      UPI
                    </button>
                  </div>
                </div>
              </div>

              {/* Middle: Card details */}
              <div className="col-span-2">
                <div className="space-y-3">
                  <label className="text-sm text-gray-600">Enter your credit card details</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input placeholder="Card number" className="border border-gray-300 rounded px-3 py-2 text-sm w-full" />
                    <input placeholder="Name as a Card" className="border border-gray-300 rounded px-3 py-2 text-sm w-full" />
                    <input placeholder="value thru" className="border border-gray-300 rounded px-3 py-2 text-sm w-full" />
                    <div className="flex gap-3">
                      <input placeholder="MM • YYYY" className="border border-gray-300 rounded px-3 py-2 text-sm w-1/2" />
                      <input placeholder="CVV" className="border border-gray-300 rounded px-3 py-2 text-sm w-1/2" />
                    </div>
                  </div>

                  {/* Amount display and Make Payment */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-sm font-medium">₹{(price - discount).toLocaleString("en-IN")}</div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded text-sm font-medium">
                      Make Payment
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 mt-3">🔒 Secure payment powered by Razorpay</p>

                  <div className="flex items-center gap-2 mt-3">
                    {/* Payment brand icons placeholders */}
                    <div className="w-8 h-6 border rounded flex items-center justify-center text-xs">V</div>
                    <div className="w-8 h-6 border rounded flex items-center justify-center text-xs">M</div>
                    <div className="w-8 h-6 border rounded flex items-center justify-center text-xs">A</div>
                    <div className="w-8 h-6 border rounded flex items-center justify-center text-xs">D</div>
                  </div>

                  <p className="text-xs text-gray-500 mt-3">
                    By placing this order, you expressly confirm that you have read and you agree to Ascend Academy Terms of Use, Refund, Rescheduling and Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT: Order Summary */}
        <aside className="lg:col-span-1">
          <div className="bg-white border rounded-lg shadow-sm p-6">
            <h4 className="font-medium">Order Summary</h4>

            <div className="mt-4 border rounded p-4">
              <h5 className="font-semibold">Machine Learning using Python</h5>
              <ul className="mt-3 text-sm text-gray-600 space-y-2">
                <li>📅 25th Nov – 16th Dec 2025</li>
                <li>🕒 Evening 8:00 PM – 23:00 PM IST</li>
                <li>⏳ Valid till 24th May 2026 — 180 days</li>
              </ul>

              <div className="mt-4 flex items-center justify-between text-sm">
                <div>Course Fee</div>
                <div className="text-gray-500 line-through">₹21,990.00</div>
              </div>
              <div className="flex items-center justify-between mt-1">
                <div className="text-sm font-semibold">Price</div>
                <div className="text-lg font-bold">₹{price.toLocaleString("en-IN")}.00</div>
              </div>

              {/* Promo code input */}
              <div className="mt-4">
                <label className="text-xs text-gray-500">Promo Code</label>
                <div className="flex gap-2 mt-2">
                  <input value={promo} onChange={(e) => setPromo(e.target.value)} placeholder="HAPPY15" className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm" />
                  <button onClick={() => { setAppliedPromo(promo); setPromo(""); }} className="px-3 py-2 border rounded text-sm">Apply</button>
                </div>

                {appliedPromo && (
                  <div className="mt-3 border-l-4 border-green-400 bg-green-50 p-3 text-sm">
                    <div className="font-medium text-green-700">COUPON APPLIED</div>
                    <div>Grab an Extra 5% off</div>
                    <div className="text-xs text-gray-500">Expires on: 28-Nov-2025</div>
                  </div>
                )}
              </div>

              {/* Billing breakdown */}
              <div className="mt-4 text-sm">
                <div className="flex justify-between">
                  <span>Billing Details</span>
                </div>

                <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                  <div>Total Price</div>
                  <div className="text-right">₹{price.toLocaleString("en-IN")}.00</div>

                  <div>Additional Discount</div>
                  <div className="text-right text-green-600">(-) ₹{discount.toLocaleString("en-IN")}.00</div>

                  <div>GST (18%)</div>
                  <div className="text-right">₹{gst.toLocaleString("en-IN")}</div>
                </div>

                <div className="mt-3 border-t pt-3 flex justify-between font-semibold">
                  <div>Grand Total</div>
                  <div>₹{total.toLocaleString("en-IN")}</div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
