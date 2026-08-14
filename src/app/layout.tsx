import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/lib/components/Header";
import { SITE_URL } from "@/lib/constants";
import "@/lib/styles/globals.css";

const pretendard = localFont({
  src: "../lib/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "하가영 | 프론트엔드 개발자",
    template: "%s | 하가영",
  },
  description:
    "사용자와 동료가 겪는 불편을 그냥 지나치지 않는 프론트엔드 개발자 하가영입니다. React · Next.js · Flutter로 커머스 앱과 물류 시스템을 만듭니다.",
  keywords: [
    "하가영",
    "Gayoung Ha",
    "프론트엔드 개발자",
    "Frontend Developer",
    "Frontend",
    "React",
    "Next.js",
    "Flutter",
    "포트폴리오",
    "프론트엔드 포트폴리오",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "하가영 포트폴리오",
    title: "하가영 | 프론트엔드 개발자",
    description:
      "커리어를 옷장에 담은 포트폴리오. 옷을 갈아입히면 그 시절의 화면 · 역할 · 프로젝트가 함께 바뀝니다.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "하가영 포트폴리오 — MY CAREER CLOSET",
      },
    ],
  },
  verification: {
    google: "mK4UfZMtXBJ6nvtaVTenUWf0Z-o5o1T8wgKEtw3anlc",
  },
  twitter: {
    card: "summary_large_image",
    title: "하가영 | 프론트엔드 개발자",
    description:
      "커리어를 옷장에 담은 포트폴리오. 옷을 갈아입히면 그 시절의 화면 · 역할 · 프로젝트가 함께 바뀝니다.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${pretendard.variable} h-full antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
