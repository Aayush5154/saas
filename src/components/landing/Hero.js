"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-24 left-4 md:left-12 w-20 h-20 md:w-28 md:h-28">
          <Image
            src="/assets/Ellipse1.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute bottom-16 right-8 md:right-20 w-16 h-16 md:w-24 md:h-24">
          <Image
            src="/assets/Ellipse2.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute top-16 right-4 md:right-16 w-14 h-14 md:w-20 md:h-20">
          <Image
            src="/assets/Ellipse3.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold
                         leading-[1.08] tracking-tight mb-6 text-white">
            Beautiful Landing Page
            <br />
            Design for You
          </h1>

          <p className="text-base md:text-lg text-muted leading-relaxed mb-10 max-w-xl mx-auto">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem.
          </p>

          <Link
            href="/login"
            className="inline-flex items-center px-7 py-3 rounded-full text-sm font-semibold
                       text-white bg-accent-pink hover:bg-accent-pink/90
                       transition-all duration-200 shadow-lg shadow-accent-pink/25"
          >
            Download Template
          </Link>
        </div>
      </div>
    </section>
  );
}
