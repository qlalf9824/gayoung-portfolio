import type { Outfit } from "./types";
import { vumezinOutfit } from "./vumezin";
import { mineisOutfit } from "./mineis";
import { collectivOutfit } from "./collectiv";

export type { Outfit } from "./types";

export const OUTFITS: readonly Outfit[] = [
  vumezinOutfit,
  mineisOutfit,
  collectivOutfit,
];
