import type { Metadata } from "next";
import { Instrument_Serif, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atelier-vernier.demo"),
  title: "Atelier Vernier — Menuiserie sur-mesure · Lyon",
  description:
    "Menuisier-agenceur : cuisines, dressings, escaliers et mobilier sur-mesure. Devis en ligne. (Site de démonstration — projet concept.)",
  openGraph: {
    title: "Atelier Vernier — Menuiserie sur-mesure",
    description: "Le bois, façonné pour durer. Demandez votre estimation en ligne.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${instrument.variable} ${hanken.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
