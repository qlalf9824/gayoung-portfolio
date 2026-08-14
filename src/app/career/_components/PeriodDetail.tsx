import type { Career } from "@/lib/content/careers";

export default function PeriodDetail({ career }: { career: Career }) {
  return (
    <div className="flex w-[700px] min-w-0 shrink flex-col gap-5 max-[900px]:w-full max-[900px]:items-center max-[900px]:text-center">
      <div className="flex items-center gap-2.5">
        <div className="flex items-center gap-[7px] rounded-full border border-stage-accent bg-stage-tint px-[13px] py-[7px]">
          <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-stage-accent" />
          <span className="text-xs tracking-[1.6px] text-stage-accent">
            NOW WEARING
          </span>
        </div>
        <span className="text-xs tracking-[0.4px] text-stage-ink-2">
          {career.period}
        </span>
      </div>
      <h1 className="text-title font-bold tracking-[-2px] text-stage-ink">
        {career.title}
      </h1>
      <div className="flex items-center gap-3 max-[900px]:flex-col max-[900px]:gap-1.5">
        <span className="text-xl font-medium text-stage-accent">
          {career.role}
        </span>
        <span className="h-4 w-px bg-stage-line max-[900px]:hidden" />
        <span className="text-md text-stage-ink-3">{career.team}</span>
      </div>
      <p className="max-w-[660px] text-md leading-[1.7] text-stage-ink-3">
        {career.summary}
      </p>
      <div className="h-px w-full bg-stage-line" />
      <div className="w-full max-[900px]:text-left">
        <span className="text-md tracking-[1.6px] text-stage-ink-2">
          PROJECTS FROM THIS PERIOD
        </span>
        <div className="flex w-full flex-col">
          {career.projects.map((project, i) => (
            <div
              key={project.title}
              className="flex w-full items-center gap-[18px] border-b border-stage-line px-1 py-[11px]"
            >
              <span className="text-xs text-stage-ink-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="text-lg font-medium text-stage-ink">
                  {project.title}
                </span>
                <span className="text-sm text-stage-ink-2">{project.desc}</span>
              </div>
              <span className="text-xs text-stage-ink-2">{project.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
