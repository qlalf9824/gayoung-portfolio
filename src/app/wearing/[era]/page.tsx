import { notFound } from "next/navigation";
import { GARMENTS } from "@/lib/constants";

export function generateStaticParams() {
  return GARMENTS.map((g) => ({ era: g.era }));
}

export default async function WearingPage({
  params,
}: PageProps<"/wearing/[era]">) {
  const { era } = await params;
  const garment = GARMENTS.find((g) => g.era === era);
  if (!garment) notFound();

  return (
    <main
      data-era={era}
      className="flex h-dvh min-h-[640px] flex-col items-center justify-center gap-3 bg-stage-bg pt-[72px]"
    >
      <p className="text-sm tracking-[0.6px] text-stage-ink-2">
        {garment.year} — {garment.company}
      </p>
      <h1 className="text-title font-bold text-stage-ink">Wearing</h1>
      <p className="text-md text-stage-ink-3">준비 중인 화면입니다</p>
    </main>
  );
}
