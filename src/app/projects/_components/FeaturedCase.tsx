import Link from "next/link";
import Zap from "@/lib/icons/zap.svg";
import StorySteps from "./StorySteps";
import ImpactPanel from "./ImpactPanel";
import type { ProjectCase } from "@/lib/content/projects";

export default function FeaturedCase({ project }: { project: ProjectCase }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex w-full flex-col gap-[30px] rounded-[30px] border border-line bg-bg-panel p-[38px] transition-colors hover:border-rail max-[750px]:gap-6 max-[750px]:p-6"
    >
      <div className="flex justify-between gap-[30px] max-[750px]:flex-col max-[750px]:gap-4">
        <div className="flex min-w-0 flex-col gap-3">
          <div className="flex items-center gap-1.5 self-start rounded-[11px] bg-p24 px-3 py-1.5 text-bg-soft">
            <Zap width={12} height={12} />
            <span className="text-xs tracking-[1.2px]">FEATURED CASE</span>
          </div>
          <span className="text-2xl font-bold tracking-[-1px] text-ink">
            {project.title}
          </span>
          {project.subtitle && (
            <span className="text-md text-ink-2">{project.subtitle}</span>
          )}
        </div>
        <div className="flex shrink-0 flex-col items-end gap-2 max-[750px]:items-start">
          <span className="text-sm tracking-[1.6px] text-ink">
            {project.year}
          </span>
          <span className="text-xs text-ink-3">{project.company}</span>
          {project.role && (
            <span className="text-xs text-ink-3">{project.role}</span>
          )}
        </div>
      </div>
      <div className="h-px w-full bg-line" />
      <div className="flex gap-11 max-[900px]:flex-col max-[900px]:gap-6">
        <StorySteps project={project} />
        <ImpactPanel project={project} />
      </div>
    </Link>
  );
}
