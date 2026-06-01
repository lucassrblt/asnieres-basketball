/* Données de démonstration — enseigne fictive « Atelier Vernier ». */

export type ProjectType = {
  id: string;
  name: string;
  desc: string;
  base: number; // prix de base €
  perUnit: number; // € par unité de taille
  unit: string; // libellé unité
  min: number;
  max: number;
  step: number;
};

export const projectTypes: ProjectType[] = [
  {
    id: "cuisine",
    name: "Cuisine sur-mesure",
    desc: "Caissons, façades, plan de travail, agencement complet.",
    base: 4200,
    perUnit: 950,
    unit: "mètres linéaires",
    min: 2,
    max: 9,
    step: 1,
  },
  {
    id: "dressing",
    name: "Dressing / Placard",
    desc: "Rangements optimisés, portes coulissantes ou battantes.",
    base: 1600,
    perUnit: 620,
    unit: "mètres linéaires",
    min: 1,
    max: 7,
    step: 1,
  },
  {
    id: "escalier",
    name: "Escalier bois",
    desc: "Droit, quart-tournant ou hélicoïdal, sur-mesure.",
    base: 6500,
    perUnit: 700,
    unit: "marches",
    min: 10,
    max: 20,
    step: 1,
  },
  {
    id: "bibliotheque",
    name: "Bibliothèque / Bureau",
    desc: "Étagères, niches, bureau intégré, du sol au plafond.",
    base: 1400,
    perUnit: 540,
    unit: "m² de façade",
    min: 2,
    max: 14,
    step: 1,
  },
  {
    id: "mobilier",
    name: "Mobilier / Table",
    desc: "Pièce unique : table, console, tête de lit, banc.",
    base: 1900,
    perUnit: 220,
    unit: "personnes (table)",
    min: 2,
    max: 12,
    step: 1,
  },
  {
    id: "agencement",
    name: "Agencement commerce",
    desc: "Comptoir, vitrines, mobilier d'accueil pour pro.",
    base: 3200,
    perUnit: 480,
    unit: "m²",
    min: 5,
    max: 40,
    step: 5,
  },
];

export type Finish = { id: string; name: string; mult: number; note: string };

export const finishes: Finish[] = [
  { id: "chene", name: "Chêne massif", mult: 1.0, note: "Le classique, robuste et chaleureux." },
  { id: "noyer", name: "Noyer", mult: 1.35, note: "Veinage profond, finition haut de gamme." },
  { id: "frene", name: "Frêne", mult: 1.1, note: "Clair et nerveux, look contemporain." },
  { id: "laque", name: "MDF laqué", mult: 1.15, note: "Couleur au choix, finition mate ou satinée." },
  { id: "plaque", name: "Panneau plaqué", mult: 0.82, note: "Le meilleur rapport rendu / budget." },
];

export type Service = { name: string; desc: string };
export const services: Service[] = [
  { name: "Cuisines", desc: "De l'épure scandinave au bois massif, conçues autour de votre quotidien." },
  { name: "Dressings & rangements", desc: "Chaque centimètre exploité, chaque finition pensée." },
  { name: "Escaliers", desc: "Pièces d'architecture, droites ou suspendues." },
  { name: "Mobilier", desc: "Tables, bureaux, bibliothèques — des pièces qui se transmettent." },
];

export const realisations = [
  { title: "Cuisine en noyer", place: "Croix-Rousse", year: "2024" },
  { title: "Escalier suspendu", place: "Confluence", year: "2024" },
  { title: "Dressing sur-mesure", place: "Brotteaux", year: "2023" },
  { title: "Bibliothèque toute hauteur", place: "Monplaisir", year: "2023" },
  { title: "Comptoir de boutique", place: "Presqu'île", year: "2024" },
  { title: "Table de famille en chêne", place: "Caluire", year: "2023" },
];

export const process = [
  { step: "01", title: "Rencontre", desc: "On visite, on mesure, on écoute votre projet et votre budget." },
  { step: "02", title: "Conception", desc: "Plans 3D et choix des essences. On affine jusqu'au détail." },
  { step: "03", title: "Atelier", desc: "Fabrication à la main dans notre atelier, bois sélectionnés." },
  { step: "04", title: "Pose", desc: "Installation soignée, ajustements sur place, finitions." },
];

export const communes = [
  "Lyon 1–9", "Villeurbanne", "Caluire", "Écully", "Tassin", "Sainte-Foy",
  "Oullins", "Bron", "Vénissieux", "Rillieux", "Dardilly", "Francheville",
];

export type Review = { name: string; project: string; text: string };
export const reviews: Review[] = [
  {
    name: "Hélène & Marc",
    project: "Cuisine en noyer",
    text: "Un travail d'orfèvre. Le devis en ligne nous avait donné une fourchette juste, et le résultat dépasse nos attentes.",
  },
  {
    name: "Sébastien D.",
    project: "Escalier sur-mesure",
    text: "Délais tenus, atelier impeccable, et un escalier qui est devenu la pièce maîtresse de la maison.",
  },
  {
    name: "Camille R.",
    project: "Dressing",
    text: "À l'écoute du premier au dernier jour. Chaque recoin est exploité. Je recommande les yeux fermés.",
  },
];

export const agency = {
  name: "Atelier Vernier",
  tagline: "Menuiserie sur-mesure",
  baseline: "Le bois, façonné pour durer.",
  address: "8 quai du Commerce, 69004 Lyon",
  phone: "04 56 78 90 12",
  est: "2009",
  warranty: "Garantie décennale",
};
