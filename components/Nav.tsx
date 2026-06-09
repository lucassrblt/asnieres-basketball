"use client";

import { useEffect, useState } from "react";
import { navItems, club } from "@/lib/data";
import Logo from "@/components/Logo";
import { Instagram, Facebook, ChevronDown } from "@/components/icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [activeHref, setActiveHref] = useState("#top");

  useEffect(() => {
    // Ancres de sections uniques présentes dans la nav, dans l'ordre du DOM
    const anchors = Array.from(new Set(navItems.map((i) => i.href))).filter((h) =>
      h.startsWith("#")
    );

    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      // Scroll-spy : dernière section dont le haut est passé sous le header
      const offset = 140;
      let current = "#top";
      for (const href of anchors) {
        const el = document.querySelector(href);
        if (el && el.getBoundingClientRect().top <= offset) current = href;
      }
      setActiveHref(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Premier item correspondant à la section active (évite les doublons d'ancres)
  const activeIndex = navItems.findIndex((i) => i.href === activeHref);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-300"
      style={{ boxShadow: scrolled ? "0 4px 24px rgba(22,35,92,0.08)" : "none" }}
    >
      {/* Rangée principale */}
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 flex items-center justify-between h-[72px]">
        <a href="#top" aria-label={club.name}>
          <Logo size={44} />
        </a>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href={club.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-navy hover:text-red transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href={club.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-navy hover:text-red transition-colors"
          >
            <Facebook size={20} />
          </a>
        </div>

        {/* Burger mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-[5px] p-2"
          aria-label="Menu"
        >
          <span
            className="block h-[2px] w-6 bg-navy transition-transform"
            style={{ transform: open ? "rotate(45deg) translate(4px,4px)" : "none" }}
          />
          <span
            className="block h-[2px] w-6 bg-navy transition-opacity"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block h-[2px] w-6 bg-navy transition-transform"
            style={{ transform: open ? "rotate(-45deg) translate(4px,-4px)" : "none" }}
          />
        </button>
      </div>

      {/* Rangée nav desktop */}
      <nav className="hidden lg:block border-t border-line">
        <ul className="mx-auto max-w-[1320px] px-5 sm:px-8 flex items-center gap-1">
          {navItems.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
            <li key={item.label} className="relative group">
              <a
                href={item.href}
                onClick={() => setActiveHref(item.href)}
                className={`flex items-center gap-1 px-3.5 py-3 font-head text-[0.78rem] font-600 uppercase tracking-[0.06em] transition-colors border-b-2 ${
                  isActive
                    ? "text-red border-red"
                    : "text-navy border-transparent hover:text-red group-hover:border-red"
                }`}
                style={{ fontWeight: 600 }}
              >
                {item.label}
                {item.children && <ChevronDown size={12} className="mt-0.5 opacity-60" />}
              </a>
              {item.children && (
                <ul className="absolute left-0 top-full min-w-[200px] bg-white border border-line rounded-b-md shadow-lg py-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                  {item.children.map((c) => (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        className="block px-4 py-2 font-body text-sm text-ink-soft hover:text-red hover:bg-paper transition-colors"
                      >
                        {c.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            );
          })}
        </ul>
      </nav>

      {/* Menu mobile */}
      <div
        className="lg:hidden overflow-y-auto no-scrollbar transition-all duration-500 bg-white border-t border-line"
        style={{ maxHeight: open ? "calc(100vh - 72px)" : "0px" }}
      >
        <nav className="px-6 py-5 flex flex-col">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-line">
              <div className="flex items-center justify-between">
                <a
                  href={item.href}
                  onClick={() => !item.children && setOpen(false)}
                  className="flex-1 py-3.5 font-head text-base font-semibold uppercase tracking-wide text-navy"
                >
                  {item.label}
                </a>
                {item.children && (
                  <button
                    onClick={() =>
                      setOpenSub((s) => (s === item.label ? null : item.label))
                    }
                    aria-label={`Ouvrir ${item.label}`}
                    className="p-3 text-navy"
                  >
                    <ChevronDown
                      size={16}
                      className="transition-transform"
                    />
                  </button>
                )}
              </div>
              {item.children && (
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openSub === item.label ? "600px" : "0px" }}
                >
                  <ul className="pb-3 pl-3 flex flex-col">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <a
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 font-body text-sm text-ink-soft"
                        >
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          <div className="flex items-center gap-5 pt-5">
            <a
              href={club.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-navy"
            >
              <Instagram size={22} />
            </a>
            <a
              href={club.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-navy"
            >
              <Facebook size={22} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
