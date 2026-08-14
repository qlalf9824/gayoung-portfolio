"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ArrowUpRight from "@/lib/icons/arrow-up-right.svg";
import Menu from "@/lib/icons/menu.svg";
import X from "@/lib/icons/x.svg";
import {
  CAREER_ERA,
  NAV_ITEM,
  NAV_ITEMS,
  type CareerEra,
  type NavItem,
} from "@/lib/constants";
import { CAREERS } from "@/lib/content/careers";

function eraFromPathname(pathname: string): CareerEra | undefined {
  if (pathname.startsWith("/career/")) {
    const segment = pathname.split("/")[2] as CareerEra;
    if (CAREERS[segment]) return segment;
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
  const [menuOpen, setMenuOpen] = useState(false);
  const era = eraFromPathname(pathname);
  const active = activeFromPathname(pathname);
  const dark = era !== undefined;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      data-era={era}
      className={`fixed inset-x-0 top-0 z-50 flex h-[72px] items-center justify-between border-b px-5 backdrop-blur transition-colors duration-500 ${
        dark ? "border-stage-line bg-stage-bg/80" : "border-line bg-bg-base/80"
      }`}
    >
      <div className="flex flex-col gap-0.5">
        <span
          className={`text-md font-bold tracking-[1.2px] whitespace-nowrap ${
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

      <nav className="flex items-center gap-5 max-[750px]:hidden">
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

      <button
        type="button"
        aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
        onClick={() => setMenuOpen((open) => !open)}
        className={`hidden max-[750px]:block ${dark ? "text-stage-ink" : "text-ink"}`}
      >
        {menuOpen ? <X width={24} height={24} /> : <Menu width={24} height={24} />}
      </button>

      {menuOpen && (
        <>
          <div
            aria-hidden
            onClick={() => setMenuOpen(false)}
            className="fixed inset-x-0 top-[72px] z-[60] h-[calc(100dvh-72px)] bg-black/40"
          />
          <aside
            className={`fixed top-[72px] right-0 z-[70] flex h-[calc(100dvh-72px)] w-64 flex-col border-l p-6 ${
              dark
                ? "border-stage-line bg-stage-bg text-stage-ink"
                : "border-line bg-bg-base text-ink"
            }`}
          >
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-3 py-3 text-lg font-medium tracking-[0.6px] ${
                    label === active
                      ? dark
                        ? "bg-stage-tint text-stage-accent"
                        : "bg-tint-ink text-ink"
                      : dark
                        ? "text-stage-ink-2"
                        : "text-ink-2"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className={`mt-auto flex items-center justify-center gap-1.5 rounded-full px-4 py-3 ${
                dark ? "bg-stage-accent text-stage-bg" : "bg-ink text-bg-soft"
              }`}
            >
              <span className="text-sm tracking-[0.4px]">Get in touch</span>
              <ArrowUpRight width={15} height={15} aria-hidden />
            </Link>
          </aside>
        </>
      )}
    </header>
  );
}
