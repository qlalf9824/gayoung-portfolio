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

export const OUTFITS = [
  {
    era: CAREER_ERA.VUMEZIN_2021,
    year: "2021",
    company: "뷰메진",
    role: "Frontend Developer",
    image: "/images/outfit-vumezin.png",
    cardClass: "bg-p22-tint",
    chipClass: "border-p22 text-p22",
    accentBgClass: "bg-p22",
    accentBorderClass: "border-p22",
    companyClass: "text-lg",
  },
  {
    era: CAREER_ERA.CHARAN_2022,
    year: "2022",
    company: "마인이스",
    role: "차란 · Frontend",
    image: "/images/outfit-mineis.png",
    cardClass: "bg-p24-tint",
    chipClass: "border-p24 text-p24",
    accentBgClass: "bg-p24",
    accentBorderClass: "border-p24",
    companyClass: "text-lg",
  },
  {
    era: CAREER_ERA.COLLECTIV_2026,
    year: "2026",
    company: "크레이빙콜렉터",
    role: "콜렉티브 · Frontend",
    image: "/images/outfit-collectiv.png",
    cardClass: "bg-p26-tint",
    chipClass: "border-p26 text-p26",
    accentBgClass: "bg-p26",
    accentBorderClass: "border-p26",
    companyClass: "text-md",
  },
] as const;
export type Outfit = (typeof OUTFITS)[number];
