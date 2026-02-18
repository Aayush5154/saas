"use client";

import { companies } from "@/data/landing-content";
import Image from "next/image";

export default function Companies() {
  return (
    <section className="relative py-24 overflow-visible bg-black">
      
      {/* 🌑 FULL-WIDTH gray panel */}
      <div className="relative w-full bg-[#111318] py-36 overflow-hidden z-0">

        {/* 🌍 World map */}
        <div className="absolute -top-20 -bottom-20 inset-x-0 pointer-events-none">
          <Image
            src="/assets/bb.png"
            alt=""
            fill
            className="object-contain object-center opacity-20"
          />
        </div>

        {/* 🔼 Content container */}
        <div className="relative z-10 section-container text-center">
          
          {/* Header */}
          <div className="max-w-xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Companies we Worked With
              <br />
              in Since 2015
            </h2>
          </div>

          {/* Company badges */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {companies.map((name) => (
              <span
                key={name}
                className="px-8 py-3 rounded-lg text-sm font-semibold tracking-wide
                           text-gray-300 bg-black/40 border border-gray-700
                           hover:text-white hover:border-gray-500
                           transition-all duration-200 select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 👇 EXTRA SPACE so gray box goes behind purple CTA */}
      <div className="h-32 bg-[#111318] -mt-20"></div>
    </section>
  );
}
