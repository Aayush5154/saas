"use client";

import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/landing-content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full
                     bg-brand-500/10 blur-[120px]"
        />
        <div
          className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full
                     bg-accent-pink/8 blur-[100px]"
        />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                        border border-brand-500/30 bg-brand-500/10 mb-6"
          >
            <Star className="w-4 h-4 text-brand-400" />
            <span className="text-sm font-medium text-brand-300">
              Testimonials
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Loved by{" "}
            <span className="gradient-text">teams worldwide</span>
          </h2>

          <p className="text-lg text-muted leading-relaxed">
            Don&apos;t just take our word for it — hear from the teams that
            transformed their workflows with SaaSify.
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <article
              key={index}
              className="group relative rounded-2xl p-6 md:p-8
                         bg-surface/60 border border-surface-border
                         backdrop-blur-sm
                         hover:border-brand-500/30 hover:bg-surface-light/40
                         transition-all duration-300 ease-out
                         flex flex-col"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                           bg-gradient-card transition-opacity duration-300 pointer-events-none"
              />

              <Quote className="relative z-10 w-8 h-8 text-brand-500/40 mb-4" />

              <p className="relative z-10 text-[15px] leading-relaxed text-muted mb-6 flex-1">
                &ldquo;{item.text}&rdquo;
              </p>

              <div className="relative z-10 flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <div className="relative z-10 flex items-center gap-3 pt-5 border-t border-surface-border">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-light flex-shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-muted">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
