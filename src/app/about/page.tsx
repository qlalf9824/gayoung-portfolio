import Sparkles from "@/lib/icons/sparkles.svg";
import ContactCard from "./_components/ContactCard";

const QUICK_FACTS = [
  { label: "BASED IN", value: "Seoul, KR" },
  { label: "EXPERIENCE", value: "4년 11개월" },
  { label: "FOCUS", value: "Web · Hybrid App · Performance" },
  { label: "OPEN TO", value: "제품팀 프론트엔드" },
];

export default function AboutPage() {
  return (
    <main className="flex min-h-dvh flex-col justify-between gap-11 px-12 pt-[calc(72px+52px)] pb-10 max-[750px]:gap-8 max-[750px]:px-5 max-[750px]:pt-[calc(72px+28px)]">
      <div className="flex justify-between gap-[60px] max-[900px]:flex-col max-[900px]:gap-8">
        <div className="flex min-w-0 max-w-[700px] flex-col gap-[18px] max-[900px]:max-w-none max-[900px]:items-center max-[900px]:text-center">
          <div className="flex items-center gap-2 text-ink-3">
            <Sparkles width={14} height={14} />
            <span className="h-px w-[26px] bg-ink-3" />
            <span className="text-xs tracking-[1.6px]">04 — ABOUT</span>
          </div>
          <h1 className="text-title leading-[1.05] font-bold tracking-[-1.6px] whitespace-pre-line text-ink max-[750px]:text-[36px]">
            {"하가영\nGayoung Ha"}
          </h1>
          <p className="max-w-[600px] text-md leading-[1.8] text-ink-2">
            사용자와 동료가 겪는 불편을 그냥 지나치지 않는 프론트엔드
            개발자입니다. React · Next.js · Flutter를 기반으로 커머스 앱과
            물류 시스템을 만들며, 화면을 구현하는 것에서 그치지 않고 더 빠르게
            사용할 수 있는지, 더 안정적으로 운영할 수 있는지, 더 효율적으로
            개발할 수 있는지를 함께 고민해왔습니다. 성능 저하부터 반복 업무,
            장애 추적, 개발 프로세스까지 실제 문제를 발견하고 더 나은 방식으로
            바꾸는 일을 좋아합니다.
          </p>
          <div className="grid grid-cols-2 gap-x-14 gap-y-4 pt-2.5 max-[900px]:justify-items-center">
            {QUICK_FACTS.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1">
                <span className="text-xs tracking-[1.3px] text-ink-3">
                  {fact.label}
                </span>
                <span className="text-md text-ink">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
        <ContactCard />
      </div>
    </main>
  );
}
