"use client";

import { useEffect, useState } from "react";
import { projectTypes, finishes } from "@/lib/data";

type Step = 0 | 1 | 2 | 3;
type Estimate = { low: number; high: number } | null;
const STEPS = ["Projet", "Dimensions", "Coordonnées", "Devis"];

const eur = (n: number) => n.toLocaleString("fr-FR") + " €";

export default function QuoteFlow() {
  const [step, setStep] = useState<Step>(0);
  const [typeId, setTypeId] = useState<string | null>(null);
  const [finishId, setFinishId] = useState<string>("chene");
  const [size, setSize] = useState<number>(0);
  const [estimate, setEstimate] = useState<Estimate>(null);
  const [estimating, setEstimating] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    postalCode: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [reference, setReference] = useState<string | null>(null);

  const type = projectTypes.find((t) => t.id === typeId) ?? null;

  // Initialise la taille au minimum quand on choisit un type.
  useEffect(() => {
    if (type) setSize(type.min);
  }, [typeId]); // eslint-disable-line react-hooks/exhaustive-deps

  // Estimation live (étape Dimensions).
  useEffect(() => {
    if (step !== 1 || !typeId || !size) return;
    setEstimating(true);
    const ctrl = new AbortController();
    fetch("/api/estimate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: typeId, size, finish: finishId }),
      signal: ctrl.signal,
    })
      .then((r) => r.json())
      .then((d) => setEstimate({ low: d.low, high: d.high }))
      .catch(() => {})
      .finally(() => setEstimating(false));
    return () => ctrl.abort();
  }, [step, typeId, size, finishId]);

  async function submit() {
    const e: Record<string, string> = {};
    if (form.name.trim().length < 2) e.name = "Indiquez votre nom.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "Email invalide.";
    if (form.phone.trim().length < 8) e.phone = "Téléphone invalide.";
    if (form.postalCode.trim().length < 4) e.postalCode = "Code postal requis.";
    setErrors(e);
    if (Object.keys(e).length) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: typeId, size, finish: finishId, ...form }),
      });
      const data = await res.json();
      if (res.ok) {
        setReference(data.reference);
        setStep(3);
      } else {
        setErrors(data.issues ?? { name: "Une erreur est survenue." });
      }
    } finally {
      setSubmitting(false);
    }
  }

  const canNext = (step === 0 && typeId) || step === 1;

  return (
    <div className="bg-paper border border-line rounded-2xl overflow-hidden shadow-[0_30px_60px_-30px_rgba(34,29,22,0.25)]">
      {/* Stepper */}
      <div className="flex border-b border-line">
        {STEPS.map((label, i) => (
          <div
            key={label}
            className="flex-1 px-2 py-4 text-center border-r border-line last:border-r-0"
            style={{
              backgroundColor: i === step ? "var(--paper-2)" : "transparent",
              opacity: i <= step ? 1 : 0.45,
            }}
          >
            <span
              className="font-body text-[0.6rem] font-semibold tracking-[0.12em] uppercase"
              style={{ color: i === step ? "var(--forest)" : "var(--ink-soft)" }}
            >
              <span className="hidden sm:inline">{i + 1}. </span>
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="p-6 sm:p-8 min-h-[360px]">
        {/* Étape 0 — type */}
        {step === 0 && (
          <div className="grid sm:grid-cols-2 gap-3">
            {projectTypes.map((t) => {
              const active = t.id === typeId;
              return (
                <button
                  key={t.id}
                  onClick={() => setTypeId(t.id)}
                  className="text-left p-4 rounded-xl border transition-all duration-300"
                  style={{
                    borderColor: active ? "var(--forest)" : "var(--line)",
                    backgroundColor: active ? "var(--paper-2)" : "transparent",
                  }}
                >
                  <span className="font-display text-2xl text-ink leading-none">{t.name}</span>
                  <p className="mt-2 text-sm text-ink-soft leading-snug">{t.desc}</p>
                  <span className="mt-2 inline-block font-body text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-forest">
                    à partir de {eur(t.base)}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Étape 1 — dimensions + finition + estimation live */}
        {step === 1 && type && (
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <label className="block">
                <span className="font-body text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  {type.unit}
                </span>
                <div className="mt-3 flex items-center gap-4">
                  <input
                    type="range"
                    min={type.min}
                    max={type.max}
                    step={type.step}
                    value={size}
                    onChange={(e) => setSize(Number(e.target.value))}
                    className="flex-1 accent-[var(--forest)]"
                  />
                  <span className="font-display text-3xl text-ink w-10 text-right">{size}</span>
                </div>
              </label>

              <div className="mt-7">
                <span className="font-body text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  Essence / finition
                </span>
                <div className="mt-3 space-y-2">
                  {finishes.map((f) => {
                    const active = f.id === finishId;
                    return (
                      <button
                        key={f.id}
                        onClick={() => setFinishId(f.id)}
                        className="w-full text-left px-4 py-3 rounded-lg border transition-all duration-200 flex items-center justify-between gap-3"
                        style={{
                          borderColor: active ? "var(--forest)" : "var(--line)",
                          backgroundColor: active ? "var(--paper-2)" : "transparent",
                        }}
                      >
                        <span>
                          <span className="font-body font-semibold text-ink">{f.name}</span>
                          <span className="block text-xs text-ink-soft">{f.note}</span>
                        </span>
                        {active && <span className="text-forest text-lg">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Estimation */}
            <div className="lg:border-l lg:border-line lg:pl-8 flex flex-col justify-center">
              <span className="eyebrow">Estimation indicative</span>
              <div className="mt-3 font-display text-ink leading-none">
                {estimating ? (
                  <span className="text-3xl text-ink-soft animate-pulse">Calcul…</span>
                ) : estimate ? (
                  <span className="text-4xl sm:text-5xl">
                    {eur(estimate.low)}
                    <span className="text-ink-soft"> – </span>
                    {eur(estimate.high)}
                  </span>
                ) : (
                  <span className="text-3xl text-ink-soft">—</span>
                )}
              </div>
              <p className="mt-4 text-sm text-ink-soft leading-relaxed">
                {type.name} · {finishes.find((f) => f.id === finishId)?.name} · {size}{" "}
                {type.unit}. Fourchette indicative, hors pose éventuelle et options.
                Le devis détaillé est gratuit et sans engagement.
              </p>
            </div>
          </div>
        )}

        {/* Étape 2 — coordonnées */}
        {step === 2 && (
          <div className="grid sm:grid-cols-2 gap-4">
            {(
              [
                { k: "name", label: "Nom complet", type: "text", ph: "Hélène Martin" },
                { k: "email", label: "Email", type: "email", ph: "helene@exemple.fr" },
                { k: "phone", label: "Téléphone", type: "tel", ph: "06 12 34 56 78" },
                { k: "postalCode", label: "Code postal", type: "text", ph: "69004" },
              ] as const
            ).map((f) => (
              <label key={f.k} className="block">
                <span className="font-body text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  {f.label}
                </span>
                <input
                  type={f.type}
                  value={form[f.k]}
                  placeholder={f.ph}
                  onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                  className="mt-1.5 w-full bg-transparent border border-line rounded-lg px-3 py-3 text-ink outline-none focus:border-forest transition-colors"
                />
                {errors[f.k] && (
                  <span className="mt-1 block font-body text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-oak">
                    {errors[f.k]}
                  </span>
                )}
              </label>
            ))}
            <label className="block sm:col-span-2">
              <span className="font-body text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                Votre projet (optionnel)
              </span>
              <textarea
                rows={3}
                value={form.message}
                placeholder="Décrivez votre projet, vos contraintes, vos délais…"
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1.5 w-full bg-transparent border border-line rounded-lg px-3 py-3 text-ink outline-none focus:border-forest transition-colors resize-none"
              />
            </label>
          </div>
        )}

        {/* Étape 3 — confirmation */}
        {step === 3 && (
          <div className="text-center py-8">
            <span className="eyebrow">Demande envoyée</span>
            <p className="display-md text-ink mt-3">
              Merci, <span className="italic-accent">{form.name.split(" ")[0]}</span>.
            </p>
            <p className="mt-4 text-ink-soft max-w-sm mx-auto leading-relaxed">
              Nous étudions votre projet et revenons vers vous sous 48 h avec un devis
              détaillé. Estimation transmise :{" "}
              {estimate && (
                <strong className="text-ink">
                  {eur(estimate.low)} – {eur(estimate.high)}
                </strong>
              )}
              .
            </p>
            <div className="mt-6 inline-block border border-forest rounded-xl px-6 py-3">
              <span className="font-body text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                Référence devis
              </span>
              <span className="block font-display text-3xl text-forest">{reference}</span>
            </div>
            <p className="mt-6 font-body text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-ink-soft">
              Démo — aucune donnée enregistrée
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      {step < 3 && (
        <div className="flex items-center justify-between gap-4 border-t border-line p-5 bg-paper-2/40">
          <div className="font-body text-[0.7rem] text-ink-soft">
            {type && <span className="font-semibold text-ink">{type.name}</span>}
            {step >= 1 && estimate && (
              <span className="text-forest"> · {eur(estimate.low)}–{eur(estimate.high)}</span>
            )}
          </div>
          <div className="flex gap-2 shrink-0">
            {step > 0 && (
              <button onClick={() => setStep((s) => (s - 1) as Step)} className="btn btn-ghost">
                Retour
              </button>
            )}
            {step < 2 && (
              <button
                disabled={!canNext}
                onClick={() => setStep((s) => (s + 1) as Step)}
                className="btn disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Continuer
              </button>
            )}
            {step === 2 && (
              <button onClick={submit} disabled={submitting} className="btn">
                {submitting ? "Envoi…" : "Envoyer ma demande"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
