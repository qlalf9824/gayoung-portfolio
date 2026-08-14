import Image from "next/image";
import Shirt from "@/lib/icons/shirt.svg";
import { OUTFITS, type Outfit } from "@/lib/content/outfits";

interface ClosetRackProps {
  dragging: Outfit | null;
  selected: Outfit | null;
  onOutfitGrab: (outfit: Outfit, e: React.PointerEvent) => void;
  onWear: (outfit: Outfit) => void;
}

export default function ClosetRack({
  dragging,
  selected,
  onOutfitGrab,
  onWear,
}: ClosetRackProps) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full">
        {OUTFITS.map((outfit) => (
          <div
            key={outfit.era}
            className="flex flex-1 flex-col items-center gap-1.5 pb-2.5"
          >
            <span className="text-sm font-medium tracking-[3px] text-ink">
              {outfit.year}
            </span>
            <span className="h-2 w-px bg-rail" />
          </div>
        ))}
      </div>
      <div className="h-1.5 w-full rounded-[3px] bg-rail" />
      <div className="flex w-full">
        {OUTFITS.map((outfit) => {
          const isDragging = dragging?.era === outfit.era;
          const isSelected = selected?.era === outfit.era;
          return (
            <div key={outfit.era} className="flex flex-1 flex-col items-center">
              <span
                className={`h-[26px] w-0.5 ${isDragging || isSelected ? outfit.accentBgClass : "bg-rail"}`}
              />
              <div
                onPointerDown={(e) => {
                  if ((e.target as HTMLElement).closest("button")) return;
                  onOutfitGrab(outfit, e);
                }}
                className={`flex w-[150px] cursor-grab touch-none flex-col items-center rounded-[22px] border p-4 pb-[18px] transition-[border-color,transform] select-none max-[750px]:w-[113px] max-[750px]:p-2 max-[750px]:pb-3 ${outfit.cardClass} ${
                  isSelected
                    ? `${outfit.accentBorderClass} scale-[1.03]`
                    : "border-transparent"
                } ${isDragging ? "opacity-20" : ""}`}
              >
                <Image
                  src={outfit.image}
                  alt={outfit.company}
                  width={140}
                  height={140}
                  className="h-[clamp(90px,8vh,110px)] w-auto max-[750px]:h-14"
                  draggable={false}
                />
                <div className="flex flex-col items-center mb-2">
                  <span
                    className={`font-bold tracking-[-0.2px] whitespace-nowrap text-md max-[750px]:text-sm ${outfit.companyClass}`}
                  >
                    {outfit.company}
                  </span>
                  <span className="text-center text-xs tracking-[0.3px] text-ink-3">
                    {outfit.role}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onWear(outfit)}
                  className={`flex cursor-pointer items-center gap-1.5 rounded-full border bg-bg-panel px-[13px] py-[7px] transition-transform hover:scale-105 max-[750px]:px-2.5 max-[750px]:py-1 ${outfit.chipClass}`}
                >
                  <Shirt width={12} height={12} />
                  <span className="text-xs tracking-[0.4px]">Wear</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
