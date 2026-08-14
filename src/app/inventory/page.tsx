import { CAREER_ERA } from "@/lib/constants";

export default function InventoryPage() {
  return (
    <main
      data-era={CAREER_ERA.INVENTORY}
      className="flex h-dvh min-h-[640px] flex-col items-center justify-center gap-3 bg-stage-bg pt-[72px]"
    >
      <h1 className="text-title font-bold text-stage-ink">
        Developer Inventory
      </h1>
      <p className="text-md text-stage-ink-3">준비 중인 화면입니다</p>
    </main>
  );
}
