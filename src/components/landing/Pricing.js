"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, Crown } from "lucide-react";
import { pricing } from "@/data/landing-content";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  /**
   * Compute display price.
   * Yearly = monthly × 10 (2 months free). Free stays free.
   */
  function getPrice(plan) {
    if (plan.price === "$0") return "$0";
    if (isYearly) {
      const monthly = parseInt(plan.price.replace("$", ""), 10);
      return `$${monthly * 10}`;
    }
    return plan.price;
  }

  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden">
      {/* ── Background accents ─────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]
                     rounded-full bg-brand-500/10 blur-[120px]"
        />
      </div>

      <div className="section-container relative z-10">
        {/* ── Section Header ───────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                        border border-brand-500/30 bg-brand-500/10 mb-6"
          >
            <Crown className="w-4 h-4 text-brand-400" />
            <span className="text-sm font-medium text-brand-300">Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Simple,{" "}
            <span className="gradient-text">transparent pricing</span>
          </h2>

          <p className="text-lg text-muted leading-relaxed">
            No hidden fees. Upgrade, downgrade, or cancel at any time.
          </p>
        </div>

        {/* ── Monthly / Yearly Toggle ──────────────────────── */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <span
            className={`text-sm font-medium transition-colors duration-200 ${
              !isYearly ? "text-white" : "text-muted"
            }`}
          >
            Monthly
          </span>

          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
              isYearly ? "bg-brand-500" : "bg-surface-light"
            }`}
            aria-label="Toggle yearly pricing"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white
                          shadow-md transition-transform duration-300 ${
                            isYearly ? "translate-x-7" : "translate-x-0"
                          }`}
            />
          </button>

          <span
            className={`text-sm font-medium transition-colors duration-200 ${
              isYearly ? "text-white" : "text-muted"
            }`}
          >
            Yearly
            <span className="ml-1.5 text-xs font-semibold text-emerald-400">
              Save 17%
            </span>
          </span>
        </div>

        {/* ── Pricing Cards ────────────────────────────────── */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {pricing.map((plan, index) => {
            const recommended = plan.isRecommended;

            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl flex flex-col ${
                  recommended ? "md:-mt-4 md:mb-0" : ""
                }`}
              >
                {/* Gradient border for recommended */}
                {recommended && (
                  <div
                    aria-hidden="true"
                    className="absolute -inset-[1px] rounded-2xl
                               bg-gradient-to-br from-brand-500 via-brand-400 to-accent-pink
                               pointer-events-none"
                  />
                )}

                <div
                  className={`relative flex flex-col flex-1 rounded-2xl p-6 md:p-8
                              border backdrop-blur-sm ${
                                recommended
                                  ? "bg-surface border-transparent"
                                  : "bg-surface/60 border-surface-border hover:border-brand-500/30"
                              } transition-all duration-300`}
                >
                  {/* Recommended badge */}
                  {recommended && (
                    <div
                      className="absolute -top-3.5 left-1/2 -translate-x-1/2
                                  inline-flex items-center gap-1.5 px-4 py-1
                                  rounded-full bg-gradient-brand text-xs font-bold text-white
                                  shadow-glow"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Most Popular
                    </div>
                  )}

                  {/* Plan name */}
                  <h3 className="text-lg font-bold text-white mt-2 mb-2">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl md:text-5xl font-extrabold text-white">
                      {getPrice(plan)}
                    </span>
                    {plan.price !== "$0" && (
                      <span className="text-muted text-sm">
                        /{isYearly ? "year" : "month"}
                      </span>
                    )}
                  </div>

                  {/* Feature checklist */}
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            recommended ? "text-brand-400" : "text-brand-500/70"
                          }`}
                        />
                        <span className="text-sm text-muted">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/login"
                    className={`w-full text-center text-sm font-semibold py-3 rounded-xl
                                transition-all duration-300 ${
                                  recommended
                                    ? "btn-brand"
                                    : "btn-outline hover:bg-white/[0.03]"
                                }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
