import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import BeforeAfter from "@/components/BeforeAfter";
import QuoteFlow from "@/components/QuoteFlow";
import {
  services,
  realisations,
  process,
  communes,
  reviews,
  agency,
} from "@/lib/data";

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-10">
      <span className="eyebrow">{index}</span>
      <h2 className="display-md text-ink">{title}</h2>
      <span className="flex-1 rule self-center" />
    </div>
  );
}

export default function Home() {
  return (
    <div id="top" className="flex flex-col flex-1">
      <Nav />

      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-end pb-16 pt-32 px-5 sm:px-8">
        <div className="mx-auto max-w-[1320px] w-full grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="reveal eyebrow" style={{ animationDelay: "0.05s" }}>
              {agency.tagline} · Lyon — depuis {agency.est}
            </div>
            <h1 className="mt-5 display-xl text-ink">
              <span className="reveal block" style={{ animationDelay: "0.12s" }}>
                Le bois,
              </span>
              <span className="reveal block" style={{ animationDelay: "0.22s" }}>
                façonné <span className="italic-accent">pour durer.</span>
              </span>
            </h1>
            <p
              className="reveal mt-7 max-w-lg text-lg text-ink-soft leading-relaxed"
              style={{ animationDelay: "0.34s" }}
            >
              Cuisines, dressings, escaliers et mobilier sur-mesure, dessinés et
              fabriqués dans notre atelier lyonnais. Obtenez une estimation
              chiffrée de votre projet en ligne, en deux minutes.
            </p>
            <div
              className="reveal mt-9 flex flex-wrap gap-3"
              style={{ animationDelay: "0.46s" }}
            >
              <a href="#devis" className="btn">
                Estimer mon projet
              </a>
              <a href="#realisations" className="btn btn-ghost">
                Voir les réalisations
              </a>
            </div>
          </div>

          <div className="reveal lg:col-span-5" style={{ animationDelay: "0.4s" }}>
            <div className="wood-slot aspect-[4/5] w-full rounded-2xl" data-label="Atelier · Lyon 4ᵉ" />
            <div className="mt-3 flex justify-between font-body text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink-soft">
              <span>{agency.warranty}</span>
              <span className="text-oak">★ 4,9 · 180 avis</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BANDEAU CHIFFRES ============ */}
      <div className="border-y border-line bg-paper-2/40">
        <div className="mx-auto max-w-[1320px] grid grid-cols-2 md:grid-cols-4 divide-x divide-line">
          {[
            ["15 ans", "d'atelier"],
            ["+400", "projets livrés"],
            ["100 %", "fait main à Lyon"],
            ["10 ans", "de garantie"],
          ].map(([n, l]) => (
            <div key={l} className="px-5 py-8 text-center">
              <div className="font-display text-4xl text-ink">{n}</div>
              <div className="mt-1 font-body text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============ SAVOIR-FAIRE ============ */}
      <section id="savoir-faire" className="px-5 sm:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <SectionLabel index="01" title="Savoir-faire" />
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.name} delay={i * 70}>
                <div className="h-full">
                  <div className="font-display text-5xl text-paper-3">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-3xl text-ink mt-2 leading-none">{s.name}</h3>
                  <p className="mt-3 text-ink-soft leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AVANT / APRÈS ============ */}
      <section className="px-5 sm:px-8 pb-24 sm:pb-32">
        <div className="mx-auto max-w-[1320px] grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">La transformation</span>
              <p className="display-lg text-ink mt-4">
                Avant,<br />
                <span className="italic-accent">après.</span>
              </p>
              <p className="mt-5 text-ink-soft leading-relaxed max-w-md">
                Une pièce banale devient une pièce de caractère. Glissez le
                curseur pour mesurer le chemin parcouru sur l'un de nos chantiers.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <BeforeAfter before="Existant" after="Cuisine noyer" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ RÉALISATIONS ============ */}
      <section id="realisations" className="px-5 sm:px-8 py-24 sm:py-32 bg-paper-2/40 border-y border-line">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <SectionLabel index="02" title="Réalisations" />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {realisations.map((r, i) => (
              <Reveal key={r.title} delay={i * 50}>
                <figure>
                  <div
                    className="wood-slot w-full rounded-xl"
                    style={{ aspectRatio: i % 4 === 0 ? "1 / 1.25" : "1 / 1" }}
                    data-label={`${r.place} · ${r.year}`}
                  />
                  <figcaption className="mt-2 font-display text-xl text-ink">{r.title}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MÉTHODE ============ */}
      <section id="process" className="px-5 sm:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <SectionLabel index="03" title="Notre méthode" />
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 70}>
                <div className="bg-paper p-7 h-full">
                  <span className="font-display text-5xl text-oak">{p.step}</span>
                  <h3 className="font-display text-2xl text-ink mt-3">{p.title}</h3>
                  <p className="mt-2 text-ink-soft leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ZONE D'INTERVENTION ============ */}
      <section className="px-5 sm:px-8 pb-24 sm:pb-32">
        <div className="mx-auto max-w-[1320px] grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">Zone d'intervention</span>
              <p className="display-md text-ink mt-4">Lyon & sa métropole.</p>
              <p className="mt-4 text-ink-soft leading-relaxed">
                Nous intervenons dans un rayon de 30 km autour de l'atelier. Un
                projet plus loin ? Parlons-en.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="flex flex-wrap gap-2">
                {communes.map((c) => (
                  <span
                    key={c}
                    className="px-4 py-2 rounded-full border border-line text-sm text-ink-soft bg-paper hover:border-forest hover:text-ink transition-colors"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ AVIS ============ */}
      <section id="avis" className="px-5 sm:px-8 py-24 sm:py-32 bg-paper-2/40 border-y border-line">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <SectionLabel index="04" title="Ils nous ont fait confiance" />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 90}>
                <figure className="bg-paper border border-line rounded-2xl p-7 h-full flex flex-col">
                  <span className="text-oak tracking-[0.2em]">★★★★★</span>
                  <blockquote className="mt-4 font-display text-xl text-ink leading-snug flex-1">
                    « {r.text} »
                  </blockquote>
                  <figcaption className="mt-5">
                    <span className="font-body font-semibold text-ink">{r.name}</span>
                    <span className="block font-body text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-ink-soft mt-0.5">
                      {r.project}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DEVIS ============ */}
      <section id="devis" className="px-5 sm:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-[1320px] grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow">05 — Devis en ligne</span>
              <h2 className="display-lg text-ink mt-4">
                Votre projet,<br /><span className="italic-accent">chiffré.</span>
              </h2>
              <p className="mt-5 text-ink-soft leading-relaxed">
                Choisissez votre projet, ses dimensions et son essence : vous
                obtenez une fourchette immédiate. Le devis détaillé reste gratuit
                et sans engagement.
              </p>
              <dl className="mt-9 space-y-4">
                {[
                  ["Atelier", agency.address],
                  ["Téléphone", agency.phone],
                  ["Garantie", agency.warranty],
                ].map(([k, v]) => (
                  <div key={k} className="border-t border-line pt-3">
                    <dt className="font-body text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                      {k}
                    </dt>
                    <dd className="text-ink mt-1">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={120}>
              <QuoteFlow />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-line px-5 sm:px-8 pt-16 pb-8 bg-paper-2/50">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <p className="display-lg text-ink leading-none">{agency.name}</p>
              <p className="mt-3 font-body text-sm text-ink-soft">
                {agency.baseline} · {agency.address}
              </p>
            </div>
            <a href="#devis" className="btn self-start lg:self-auto">
              Estimer mon projet
            </a>
          </div>

          <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row gap-4 justify-between font-body text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-ink-soft">
            <span>Projet de démonstration — enseigne fictive. Aucun établissement réel.</span>
            <span>
              Conçu & développé par{" "}
              <a
                href="https://lucasrblt.me"
                className="link-u text-ink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lucas Rimbault
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
