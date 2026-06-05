import type { News } from "@/lib/data";
import { Clock, User } from "@/components/icons";

export default function NewsCard({ item }: { item: News }) {
  return (
    <article className="group flex flex-col bg-white border border-line rounded-lg overflow-hidden h-full transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(22,35,92,0.12)]">
      {/* Visuel + badge date */}
      <div className="relative">
        <div
          className="ph aspect-[16/10] w-full"
          data-label={`${item.title} · photo`}
        />
        <div className="absolute top-0 left-4 bg-red text-white text-center px-3 py-2 leading-none shadow-md">
          <span className="block font-display text-2xl">{item.day}</span>
          <span className="block font-head text-[0.6rem] font-semibold uppercase tracking-[0.12em] mt-1">
            {item.month}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="title-sm text-base text-navy leading-tight">
          {item.title}
        </h3>
        <div className="mt-2.5 flex items-center gap-4 font-body text-[0.7rem] text-ink-soft">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={13} className="text-red" /> {item.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <User size={13} className="text-red" /> {item.author}
          </span>
        </div>
        <p className="mt-3 text-sm text-ink-soft leading-relaxed flex-1">
          {item.excerpt}
        </p>
        <a href={item.href} className="link-arrow mt-4">
          Lire la suite <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
