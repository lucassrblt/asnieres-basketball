import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";
import NewsCard from "@/components/NewsCard";
import TeamCard from "@/components/TeamCard";
import QuickLink from "@/components/QuickLink";
import NewsletterForm from "@/components/NewsletterForm";
import { Instagram, Facebook, Mail, Phone, Pin, QuickIcon } from "@/components/icons";
import {
  club,
  news,
  quickLinks,
  stats,
  teams,
  partners,
  footerLinks,
} from "@/lib/data";

function Dots({ count = 3, active = 0 }: { count?: number; active?: number }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="h-2.5 rounded-full transition-all"
          style={{
            width: i === active ? "26px" : "10px",
            background: i === active ? "var(--red)" : "rgba(255,255,255,0.4)",
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div id="top" className="flex flex-col flex-1">
      <Nav />
      {/* Compense la hauteur du header fixe (72px + barre nav 49px desktop) */}
      <div className="h-[72px] lg:h-[121px]" aria-hidden="true" />

      {/* ============ HERO ============ */}
      <section className="relative bg-navy text-white overflow-hidden lg:min-h-[600px] flex flex-col justify-center">
        {/* Filigrane lion */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[55%] pointer-events-none flex items-center justify-center lg:justify-start lg:pl-[6%]">
          <Image
            src="/logo.png"
            alt=""
            width={620}
            height={620}
            aria-hidden="true"
            className="w-[420px] sm:w-[520px] lg:w-[600px] h-auto opacity-[0.10] mix-blend-screen select-none"
          />
        </div>
        {/* Accent rouge */}
        <div
          className="absolute inset-0 opacity-[0.16] pointer-events-none"
          style={{
            background:
              "radial-gradient(55% 75% at 80% 35%, rgba(230,51,41,0.5), transparent 60%)",
          }}
        />

        {/* Image panier — desktop : déborde à droite, fondue dans le navy */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[54%] pointer-events-none">
          <Image
            src="/hero-panier.png"
            alt="Panier de basket avec ballon"
            fill
            priority
            sizes="54vw"
            className="object-cover object-center"
          />
          {/* Fondus vers le navy */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, var(--navy) 0%, rgba(22,35,92,0.35) 28%, transparent 48%), linear-gradient(0deg, var(--navy) 0%, transparent 18%), linear-gradient(180deg, var(--navy) 0%, transparent 16%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <h1 className="display-xl">
              <span className="reveal block text-white" style={{ animationDelay: "0.05s" }}>
                Asnières
              </span>
              <span className="reveal block text-red" style={{ animationDelay: "0.15s" }}>
                Basketball
              </span>
            </h1>
            <p
              className="reveal mt-6 font-head text-xl sm:text-2xl font-600 uppercase tracking-wide text-white/90"
              style={{ animationDelay: "0.28s", fontWeight: 600 }}
            >
              Plus qu’un club,
              <br />
              une passion !
            </p>
            <div
              className="reveal mt-9 flex flex-wrap gap-3"
              style={{ animationDelay: "0.4s" }}
            >
              <a href="#club" className="btn">
                Découvrir le club
              </a>
              <a href="#contact" className="btn btn-ghost">
                Nous contacter
              </a>
            </div>
            <div
              className="reveal mt-10 flex justify-start"
              style={{ animationDelay: "0.5s" }}
            >
              <Dots count={3} active={0} />
            </div>
          </div>

          {/* Image panier — mobile : empilée, fondue */}
          <div
            className="reveal lg:hidden relative aspect-[4/3] w-full overflow-hidden"
            style={{ animationDelay: "0.35s" }}
          >
            <Image
              src="/hero-panier.png"
              alt="Panier de basket avec ballon"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, var(--navy) 0%, transparent 22%), linear-gradient(180deg, var(--navy) 0%, transparent 18%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ============ ACTUALITÉS ============ */}
      <section id="actus" className="px-5 sm:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
              <h2 className="display-md text-navy flex items-center gap-3">
                Actualités du club
                <span className="text-red font-display">{"///"}</span>
              </h2>
              <a
                href={club.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-head text-[0.78rem] font-semibold uppercase tracking-[0.06em] text-red"
              >
                <Instagram size={18} /> Suivez-nous sur Instagram
              </a>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {news.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <NewsCard item={item} index={i} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-12 flex justify-center">
              <a href="#actus" className="btn">
                Voir toutes les actualités
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ ACCÈS RAPIDES ============ */}
      <section className="bg-paper border-y border-line">
        <div className="mx-auto max-w-[1320px] grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-line">
          {quickLinks.map((link) => (
            <QuickLink key={link.title} link={link} />
          ))}
        </div>
      </section>

      {/* ============ REJOIGNEZ L'AVENTURE ============ */}
      <section id="club" className="px-5 sm:px-8 py-20 sm:py-24">
        <div className="mx-auto max-w-[1320px] grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <Reveal>
            <div>
              <h2 className="display-lg text-navy">Rejoignez l’aventure !</h2>
              <p className="mt-5 text-ink-soft leading-relaxed max-w-md">
                Que vous soyez joueur, coach, bénévole ou supporter, il y a une
                place pour vous dans la famille Asnières Basketball.
              </p>
              <a href="#contact" className="btn btn-navy mt-8">
                Découvrir le club
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl lg:rounded-none lg:[clip-path:polygon(9%_0,100%_0,100%_100%,0_100%)]">
              <Image
                src="/rejoindre-aventure.png"
                alt="Ballon de basket posé sur le terrain dans une ambiance lumineuse"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Voile bleu/navy pour l'ambiance du mockup */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(100deg, rgba(15,26,69,0.85) 0%, rgba(15,26,69,0.25) 32%, transparent 52%), radial-gradient(60% 90% at 12% 55%, rgba(35,53,119,0.55), transparent 60%)",
                }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ LE CLUB + STATS ============ */}
      <section className="px-5 sm:px-8 pb-20 sm:pb-24">
        <div className="mx-auto max-w-[1320px] text-center">
          <Reveal>
            <span className="eyebrow">Le Club</span>
            <h2 className="display-md text-navy mt-3">Asnières Basketball</h2>
            <p className="mt-4 max-w-2xl mx-auto text-ink-soft leading-relaxed">
              Un club formateur et ambitieux, ouvert à tous les passionnés de
              basket. Des valeurs de respect, de solidarité et de dépassement de
              soi.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="flex flex-col items-center">
                  <QuickIcon name={s.icon} size={34} className="text-navy" />
                  <div className="mt-3 font-display text-5xl sm:text-6xl text-red">
                    {s.value}
                  </div>
                  <div className="mt-1.5 font-head text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NOS ÉQUIPES ============ */}
      <section id="equipes" className="px-5 sm:px-8 py-20 sm:py-24 bg-paper border-y border-line">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
              <h2 className="display-md text-navy">Nos Équipes 2025-26</h2>
              <a href="#equipes" className="btn btn-navy">
                Voir toutes les équipes
              </a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 lg:grid lg:grid-cols-8 lg:gap-3 lg:overflow-visible">
              {teams.map((team) => (
                <TeamCard key={team.name} team={team} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PARTENAIRES ============ */}
      <section id="partenaires" className="bg-navy text-white px-5 sm:px-8 py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <h2 className="display-md text-white text-center">Nos Partenaires</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="relative aspect-[5/2.2] rounded-lg bg-white"
                >
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-contain px-6 py-4"
                  />
                </div>
              ))}
            </div>
          </Reveal>
          <div className="mt-10">
            <Dots count={3} active={0} />
          </div>
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <section
        id="newsletter"
        className="px-5 sm:px-8 py-14"
        style={{
          background: "linear-gradient(120deg, var(--red), var(--navy))",
        }}
      >
        <div className="mx-auto max-w-[1320px] flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex items-center gap-5 flex-1">
            <span className="hidden sm:flex items-center justify-center w-16 h-16 rounded-full bg-white text-red shrink-0">
              <Mail size={26} />
            </span>
            <div>
              <h2 className="title-sm text-2xl text-white">Restez informés</h2>
              <p className="mt-1 font-body text-sm text-white/80 max-w-md">
                Abonnez-vous à notre newsletter pour recevoir les dernières
                actualités du club.
              </p>
            </div>
          </div>
          <NewsletterForm />
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer id="contact" className="bg-navy-deep text-white px-5 sm:px-8 pt-16 pb-8">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Marque */}
            <div>
              <Logo size={48} variant="light" />
              <p className="mt-5 font-body text-sm text-white/70 leading-relaxed max-w-xs">
                {club.baseline}
              </p>
              <div className="mt-5 flex items-center gap-4">
                <a
                  href={club.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center w-9 h-9 rounded-md bg-white/10 text-white hover:bg-red transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={club.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex items-center justify-center w-9 h-9 rounded-md bg-white/10 text-white hover:bg-red transition-colors"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            {/* Accès rapides */}
            <div>
              <h3 className="title-sm text-sm text-white tracking-[0.08em]">
                Accès rapides
              </h3>
              <ul className="mt-5 space-y-2.5">
                {footerLinks.quick.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="font-body text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Catégories */}
            <div>
              <h3 className="title-sm text-sm text-white tracking-[0.08em]">
                Catégories
              </h3>
              <ul className="mt-5 space-y-2.5">
                {footerLinks.categories.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="font-body text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nous contacter */}
            <div>
              <h3 className="title-sm text-sm text-white tracking-[0.08em]">
                Nous contacter
              </h3>
              <ul className="mt-5 space-y-3.5 font-body text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <Pin size={18} className="mt-0.5 shrink-0 text-red" />
                  <span>
                    {club.name}
                    <br />
                    {club.address}
                    <br />
                    {club.city}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-red" />
                  <a href={`tel:${club.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                    {club.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="shrink-0 text-red" />
                  <a href={`mailto:${club.email}`} className="hover:text-white transition-colors break-all">
                    {club.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 pt-6 border-t border-white/12 flex flex-col sm:flex-row gap-3 justify-between font-body text-xs text-white/55">
            <span>© 2026 {club.name} — Tous droits réservés</span>
            <span className="flex gap-4">
              <a href="#contact" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <span className="text-white/25">|</span>
              <a href="#contact" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
