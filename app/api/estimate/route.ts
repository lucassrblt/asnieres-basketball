import { NextRequest, NextResponse } from "next/server";
import { projectTypes, finishes } from "@/lib/data";

/**
 * Estimation (démo) — calcule une fourchette de prix indicative à partir du type
 * de projet, de la taille et de l'essence choisie. Logique côté serveur pour pouvoir
 * y brancher plus tard une vraie grille tarifaire.
 */

function round50(n: number) {
  return Math.round(n / 50) * 50;
}

export async function POST(req: NextRequest) {
  let body: { type?: string; size?: number; finish?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON invalide" }, { status: 400 });
  }

  const type = projectTypes.find((t) => t.id === body.type);
  const finish = finishes.find((f) => f.id === body.finish);
  if (!type || !finish) {
    return NextResponse.json({ error: "Paramètres inconnus" }, { status: 422 });
  }

  const size = Math.min(type.max, Math.max(type.min, Number(body.size) || type.min));
  const raw = (type.base + type.perUnit * size) * finish.mult;

  return NextResponse.json({
    low: round50(raw * 0.92),
    high: round50(raw * 1.12),
    type: type.name,
    finish: finish.name,
    size,
    unit: type.unit,
  });
}
