# Asnières Basketball — Site vitrine club de basket

Site vitrine d'un club de basket : page d'accueil avec **hero**, **actualités du club**,
**accès rapides**, présentation du club et **chiffres clés**, **équipes 2025-26**,
**partenaires** et **newsletter**, le tout dans une identité sportive marine / rouge / blanc.

> ⚠️ **Projet de démonstration.** « Asnières Basketball » est un **club fictif** : cette
> réalisation concept illustre le type de vitrine que je conçois pour les associations
> sportives. Aucune donnée n'est enregistrée.

🔗 **Démo en ligne :** [asnieresbasketball.vercel.app](https://asnieresbasketball.vercel.app)

## Aperçu

- **Direction artistique** sportive : bleu marine, rouge & blanc, typographie condensée
  (Anton) × grotesque (Oswald / Inter), pour une identité dynamique de club.
- **Page d'accueil** orientée club : hero, actualités, accès rapides, équipes, partenaires,
  newsletter et footer riche (contacts, accès rapides, catégories).
- **Navigation** à menus déroulants (Club, Équipes, Championnats) + menu mobile.
- **Placeholders images** explicites partout où le visuel réel n'est pas fourni.
- **100 % responsive**, animations au scroll, `prefers-reduced-motion` respecté.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **next/font** (Google Fonts auto-hébergées : Anton, Oswald, Inter)

## Architecture

```
app/
├── page.tsx              # Accueil : hero, actualités, accès rapides, club & stats,
│                         #          équipes, partenaires, newsletter, footer
├── layout.tsx            # Fonts + métadonnées SEO/OpenGraph
└── globals.css           # Design system (tokens marine/rouge, placeholders, animations)
components/
├── Nav.tsx               # En-tête sticky + menus déroulants + menu mobile
├── Logo.tsx              # Écusson lion (placeholder SVG)
├── NewsCard.tsx          # Carte actualité (badge date)
├── TeamCard.tsx          # Carte équipe (silhouette joueur)
├── QuickLink.tsx         # Bloc accès rapide
├── NewsletterForm.tsx    # Formulaire newsletter (client, démo)
├── icons.tsx             # Icônes SVG inline
└── Reveal.tsx            # Apparition au scroll (IntersectionObserver)
lib/data.ts               # Contenu (club, actus, équipes, partenaires, nav, footer)
```

## Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build production
```

## Images

Tous les visuels manquants utilisent des **placeholders** (classe `.ph` pour les photos,
écusson SVG pour le logo, cartes texte pour les logos partenaires). Pour la mise en ligne
réelle, remplacer ces placeholders par les vraies photos du club et les vrais logos partenaires.

---

Conçu & développé par [Lucas Rimbault](https://lucasrblt.me).
