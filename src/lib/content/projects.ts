export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectChart {
  label: string;
  beforeLabel: string;
  beforeValue: number;
  afterLabel: string;
  afterValue: number;
}

export interface ProjectCase {
  slug: string;
  featured?: boolean;
  year: string;
  company: string;
  role?: string;
  title: string;
  subtitle?: string;
  problem: string;
  approach?: string;
  result: string;
  metrics?: ProjectMetric[];
  chart?: ProjectChart;
  footnote?: string;
  tags: string[];
}

export const PROJECTS: ProjectCase[] = [
  {
    slug: "plp-virtualization",
    featured: true,
    year: "2022 — 2024",
    company: "차란 · 마인이스",
    role: "FE 3명 · 목록/성능 담당",
    title: "상품 목록 가상화 · LCP 60% 개선",
    subtitle: "많은 상품도 매끄럽게 탐색할 수 있도록",
    problem:
      "상품이 많아질수록 목록 전체를 한 번에 렌더링하면서 첫 화면이 늦게 나타나고, 스크롤 성능도 함께 떨어졌습니다.",
    approach:
      "상품 목록에 Virtualization을 적용해 화면에 보이는 영역을 중심으로 렌더링하도록 변경했습니다. Error Boundary를 함께 도입해 일부 화면의 오류가 전체 앱의 화이트 스크린으로 번지지 않도록 오류 범위도 분리했습니다.",
    result:
      "상품 목록의 LCP를 60% 개선했고, 대량의 상품을 탐색할 때 발생하던 렌더링 부담을 줄였습니다. 일부 화면에서 오류가 발생하더라도 서비스 전체를 사용할 수 없는 상황으로 이어지지 않도록 안정성도 높였습니다.",
    metrics: [{ value: "-60%", label: "LCP" }],
    chart: {
      label: "LARGEST CONTENTFUL PAINT (상대값)",
      beforeLabel: "BEFORE",
      beforeValue: 100,
      afterLabel: "AFTER",
      afterValue: 40,
    },
    footnote: "차란 v1 상품 목록 · Flutter InAppWebView + React 하이브리드",
    tags: ["Virtualization", "React", "Error Boundary"],
  },
  {
    slug: "order-payment",
    year: "2026",
    company: "콜렉티브 · 크레이빙콜렉터",
    title: "주문 · 결제 상태 설계",
    subtitle: "결제가 꼬이지 않는 거래 흐름 만들기",
    problem:
      "결제에는 장바구니, 본인인증, 가격 제안, PG 결제처럼 여러 상태가 연결되어 있어 중복 요청이나 결제창 이탈이 주문 상태 불일치로 이어질 수 있었습니다.",
    approach:
      "클라이언트가 전달한 금액 대신 서버의 결제 세션을 승인 기준으로 사용하고, 멱등키를 적용해 중복 주문을 방지했습니다. 인앱 결제에는 전용 Checkout Route와 세션 Polling을 구성하고, 결제창을 이탈하면 PG 세션과 가격 제안 예약 상태를 함께 복구하도록 설계했습니다.",
    result:
      "결제의 각 단계를 하나의 상태 흐름으로 연결해 중복 주문과 결제 상태 불일치에 대응할 수 있는 구조를 만들었습니다. 로그인·본인인증 여부까지 결제 진입 조건에 포함해 정상적인 사용자만 다음 단계로 이동하도록 했습니다.",
    tags: ["Payment", "Idempotency", "State Flow"],
  },
  {
    slug: "ai-agent-workflow",
    year: "2026",
    company: "콜렉티브 · 크레이빙콜렉터",
    title: "AI Agent · 개발 워크플로 자동화",
    subtitle: "기획에서 코드까지, 프로덕트 개발 루프 만들기",
    problem:
      "요구사항을 확인하고 디자인과 API 명세를 찾아 구현한 뒤 PR을 만드는 과정에 반복 작업이 많았습니다. AI를 활용하더라도 정보가 부족하면 존재하지 않는 필드나 API를 임의로 만들어내는 문제가 있었습니다.",
    approach:
      "승인된 요구사항을 기준으로 Figma 디자인 조회와 Postman API 계약 검증, Next.js·Flutter 코드 생성을 하나의 Agent 흐름으로 연결했습니다. 정보가 부족하면 추측하는 대신 피드백을 남기도록 Guardrail을 만들고, Branch 생성부터 PR·Review 반영·Merge까지 반복되는 Git 작업도 자동화했습니다.",
    result:
      "요구사항 → 디자인·API 확인 → 구현 → 리뷰 → QA → 피드백으로 이어지는 개발 루프를 만들었습니다. AI가 코드를 대신 작성하는 데 그치지 않고, 팀의 규칙과 실제 스펙을 기준으로 반복 가능한 개발 프로세스 안에서 동작하도록 구성했습니다.",
    tags: ["AI Agent", "Postman", "Figma", "GitHub Actions"],
  },
  {
    slug: "web-performance",
    year: "2026",
    company: "콜렉티브 · 크레이빙콜렉터",
    title: "웹 성능 최적화",
    subtitle: "사용자에게 더 빠른 첫 화면을 보여주기",
    problem:
      "서버 데이터 요청이 순차적으로 처리되면서 일부 API가 느리면 첫 화면 전체가 함께 늦게 나타났고, 초기 로딩에 필요하지 않은 리소스도 먼저 내려받고 있었습니다.",
    approach:
      "서버 요청을 병렬화하고 화면 영역별로 Suspense Streaming을 분리해 느린 데이터가 다른 영역의 렌더링을 막지 않도록 변경했습니다. 폰트 Subset과 Lottie Dynamic Import, 이미지 크기 최적화로 초기 전송 리소스도 줄였습니다.",
    result:
      "약 2MB의 폰트 Preload를 제거하고 Lottie의 초기 JavaScript 약 307KB를 줄였습니다. 데이터가 준비되는 영역부터 순차적으로 화면을 보여주도록 변경해 사용자가 첫 화면을 기다리는 경험도 개선했습니다.",
    metrics: [
      { value: "-2MB", label: "폰트 Preload" },
      { value: "-307KB", label: "초기 JS" },
    ],
    tags: ["Next.js", "Suspense", "Web Performance"],
  },
  {
    slug: "wms-operations",
    year: "2023 — 2025",
    company: "마인이스 · WMS",
    title: "WMS · 운영 프로세스 개선",
    subtitle: "물류 현장의 반복과 불편을 줄이기",
    problem:
      "물류 시스템은 기능이 동작하는 것만으로 충분하지 않았습니다. 주문·수거·회수·반품처럼 실제 현장에서 반복되는 업무 흐름과 맞지 않는 화면은 작업자의 불편으로 바로 이어졌습니다.",
    approach:
      "물류 담당자와 실제 업무 흐름을 확인하며 화면과 처리 과정을 개선했습니다. QR과 운송장 출력 기능을 개발하고, 의류 상품화 과정과 케어라벨 촬영 기능 등 현장에서 필요한 기능을 시스템에 반영했습니다.",
    result:
      "주문부터 상품화까지 물류 담당자가 실제로 일하는 방식에 맞춰 시스템의 흐름을 개선했습니다. 단순히 요구사항을 구현하는 것을 넘어 운영자의 업무 과정에서 불편한 지점을 찾아 제품으로 해결하는 경험을 했습니다.",
    tags: ["React", "TypeScript", "React Query"],
  },
];
