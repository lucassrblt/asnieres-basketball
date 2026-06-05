import type { QuickLink as QuickLinkType } from "@/lib/data";
import { QuickIcon } from "@/components/icons";

export default function QuickLink({ link }: { link: QuickLinkType }) {
  return (
    <a
      href={link.href}
      className="group flex flex-col items-center text-center px-4 py-8"
    >
      <span className="flex items-center justify-center w-16 h-16 rounded-full bg-paper text-navy group-hover:bg-red group-hover:text-white transition-colors duration-300">
        <QuickIcon name={link.icon} size={28} />
      </span>
      <h3 className="title-sm text-sm text-navy mt-4">{link.title}</h3>
      <p className="font-body text-[0.72rem] text-ink-soft mt-1">{link.subtitle}</p>
    </a>
  );
}
