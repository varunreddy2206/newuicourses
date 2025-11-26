"use client";

import React from "react";
import { Bell, ChevronDown, Download, Menu, Search } from "lucide-react";
import AdminSidebar from "./AdminSidebar";

export default function DashBoard() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] flex text-sm text-gray-800">
      {/* LEFT SIDEBAR */}
      <AdminSidebar />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between px-4 lg:px-8 py-4 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-3">
            <button className="lg:hidden rounded-md border border-gray-200 px-2 py-1">
              <Menu size={18} />
            </button>
            <div>
              <p className="text-xs text-gray-500">
                Hey Mariana – here’s what’s happening with your store today
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-500">
              <Search size={14} />
              Search
            </button>
            <button className="relative flex h-9 w-9 items-center justify-center rounded-full border border-gray-200">
              <Bell size={16} />
              <span className="absolute -top-0.5 -right-0.5 inline-flex h-2 w-2 rounded-full bg-red-500" />
            </button>
          </div>
        </header>

        {/* Content scroll area */}
        <main className="flex-1 overflow-y-auto px-4 lg:px-8 py-6 space-y-6">
          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              {
                label: "Total Students",
                value: "12,480",
                meta: "+ 320 this month",
              },
              {
                label: "New Registrations",
                value: "742",
                meta: "This month ↑",
              },
              {
                label: "Total Courses",
                value: "48",
                meta: "+ 3 new courses ↑",
              },
              {
                label: "Pending Payments",
                value: "₹4,85,200",
                meta: "-62 pending ↓",
              },
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-2xl bg-white border border-gray-200 px-4 py-3 shadow-sm"
              >
                <p className="text-[11px] uppercase tracking-wide text-gray-400">
                  {card.label}
                </p>
                <p className="mt-2 text-lg font-semibold">{card.value}</p>
                <p className="mt-1 text-[11px] text-emerald-500">
                  {card.meta}
                </p>
              </div>
            ))}
          </div>

          {/* Chart + Recent payments */}
          <div className="grid grid-cols-1 xl:grid-cols-[2.2fr_1fr] gap-4">
            {/* Chart card */}
            <section className="rounded-2xl bg-white border border-gray-200 p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm font-semibold">
                    Monthly Student Registration Trend
                  </p>
                  <p className="text-xs text-gray-400">
                    Overview of new registrations over time
                  </p>
                </div>
                <div className="flex gap-1">
                  {["12 Months", "6 Months", "30 Days", "7 Days"].map(
                    (label, i) => (
                      <button
                        key={label}
                        className={`rounded-full px-2.5 py-1 text-[11px] ${
                          i === 0
                            ? "bg-gray-900 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {label}
                      </button>
                    )
                  )}
                  <button className="ml-2 rounded-full border border-gray-200 px-3 py-1 text-[11px] flex items-center gap-1">
                    <Download size={12} />
                    Export PDF
                  </button>
                </div>
              </div>
              {/* Fake chart area */}
              <div className="mt-2 h-52 rounded-2xl bg-gradient-to-b from-indigo-50 to-white border border-dashed border-indigo-100 flex items-center justify-center text-xs text-gray-400">
                Chart placeholder
              </div>
            </section>

            {/* Recent payments */}
            <section className="rounded-2xl bg-white border border-gray-200 p-4 shadow-sm">
              <p className="text-sm font-semibold">Recent Payments</p>
              <p className="mt-1 text-xs text-gray-400">
                Lorem ipsum dolor sit ametis.
              </p>

              <div className="mt-4 space-y-3 text-xs">
                {[
                  {
                    name: "Jenny Wilson",
                    mode: "UPI",
                    amount: "$11,234",
                  },
                  {
                    name: "Devon Lane",
                    mode: "UPI",
                    amount: "$11,159",
                  },
                  {
                    name: "Jane Cooper",
                    mode: "Net Banking",
                    amount: "$10,483",
                  },
                  {
                    name: "Dianne Russell",
                    mode: "UPI",
                    amount: "$9,084",
                  },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center justify-between py-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-gray-100" />
                      <div>
                        <p className="text-xs font-medium text-gray-800">
                          {p.name}
                        </p>
                        <p className="text-[11px] text-gray-400">
                          Transaction ID:1293 • {p.mode}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs font-semibold">{p.amount}</p>
                  </div>
                ))}
              </div>

              <button className="mt-4 w-full rounded-lg border border-gray-200 py-2 text-xs font-medium text-gray-600 flex items-center justify-between px-3">
                <span>See all payments</span>
                <ChevronDown size={14} />
              </button>
            </section>
          </div>

          {/* Recent registrations table */}
          <section className="rounded-2xl bg-white border border-gray-200 p-4 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold">
                  Recent Registrations Table
                </p>
                <p className="text-xs text-gray-400">
                  Manage your all your students registration
                </p>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-600">
                  <Download size={14} />
                  Download CSV
                </button>
                <button className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-600">
                  <Search size={14} />
                  Filter
                </button>
              </div>
            </div>

            {/* Search bar */}
            <div className="mt-4 rounded-lg border border-gray-200 px-3 py-2 flex items-center gap-2 text-xs text-gray-500">
              <Search size={14} />
              <input
                className="flex-1 bg-transparent outline-none text-xs"
                placeholder="Search recent projects"
              />
            </div>

            {/* Table */}
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-100 text-gray-400">
                    {[
                      "Student Name",
                      "Contact Number",
                      "Registration Date",
                      "Course Enrolled",
                      "Transaction ID",
                      "Status",
                      "Actions",
                    ].map((head) => (
                      <th
                        key={head}
                        className="py-2 text-left font-medium whitespace-nowrap pr-6"
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Riya Sharma",
                      phone: "+91 90909 90900",
                      date: "12 Nov 2025",
                      course: "UI/UX Design",
                      txn: "ID-1234",
                      status: "Paid",
                    },
                    {
                      name: "Sharma",
                      phone: "+91 90909 90900",
                      date: "12 Nov 2025",
                      course: "UI/UX Design",
                      txn: "Sharma",
                      status: "Paid",
                    },
                    {
                      name: "Riya",
                      phone: "+91 90909 90900",
                      date: "12 Nov 2025",
                      course: "-",
                      txn: "-",
                      status: "Pending",
                    },
                    {
                      name: "Riya S",
                      phone: "+91 90909 90900",
                      date: "12 Nov 2025",
                      course: "-",
                      txn: "-",
                      status: "Pending",
                    },
                    {
                      name: "Priya",
                      phone: "+91 90909 90900",
                      date: "12 Nov 2025",
                      course: "UI/UX Design",
                      txn: "Priya",
                      status: "Paid",
                    },
                  ].map((row) => (
                    <tr
                      key={row.name + row.txn}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <td className="py-3 pr-6 whitespace-nowrap">
                        {row.name}
                      </td>
                      <td className="py-3 pr-6 whitespace-nowrap">
                        {row.phone}
                      </td>
                      <td className="py-3 pr-6 whitespace-nowrap">
                        {row.date}
                      </td>
                      <td className="py-3 pr-6 whitespace-nowrap">
                        {row.course}
                      </td>
                      <td className="py-3 pr-6 whitespace-nowrap">
                        {row.txn}
                      </td>
                      <td className="py-3 pr-6 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${
                            row.status === "Paid"
                              ? "bg-emerald-50 text-emerald-600"
                              : "bg-amber-50 text-amber-600"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="py-3 pr-6 whitespace-nowrap">
                        <button className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-medium text-blue-600">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
