import type { ProjectCase } from "@/lib/content/projects";

export default function ImpactPanel({ project }: { project: ProjectCase }) {
  const { chart, metrics, footnote } = project;
  if (!chart && !metrics && !footnote) return null;

  return (
    <div className="flex w-[440px] shrink-0 flex-col gap-6 self-start rounded-[25px] border border-line bg-bg-base p-[26px] max-[900px]:w-full">
      {chart && (
        <div className="flex flex-col gap-3.5">
          <span className="text-xs tracking-[1.4px] text-ink-3">
            {chart.label}
          </span>
          <div className="flex flex-col gap-[7px]">
            <div className="flex items-center justify-between">
              <span className="text-xs tracking-[1.2px] text-ink-3">
                {chart.beforeLabel}
              </span>
              <span className="text-xl font-bold text-ink-2">
                {chart.beforeValue}%
              </span>
            </div>
            <div
              className="h-3.5 rounded-[13px] bg-rail"
              style={{ width: `${chart.beforeValue}%` }}
            />
          </div>
          <div className="flex flex-col gap-[7px]">
            <div className="flex items-center justify-between">
              <span className="text-xs tracking-[1.2px] text-ink-3">
                {chart.afterLabel}
              </span>
              <span className="text-xl font-bold text-p24">
                {chart.afterValue}%
              </span>
            </div>
            <div
              className="h-3.5 rounded-[13px] bg-p24"
              style={{ width: `${chart.afterValue}%` }}
            />
          </div>
        </div>
      )}
      {chart && metrics && <div className="h-px w-full bg-line" />}
      {metrics && (
        <div className="flex gap-3.5">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-1 flex-col gap-[3px]">
              <span className="text-2xl font-bold tracking-[-0.6px] text-ink">
                {metric.value}
              </span>
              <span className="text-xs text-ink-3">{metric.label}</span>
            </div>
          ))}
        </div>
      )}
      {footnote && (
        <p className="text-xs leading-[1.7] text-ink-3">{footnote}</p>
      )}
    </div>
  );
}
