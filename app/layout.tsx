import type { Metadata } from "next";
import { Anton, Oswald, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asnieresbasketball.vercel.app"),
  title: "Asnières Basketball — Club de basket · Asnières-sur-Seine",
  description:
    "Asnières Basketball : plus qu'un club, une passion ! Actualités, équipes 2025-26, gymnases, championnats et inscriptions. Rejoignez l'aventure. (Site de démonstration — club fictif.)",
  openGraph: {
    title: "Asnières Basketball — Plus qu'un club, une passion !",
    description:
      "Un club formateur et ambitieux, ouvert à tous les passionnés de basket. Découvrez nos équipes et rejoignez l'aventure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${anton.variable} ${oswald.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
