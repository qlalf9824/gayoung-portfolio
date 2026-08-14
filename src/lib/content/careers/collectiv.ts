import { CAREER_ERA } from "@/lib/constants";
import type { Career } from "./types";

export const collectivCareer: Career = {
  era: CAREER_ERA.COLLECTIV_2026,
  title: "2026 — 콜렉티브",
  period: "2026.01 — 재직중 · 8개월",
  role: "Frontend Developer",
  team: "크레이빙콜렉터 · 한국·일본 커머스",
  summary:
    "세 번째 옷은 지금도 입고 있습니다. Next.js 웹과 Flutter 하이브리드 앱을 새롭게 만들며, 주어진 구조 안에서 기능을 개발하는 것을 넘어 서비스의 기반을 직접 설계하는 경험을 하고 있습니다. 상품 등록과 가격 제안, 장바구니·결제 같은 커머스 핵심 기능부터 웹과 앱을 연결하는 Bridge, 성능 최적화와 이벤트 계측, 배포 파이프라인까지 제품이 사용자에게 도달하고 운영되는 과정 전반을 다루고 있습니다. 최근에는 Figma의 디자인과 Postman의 API 명세를 코드 구현까지 연결하는 AI Agent와 PR 자동화도 만들며, 내가 코드를 더 빠르게 작성하는 것을 넘어 팀 전체가 더 정확하고 효율적으로 개발할 수 있는 방법을 고민하기 시작했습니다.",
  characterImage: "/images/character-2026.png",
  projects: [
    {
      title: "콜렉티브 웹 · 앱 신규 구축",
      desc: "Next.js + Flutter 기반 하이브리드 서비스 설계 · 웹·앱 공통 구조와 개발 기반 구축",
      year: "2026",
    },
    {
      title: "웹뷰 · 네이티브 Bridge 설계",
      desc: "Deep Link·결제·이미지·네비게이션 통신 계층 · 웹과 앱의 상태를 연결하는 구조 개발",
      year: "2026",
    },
    {
      title: "커머스 핵심 거래 플로우 구축",
      desc: "상품 등록·가격 제안·장바구니·결제 개발 · 결제 세션과 멱등성 기반 예외 처리 설계",
      year: "2026",
    },
    {
      title: "프로덕트 성능 · 운영 체계 개선",
      desc: "Streaming·폰트·Lottie·이미지 최적화 · 점검·업데이트·클라이언트 로깅 체계 구축",
      year: "2026",
    },
    {
      title: "프로덕트 이벤트 계측 체계 구축",
      desc: "노출·클릭·체류부터 구매까지 공통 이벤트 수집 · 구매 퍼널 Attribution 구조 설계",
      year: "2026",
    },
    {
      title: "AI 개발 워크플로 자동화",
      desc: "Figma·Postman·코드 구현을 연결한 Agent 구축 · 코드 생성부터 PR까지 개발 과정 자동화",
      year: "2026",
    },
  ],
};
