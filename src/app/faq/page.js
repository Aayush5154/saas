"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { faq } from "@/data/landing-content";

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-surface-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4
                   py-5 md:py-6 text-left group transition-colors duration-200"
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
            isOpen ? "rotate-180 text-accent-pink" : ""
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

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main>
      <Navbar />


      <section className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute top-24 left-4 md:left-12 w-20 h-20 md:w-28 md:h-28">
            <Image src="/assets/Ellipse1.png" alt="" fill className="object-contain" />
          </div>
          <div className="absolute bottom-8 right-8 md:right-20 w-16 h-16 md:w-24 md:h-24">
            <Image src="/assets/Ellipse2.png" alt="" fill className="object-contain" />
          </div>
          <div className="absolute top-16 right-4 md:right-16 w-14 h-14 md:w-20 md:h-20">
            <Image src="/assets/Ellipse3.png" alt="" fill className="object-contain" />
          </div>
        </div>

        <div className="section-container relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight mb-5 text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-base md:text-lg text-muted leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our platform. Can&apos;t find the
            answer? Reach out to our support team.
          </p>
        </div>
      </section>


      <section className="py-12 md:py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-2xl border border-surface-border
                         bg-surface/40 px-6 md:px-8"
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

            <div
              className="rounded-2xl border border-surface-border
                         bg-surface/40 px-6 md:px-8 mt-6"
            >
              {[
                {
                  question: "Do you offer a money-back guarantee?",
                  answer:
                    "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, contact our support team for a full refund — no questions asked.",
                },
                {
                  question: "Can I use it for multiple projects?",
                  answer:
                    "The Silver plan supports a single project. Gold and Premium plans allow unlimited projects, making them ideal for agencies and larger teams.",
                },
                {
                  question: "Is there an API available?",
                  answer:
                    "Yes! Our Gold and Premium plans include full REST API access with comprehensive documentation, SDKs, and webhooks for custom integrations.",
                },
                {
                  question: "How do I contact support?",
                  answer:
                    "Silver plan users have access to community support. Gold users get priority email and chat support. Premium users enjoy 24/7 phone support with a dedicated account manager.",
                },
              ].map((item, index) => (
                <FAQItem
                  key={`extra-${index}`}
                  item={item}
                  isOpen={openIndex === faq.length + index}
                  onToggle={() =>
                    setOpenIndex(
                      openIndex === faq.length + index ? -1 : faq.length + index
                    )
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
