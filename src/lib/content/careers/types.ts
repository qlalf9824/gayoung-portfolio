import type { CareerEra } from "@/lib/constants";

export interface CareerProject {
  title: string;
  desc: string;
  year: string;
}

export interface Career {
  era: CareerEra;
  title: string;
  period: string;
  role: string;
  team: string;
  summary: string;
  characterImage: string;
  projects: CareerProject[];
}
