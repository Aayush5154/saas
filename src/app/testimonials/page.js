"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Star } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const cards = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  text: "Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.",
  name: "Jane Doe",
  role: "CEO of Inkyy.com",
  avatar:
    "https://ui-avatars.com/api/?name=Jane+Doe&background=7c3aed&color=fff&bold=true&size=80",
}));

export default function TestimonialsPage() {
  const [active, setActive] = useState(1); // start on the centre card
  const trackRef = useRef(null);

  const scrollToActive = useCallback(
    (idx) => {
      const track = trackRef.current;
      if (!track) return;
      const card = track.children[idx];
      if (!card) return;
      const trackRect = track.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const scrollLeft =
        card.offsetLeft - track.offsetLeft - trackRect.width / 2 + cardRect.width / 2;
      track.scrollTo({ left: scrollLeft, behavior: "smooth" });
    },
    []
  );

  useEffect(() => {
    scrollToActive(active);
  }, [active, scrollToActive]);

  useEffect(() => {
    const handler = () => scrollToActive(active);
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const dotCount = 3;
  const dotIndex =
    active <= 1 ? 0 : active >= cards.length - 2 ? 2 : 1;

  return (
    <main className="bg-black min-h-screen">
      <Navbar />


      <section className="pt-36 md:pt-44 pb-14 md:pb-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          Testimonails
        </h1>
      </section>


      <section className="relative pb-16 md:pb-24">
        <div
          ref={trackRef}
          className="flex gap-5 md:gap-7 overflow-x-auto scroll-smooth
                     px-[calc(50vw-220px)] md:px-[calc(50vw-240px)] lg:px-[calc(50vw-260px)]
                     scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {cards.map((card, idx) => (
            <article
              key={card.id}
              onClick={() => setActive(idx)}
              className={`flex-shrink-0 w-[380px] md:w-[440px] rounded-2xl
                          bg-[#111318] border border-[#222222]/60
                          p-7 md:p-9 flex flex-col justify-between
                          cursor-pointer select-none
                          transition-all duration-300 ease-out
                          ${
                            idx === active
                              ? "opacity-100 scale-100"
                              : "opacity-60 scale-[0.97]"
                          }`}
            >
              <p className="text-[15px] md:text-base leading-[1.7] text-[#c2c2c2] mb-8">
                {card.text}
              </p>

              <div className="border-t border-[#2a2a2a] mb-5" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-light flex-shrink-0">
                    <img
                      src={card.avatar}
                      alt={card.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white leading-tight">
                      {card.name}
                    </p>
                    <p className="text-xs text-[#888] mt-0.5">{card.role}</p>
                  </div>
                </div>

                <div className="flex gap-[3px]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-[18px] h-[18px] fill-[#E8A838] text-[#E8A838]"
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>


        <div className="flex items-center justify-center gap-3 mt-12">
          {[...Array(dotCount)].map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide group ${i + 1}`}
              onClick={() => {
                const target =
                  i === 0 ? 0 : i === 2 ? cards.length - 1 : Math.floor(cards.length / 2);
                setActive(target);
              }}
              className={`rounded-full transition-all duration-300
                ${
                  i === dotIndex
                    ? "w-3 h-3 bg-gradient-to-r from-[#7c3aed] to-[#EC4899]"
                    : "w-2.5 h-2.5 bg-[#3a3a3a]"
                }`}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
