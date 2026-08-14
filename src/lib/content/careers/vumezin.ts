import { CAREER_ERA } from "@/lib/constants";
import type { Career } from "./types";

export const vumezinCareer: Career = {
  era: CAREER_ERA.VUMEZIN_2021,
  title: "2021 — 뷰메진",
  period: "2021.10 — 2022.05 · 8개월",
  role: "Frontend Developer",
  team: "뷰메진 · 시설물 안전진단 AI",
  summary:
    "개발자로 첫 옷을 입은 곳입니다. 균열 탐지 서비스를 React 프론트엔드부터 Flask·MySQL 백엔드까지 직접 만들며 서비스가 동작하는 전체 그림을 배웠고, Three.js와 Leaflet으로 대용량 데이터를 다루며 화면 성능을 처음 고민했습니다. 코드 리뷰와 컨벤션 문서화에 참여하며 함께 일하는 법도 이곳에서 배웠습니다.",
  characterImage: "/images/character-2021.png",
  projects: [
    {
      title: "균열 탐지 플랫폼 개발",
      desc: "React + Flask + MySQL 기반 서비스 구축 · 탐지 결과 조회부터 API·데이터 처리까지 개발",
      year: "2021",
    },
    {
      title: "3D 결함 관리 웹 개발",
      desc: "Three.js 기반 3D 모델 뷰어 · Leaflet 대용량 TIF 지도 렌더링 최적화",
      year: "2022",
    },
  ],
};
