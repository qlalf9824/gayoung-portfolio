"use client";

import { useState } from "react";
import {
  INVENTORY_CATEGORY,
  INVENTORY_ITEMS,
  type InventoryCategory,
} from "@/lib/content/inventory";
import { INVENTORY_ICONS } from "./inventoryIcons";

const TABS = Object.values(INVENTORY_CATEGORY);

export default function ItemGrid() {
  const [category, setCategory] = useState<InventoryCategory>(
    INVENTORY_CATEGORY.ALL,
  );
  const items =
    category === INVENTORY_CATEGORY.ALL
      ? INVENTORY_ITEMS
      : INVENTORY_ITEMS.filter((item) => item.category === category);

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-[18px] rounded-[29px] border border-stage-line bg-ov-1 p-6 max-[750px]:p-4">
      <div className="flex items-center justify-between gap-4 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-3">
        <span className="text-sm font-bold text-stage-accent">
          가방 속 {INVENTORY_ITEMS.length}개
        </span>
        <div className="flex flex-wrap items-center gap-[7px]">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setCategory(tab)}
              className={`cursor-pointer rounded-full border px-[13px] py-[7px] text-xs transition-colors ${
                category === tab
                  ? "border-stage-accent bg-stage-accent text-stage-bg"
                  : "border-stage-line bg-ov-1 text-stage-ink-3 hover:text-stage-ink"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="grid flex-1 grid-cols-5 content-start gap-3.5 max-[1100px]:grid-cols-4 max-[900px]:grid-cols-3 max-[750px]:grid-cols-2">
        {items.map((item) => {
          const Icon = INVENTORY_ICONS[item.icon];
          return (
            <div
              key={item.name}
              className="flex flex-col gap-[11px] rounded-[22px] border border-stage-line bg-ov-1 p-4"
            >
              <div className="flex h-[34px] w-[34px] items-center justify-center rounded-2xl bg-ov-2">
                <Icon
                  width={17}
                  height={17}
                  className={
                    item.level === 3 ? "text-stage-accent" : "text-stage-ink-3"
                  }
                />
              </div>
              <span className="text-sm font-bold text-stage-ink">
                {item.name}
              </span>
              <div className="flex items-center gap-1">
                {[1, 2, 3].map((dot) => (
                  <span
                    key={dot}
                    className={`h-[5px] w-[5px] rounded-full ${
                      dot <= item.level ? "bg-mint" : "bg-ov-3"
                    }`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap items-center gap-5">
        <span className="text-xs text-stage-ink-2">●●● 매일 씀</span>
        <span className="text-xs text-stage-ink-2">
          ●●○ 프로젝트 단위로 씀
        </span>
        <span className="text-xs text-stage-ink-2">●○○ 붙여본 적 있음</span>
      </div>
    </div>
  );
}
