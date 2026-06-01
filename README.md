# Atelier Vernier — Site vitrine menuiserie sur-mesure

Site vitrine d'un menuisier-agenceur avec **estimateur de devis en ligne** : savoir-faire,
réalisations, comparateur avant/après, méthode, zone d'intervention et avis, puis un
configurateur qui calcule une **fourchette de prix en temps réel** selon le projet, ses
dimensions et l'essence de bois choisie.

> ⚠️ **Projet de démonstration.** « Atelier Vernier » est une **enseigne fictive** : cette
> réalisation concept illustre le type de vitrine que je conçois pour les artisans. Aucun
> établissement réel, aucune donnée n'est enregistrée.

🔗 **Démo en ligne :** [atelier-vernier.vercel.app](https://atelier-vernier.vercel.app)

## Aperçu

- **Direction artistique** naturel-éditorial : papier crème, noyer & vert forêt, serif élégante
  (Instrument Serif) × grotesque (Hanken Grotesk), texture papier — à l'opposé volontaire d'un
  thème sombre, pour démontrer une vraie amplitude de design.
- **Estimateur de devis** : calcul d'une fourchette côté serveur, mis à jour en direct quand on
  ajuste les dimensions ou la finition.
- **Comparateur avant/après** interactif (glisser-déposer, tactile compris).
- **100 % responsive**, animations au scroll, `prefers-reduced-motion` respecté.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Route handlers Node** (`/api/estimate`, `/api/quote`) + **Zod** pour la validation
- **next/font** (Google Fonts auto-hébergées)

## Architecture

```
app/
├── page.tsx              # Landing : hero, savoir-faire, avant/après, réalisations,
│                         #          méthode, zone, avis, devis
├── layout.tsx            # Fonts + métadonnées SEO/OpenGraph
├── globals.css           # Design system (tokens, textures, animations)
└── api/
    ├── estimate/         # POST — fourchette de prix selon projet/dimensions/essence
    └── quote/            # POST — validation Zod + référence de devis
components/
├── Nav.tsx               # En-tête sticky + menu mobile
├── QuoteFlow.tsx         # Estimateur de devis multi-étapes (client)
├── BeforeAfter.tsx       # Comparateur avant/après (client)
└── Reveal.tsx            # Apparition au scroll (IntersectionObserver)
lib/data.ts               # Contenu (projets, essences, réalisations, zone, avis)
```

## Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build production
```

## Mise en production réelle

L'estimateur est fonctionnel mais ne persiste rien (démo). Pour une vraie mise en ligne :
brancher une base (PostgreSQL / Supabase) et un email transactionnel sur `/api/quote`, et
affiner la grille tarifaire dans `/api/estimate`.

---

Conçu & développé par [Lucas Rimbault](https://lucasrblt.me).
