"use client";

import {
  Clipboard,
  Layers,
  Smile,
  TrendingUp,
  Wrench,
  Monitor,
} from "lucide-react";
import { features } from "@/data/landing-content";

const iconMap = {
  Clipboard,
  Layers,
  Smile,
  TrendingUp,
  Wrench,
  Monitor,
};

/* Alternating icon bg colors to match Figma (some transparent, some gradient) */
const iconStyles = [
  "bg-transparent border border-surface-border",
  "bg-transparent border border-surface-border",
  "bg-gradient-to-br from-brand-500 to-accent-pink",
  "bg-transparent border border-surface-border",
  "bg-transparent border border-surface-border",
  "bg-transparent border border-surface-border",
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="section-container">
        {/* ── Section Header (left-aligned like Figma) ─────── */}
        <div className="max-w-xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Feature Boxes
          </h2>
          <p className="text-base text-muted leading-relaxed">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem.
          </p>
        </div>

        {/* ── 3×2 Feature Grid ─────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.iconName] || Clipboard;

            return (
              <article
                key={feature.id}
                className="group rounded-2xl p-6 md:p-8
                           bg-surface border border-surface-border
                           hover:border-brand-500/40
                           hover:-translate-y-1
                           transition-all duration-300 ease-out
                           text-center"
              >
                {/* Circular icon */}
                <div
                  className={`w-14 h-14 rounded-full mx-auto mb-5
                              flex items-center justify-center
                              ${iconStyles[index] || "bg-transparent border border-surface-border"}`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
