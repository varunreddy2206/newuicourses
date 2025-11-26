"use client";

import React, { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit");

  return (
    <div className="w-full min-h-screen bg-[#f8f8f8] flex justify-center py-10">
      <div className="w-full max-w-[1400px] grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-8 px-4">

        {/* --------------------- LEFT SIDE --------------------- */}
        <div className="flex flex-col gap-8">

          {/* BASIC DETAILS */}
          <div className="bg-white shadow rounded-lg p-6 border border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Basic Details</h2>
              <ChevronDown size={20} className="text-gray-600" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200">
              <div>
                <label className="text-sm font-medium">Full name <span className="text-red-500">*</span></label>
                <input className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" placeholder="Enter Full Name" />
              </div>

              <div>
                <label className="text-sm font-medium">Mobile Number <span className="text-red-500">*</span></label>
                <input className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" placeholder="Enter mobile number" />
              </div>

              <div>
                <label className="text-sm font-medium">Email Address <span className="text-red-500">*</span></label>
                <input className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1" placeholder="Enter email" />
              </div>

              <div>
                <label className="text-sm font-medium">State <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 appearance-none">
                    <option>Select state</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-4 text-gray-500" size={18} />
                </div>
              </div>
            </div>

            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium flex items-center gap-2">
              Proceed to Payment
            </button>
          </div>

          {/* SECURE PAYMENT */}
          <div className="bg-white shadow rounded-lg p-6 border border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Secure Payment</h2>
              <ChevronDown size={20} className="text-gray-600" />
            </div>

            {/* LAYOUT: LEFT VERTICAL TABS + RIGHT FORM (MATCH REFERENCE UI) */}
            <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              {/* LEFT: "Pay now" + PAYMENT METHODS */}
              <div className="w-full md:w-auto">
                <p className="text-base font-medium mb-3">Pay now</p>
                <div className="w-full md:w-44 border rounded-lg overflow-hidden text-sm">
                  {/* Credit Card */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("credit")}
                    className={`w-full text-left border-b px-4 py-3 flex items-center gap-2 ${
                      paymentMethod === "credit"
                        ? "bg-blue-50 font-medium"
                        : "bg-white"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        paymentMethod === "credit" ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />
                    <span>Credit Card</span>
                  </button>

                  {/* Debit Card */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("debit")}
                    className={`w-full text-left border-b px-4 py-3 flex items-center gap-2 ${
                      paymentMethod === "debit" ? "bg-blue-50 font-medium" : "bg-white"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        paymentMethod === "debit" ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />
                    <span>Debit Card</span>
                  </button>

                  {/* Net Banking */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("netbanking")}
                    className={`w-full text-left border-b px-4 py-3 flex items-center gap-2 ${
                      paymentMethod === "netbanking"
                        ? "bg-blue-50 font-medium"
                        : "bg-white"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        paymentMethod === "netbanking" ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />
                    <span>Net Banking</span>
                  </button>

                  {/* UPI */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("upi")}
                    className={`w-full text-left px-4 py-3 flex items-center gap-2 ${
                      paymentMethod === "upi" ? "bg-blue-50 font-medium" : "bg-white"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        paymentMethod === "upi" ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />
                    <span>UPI</span>
                  </button>
                </div>
              </div>

              {/* RIGHT: DYNAMIC PAYMENT CONTENT */}
              <div className="w-full md:flex-1 md:max-w-md mt-6 md:mt-0">
                {paymentMethod === "credit" && (
                  <>
                    <label className="text-sm font-medium">
                      Enter your credit card details
                    </label>

                    <input
                      className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2"
                      placeholder="Card number"
                    />

                    <input
                      className="w-full border border-gray-300 rounded-md px-3 py-2 mt-3"
                      placeholder="Name as a Card"
                    />

                    <div className="flex gap-3 mt-3">
                      <select className="border border-gray-300 rounded-md px-3 py-2 w-full">
                        <option>MM</option>
                      </select>
                      <select className="border border-gray-300 rounded-md px-3 py-2 w-full">
                        <option>YYYY</option>
                      </select>
                      <input
                        className="border border-gray-300 rounded-md px-3 py-2 w-full"
                        placeholder="CVV"
                      />
                    </div>
                  </>
                )}

                {paymentMethod === "debit" && (
                  <>
                    <label className="text-sm font-medium">
                      Enter your debit card details
                    </label>

                    <input
                      className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2"
                      placeholder="Debit card number"
                    />

                    <input
                      className="w-full border border-gray-300 rounded-md px-3 py-2 mt-3"
                      placeholder="Name on Card"
                    />

                    <div className="flex gap-3 mt-3">
                      <select className="border border-gray-300 rounded-md px-3 py-2 w-full">
                        <option>MM</option>
                      </select>
                      <select className="border border-gray-300 rounded-md px-3 py-2 w-full">
                        <option>YYYY</option>
                      </select>
                      <input
                        className="border border-gray-300 rounded-md px-3 py-2 w-full"
                        placeholder="CVV"
                      />
                    </div>
                  </>
                )}

                {paymentMethod === "netbanking" && (
                  <>
                    <label className="text-sm font-medium">
                      Choose your bank for Net Banking
                    </label>
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2">
                      <option>Select Bank</option>
                      <option>HDFC Bank</option>
                      <option>SBI</option>
                      <option>ICICI Bank</option>
                      <option>Axis Bank</option>
                    </select>
                  </>
                )}

                {paymentMethod === "upi" && (
                  <>
                    <label className="text-sm font-medium">
                      Pay using UPI
                    </label>

                    {/* QR placeholder */}
                    <div className="mt-3 border border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center text-sm text-gray-500">
                      <div className="w-32 h-32 bg-gray-100 mb-3" />
                      <p>Scan this QR with your UPI app</p>
                    </div>

                    <p className="mt-3 text-xs text-gray-500">
                      Or enter your UPI ID below
                    </p>
                    <input
                      className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2"
                      placeholder="yourupi@bank"
                    />
                  </>
                )}

                {/* PAYMENT AMOUNT + BUTTON (COMMON) */}
                <div className="mt-6 font-semibold text-lg">₹17,688.20</div>

                <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-md text-sm font-medium">
                  Make Payment
                </button>

                {/* Secure payment info + card icons + disclaimer (like reference UI) */}
                <div className="mt-4">
                  <p className="flex items-center gap-2 text-xs text-gray-500">
                    <span>🔒</span>
                    <span>Secure payment powered by Razorpay</span>
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex items-center justify-center rounded bg-gray-100 px-2 py-1 text-[10px] font-medium text-gray-600">
                      VISA
                    </span>
                    <span className="inline-flex items-center justify-center rounded bg-gray-100 px-2 py-1 text-[10px] font-medium text-gray-600">
                      RuPay
                    </span>
                    <span className="inline-flex items-center justify-center rounded bg-gray-100 px-2 py-1 text-[10px] font-medium text-gray-600">
                      AMEX
                    </span>
                  </div>

                  <p className="mt-3 text-[10px] leading-snug text-gray-400">
                    By placing this order, you expressly confirm that you have read and you agree
                    to Ascend Academy Terms of Use, Refund, Rescheduling and Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* --------------------- RIGHT SIDE --------------------- */}
        <div>
          <div className="bg-white shadow rounded-lg p-6 border border-gray-200 sticky top-4">
            <h2 className="text-lg font-semibold">Order Summary</h2>

            {/* COURSE DETAILS WITH TOP DIVIDER (LIKE REFERENCE) */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="font-medium">Machine Learning using Python</p>

              <ul className="mt-3 text-sm text-gray-600 space-y-2">
                <li>📅 25th Nov – 16th Dec 2025</li>
                <li>⏰ Evening 20:00 PM – 23:00 PM IST</li>
                <li>📄 Valid till 24th May 2026 — 180 days</li>
              </ul>
            </div>

            {/* COURSE FEE WITH DISCOUNT + STRIKE PRICE (MATCH REFERENCE) */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Course Fee</p>
                <div className="text-right">
                  <span className="text-blue-600 text-xs font-semibold mr-1">11% Off</span>
                  <span className="text-gray-400 line-through text-xs mr-1">₹21,990</span>
                  <span className="text-gray-900 text-sm font-semibold">₹14,990.00</span>
                </div>
              </div>
            </div>

            {/* PROMO CODE */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Promo Code</p>

              <div className="flex gap-2">
                <input
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  value="HAPPY5"
                />
                <button className="px-4 border border-gray-300 rounded-md">Apply</button>
              </div>

              <div className="flex items-start gap-2 bg-green-50 text-green-700 px-3 py-2 rounded-md border border-green-300 mt-3 text-sm">
                <Check size={16} />
                <div>
                  <p className="font-medium">COUPON APPLIED</p>
                  <p className="text-xs">Grab an Extra 5% off<br />Expires on : 28-Nov-2025</p>
                </div>
              </div>
            </div>

            {/* BILLING DETAILS */}
            <div className="mt-6 pt-4 border-t border-gray-200 text-sm">
              <p className="font-semibold mb-2">Billing Details</p>

              <div className="flex justify-between py-1">
                <span>Total Price</span>
                <span>₹14,990.00</span>
              </div>

              <div className="flex justify-between py-1 text-green-600">
                <span>Additional Discount</span>
                <span>(-) ₹549.95</span>
              </div>

              <div className="flex justify-between py-1">
                <span>GST (18.00%)</span>
                <span>₹2,698</span>
              </div>
            </div>

            <div className="border-t mt-4 pt-4 flex justify-between font-semibold text-lg">
              <span>Grand Total</span>
              <span>₹17,990.00</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}