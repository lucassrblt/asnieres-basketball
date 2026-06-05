/* Données de démonstration — club fictif « Asnières Basketball ». */

export const club = {
  name: "Asnières Basketball",
  shortName: "ASN BB",
  tagline: "Plus qu'un club, une passion !",
  baseline: "Plus qu'un club, une famille. Rejoignez l'aventure Asnières Basketball !",
  address: "138 rue de la Station",
  city: "92600 Asnières-sur-Seine",
  phone: "01 47 93 25 80",
  email: "contact@asnieresbasketball.fr",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
};

/* ---------- Actualités ---------- */
export type News = {
  day: string;
  month: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  href: string;
};

export const news: News[] = [
  {
    day: "25",
    month: "Mai",
    title: "Match du 30/31 mai",
    date: "25 mai 2026",
    author: "ASN BB",
    excerpt: "U9 reçoit VAL DE SEINE match à 15H00 U11/1 déplacement à PUTEAUX…",
    href: "#actus",
  },
  {
    day: "05",
    month: "Mai",
    title: "Matchs du 9/10 mai",
    date: "5 mai 2026",
    author: "ASN BB",
    excerpt: "U13F reçoit BOULOGNE match à 18H00…",
    href: "#actus",
  },
  {
    day: "07",
    month: "Avr",
    title: "Matchs du 11/12 avril",
    date: "7 avril 2026",
    author: "ASN BB",
    excerpt: "U9 déplacement à CHATILLON match défaite 32/18 U11/1…",
    href: "#actus",
  },
  {
    day: "23",
    month: "Mars",
    title: "Stages de basket – avril 2026",
    date: "23 mars 2026",
    author: "ASN BB",
    excerpt: "Nous annulons la 2ème semaine un seul adhérent…",
    href: "#actus",
  },
];

/* ---------- Accès rapides ---------- */
export type QuickLink = {
  icon: "teams" | "gym" | "docs" | "contact";
  title: string;
  subtitle: string;
  href: string;
};

export const quickLinks: QuickLink[] = [
  { icon: "teams", title: "Nos Équipes", subtitle: "Saison 2025-26", href: "#equipes" },
  { icon: "gym", title: "Gymnases", subtitle: "Infos & Accès", href: "#contact" },
  { icon: "docs", title: "Documents", subtitle: "Téléchargements", href: "#contact" },
  { icon: "contact", title: "Contacts", subtitle: "Nous écrire", href: "#contact" },
];

/* ---------- Chiffres clés ---------- */
export const stats: { value: string; label: string; icon: "teams" | "jersey" | "trophy" | "heart" }[] = [
  { value: "450+", label: "Licenciés", icon: "teams" },
  { value: "28", label: "Équipes", icon: "jersey" },
  { value: "20+", label: "Années d'expérience", icon: "trophy" },
  { value: "100%", label: "Passion", icon: "heart" },
];

/* ---------- Équipes ---------- */
export type Team = { name: string; sub: string };
export const teams: Team[] = [
  { name: "Baby Basket", sub: "À partir de 4 ans" },
  { name: "U7", sub: "Mini Poussins" },
  { name: "U9", sub: "Poussins" },
  { name: "U11", sub: "Poussins" },
  { name: "U13", sub: "Benjamins" },
  { name: "U15", sub: "Minimes" },
  { name: "U18", sub: "Cadets" },
  { name: "Seniors", sub: "Seniors / Seniors F" },
];

/* ---------- Partenaires ---------- */
export type Partner = { name: string };
export const partners: Partner[] = [
  { name: "Hauts-de-Seine" },
  { name: "Asnières-sur-Seine" },
  { name: "Région Île-de-France" },
  { name: "Crédit Mutuel" },
  { name: "Sport Assur" },
];

/* ---------- Navigation ---------- */
export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Accueil", href: "#top" },
  {
    label: "Club",
    href: "#club",
    children: [
      { label: "Le Club", href: "#club" },
      { label: "Nos chiffres", href: "#club" },
      { label: "Actualités", href: "#actus" },
    ],
  },
  {
    label: "Équipes 2025-26",
    href: "#equipes",
    children: teams.map((t) => ({ label: t.name, href: "#equipes" })),
  },
  { label: "Vétérans", href: "#equipes" },
  {
    label: "Championnats 2025-26",
    href: "#actus",
    children: [
      { label: "Seniors", href: "#actus" },
      { label: "Jeunes", href: "#actus" },
      { label: "Calendrier", href: "#actus" },
    ],
  },
  { label: "Gymnases", href: "#contact" },
  { label: "Contacts", href: "#contact" },
  { label: "Documents", href: "#contact" },
];

/* ---------- Footer ---------- */
export const footerLinks = {
  quick: [
    { label: "Accueil", href: "#top" },
    { label: "Le Club", href: "#club" },
    { label: "Nos Équipes", href: "#equipes" },
    { label: "Championnats 2025-26", href: "#actus" },
    { label: "Gymnases", href: "#contact" },
    { label: "Documents", href: "#contact" },
    { label: "Contacts", href: "#contact" },
  ],
  categories: [
    { label: "Baby Basket (4-6 ans)", href: "#equipes" },
    { label: "Jeunes (7-18 ans)", href: "#equipes" },
    { label: "Seniors", href: "#equipes" },
    { label: "Vétérans", href: "#equipes" },
    { label: "Loisirs", href: "#equipes" },
  ],
};
