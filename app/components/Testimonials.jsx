"use client";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="w-full py-24 px-4 md:px-10 lg:px-20 bg-white">
      {/* TITLE BLOCK */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-block px-5 py-2 text-gray-500 text-sm border rounded-full mb-4">
          Testimonials
        </span>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
          What Our Students Say
        </h2>

        <p className="text-gray-500 mt-4 text-base leading-relaxed">
          ShipX ensures smooth supply chains with reliable service and timely
          deliveries, and here's what our customers say
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 max-w-6xl mx-auto">
        {/* CARD 1 */}
        <div className="bg-[#f8f8f8] rounded-3xl p-10 shadow-sm flex flex-col">
          <div className="flex items-center gap-4">
            <Image
              src="/testimonial1.png"
              width={90}
              height={90}
              alt="Marie Jane"
              className="rounded-full object-cover"
            />
            <div className="text-4xl text-blue-600 font-bold">”</div>
          </div>

          <p className="mt-6 text-[17px] leading-relaxed text-gray-700">
            Ship X has completely changed the way we manage logistics. The
            platform is easy to use, and their tracking system keeps us updated
            at every step.
          </p>

          <div className="flex items-center justify-between mt-10">
            <div>
              <p className="font-semibold text-gray-900">Marie Jane</p>
              <p className="text-sm text-gray-500">CFO at Movix</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
              <p className="text-sm text-gray-600">Verified</p>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-[#f8f8f8] rounded-3xl p-10 shadow-sm flex flex-col">
          <div className="flex items-center gap-4">
            <Image
              src="/testimonial2.png"
              width={90}
              height={90}
              alt="Olivia Jonathan"
              className="rounded-full object-cover"
            />
            <div className="text-4xl text-blue-600 font-bold">”</div>
          </div>

          <p className="mt-6 text-[17px] leading-relaxed text-gray-700">
            From booking to final delivery, Ship X delivers excellence. Their
            support team is responsive, and shipments always arrive on time.
            It's the reliability we've been looking for.
          </p>

          <div className="flex items-center justify-between mt-10">
            <div>
              <p className="font-semibold text-gray-900">Olivia Jonathan</p>
              <p className="text-sm text-gray-500">CEO at Shipzo</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
              <p className="text-sm text-gray-600">Verified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
