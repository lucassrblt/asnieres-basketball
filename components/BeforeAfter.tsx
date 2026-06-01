"use client";

import { useCallback, useRef, useState } from "react";

export default function BeforeAfter({
  before = "Avant",
  after = "Après",
}: {
  before?: string;
  after?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(52);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(98, Math.max(2, p)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[16/10] w-full select-none cursor-ew-resize overflow-hidden border border-line"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        update(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && update(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
    >
      {/* Couche APRÈS (fond) */}
      <div
        className="wood-slot absolute inset-0"
        data-label={after}
        style={{ filter: "saturate(1.15)" }}
      />
      {/* Couche AVANT (clippée) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <div
          className="wood-slot absolute inset-0"
          data-label={before}
          style={{ filter: "grayscale(0.55) brightness(0.92)" }}
        />
      </div>

      {/* Poignée */}
      <div
        className="absolute top-0 bottom-0 w-px bg-paper"
        style={{ left: `${pos}%`, boxShadow: "0 0 0 1px rgba(34,29,22,0.2)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-paper border border-line flex items-center justify-center shadow-md">
          <span className="text-ink text-xs font-bold tracking-tighter">‹ ›</span>
        </div>
      </div>

      <span className="absolute top-3 left-3 font-body text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-ink-soft bg-paper/70 px-2 py-1 rounded">
        Glissez
      </span>
    </div>
  );
}
