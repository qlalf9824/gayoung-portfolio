export const INVENTORY_CATEGORY = {
  ALL: "All",
  LANGUAGE: "Language",
  FRAMEWORK: "Framework",
  TOOLING: "Tooling",
  INFRA: "Infra",
} as const;
export type InventoryCategory =
  (typeof INVENTORY_CATEGORY)[keyof typeof INVENTORY_CATEGORY];

export interface InventoryItem {
  name: string;
  icon: string;
  level: 1 | 2 | 3;
  category: Exclude<InventoryCategory, "All">;
}

export const INVENTORY_ITEMS: InventoryItem[] = [
  { name: "TypeScript", icon: "code", level: 3, category: "Language" },
  { name: "React", icon: "atom", level: 3, category: "Framework" },
  { name: "Next.js", icon: "layout-template", level: 3, category: "Framework" },
  { name: "Flutter", icon: "smartphone", level: 3, category: "Framework" },
  { name: "React Native", icon: "layers", level: 2, category: "Framework" },
  { name: "React Query", icon: "refresh-cw", level: 3, category: "Framework" },
  { name: "Firebase", icon: "flame", level: 2, category: "Infra" },
  { name: "Playwright", icon: "play", level: 2, category: "Tooling" },
  { name: "GitHub Actions", icon: "git-branch", level: 2, category: "Infra" },
  { name: "Fastlane", icon: "rocket", level: 2, category: "Infra" },
  { name: "Sentry", icon: "shield", level: 2, category: "Infra" },
  { name: "Hackle", icon: "activity", level: 2, category: "Tooling" },
  { name: "Widgetbook", icon: "book-open", level: 2, category: "Tooling" },
  { name: "Three.js", icon: "box", level: 1, category: "Framework" },
  { name: "Figma", icon: "pen-tool", level: 2, category: "Tooling" },
];
