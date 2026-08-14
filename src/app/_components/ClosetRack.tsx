import Image from "next/image";
import Shirt from "@/lib/icons/shirt.svg";
import { GARMENTS } from "@/lib/constants";

export default function ClosetRack() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full">
        {GARMENTS.map((g) => (
          <div
            key={g.era}
            className="flex flex-1 flex-col items-center gap-1.5 pb-2.5"
          >
            <span className="text-sm font-medium tracking-[3px] text-ink">
              {g.year}
            </span>
            <span className="h-2 w-px bg-rail" />
          </div>
        ))}
      </div>
      <div className="h-1.5 w-full rounded-[3px] bg-rail" />
      <div className="flex w-full">
        {GARMENTS.map((g) => (
          <div key={g.era} className="flex flex-1 flex-col items-center">
            <span className="h-[26px] w-0.5 bg-rail" />
            <div
              className={`flex w-[150px] flex-col items-center rounded-[22px] border border-transparent p-4 pb-[18px] ${g.cardClass}`}
            >
              <Image
                src={g.image}
                alt={g.company}
                width={140}
                height={140}
                className="h-[clamp(90px,8vh,110px)] w-auto"
              />
              <div className="flex flex-col items-center mb-2">
                <span
                  className={`font-bold tracking-[-0.2px] text-md ${g.companyClass}`}
                >
                  {g.company}
                </span>
                <span className="text-xs tracking-[0.3px] text-ink-3">
                  {g.role}
                </span>
              </div>
              <button
                type="button"
                className={`flex items-center gap-1.5 rounded-full border bg-bg-panel px-[13px] py-[7px] ${g.chipClass}`}
              >
                <Shirt width={12} height={12} />
                <span className="text-xs tracking-[0.4px]">Wear</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
