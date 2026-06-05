/* Logo Asnières Basketball — écusson lion (placeholder SVG). */

export default function Logo({
  size = 44,
  variant = "dark",
  className = "",
}: {
  size?: number;
  /** "dark" = texte marine (fond clair) · "light" = texte blanc (fond marine) */
  variant?: "dark" | "light";
  className?: string;
}) {
  const titleColor = variant === "light" ? "#ffffff" : "var(--navy)";

  return (
    <span className={`flex items-center gap-2.5 leading-none ${className}`}>
      {/* Écusson lion — placeholder */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        aria-label="Logo Asnières Basketball"
        role="img"
        className="shrink-0"
      >
        <path
          d="M32 3 7 11v22c0 16 11 24 25 28 14-4 25-12 25-28V11L32 3Z"
          fill="var(--navy)"
        />
        <path
          d="M32 3 7 11v22c0 16 11 24 25 28 14-4 25-12 25-28V11L32 3Z"
          fill="none"
          stroke="var(--red)"
          strokeWidth="2.5"
        />
        {/* tête de lion stylisée */}
        <g fill="var(--red)">
          <path d="M32 16c-6 0-10 4-10 9 0 2 1 4 2 5l-4 2 5 1c1 3 4 5 7 5s6-2 7-5l5-1-4-2c1-1 2-3 2-5 0-5-4-9-10-9Z" />
        </g>
        <g fill="#ffffff">
          <circle cx="28" cy="24" r="1.4" />
          <circle cx="36" cy="24" r="1.4" />
        </g>
        <path
          d="M32 28c-1 1.5-3 1.5-4 0M32 28c1 1.5 3 1.5 4 0"
          stroke="var(--navy)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col">
        <span
          className="font-display text-[1.05rem] tracking-tight"
          style={{ color: titleColor, lineHeight: 0.85 }}
        >
          Asnières
        </span>
        <span
          className="font-display text-[1.05rem] tracking-tight"
          style={{ color: "var(--red)", lineHeight: 0.85 }}
        >
          Basketball
        </span>
      </span>
    </span>
  );
}
