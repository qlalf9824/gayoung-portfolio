import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-10 pt-[72px] text-center">
      <p className="text-xs tracking-[1.6px] text-ink-3">404 — NOT FOUND</p>
      <h1 className="text-title font-bold tracking-[-2px] text-ink max-[750px]:text-[36px] max-[750px]:tracking-[-1px]">
        아직 정리하지 않은 프로젝트예요
      </h1>
      <p className="text-md text-ink-2 max-[750px]:text-sm">
        주소가 잘못되었거나, 아직 케이스로 옮기지 않은 작업입니다.
      </p>
      <Link
        href="/projects"
        className="mt-2 rounded-full bg-ink px-[26px] py-[15px] text-md font-bold text-bg-soft transition-transform hover:scale-105"
      >
        프로젝트 목록으로 돌아가기
      </Link>
    </main>
  );
}
