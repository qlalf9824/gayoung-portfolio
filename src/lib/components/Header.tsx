"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ArrowUpRight from "@/lib/icons/arrow-up-right.svg";
import {
  CAREER_ERA,
  NAV_ITEM,
  NAV_ITEMS,
  type CareerEra,
  type NavItem,
} from "@/lib/constants";

const ERA_VALUES = Object.values(CAREER_ERA) as string[];

function eraFromPathname(pathname: string): CareerEra | undefined {
  if (pathname.startsWith("/wearing/")) {
    const segment = pathname.split("/")[2];
    if (ERA_VALUES.includes(segment)) return segment as CareerEra;
  }
  if (pathname.startsWith("/inventory")) return CAREER_ERA.INVENTORY;
  return undefined;
}

function activeFromPathname(pathname: string): NavItem {
  if (pathname.startsWith("/projects")) return NAV_ITEM.PROJECTS;
  if (pathname.startsWith("/inventory")) return NAV_ITEM.INVENTORY;
  if (pathname.startsWith("/about")) return NAV_ITEM.ABOUT;
  return NAV_ITEM.CLOSET;
}

export default function Header() {
  const pathname = usePathname();
  const era = eraFromPathname(pathname);
  const active = activeFromPathname(pathname);
  const dark = era !== undefined;

  return (
    <header
      data-era={era}
      className={`fixed inset-x-0 top-0 z-50 flex h-[72px] items-center justify-between border-b px-10 backdrop-blur transition-colors duration-500 ${
        dark ? "border-stage-line bg-stage-bg/80" : "border-line bg-bg-base/80"
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
          <Link
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
          </Link>
        ))}
        <Link
          href="/about"
          className={`flex items-center gap-1 rounded-full px-4 py-[9px] transition-colors ${
            dark ? "bg-stage-accent text-stage-bg" : "bg-ink text-bg-soft"
          }`}
        >
          <span className="text-xs tracking-[0.4px]">Get in touch</span>
          <ArrowUpRight aria-hidden />
        </Link>
      </nav>
    </header>
  );
}
