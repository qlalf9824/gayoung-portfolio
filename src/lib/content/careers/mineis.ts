import { CAREER_ERA } from "@/lib/constants";
import type { Career } from "./types";

export const mineisCareer: Career = {
  era: CAREER_ERA.CHARAN_2022,
  title: "2022 — 차란",
  period: "2022.06 — 2026.01 · 3년 8개월",
  role: "Frontend Developer",
  team: "마인이스 · 세컨핸드 패션 커머스",
  summary:
    "두 번째 옷은 3년 8개월을 입었습니다. Flutter와 React를 결합한 하이브리드 구조로 차란의 첫 출시에 참여했고, 상품 목록 가상화로 LCP를 60% 개선하며 내가 바꾼 코드가 사용자 경험과 지표의 변화로 이어지는 경험을 했습니다. 커머스 핵심 기능부터 물류 관리 웹, 디자인 시스템까지 폭넓게 개발하며, 디자인·백엔드·마케팅·물류팀과 함께 문제를 해결하는 법을 배운 곳입니다.",
  characterImage: "/images/character-2022.png",
  projects: [
    {
      title: "차란 하이브리드 앱 출시",
      desc: "Flutter InAppWebView + React 기반 앱 구축 · 앱–웹 Bridge와 커머스 핵심 플로우 개발",
      year: "2022",
    },
    {
      title: "물류 관리 시스템 WMS 개발",
      desc: "주문·수거·회수·반품 운영 기능 · QR·운송장 출력으로 물류 현장 업무 개선",
      year: "2023",
    },
    {
      title: "커머스 경험 · 성능 개선",
      desc: "상품 탐색·장바구니 등 핵심 기능 개발 · 목록 가상화로 LCP 60% 개선",
      year: "2024",
    },
    {
      title: "공통 UI · 개발 체계 구축",
      desc: "Widgetbook 기반 공통 컴포넌트 카탈로그 · 반복되는 UI 구현 방식 표준화",
      year: "2024",
    },
    {
      title: "앱 안정성 · 예외 처리 표준화",
      desc: "Error Boundary와 공통 에러 모델 도입 · 장애와 API 예외에 일관된 대응 구조 구축",
      year: "2024",
    },
    {
      title: "P2P 개인 간 거래 기능 개발",
      desc: "상품 등록부터 셀러 대시보드·주문·반품까지 판매자 거래 플로우 전체 개발",
      year: "2025",
    },
  ],
};
