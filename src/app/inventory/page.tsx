import type { Metadata } from "next";
import Sparkles from "@/lib/icons/sparkles.svg";
import { CAREER_ERA } from "@/lib/constants";
import ItemGrid from "./_components/ItemGrid";

export const metadata: Metadata = {
  title: "Developer Inventory",
  description:
    "옷을 입는 동안 가방에 담아온 도구들. React · Next.js · Flutter · TypeScript 등 실제 프로덕션에서 쓴 기술 스택.",
};

export default function InventoryPage() {
  return (
    <main
      data-era={CAREER_ERA.INVENTORY}
      className="flex min-h-dvh flex-col gap-9 bg-stage-bg px-12 pt-[calc(72px+52px)] pb-11 max-[750px]:gap-7 max-[750px]:px-5 max-[750px]:pt-[calc(72px+28px)]"
    >
      <div className="flex items-end justify-between gap-[60px] max-[900px]:flex-col max-[900px]:items-center max-[900px]:gap-5 max-[900px]:text-center">
        <div className="flex min-w-0 flex-col gap-4 max-[900px]:items-center">
          <div className="flex items-center gap-2 text-stage-accent">
            <Sparkles width={14} height={14} />
            <span className="h-px w-[26px] bg-stage-accent" />
            <span className="text-sm tracking-[0.6px]">03 — 도구와 스킬</span>
          </div>
          <h1 className="text-title leading-[1.05] font-bold tracking-[-1.2px] whitespace-pre-line text-stage-ink max-[750px]:text-[36px]">
            {"DEVELOPER\nINVENTORY"}
          </h1>
        </div>
        <p className="max-w-[340px] shrink-0 text-sm leading-[1.8] text-stage-ink-3">
          옷을 입는 동안 가방에 담아온 도구들이에요. 점 개수는 자신감이
          아니라 실제 프로덕션에서 얼마나 자주 손에 잡았는지 기준입니다.
        </p>
      </div>
      <div className="flex flex-1">
        <ItemGrid />
      </div>
    </main>
  );
}
