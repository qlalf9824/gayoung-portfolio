import { CAREER_ERA } from "@/lib/constants";
import type { Career } from "./types";

export const mineisCareer: Career = {
  era: CAREER_ERA.CHARAN_2022,
  title: "2022 — 차란",
  period: "2022.06 — 2026.01 · 3년 8개월",
  role: "Frontend Developer",
  team: "마인이스 · 세컨핸드 패션 커머스",
  summary:
    "두 번째 옷은 3년 8개월을 입었습니다. Flutter와 React를 결합한 하이브리드 구조로 차란의 첫 출시에 참여했고, 상품 목록 가상화로 LCP를 60% 개선하며 내가 바꾼 코드가 실제 사용자 경험과 지표의 변화로 이어지는 경험을 했습니다. 이후 커머스 기능뿐 아니라 물류 관리 웹과 P2P 거래, Widgetbook 기반 디자인 시스템까지 서비스가 성장하며 필요한 여러 영역을 경험했고, Error Boundary와 공통 에러 모델을 도입하며 기능을 만드는 것만큼 안정적으로 운영하는 것도 중요하다는 걸 배웠습니다. 무엇보다 디자인·백엔드·마케팅·물류팀과 오랜 시간 함께 서비스를 만들어가며 혼자 잘 만드는 것보다 서로 이해하기 쉬운 코드와 커뮤니케이션으로 함께 문제를 해결하는 법을 배운 곳입니다.",
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
