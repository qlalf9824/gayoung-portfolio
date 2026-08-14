"use client";

import { useEffect, useEffectEvent, useRef, useState } from "react";
import type { Outfit } from "@/lib/content/outfits";

const DRAG_THRESHOLD = 6;
const DROP_MARGIN = 24;

export function useOutfitDrag(onDrop: (outfit: Outfit) => void) {
  const [dragging, setDragging] = useState<Outfit | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const pendingRef = useRef<{ outfit: Outfit; x: number; y: number } | null>(
    null,
  );
  const draggingRef = useRef<Outfit | null>(null);
  const dropOutfit = useEffectEvent(onDrop);

  const onOutfitGrab = (outfit: Outfit, e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    pendingRef.current = { outfit, x: e.clientX, y: e.clientY };
    setPointer({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      const pending = pendingRef.current;
      if (pending && !draggingRef.current) {
        const moved = Math.hypot(e.clientX - pending.x, e.clientY - pending.y);
        if (moved > DRAG_THRESHOLD) {
          draggingRef.current = pending.outfit;
          setDragging(pending.outfit);
        }
      }
      if (draggingRef.current) {
        setPointer({ x: e.clientX, y: e.clientY });
      }
    };

    const handleUp = (e: PointerEvent) => {
      const outfit = draggingRef.current;
      pendingRef.current = null;
      draggingRef.current = null;
      if (!outfit) return;
      setDragging(null);

      const rect = dropZoneRef.current?.getBoundingClientRect();
      const inDropZone =
        rect &&
        e.clientX >= rect.left - DROP_MARGIN &&
        e.clientX <= rect.right + DROP_MARGIN &&
        e.clientY >= rect.top - DROP_MARGIN &&
        e.clientY <= rect.bottom + DROP_MARGIN;
      if (inDropZone) dropOutfit(outfit);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("pointercancel", handleUp);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointercancel", handleUp);
    };
  }, []);

  useEffect(() => {
    if (!dragging) return;
    document.body.style.cursor = "grabbing";
    document.body.style.userSelect = "none";
    return () => {
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [dragging]);

  return { dragging, pointer, dropZoneRef, onOutfitGrab };
}
