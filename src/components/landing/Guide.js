"use client";

import Image from "next/image";
import Link from "next/link";

const floatingIcons = [
  { src: "/assets/Ellipse 4.png", top: "15%", left: "8%", sizeMobile: 40, sizeDesktop: 56 },
  { src: "/assets/Ellipse 5.png", top: "8%", left: "58%", sizeMobile: 36, sizeDesktop: 48 },
  { src: "/assets/Ellipse 6.png", top: "40%", left: "3%", sizeMobile: 14, sizeDesktop: 20 },
  { src: "/assets/Ellipse 7.png", top: "5%", left: "48%", sizeMobile: 12, sizeDesktop: 16 },
  { src: "/assets/Ellipse 8.png", top: "72%", left: "18%", sizeMobile: 38, sizeDesktop: 52 },
  { src: "/assets/Ellipse 9.png", top: "35%", left: "35%", sizeMobile: 14, sizeDesktop: 50},
];

export default function Guide() {
  return (
    <section className="relative py-16 sm:py-20 md:py-32 overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          <div className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[450px] flex items-center justify-center mx-auto max-w-[320px] sm:max-w-[400px] md:max-w-none">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/assets/el.png"
                alt=""
                width={400}
                height={400}
                className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] object-contain opacity-200%"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10">
              <Image
                src="/assets/Ellipse1.png"
                alt=""
                width={40}
                height={80}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
              />
            </div>

            {floatingIcons.map(({ src, top, left, sizeMobile, sizeDesktop }, i) => (
              <div
                key={i}
                className="absolute z-20"
                style={{ top, left }}
              >
                <Image
                  src={src}
                  alt=""
                  width={sizeDesktop}
                  height={sizeDesktop}
                  className="object-contain w-[var(--size-mobile)] sm:w-[var(--size-sm)] md:w-[var(--size-desktop)] h-[var(--size-mobile)] sm:h-[var(--size-sm)] md:h-[var(--size-desktop)]"
                  style={{
                    "--size-mobile": `${sizeMobile}px`,
                    "--size-sm": `${Math.round(sizeMobile * 1.2)}px`,
                    "--size-desktop": `${sizeDesktop}px`
                  }}
                />
              </div>
            ))}
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4 sm:mb-5 leading-tight">
              We&rsquo;re here to guide
              <br />
              and help you at all times
            </h2>

            <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem it was
              designed for in the most efficient way possible.
            </p>

            <Link
              href="#contact"
              className="inline-flex items-center px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm font-semibold
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
