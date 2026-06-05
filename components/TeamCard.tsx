import type { Team } from "@/lib/data";
import { Player } from "@/components/icons";

export default function TeamCard({ team }: { team: Team }) {
  return (
    <a
      href="#equipes"
      className="group flex flex-col items-center text-center bg-white border border-line rounded-lg px-3 py-6 transition-all duration-300 hover:border-red hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(22,35,92,0.12)] min-w-[120px]"
    >
      <Player size={46} className="text-navy group-hover:text-red transition-colors" />
      <h3 className="title-sm text-sm text-navy mt-3 group-hover:text-red transition-colors">
        {team.name}
      </h3>
      <p className="font-body text-[0.7rem] text-ink-soft mt-1">{team.sub}</p>
    </a>
  );
}
