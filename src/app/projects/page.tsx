import type { Metadata } from "next";
import Sparkles from "@/lib/icons/sparkles.svg";
import { PROJECTS } from "@/lib/content/projects";
import FeaturedCase from "./_components/FeaturedCase";
import CaseCard from "./_components/CaseCard";

export const metadata: Metadata = {
  title: "Selected Projects",
  description:
    "문제 → 접근 → 결과 순서로 정리한 프로젝트 케이스. 상품 목록 가상화, 주문·결제 설계, AI 에이전트 워크플로 등.",
};

export default function ProjectsPage() {
  const featured = PROJECTS.find((project) => project.featured);
  const rest = PROJECTS.filter((project) => !project.featured);

  return (
    <main className="flex min-h-dvh flex-col gap-10 px-12 pt-[calc(72px+52px)] pb-11 max-[750px]:gap-8 max-[750px]:px-5 max-[750px]:pt-[calc(72px+28px)]">
      <div className="flex items-end justify-between gap-[60px] max-[900px]:flex-col max-[900px]:items-center max-[900px]:gap-5 max-[900px]:text-center">
        <div className="flex min-w-0 flex-col gap-4 max-[900px]:items-center">
          <div className="flex items-center gap-2 text-ink-3">
            <Sparkles width={14} height={14} />
            <span className="h-px w-[26px] bg-ink-3" />
            <span className="text-xs tracking-[1.6px]">
              02 — SELECTED PROJECTS
            </span>
          </div>
          <h1 className="text-title leading-[1.05] font-bold tracking-[-1.6px] whitespace-pre-line text-ink max-[750px]:text-[36px]">
            {"무엇을 만들었는지보다\n어떻게 풀었는지"}
          </h1>
        </div>
        <p className="max-w-[340px] shrink-0 text-sm leading-[1.8] text-ink-2">
          각 프로젝트는 문제 → 접근 → 결과 순서로 정리했습니다. 숫자는
          이력서에 적은 실제 개선 수치예요.
        </p>
      </div>
      {featured && <FeaturedCase project={featured} />}
      <div className="grid grid-cols-2 gap-6 max-[900px]:grid-cols-1">
        {rest.map((project) => (
          <CaseCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
