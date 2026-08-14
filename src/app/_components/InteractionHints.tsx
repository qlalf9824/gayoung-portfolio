import { Fragment } from "react";
import Hand from "@/lib/icons/hand.svg";
import MousePointerClick from "@/lib/icons/mouse-pointer-click.svg";
import type { Garment } from "@/lib/constants";

const MODES = [
  { Icon: Hand, title: "DRAG", desc: "옷을 캐릭터에게 끌어놓기" },
  { Icon: MousePointerClick, title: "CLICK", desc: "카드의 Wear 버튼 누르기" },
];

const KEYS = ["←", "→", "Enter"];

export default function InteractionHints({
  dragging,
}: {
  dragging?: Garment | null;
}) {
  return (
    <div
      className={`fixed bottom-4 left-1/2 flex w-[calc(100%-80px)] -translate-x-1/2 transform items-center justify-between rounded-[25px] border px-5 py-4 transition-colors ${
        dragging
          ? `${dragging.accentBorderClass} ${dragging.cardClass}`
          : "border-line bg-bg-panel"
      }`}
    >
      <div className="flex items-center gap-5">
        {MODES.map(({ Icon, title, desc }, i) => (
          <Fragment key={title}>
            {i > 0 && <span className="h-[26px] w-px bg-line" />}
            <div className="flex items-center gap-2.5">
              <Icon width={17} height={17} className="text-ink" />
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-bold tracking-[1.4px] text-ink">
                  {title}
                </span>
                <span className="text-xs text-ink-3">{desc}</span>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
      <div className="flex items-center gap-[7px]">
        {KEYS.map((key) => (
          <kbd
            key={key}
            className="rounded-[11px] border border-rail bg-bg-base px-[9px] py-[5px] text-xs text-ink-2"
          >
            {key}
          </kbd>
        ))}
        <span className="text-xs text-ink-3">키보드로도 착용 가능</span>
      </div>
    </div>
  );
}
