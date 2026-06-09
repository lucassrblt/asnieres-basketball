/* Logo Asnières Basketball — écusson lion. */

import Image from "next/image";

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
      {/* Écusson lion */}
      <Image
        src="/logo.png"
        alt="Logo Asnières Basketball"
        width={size}
        height={size}
        className="shrink-0 rounded-full"
        priority
      />
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
