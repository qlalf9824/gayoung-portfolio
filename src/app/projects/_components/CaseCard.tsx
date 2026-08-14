import Link from "next/link";
import ArrowUpRight from "@/lib/icons/arrow-up-right.svg";
import type { ProjectCase } from "@/lib/content/projects";

export default function CaseCard({ project }: { project: ProjectCase }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex flex-col gap-[18px] rounded-[29px] border border-line bg-bg-panel p-[30px] transition-colors hover:border-rail max-[750px]:p-5"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs tracking-[0.6px] text-ink-3">
          {project.year} · {project.company}
        </span>
        <ArrowUpRight width={16} height={16} className="shrink-0 text-p26" />
      </div>
      <span className="text-2xl font-bold tracking-[-0.8px] text-ink max-[750px]:text-xl">
        {project.title}
      </span>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-[5px]">
          <span className="text-xs font-bold tracking-[1.4px] text-brand-clay">
            PROBLEM
          </span>
          <p className="line-clamp-2 text-sm leading-[1.75] text-ink-2">
            {project.problem}
          </p>
        </div>
        <div className="flex flex-col gap-[5px]">
          <span className="text-xs font-bold tracking-[1.4px] text-brand-indigo">
            RESULT
          </span>
          <p className="line-clamp-2 text-sm leading-[1.75] text-ink-2">
            {project.result}
          </p>
        </div>
      </div>
      <div className="mt-auto flex flex-wrap gap-[7px]">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-[11px] border border-line bg-bg-base px-[11px] py-1.5 text-xs text-ink-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
