"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    // Démo : pas de persistance côté serveur.
    setDone(true);
  }

  if (done) {
    return (
      <p className="font-head text-sm font-semibold uppercase tracking-wide text-white">
        Merci ! Vous êtes bien inscrit·e à la newsletter. 🏀
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Votre adresse email"
        aria-label="Votre adresse email"
        className="flex-1 rounded-md border-0 bg-white px-4 py-3 font-body text-sm text-ink placeholder:text-ink-soft/70 outline-none focus:ring-2 focus:ring-white/60"
      />
      <button
        type="submit"
        className="rounded-md bg-navy px-5 py-3 font-head text-[0.78rem] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-navy-deep whitespace-nowrap"
      >
        S’abonner
      </button>
    </form>
  );
}
