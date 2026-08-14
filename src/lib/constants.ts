export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ginnyoung.vercel.app"
).replace(/\/$/, "");

export const CAREER_ERA = {
  VUMEZIN_2021: "2021",
  CHARAN_2022: "2022",
  COLLECTIV_2026: "2026",
  INVENTORY: "inventory",
} as const;
export type CareerEra = (typeof CAREER_ERA)[keyof typeof CAREER_ERA];

export const NAV_ITEM = {
  CLOSET: "Closet",
  PROJECTS: "Projects",
  INVENTORY: "Inventory",
  ABOUT: "About",
} as const;
export type NavItem = (typeof NAV_ITEM)[keyof typeof NAV_ITEM];

export const NAV_ITEMS: { label: NavItem; href: string }[] = [
  { label: NAV_ITEM.CLOSET, href: "/" },
  { label: NAV_ITEM.PROJECTS, href: "/projects" },
  { label: NAV_ITEM.INVENTORY, href: "/inventory" },
  { label: NAV_ITEM.ABOUT, href: "/about" },
];
