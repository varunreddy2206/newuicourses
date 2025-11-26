"use client";

import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";

/**
 * CourseAdding.jsx
 * Single-file, Tailwind CSS-based component.
 *
 * Notes:
 * - Requires Tailwind CSS already configured in the project.
 * - Replace avatar / placeholder image paths if needed.
 * - All form controls are purely UI (no backend).
 */

export default function CourseAdding() {
  const [activeTab, setActiveTab] = useState("self"); // "self" | "live" | "classroom" | "corp"
  const [modules, setModules] = useState([
    {
      id: 1,
      title: "Introduction",
      lessons: [
        { id: 1, title: "Getting Started with Python", duration: "15 min" },
        { id: 2, title: "Getting Started with Python", duration: "15 min" },
      ],
    },
    { id: 2, title: "Enter Module Name", lessons: [] },
  ]);
  const [basePrice, setBasePrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [includeGST, setIncludeGST] = useState(true);

  // Pricing derived values
  const numericBase = parseFloat(basePrice || 0);
  const numericDiscount = parseFloat(discount || 0);
  const finalPriceBefore = Math.max(0, numericBase - (numericBase * numericDiscount) / 100);
  const gstAmount = includeGST ? parseFloat((finalPriceBefore * 0.18).toFixed(2)) : 0;
  const totalAmount = parseFloat((finalPriceBefore + gstAmount).toFixed(2));

  // Color maps for the header & accents
  const theme = {
    self: {
      accent: "blue",
      headerBg: "bg-blue-50",
      pill: "bg-blue-600 text-white",
      border: "border-blue-200",
      accentText: "text-blue-600",
    },
    live: {
      accent: "green",
      headerBg: "bg-green-50",
      pill: "bg-green-600 text-white",
      border: "border-green-200",
      accentText: "text-green-600",
    },
    classroom: {
      accent: "orange",
      headerBg: "bg-orange-50",
      pill: "bg-orange-500 text-white",
      border: "border-orange-200",
      accentText: "text-orange-500",
    },
    corp: {
      accent: "purple",
      headerBg: "bg-purple-50",
      pill: "bg-purple-600 text-white",
      border: "border-purple-200",
      accentText: "text-purple-600",
    },
  }[activeTab];

  // Helpers to mutate modules (simple UI behavior)
  function addModule() {
    const id = Date.now();
    setModules((m) => [...m, { id, title: "New Module", lessons: [] }]);
  }
  function addLesson(moduleId) {
    setModules((m) =>
      m.map((mod) =>
        mod.id === moduleId
          ? {
              ...mod,
              lessons: [
                ...mod.lessons,
                {
                  id: Date.now(),
                  title: "New Lesson",
                  duration: "10 min",
                },
              ],
            }
          : mod
      )
    );
  }

  // Responsive grid widths attempt to stay identical across big breakpoints
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex">
      {/* Shared admin sidebar on the left */}
      <AdminSidebar />

      {/* Main */}
      <main className="flex-1 max-w-6xl mx-auto p-4 md:p-8 lg:p-10">
          {/* Page title */}
          <div className="w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold">
                  Artificial Intelligence &amp; Machine Learning with Python Training
                </h1>
                <div className="mt-2 flex gap-2 items-center">
                  <span className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600">Data Science</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600">Beginner</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="hidden sm:inline-block px-4 py-2 rounded border border-gray-200 bg-white text-sm">
                  Cancel
                </button>
                <button className="hidden sm:inline-block px-4 py-2 rounded border border-gray-200 bg-white text-sm">
                  Save Draft
                </button>
                <button className="px-4 py-2 rounded bg-blue-600 text-white text-sm">Publish Course</button>
              </div>
            </div>

            {/* Card container */}
            <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              {/* Training Options Tabs */}
              <div className="mb-6">
                <h2 className="text-lg font-medium mb-3">Training Options</h2>
                <div className="flex gap-3 flex-wrap">
                  <TabButton
                    label="Self Learning"
                    active={activeTab === "self"}
                    onClick={() => setActiveTab("self")}
                    theme={theme}
                  />
                  <TabButton
                    label="Live Classes"
                    active={activeTab === "live"}
                    onClick={() => setActiveTab("live")}
                    theme={theme}
                  />
                  <TabButton
                    label="Classroom Classes"
                    active={activeTab === "classroom"}
                    onClick={() => setActiveTab("classroom")}
                    theme={theme}
                  />
                  <TabButton
                    label="Corporate"
                    active={activeTab === "corp"}
                    onClick={() => setActiveTab("corp")}
                    theme={theme}
                  />
                </div>
              </div>

              {/* Active Section Card */}
              <div
                className={`rounded-lg border ${theme.border} overflow-hidden`}
                style={{ boxShadow: "0 1px 0 rgba(0,0,0,0.02)" }}
              >
                {/* header label with colored bg */}
                <div className={`px-6 py-4 ${theme.headerBg} border-b ${theme.border}`}>
                  <div className={`text-lg font-semibold ${theme.accentText}`}>
                    {activeTab === "self" && "Self Learning"}
                    {activeTab === "live" && "Live Classes"}
                    {activeTab === "classroom" && "Classroom Classes"}
                    {activeTab === "corp" && "Corporate"}
                  </div>
                </div>

                <div className="p-6">
                  {/* Sections vary depending on active tab */}
                  {activeTab === "self" && (
                    <>
                      {/* Curriculum Builder */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-md font-medium">Curriculum Builder</h3>
                          <button
                            onClick={addModule}
                            className={`inline-flex items-center gap-2 px-3 py-2 rounded ${theme.pill} text-sm`}
                          >
                            + Add Module
                          </button>
                        </div>

                        <div className="mt-4 space-y-4">
                          {modules.map((mod) => (
                            <div
                              key={mod.id}
                              className="border border-gray-200 rounded bg-white p-3"
                              aria-hidden="true"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="text-sm font-semibold">Module {modules.indexOf(mod) + 1}:</div>
                                  <input
                                    className="border border-gray-200 rounded px-3 py-2 text-sm w-60 md:w-96"
                                    value={mod.title}
                                    onChange={(e) =>
                                      setModules((m) =>
                                        m.map((mm) => (mm.id === mod.id ? { ...mm, title: e.target.value } : mm))
                                      )
                                    }
                                  />
                                </div>

                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => addLesson(mod.id)}
                                    className="text-sm text-blue-600 hover:underline"
                                  >
                                    + Add Lesson
                                  </button>
                                </div>
                              </div>

                              <div className="mt-3 space-y-2">
                                {mod.lessons.map((les) => (
                                  <div
                                    key={les.id}
                                    className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded p-2"
                                  >
                                    <div className="w-3 h-3 rounded bg-gray-300" />
                                    <input
                                      className="flex-1 border border-transparent focus:border-gray-300 bg-transparent px-2 py-2 text-sm"
                                      value={les.title}
                                      onChange={(e) =>
                                        setModules((m) =>
                                          m.map((mm) =>
                                            mm.id === mod.id
                                              ? {
                                                  ...mm,
                                                  lessons: mm.lessons.map((l) =>
                                                    l.id === les.id ? { ...l, title: e.target.value } : l
                                                  ),
                                                }
                                              : mm
                                          )
                                        )
                                      }
                                    />
                                    <input
                                      className="w-24 border border-gray-200 rounded px-2 py-1 text-sm"
                                      value={les.duration}
                                      onChange={(e) =>
                                        setModules((m) =>
                                          m.map((mm) =>
                                            mm.id === mod.id
                                              ? {
                                                  ...mm,
                                                  lessons: mm.lessons.map((l) =>
                                                    l.id === les.id ? { ...l, duration: e.target.value } : l
                                                  ),
                                                }
                                              : mm
                                          )
                                        )
                                      }
                                    />
                                    <button className="text-xs px-3 py-1 border border-gray-200 rounded text-gray-600">
                                      Upload Video
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pricing */}
                      <PricingBox
                        basePrice={basePrice}
                        setBasePrice={setBasePrice}
                        discount={discount}
                        setDiscount={setDiscount}
                        includeGST={includeGST}
                        setIncludeGST={setIncludeGST}
                        finalPriceBefore={finalPriceBefore}
                        gstAmount={gstAmount}
                        totalAmount={totalAmount}
                        theme={theme}
                      />
                    </>
                  )}

                  {activeTab === "live" && (
                    <>
                      <div className="mb-6">
                        <h3 className="text-md font-medium">Online Batch Schedule</h3>

                        <div className="mt-3 border border-gray-100 rounded p-4 bg-white">
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
                            <div>
                              <label className="text-xs text-gray-500">Batch Title</label>
                              <input className="w-full border border-gray-200 rounded px-3 py-2 text-sm" defaultValue="Evening Weekday Batch" />
                            </div>

                            <div className="md:col-span-2 grid grid-cols-3 gap-2">
                              <div>
                                <label className="text-xs text-gray-500">Start</label>
                                <input className="w-full border border-gray-200 rounded px-3 py-2 text-sm" defaultValue="11/11/2025" />
                              </div>
                              <div>
                                <label className="text-xs text-gray-500">to</label>
                                <input className="w-full border border-gray-200 rounded px-3 py-2 text-sm" defaultValue="11/11/2025" />
                              </div>
                              <div>
                                <label className="text-xs text-gray-500">Seats</label>
                                <input className="w-full border border-gray-200 rounded px-3 py-2 text-sm" defaultValue="34" />
                              </div>
                            </div>

                            <div>
                              <label className="text-xs text-gray-500">Time</label>
                              <div className="flex gap-2">
                                <input className="w-20 border border-gray-200 rounded px-2 py-2 text-sm" defaultValue="00:00" />
                                <input className="w-20 border border-gray-200 rounded px-2 py-2 text-sm" defaultValue="00:00" />
                                <select className="border border-gray-200 rounded px-2 py-2 text-sm">
                                  <option>AM</option>
                                  <option>PM</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="mt-3">
                            <button className={`px-3 py-2 rounded ${theme.pill} text-sm`}>Save Schedule</button>
                          </div>

                          <div className="mt-4">
                            <div className="text-sm text-gray-500 mb-2">Scheduled Batch Timings</div>
                            <div className="space-y-2">
                              <div className="border border-gray-100 rounded px-3 py-2 bg-white flex justify-between items-center">
                                <div className="text-sm">1 Dec 2024 - 1 Feb 2025 Weekday Batch (11 AM - 1 PM)</div>
                                <div className="text-gray-400">⋮</div>
                              </div>
                              <div className="border border-gray-100 rounded px-3 py-2 bg-white flex justify-between items-center">
                                <div className="text-sm">1 Dec 2024 - 1 Feb 2025 Weekday Batch (02 PM - 04 PM)</div>
                                <div className="text-gray-400">⋮</div>
                              </div>
                              <div className="border border-gray-100 rounded px-3 py-2 bg-white flex justify-between items-center">
                                <div className="text-sm">1 Dec 2024 - 1 Feb 2025 Weekday Batch (06 PM - 08 PM)</div>
                                <div className="text-gray-400">⋮</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <PricingBox
                        basePrice={basePrice}
                        setBasePrice={setBasePrice}
                        discount={discount}
                        setDiscount={setDiscount}
                        includeGST={includeGST}
                        setIncludeGST={setIncludeGST}
                        finalPriceBefore={finalPriceBefore}
                        gstAmount={gstAmount}
                        totalAmount={totalAmount}
                        theme={theme}
                      />
                    </>
                  )}

                  {activeTab === "classroom" && (
                    <>
                      <div className="mb-6">
                        <h3 className="text-md font-medium">Classroom Batch Schedule</h3>

                        <div className="mt-3 border border-gray-100 rounded p-4 bg-white">
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
                            <div>
                              <label className="text-xs text-gray-500">Batch Title</label>
                              <input className="w-full border border-gray-200 rounded px-3 py-2 text-sm" defaultValue="Evening Weekday Batch" />
                            </div>

                            <div className="md:col-span-2 grid grid-cols-3 gap-2">
                              <div>
                                <label className="text-xs text-gray-500">Start</label>
                                <input className="w-full border border-gray-200 rounded px-3 py-2 text-sm" defaultValue="11/11/2025" />
                              </div>
                              <div>
                                <label className="text-xs text-gray-500">to</label>
                                <input className="w-full border border-gray-200 rounded px-3 py-2 text-sm" defaultValue="11/11/2025" />
                              </div>
                              <div>
                                <label className="text-xs text-gray-500">Seats</label>
                                <input className="w-full border border-gray-200 rounded px-3 py-2 text-sm" defaultValue="34" />
                              </div>
                            </div>

                            <div>
                              <label className="text-xs text-gray-500">Time</label>
                              <div className="flex gap-2">
                                <input className="w-20 border border-gray-200 rounded px-2 py-2 text-sm" defaultValue="00:00" />
                                <input className="w-20 border border-gray-200 rounded px-2 py-2 text-sm" defaultValue="00:00" />
                                <select className="border border-gray-200 rounded px-2 py-2 text-sm">
                                  <option>AM</option>
                                  <option>PM</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="mt-3">
                            <label className="text-xs text-gray-500">Training Center</label>
                            <input className="w-full border border-gray-200 rounded px-3 py-2 text-sm" placeholder="Paste Address Link" />
                          </div>

                          <div className="mt-3">
                            <button className={`px-3 py-2 rounded ${theme.pill} text-sm`}>Save Schedule</button>
                          </div>

                          <div className="mt-4">
                            <div className="text-sm text-gray-500 mb-2">Scheduled Batch Timings</div>
                            <div className="space-y-2">
                              <div className="border border-gray-100 rounded px-3 py-2 bg-white flex justify-between items-center">
                                <div className="text-sm">1 Dec 2024 - 1 Feb 2025 Weekday Batch (11 AM - 1 PM)</div>
                                <div className="text-gray-400">⋮</div>
                              </div>
                              <div className="border border-gray-100 rounded px-3 py-2 bg-white flex justify-between items-center">
                                <div className="text-sm">1 Dec 2024 - 1 Feb 2025 Weekday Batch (02 PM - 04 PM)</div>
                                <div className="text-gray-400">⋮</div>
                              </div>
                              <div className="border border-gray-100 rounded px-3 py-2 bg-white flex justify-between items-center">
                                <div className="text-sm">1 Dec 2024 - 1 Feb 2025 Weekday Batch (06 PM - 08 PM)</div>
                                <div className="text-gray-400">⋮</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <PricingBox
                        basePrice={basePrice}
                        setBasePrice={setBasePrice}
                        discount={discount}
                        setDiscount={setDiscount}
                        includeGST={includeGST}
                        setIncludeGST={setIncludeGST}
                        finalPriceBefore={finalPriceBefore}
                        gstAmount={gstAmount}
                        totalAmount={totalAmount}
                        theme={theme}
                      />
                    </>
                  )}

                  {activeTab === "corp" && (
                    <>
                      <div className="mb-6">
                        <h3 className="text-md font-medium">Corporate Options</h3>
                        <div className="mt-3 border border-gray-100 rounded p-4 bg-white">
                          <p className="text-sm text-gray-600">Corporate training details go here.</p>
                        </div>
                      </div>

                      <PricingBox
                        basePrice={basePrice}
                        setBasePrice={setBasePrice}
                        discount={discount}
                        setDiscount={setDiscount}
                        includeGST={includeGST}
                        setIncludeGST={setIncludeGST}
                        finalPriceBefore={finalPriceBefore}
                        gstAmount={gstAmount}
                        totalAmount={totalAmount}
                        theme={theme}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Footer actions */}
            <div className="mt-6 flex justify-end gap-3">
              <button className="px-4 py-2 rounded border border-gray-200 bg-white text-sm">Cancel</button>
              <button className="px-4 py-2 rounded border border-gray-200 bg-white text-sm">Save Draft</button>
              <button className="px-4 py-2 rounded bg-blue-600 text-white text-sm">Publish Course</button>
            </div>
          </div>
        </main>
    </div>
  );
}

/* ----- Tab button component ----- */
function TabButton({ label, active, onClick, theme }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded border ${
        active ? `${theme.pill} border-transparent` : "bg-white border-gray-200 text-gray-700"
      } text-sm`}
      type="button"
    >
      {active ? (
        <span className="w-3 h-3 rounded-full bg-white/20" />
      ) : (
        <span className="w-3 h-3 rounded-full bg-gray-200" />
      )}
      {label}
    </button>
  );
}

/* ----- Pricing Box component ----- */
function PricingBox({
  basePrice,
  setBasePrice,
  discount,
  setDiscount,
  includeGST,
  setIncludeGST,
  finalPriceBefore,
  gstAmount,
  totalAmount,
  theme,
}) {
  return (
    <div className="mt-4 border border-gray-100 rounded-lg bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-blue-600 font-semibold">₹</span>
          <h4 className="text-sm font-semibold text-gray-800">Pricing</h4>
        </div>
        <div className="text-gray-400 text-lg leading-none">⋮</div>
      </div>

      {/* Inputs + Final price */}
      <div className="px-4 pt-4 pb-3 space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="text-[11px] font-semibold uppercase text-gray-500">
              Base Price (₹)
            </label>
            <input
              type="number"
              value={basePrice}
              onChange={(e) => setBasePrice(e.target.value)}
              className="mt-1 w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder:text-gray-400"
              placeholder="0"
            />
          </div>
          <div>
            <label className="text-[11px] font-semibold uppercase text-gray-500">
              Discount (%)
            </label>
            <input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="mt-1 w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder:text-gray-400"
              placeholder="0"
            />
          </div>
        </div>

        {/* Final price pill */}
        <div>
          <label className="text-[11px] font-semibold uppercase text-gray-500">
            Final Price
          </label>
          <div className="mt-1 flex items-center justify-between rounded-md bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-700">
            <span>Final Price</span>
            <span>₹ {finalPriceBefore.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* GST toggle */}
      <div className="px-4 pb-3 flex items-center gap-3">
        <div
          className={`relative inline-flex h-5 w-9 items-center rounded-full border transition-colors ${
            includeGST ? "bg-blue-500 border-blue-500" : "bg-gray-200 border-gray-200"
          }`}
          onClick={() => setIncludeGST(!includeGST)}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
              includeGST ? "translate-x-4" : "translate-x-0.5"
            }`}
          />
        </div>
        <span className="text-sm text-gray-700">Include GST (18%)</span>
      </div>

      {/* Summary rows */}
      <div className="px-4 pb-4">
        <div className="border border-gray-100 rounded-lg overflow-hidden text-sm">
          <div className="flex justify-between px-4 py-2 bg-white text-gray-600 border-b border-gray-100">
            <span>Final Price</span>
            <span>₹ {finalPriceBefore.toLocaleString()}</span>
          </div>
          <div className="flex justify-between px-4 py-2 bg-white text-gray-600 border-b border-gray-100">
            <span>GST (18%)</span>
            <span>₹ {gstAmount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between px-4 py-2 bg-gray-50 text-base font-semibold">
            <span>Total Amount</span>
            <span>₹ {totalAmount.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
