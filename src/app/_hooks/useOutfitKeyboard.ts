"use client";

import { useEffect, useEffectEvent, useState } from "react";
import { OUTFITS, type Outfit } from "@/lib/constants";

interface UseOutfitKeyboardOptions {
  disabled: boolean;
  onWear: (outfit: Outfit) => void;
}

export function useOutfitKeyboard({
  disabled,
  onWear,
}: UseOutfitKeyboardOptions) {
  const [selected, setSelected] = useState<number | null>(null);
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  const handleKeyDown = useEffectEvent((e: KeyboardEvent) => {
    if (disabled) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;

    if (e.key === "ArrowRight") {
      e.preventDefault();
      setPressedKey("→");
      setSelected((prev) => (prev === null ? 0 : (prev + 1) % OUTFITS.length));
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPressedKey("←");
      setSelected((prev) =>
        prev === null
          ? OUTFITS.length - 1
          : (prev - 1 + OUTFITS.length) % OUTFITS.length,
      );
    } else if (e.key === "Enter") {
      setPressedKey("Enter");
      if (selected !== null) onWear(OUTFITS[selected]);
    } else if (e.key === "Escape") {
      setSelected(null);
    }
  });

  useEffect(() => {
    const handleKeyUp = () => setPressedKey(null);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return {
    selected: selected === null ? null : OUTFITS[selected],
    pressedKey,
  };
}
