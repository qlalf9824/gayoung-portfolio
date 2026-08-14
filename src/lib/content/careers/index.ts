import type { CareerEra } from "@/lib/constants";
import type { Career } from "./types";
import { vumezinCareer } from "./vumezin";
import { mineisCareer } from "./mineis";
import { collectivCareer } from "./collectiv";

export type { Career, CareerProject } from "./types";

export const CAREERS: Partial<Record<CareerEra, Career>> = {
  [vumezinCareer.era]: vumezinCareer,
  [mineisCareer.era]: mineisCareer,
  [collectivCareer.era]: collectivCareer,
};
