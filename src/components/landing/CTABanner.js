"use client";

import Link from "next/link";
import Image from "next/image";

export default function CTABanner() {
  return (
    <section className="relative pt-0 pb-20 md:pb-28 -mt-28 md:-mt-40">
      <div className="section-container">
        <div
          className="relative overflow-hidden rounded-3xl
                     bg-gradient-to-r from-brand-600 via-brand-500 to-accent-pink
                     p-10 md:p-16"
        >
          {/* Frame.png world map on right side */}
          <div className="absolute top-0 right-0 bottom-0 w-[55%] pointer-events-none">
            <Image
              src="/assets/Frame.png"
              alt=""
              fill
              className="object-contain object-right"
            />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            {/* ── Left: Text ──────────────────────────── */}
            <div>
              <p className="text-sm font-medium text-white/70 tracking-wide mb-3 uppercase">
                Love our Our Tool?
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-8">
                Fell Free to Join our
                <br />
                15 Days Free Trial
              </h2>

              <Link
                href="/login"
                className="inline-flex items-center px-7 py-3 rounded-full text-sm font-semibold
                           text-white bg-dark-bg/80 hover:bg-dark-bg
                           transition-all duration-200 shadow-lg shadow-black/20
                           border border-white/10"
              >
                Download Template
              </Link>
            </div>

            {/* Right side is the bb.png image (positioned absolutely above) */}
            <div className="hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
