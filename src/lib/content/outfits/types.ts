import type { CareerEra } from "@/lib/constants";

export interface Outfit {
  era: CareerEra;
  year: string;
  company: string;
  shortName: string;
  role: string;
  image: string;
  cardClass: string;
  chipClass: string;
  accentBgClass: string;
  accentBorderClass: string;
  companyClass: string;
}
