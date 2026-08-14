"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import HeroTop from "./HeroTop";
import ClosetRack from "./ClosetRack";
import InteractionHints from "./InteractionHints";
import type { Garment } from "@/lib/constants";

const DRAG_THRESHOLD = 6;
const DROP_MARGIN = 24;

export default function ClosetBoard() {
  const router = useRouter();
  const [dragging, setDragging] = useState<Garment | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const pendingRef = useRef<{ garment: Garment; x: number; y: number } | null>(
    null,
  );
  const draggingRef = useRef<Garment | null>(null);

  const handleGarmentGrab = (garment: Garment, e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    pendingRef.current = { garment, x: e.clientX, y: e.clientY };
    setPointer({ x: e.clientX, y: e.clientY });
  };

  const handleWear = (garment: Garment) => {
    router.push(`/wearing/${garment.era}`);
  };

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      const pending = pendingRef.current;
      if (pending && !draggingRef.current) {
        const moved = Math.hypot(e.clientX - pending.x, e.clientY - pending.y);
        if (moved > DRAG_THRESHOLD) {
          draggingRef.current = pending.garment;
          setDragging(pending.garment);
        }
      }
      if (draggingRef.current) {
        setPointer({ x: e.clientX, y: e.clientY });
      }
    };

    const handleUp = (e: PointerEvent) => {
      const garment = draggingRef.current;
      pendingRef.current = null;
      draggingRef.current = null;
      if (!garment) return;
      setDragging(null);

      const rect = dropZoneRef.current?.getBoundingClientRect();
      const inDropZone =
        rect &&
        e.clientX >= rect.left - DROP_MARGIN &&
        e.clientX <= rect.right + DROP_MARGIN &&
        e.clientY >= rect.top - DROP_MARGIN &&
        e.clientY <= rect.bottom + DROP_MARGIN;
      if (inDropZone) router.push(`/wearing/${garment.era}`);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("pointercancel", handleUp);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointercancel", handleUp);
    };
  }, [router]);

  useEffect(() => {
    if (!dragging) return;
    document.body.style.cursor = "grabbing";
    document.body.style.userSelect = "none";
    return () => {
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [dragging]);

  return (
    <>
      <HeroTop dragging={dragging} dropZoneRef={dropZoneRef} />
      <ClosetRack
        dragging={dragging}
        onGarmentGrab={handleGarmentGrab}
        onWear={handleWear}
      />
      <InteractionHints dragging={dragging} />
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
