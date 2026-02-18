"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";


const plans = [
  {
    name: "Silver Package",
    image: "/assets/silver.png",
    price: { monthly: "$40", yearly: "$400" },
    features: [
      "100 + Free Template",
      "10 Team Members",
      "Priority Support",
      "Premium Features",
      "50 Integrations",
    ],
  },
  {
    name: "Golden Package",
    image: "/assets/gold.png",
    price: { monthly: "$70", yearly: "$700" },
    features: [
      "100 + Free Template",
      "10 Team Members",
      "Priority Support",
      "Premium Features",
      "50 Integrations",
    ],
  },
  {
    name: "Premium Package",
    image: "/assets/premium.png",
    price: { monthly: "$120", yearly: "$1200" },
    features: [
      "100 + Free Template",
      "10 Team Members",
      "Priority Support",
      "Premium Features",
      "50 Integrations",
    ],
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <main className="bg-black min-h-screen">
      <Navbar />


      <section className="pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Pricing
            </h1>

            <div className="flex items-center">
              <div className="inline-flex rounded-full bg-[#1a1a1a] p-1">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    !isYearly
                      ? "bg-gradient-to-r from-[#7c3aed] to-[#EC4899] text-white shadow-lg"
                      : "text-[#888] hover:text-white"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isYearly
                      ? "bg-gradient-to-r from-[#7c3aed] to-[#EC4899] text-white shadow-lg"
                      : "text-[#888] hover:text-white"
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="pb-24 md:pb-32">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-[1100px] mx-auto">
            {plans.map((plan) => (
              <div key={plan.name} className="relative pt-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                  <div className="relative w-16 h-16 md:w-[72px] md:h-[72px]">
                    <Image
                      src={plan.image}
                      alt={`${plan.name} icon`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div
                  className="relative rounded-2xl bg-[#111318] border border-[#222]
                             pt-14 pb-8 px-7 md:px-8 flex flex-col"
                >
                  <h3 className="text-lg font-semibold text-white text-center mb-5">
                    {plan.name}
                  </h3>
                  <div className="border-t border-[#2a2a2a] mb-6" />

                  <ul className="space-y-4 mb-10 flex-1">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#1e1e1e] flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-[#a855f7]" />
                        </div>
                        <span className="text-[#aaa]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-bold text-white">
                        {isYearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-sm text-[#666]">
                        /{isYearly ? "yr" : "mo"}
                      </span>
                    </div>

                    <Link
                      href="/login"
                      className="inline-flex items-center justify-center px-5 py-2.5
                                 rounded-full text-sm font-semibold text-white
                                 bg-gradient-to-r from-[#7c3aed] to-[#EC4899]
                                 hover:opacity-90 transition-opacity duration-200
                                 shadow-lg shadow-[#7c3aed]/20"
                    >
                      Signup Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
