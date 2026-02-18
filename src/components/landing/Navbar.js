"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, GitBranch } from "lucide-react";
import { navLinks } from "@/data/landing-content";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-bg/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2.5">
            <GitBranch className="w-7 h-7 text-white" />
            <span className="text-lg font-bold text-white tracking-tight">
              Squid
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-muted
                             hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link
              href="/login"
              className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold
                         text-white bg-accent-pink hover:bg-accent-pink/90
                         transition-all duration-200 shadow-lg shadow-accent-pink/25"
            >
              Download Template
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl text-muted hover:text-white
                       hover:bg-white/[0.05] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="section-container pb-6 pt-2 border-t border-white/[0.06]">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium
                             text-muted hover:text-white hover:bg-white/[0.05]
                             transition-all duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-white/[0.06]">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="block text-center px-5 py-2.5 rounded-full text-sm font-semibold
                         text-white bg-accent-pink"
            >
              Download Template
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
