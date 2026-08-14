import TriangleAlert from "@/lib/icons/triangle-alert.svg";
import Wrench from "@/lib/icons/wrench.svg";
import Target from "@/lib/icons/target.svg";
import type { ProjectCase } from "@/lib/content/projects";

const STEPS = [
  {
    key: "problem",
    label: "PROBLEM",
    Icon: TriangleAlert,
    textClass: "text-brand-clay",
    borderClass: "border-brand-clay",
  },
  {
    key: "approach",
    label: "APPROACH",
    Icon: Wrench,
    textClass: "text-brand-sage",
    borderClass: "border-brand-sage",
  },
  {
    key: "result",
    label: "RESULT",
    Icon: Target,
    textClass: "text-brand-indigo",
    borderClass: "border-brand-indigo",
  },
] as const;

export default function StorySteps({ project }: { project: ProjectCase }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-[22px]">
      {STEPS.map(({ key, label, Icon, textClass, borderClass }) => {
        const text = project[key];
        if (!text) return null;
        return (
          <div
            key={label}
            className={`flex flex-col gap-[7px] border-l-[3px] pl-4 ${borderClass}`}
          >
            <div className={`flex items-center gap-[7px] ${textClass}`}>
              <Icon width={14} height={14} />
              <span className="text-xs font-bold tracking-[1.5px]">
                {label}
              </span>
            </div>
            <p className="text-md leading-[1.8] text-ink-2">{text}</p>
          </div>
        );
      })}
    </div>
  );
}
