"use client";

import Image from "next/image";

export default function ProductShowcase() {
  return (
    <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-[60%] z-0">
        <Image
          src="/assets/banner.png"
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
      </div>

      <div className="section-container relative z-10">
        <div className="relative w-full max-w-5xl mx-auto">
          <div
            className="rounded-2xl overflow-hidden
                       bg-[#0a0a0a] border border-white/[0.08]
                       shadow-2xl shadow-black/50 p-4 sm:p-5 md:p-6"
          >
            <div className="grid grid-cols-3 grid-rows-2 gap-3 sm:gap-4 auto-rows-fr"
                 style={{ gridTemplateRows: "1fr 1fr" }}>

              <div className="row-span-2 rounded-xl bg-[#111111] border border-white/[0.06] p-5 flex flex-col">
                <div className="w-10 h-10 rounded-full bg-white/[0.06] mb-5 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       strokeWidth="1.5" className="text-white/50">
                    <circle cx="12" cy="5" r="3" />
                    <path d="M12 8v4M8 16a4 4 0 0 1 8 0M6 12l-2 4M18 12l2 4" />
                  </svg>
                </div>
                <div className="space-y-3 flex-1">
                  <div className="h-2 w-3/4 rounded bg-white/[0.08]" />
                  <div className="h-2 w-full rounded bg-white/[0.06]" />
                  <div className="h-2 w-5/6 rounded bg-white/[0.06]" />
                  <div className="h-2 w-2/3 rounded bg-white/[0.06]" />
                  <div className="h-2 w-full rounded bg-white/[0.06]" />
                  <div className="h-2 w-4/5 rounded bg-white/[0.06]" />
                </div>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/[0.06]">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-400 to-accent-pink overflow-hidden">
                    <img src="/assets/avatar-1.png" alt="" className="w-full h-full object-cover"
                         onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="h-2 w-24 rounded bg-white/[0.08]" />
                    <div className="h-1.5 w-16 rounded bg-white/[0.06]" />
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-[#111111] border border-white/[0.06] p-5 flex flex-col items-center justify-center">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.06)"
                            strokeWidth="10" />
                    <circle cx="60" cy="60" r="50" fill="none"
                            stroke="url(#progressGrad)" strokeWidth="10"
                            strokeLinecap="round" strokeDasharray="314"
                            strokeDashoffset="80" />
                    <defs>
                      <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#EC4899" />
                        <stop offset="100%" stopColor="#7c3aed" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#111111] border-2 border-white/10" />
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-[#111111] border border-white/[0.06] p-5">
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/[0.08] overflow-hidden flex-shrink-0">
                        <img src={`/assets/user-${i}.png`} alt=""
                             className="w-full h-full object-cover"
                             onError={(e) => { e.target.style.display = 'none'; }} />
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <div className="h-2 w-3/4 rounded bg-white/[0.08]" />
                        <div className="h-1.5 w-1/2 rounded bg-white/[0.06]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-[#111111] border border-white/[0.06] p-5 flex items-end justify-center gap-2">
                {[40, 55, 65, 80, 95, 75, 60].map((h, i) => (
                  <div
                    key={i}
                    className="w-5 sm:w-6 rounded-t-md"
                    style={{
                      height: `${h}%`,
                      background: `linear-gradient(to top, #EC4899, #7c3aed)`,
                      opacity: 0.6 + i * 0.05,
                    }}
                  />
                ))}
              </div>

              <div className="rounded-xl bg-[#111111] border border-white/[0.06] p-5 flex items-center justify-center">
                <div className="text-xs text-white/20 text-center">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] mx-auto mb-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
