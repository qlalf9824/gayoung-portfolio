"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import HeroTop from "./HeroTop";
import ClosetRack from "./ClosetRack";
import InteractionHints from "./InteractionHints";
import { useOutfitDrag } from "../_hooks/useOutfitDrag";
import { useOutfitKeyboard } from "../_hooks/useOutfitKeyboard";
import type { Outfit } from "@/lib/content/outfits";

export default function ClosetBoard() {
  const router = useRouter();

  const wear = (outfit: Outfit) => {
    router.push(`/career/${outfit.era}`);
  };

  const { dragging, pointer, dropZoneRef, onOutfitGrab } = useOutfitDrag(wear);
  const { selected, pressedKey } = useOutfitKeyboard({
    disabled: dragging !== null,
    onWear: wear,
  });

  return (
    <>
      <HeroTop dragging={dragging} dropZoneRef={dropZoneRef} />
      <ClosetRack
        dragging={dragging}
        selected={selected}
        onOutfitGrab={onOutfitGrab}
        onWear={wear}
      />
      <InteractionHints dragging={dragging} pressedKey={pressedKey} />
      {dragging && (
        <div
          className="pointer-events-none fixed z-40"
          style={{
            left: pointer.x,
            top: pointer.y,
            transform: "translate(-50%, -50%) rotate(-9deg)",
          }}
        >
          <Image
            src={dragging.image}
            alt=""
            width={132}
            height={132}
            className="h-[132px] w-auto drop-shadow-xl"
            draggable={false}
          />
        </div>
      )}
    </>
  );
}
