"use client";

import { useState } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";

const navLinks = [
  { name: "About", href: "/#about", className: "bg-white" },
  { name: "Experience", href: "/#experience", className: "bg-white" },
  { name: "Projects", href: "/#projects", className: "bg-white" },
  { name: "Where am I?", href: "/where", className: "bg-sun" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 flex h-20 w-full items-center justify-between border-b-[3px] border-ink bg-cream px-5 lg:px-16">
        <Link
          href="/"
          className="flex items-center gap-3 font-display text-lg font-extrabold lg:text-[22px]"
          onClick={() => setOpen(false)}
        >
          <span className="inline-block h-8 w-8 rounded-full bg-mint sticker-sm lg:h-9 lg:w-9" />
          Augustine Osezua
        </Link>

        <nav className="hidden gap-2 text-base font-semibold lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-[18px] py-2.5 sticker-btn ${link.className}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="mailto:augustineosezua1@gmail.com"
            className="bg-ink px-[18px] py-2.5 text-cream sticker-btn"
            onClick={() => track("contact_click", { location: "header" })}
          >
            Email me
          </a>
        </nav>

        <button
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] bg-white sticker-sm lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`block h-[3px] w-5 bg-ink transition-transform ${open ? "translate-y-[8px] rotate-45" : ""}`} />
          <span className={`block h-[3px] w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[3px] w-5 bg-ink transition-transform ${open ? "-translate-y-[8px] -rotate-45" : ""}`} />
        </button>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-ink/60 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <nav
        aria-label="Mobile navigation"
        className={`fixed top-20 right-0 z-40 flex w-3/4 max-w-xs flex-col gap-3 border-l-[3px] border-b-[3px] border-ink bg-cream p-5 transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`px-4 py-3 text-lg font-semibold sticker-btn ${link.className}`}
            onClick={() => setOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <a
          href="mailto:augustineosezua1@gmail.com"
          className="bg-ink px-4 py-3 text-lg font-semibold text-cream sticker-btn"
          onClick={() => {
            setOpen(false);
            track("contact_click", { location: "header" });
          }}
        >
          Email me
        </a>
      </nav>
    </>
  );
}
