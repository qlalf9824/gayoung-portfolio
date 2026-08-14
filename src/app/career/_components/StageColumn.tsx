import Image from "next/image";
import Link from "next/link";
import Info from "@/lib/icons/info.svg";
import { OUTFITS } from "@/lib/content/outfits";
import type { Career } from "@/lib/content/careers";

export default function StageColumn({ career }: { career: Career }) {
  return (
    <div className="flex min-w-fit flex-1 flex-col items-center gap-[22px] max-[900px]:order-first max-[900px]:w-full max-[900px]:flex-none max-[900px]:gap-3.5">
      <div className="flex w-full flex-col items-center">
        <Image
          src={career.characterImage}
          alt={`${career.title} 옷차림의 캐릭터`}
          width={347}
          height={520}
          className="h-[clamp(300px,50vh,520px)] w-auto object-contain object-bottom max-[900px]:h-[clamp(160px,26vh,240px)]"
          draggable={false}
          priority
        />
        <div className="h-6 w-60 rounded-full bg-shade-soft max-[900px]:h-4 max-[900px]:w-36" />
      </div>
      <div className="flex items-center gap-3 rounded-[30px] border border-stage-line bg-ov-1 p-3.5 max-[900px]:gap-2 max-[900px]:p-2.5">
        {OUTFITS.map((outfit) => {
          const isActive = outfit.era === career.era;
          return (
            <Link
              key={outfit.era}
              href={`/career/${outfit.era}`}
              className={`flex w-[130px] flex-col items-center gap-2 rounded-[22px] border px-2.5 pt-3 pb-[11px] transition-colors max-[900px]:w-[88px] max-[900px]:gap-1 max-[900px]:pt-2 max-[900px]:pb-2 ${
                isActive
                  ? "border-stage-accent bg-stage-tint"
                  : "border-stage-line bg-ov-1 hover:bg-ov-2"
              }`}
            >
              <Image
                src={outfit.image}
                alt={outfit.shortName}
                width={40}
                height={40}
                className="h-10 w-auto max-[900px]:h-7"
                draggable={false}
              />
              <span
                className={`text-sm tracking-[1.4px] max-[900px]:text-xs ${
                  isActive ? "text-stage-ink" : "text-stage-ink-3"
                }`}
              >
                {outfit.year}
              </span>
              <span
                className={`text-sm font-medium max-[900px]:text-xs ${
                  isActive ? "text-stage-accent" : "text-stage-ink-2"
                }`}
              >
                {outfit.shortName}
              </span>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-[7px]">
        <Info width={13} height={13} className="shrink-0 text-stage-ink-2" />
        <span className="text-sm text-stage-ink-2 max-[900px]:text-xs">
          옷을 바꾸면 배경 · 역할 · 프로젝트가 함께 바뀝니다
        </span>
      </div>
    </div>
  );
}
