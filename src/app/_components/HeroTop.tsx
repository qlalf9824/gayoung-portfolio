import Image from "next/image";
import type { Ref } from "react";
import Sparkles from "@/lib/icons/sparkles.svg";
import Hand from "@/lib/icons/hand.svg";
import type { Outfit } from "@/lib/content/outfits";

interface HeroTopProps {
  dragging: Outfit | null;
  dropZoneRef: Ref<HTMLDivElement>;
}

export default function HeroTop({ dragging, dropZoneRef }: HeroTopProps) {
  return (
    <div className="flex min-h-0 w-full flex-1 justify-between gap-10">
      <div className="flex min-w-0 flex-col gap-2">
        <div className="flex items-center gap-2 text-ink-3">
          <Sparkles width={14} height={14} />
          <span className="h-px w-[26px] bg-ink-3" />
          <span className="text-xs tracking-[1.6px]">
            01 — CAREER, WEARABLE
          </span>
        </div>
        <h1 className="text-title font-bold tracking-[-2.5px] whitespace-pre-line text-ink">
          {"MY CAREER\nCLOSET"}
        </h1>
        <p className="max-w-[520px] text-md leading-[1.75] text-ink-2">
          4년 11개월 동안 세 곳에서 옷을 갈아입었습니다. <br />
          옷을 캐릭터에게 입히면 그 시절의 화면 · 역할 · 프로젝트가 함께
          바뀝니다.
        </p>
      </div>
      <div className="flex min-h-0 shrink-0 flex-col items-end justify-end">
        <div ref={dropZoneRef} className="relative mr-4 shrink-0">
          <div
            className={`absolute top-0 right-[80%] z-10 flex items-center gap-2 rounded-2xl rounded-br-[4px] border-[1.5px] px-[18px] py-3 whitespace-nowrap transition-colors ${
              dragging
                ? `${dragging.accentBorderClass} ${dragging.accentBgClass}`
                : "border-ink bg-bg-panel"
            }`}
          >
            <span
              className={`text-sm ${dragging ? "text-surface-blush" : "text-ink"}`}
            >
              {dragging ? "Drop it here!" : "Drag clothes to me"}
            </span>
            <Hand
              width={15}
              height={15}
              className={dragging ? "text-surface-blush" : "text-p24"}
            />
          </div>
          {dragging && (
            <div
              className={`pointer-events-none absolute -inset-x-7 -top-2 -bottom-1 flex items-center justify-center rounded-[30px] border-[1.5px] ${dragging.accentBorderClass} ${dragging.cardClass}`}
            />
          )}
          <Image
            src="/images/character-default.png"
            alt="기본 옷차림의 캐릭터"
            width={100}
            height={400}
            className="h-[280px] w-auto object-contain object-bottom"
            draggable={false}
            priority
          />
        </div>
      </div>
    </div>
  );
}
