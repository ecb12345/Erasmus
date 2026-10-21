"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#program", label: "Program" },
  { href: "#logistics", label: "Logistics" },
  { href: "#criteria", label: "Who can apply" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sand-dark/60 bg-background/85 backdrop-blur-md">
      <nav
        aria-label="Główna nawigacja"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <Link
          id="nav-logo"
          href="/"
          className="font-heading text-lg text-ink"
        >
          Rock Solid <span className="text-primary">Soft Skills</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                id={`nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                href={l.href}
                className="font-heading text-xs uppercase tracking-[0.18em] text-ink-soft transition hover:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              id="nav-register"
              href="#register"
              className="bg-ink px-5 py-2.5 font-heading text-xs uppercase tracking-[0.18em] text-white transition hover:bg-primary"
            >
              Apply now
            </Link>
          </li>
        </ul>

        <button
          id="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          onClick={() => setOpen((v) => !v)}
          className="p-2 text-ink hover:bg-sand md:hidden"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="space-y-1 border-t border-sand-dark bg-background px-6 py-4 md:hidden">
          {[...links, { href: "#register", label: "Apply now" }].map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 font-heading text-sm uppercase tracking-[0.18em] text-ink-soft hover:bg-sand hover:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
