import Link from "next/link";
import { GitBranch, Twitter, Linkedin, Dribbble } from "lucide-react";

const footerSections = [
  {
    title: "Sections",
    links: [
      { label: "Home",        href: "/" },
      { label: "Section One", href: "#features" },
      { label: "Section Two", href: "#contact" },
      { label: "Section Three", href: "#" },
    ],
  },
  {
    title: "Links",
    links: [
      { label: "Home",        href: "/" },
      { label: "Section One", href: "#features" },
      { label: "Section Two", href: "#contact" },
      { label: "Section Three", href: "#" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Home",        href: "/" },
      { label: "Section One", href: "#" },
      { label: "Section Two", href: "#" },
      { label: "Section Three", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Twitter,  href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-surface-border">
      <div className="section-container">
        {/* ── Main Grid ──────────────────────────────── */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          {/* Brand Column (spans 2 cols on md+) */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <GitBranch className="w-7 h-7 text-white" />
              <span className="text-lg font-bold text-white tracking-tight">
                Squid
              </span>
            </Link>

            <p className="text-sm text-muted leading-relaxed max-w-xs">
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem.
            </p>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-white
                                 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom Bar ─────────────────────────────── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4
                     py-6 border-t border-surface-border"
        >
          <p className="text-xs text-muted">
            All Rights Reserved inkyy.com {new Date().getFullYear()}
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-8 h-8 rounded-lg bg-surface-light/50 border border-surface-border
                           flex items-center justify-center
                           text-muted hover:text-white hover:border-brand-500/40
                           transition-all duration-200"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
