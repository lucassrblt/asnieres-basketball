"use client";

import { useEffect, useState } from "react";
import { agency } from "@/lib/data";

const links = [
  { href: "#savoir-faire", label: "Savoir-faire" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#process", label: "Méthode" },
  { href: "#avis", label: "Avis" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(243,237,225,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 flex items-center justify-between h-[74px]">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-2xl text-ink">{agency.name}</span>
          <span className="font-body text-[0.58rem] uppercase tracking-[0.2em] text-ink-soft mt-0.5">
            {agency.tagline}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-u font-body text-sm text-ink-soft hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="#devis" className="btn">
            Devis gratuit
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Menu"
        >
          <span
            className="block h-[2px] w-6 bg-ink transition-transform"
            style={{ transform: open ? "rotate(45deg) translate(4px,4px)" : "none" }}
          />
          <span
            className="block h-[2px] w-6 bg-ink transition-opacity"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block h-[2px] w-6 bg-ink transition-transform"
            style={{ transform: open ? "rotate(-45deg) translate(4px,-4px)" : "none" }}
          />
        </button>
      </div>

      <div
        className="md:hidden overflow-hidden transition-all duration-500 bg-paper/95 backdrop-blur"
        style={{ maxHeight: open ? "420px" : "0px" }}
      >
        <nav className="px-6 py-6 flex flex-col gap-5 border-t border-line">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-ink"
            >
              {l.label}
            </a>
          ))}
          <a href="#devis" onClick={() => setOpen(false)} className="btn mt-2 justify-center">
            Devis gratuit
          </a>
        </nav>
      </div>
    </header>
  );
}
