import Link from "next/link";
import { notFound } from "next/navigation";
import ArrowLeft from "@/lib/icons/arrow-left.svg";
import { PROJECTS } from "@/lib/content/projects";
import StorySteps from "../_components/StorySteps";
import ImpactPanel from "../_components/ImpactPanel";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[1040px] flex-col gap-7 px-12 pt-[calc(72px+44px)] pb-16 max-[750px]:gap-6 max-[750px]:px-5 max-[750px]:pt-[calc(72px+24px)]">
      <Link
        href="/projects"
        className="flex items-center gap-1.5 self-start text-sm text-ink-3 transition-colors hover:text-ink"
      >
        <ArrowLeft width={15} height={15} />
        Selected Projects
      </Link>
      <div className="flex flex-col gap-3">
        <span className="text-xs tracking-[0.6px] text-ink-3">
          {project.year} · {project.company}
          {project.role && ` · ${project.role}`}
        </span>
        <h1 className="text-[44px] leading-[1.15] font-bold tracking-[-1.2px] text-ink max-[750px]:text-[30px]">
          {project.title}
        </h1>
        {project.subtitle && (
          <p className="text-md text-ink-2">{project.subtitle}</p>
        )}
      </div>
      <div className="h-px w-full bg-line" />
      <div className="flex gap-11 max-[900px]:flex-col max-[900px]:gap-6">
        <StorySteps project={project} />
        <ImpactPanel project={project} />
      </div>
      <div className="flex flex-wrap gap-[7px]">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-[11px] border border-line bg-bg-panel px-[11px] py-1.5 text-xs text-ink-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </main>
  );
}
