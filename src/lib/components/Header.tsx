import ArrowUpRight from "@/lib/icons/arrow-up-right.svg";
import {
  NAV_ITEM,
  NAV_ITEMS,
  type CareerEra,
  type NavItem,
} from "@/lib/constants";

interface HeaderProps {
  era?: CareerEra;
  active?: NavItem;
}

export default function Header({ era, active = NAV_ITEM.CLOSET }: HeaderProps) {
  const dark = era !== undefined;

  return (
    <header
      data-era={era}
      className={`flex w-full items-center justify-between border-b px-5 py-4 transition-colors duration-500 ${
        dark ? "border-stage-line" : "border-line"
      }`}
    >
      <div className="flex flex-col gap-0.5">
        <span
          className={`text-md font-bold tracking-[1.2px] ${
            dark ? "text-stage-ink" : "text-ink"
          }`}
        >
          GAYOUNG HA
        </span>
        <span
          className={`text-xs tracking-[0.4px] ${
            dark ? "text-stage-ink-2" : "text-ink-3"
          }`}
        >
          Frontend Developer · Seoul
        </span>
      </div>
      <nav className="flex items-center gap-5">
        {NAV_ITEMS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className={`text-sm tracking-[0.6px] transition-colors ${
              label === active
                ? dark
                  ? "text-stage-ink"
                  : "text-ink"
                : dark
                  ? "text-stage-ink-3 hover:text-stage-ink"
                  : "text-ink-2 hover:text-ink"
            }`}
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          className={`flex items-center gap-1 rounded-full px-4 py-[9px] transition-colors ${
            dark ? "bg-stage-accent text-stage-bg" : "bg-ink text-bg-soft"
          }`}
        >
          <span className="text-xs tracking-[0.4px]">Get in touch</span>
          <ArrowUpRight aria-hidden />
        </a>
      </nav>
    </header>
  );
}
