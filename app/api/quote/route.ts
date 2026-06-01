import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

/**
 * Demande de devis (démo) — valide la demande et renvoie une référence.
 * Rien n'est persisté (projet concept). En production : enregistrer en base,
 * notifier l'atelier et envoyer un accusé de réception au client.
 */

const schema = z.object({
  type: z.string().min(1),
  size: z.number().int().positive(),
  finish: z.string().min(1),
  name: z.string().min(2, "Nom trop court"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(8, "Téléphone invalide"),
  postalCode: z.string().min(4, "Code postal invalide"),
  message: z.string().max(1000).optional().or(z.literal("")),
});

function reference(seed: string): string {
  let h = 5381;
  for (let i = 0; i < seed.length; i++) h = (h * 33) ^ seed.charCodeAt(i);
  return `DV-${(h >>> 0).toString(36).toUpperCase().slice(0, 5)}`;
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON invalide" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Données invalides", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const { name, type, postalCode } = parsed.data;
  return NextResponse.json(
    {
      ok: true,
      reference: reference(`${name}|${type}|${postalCode}`),
      message: "Demande reçue. Nous vous recontactons sous 48 h.",
    },
    { status: 201 },
  );
}
