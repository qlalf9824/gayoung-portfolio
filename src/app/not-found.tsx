import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-10 pt-[72px] text-center">
      <p className="text-xs tracking-[1.6px] text-ink-3">404 — NOT FOUND</p>
      <h1 className="text-title font-bold tracking-[-2px] text-ink max-[750px]:text-[36px] max-[750px]:tracking-[-1px]">
        옷장에 없는 옷이에요
      </h1>
      <p className="text-md text-ink-2 max-[750px]:text-sm">
        주소가 잘못되었거나, 아직 걸어두지 않은 페이지입니다.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-ink px-[26px] py-[15px] text-md font-bold text-bg-soft transition-transform hover:scale-105"
      >
        옷장으로 돌아가기
      </Link>
    </main>
  );
}
