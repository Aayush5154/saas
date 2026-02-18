"use client";

import Link from "next/link";
import {
  Figma,
  Github,
  Chrome,
  Slack,
  Trello,
  Dribbble,
} from "lucide-react";

const floatingIcons = [
  { Icon: Figma, top: "10%", left: "15%", size: "w-12 h-12", bg: "bg-surface border border-surface-border" },
  { Icon: Github, top: "5%", left: "55%", size: "w-10 h-10", bg: "bg-surface border border-surface-border" },
  { Icon: Chrome, top: "35%", left: "0%", size: "w-10 h-10", bg: "bg-surface border border-surface-border" },
  { Icon: Slack, top: "30%", left: "70%", size: "w-14 h-14", bg: "bg-gradient-to-br from-brand-500 to-accent-pink" },
  { Icon: Trello, top: "65%", left: "10%", size: "w-11 h-11", bg: "bg-surface border border-surface-border" },
  { Icon: Dribbble, top: "60%", left: "60%", size: "w-10 h-10", bg: "bg-surface border border-surface-border" },
];

export default function Guide() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative w-full h-[340px] md:h-[400px]">
            {floatingIcons.map(({ Icon, top, left, size, bg }, i) => (
              <div
                key={i}
                className={`absolute ${size} rounded-full ${bg} flex items-center justify-center shadow-lg`}
                style={{ top, left }}
              >
                <Icon className="w-5 h-5 text-white" />
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
