"use client";

import Image from "next/image";
import Link from "next/link";

const floatingEllipses = [
  { src: "/assets/Ellipse 4.png", top: "5%", left: "10%", size: "w-16 h-16" },
  { src: "/assets/Ellipse 5.png", top: "10%", left: "60%", size: "w-14 h-14" },
  { src: "/assets/Ellipse 6.png", top: "35%", left: "5%", size: "w-12 h-12" },
  { src: "/assets/Ellipse 7.png", top: "30%", left: "70%", size: "w-18 h-18" },
  { src: "/assets/Ellipse 8.png", top: "60%", left: "15%", size: "w-14 h-14" },
  { src: "/assets/Ellipse 9.png", top: "55%", left: "65%", size: "w-12 h-12" },
];

export default function Guide() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/assets/el.png')" }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative w-full h-[340px] md:h-[400px]">
            {floatingEllipses.map(({ src, top, left, size }, i) => (
              <div
                key={i}
                className={`absolute ${size} rounded-full flex items-center justify-center animate-pulse`}
                style={{ top, left }}
              >
                <Image
                  src={src}
                  alt=""
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}

            <div
              aria-hidden="true"
              className="absolute top-1/2 left-[35%] -translate-x-1/2 -translate-y-1/2
                         w-[220px] h-[220px] rounded-full
                         border border-dashed border-surface-border opacity-40"
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-5 leading-tight">
              We&rsquo;re here to guide
              <br />
              and help you at all times
            </h2>

            <p className="text-base text-muted leading-relaxed mb-8 max-w-md">
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem it was
              designed for in the most efficient way possible.
            </p>

            <Link
              href="#contact"
              className="inline-flex items-center px-7 py-3 rounded-full text-sm font-semibold
                         text-white bg-accent-pink hover:bg-accent-pink/90
                         transition-all duration-200 shadow-lg shadow-accent-pink/25"
            >
              Discover
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
