"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faq } from "@/data/landing-content";

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-surface-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4
                   py-5 md:py-6 text-left group
                   transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span
          className={`text-base md:text-lg font-semibold transition-colors duration-200 ${
            isOpen ? "text-white" : "text-muted group-hover:text-white"
          }`}
        >
          {item.question}
        </span>

        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-muted transition-transform duration-300 ${
            isOpen ? "rotate-180 text-brand-400" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100 pb-5 md:pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm md:text-[15px] text-muted leading-relaxed pr-10">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full
                     bg-brand-500/8 blur-[120px]"
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <div className="lg:sticky lg:top-32">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                          border border-brand-500/30 bg-brand-500/10 mb-6"
            >
              <HelpCircle className="w-4 h-4 text-brand-400" />
              <span className="text-sm font-medium text-brand-300">FAQ</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
              Frequently asked{" "}
              <span className="gradient-text">questions</span>
            </h2>

            <p className="text-lg text-muted leading-relaxed max-w-md">
              Everything you need to know about SaaSify. Can&apos;t find the
              answer you&apos;re looking for? Reach out to our support team.
            </p>
          </div>


          <div
            className="rounded-2xl border border-surface-border
                       bg-surface/40 backdrop-blur-sm
                       px-6 md:px-8"
          >
            {faq.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
