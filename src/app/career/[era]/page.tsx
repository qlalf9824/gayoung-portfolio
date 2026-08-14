import { notFound } from "next/navigation";
import { OUTFITS } from "@/lib/content/outfits";
import { CAREERS } from "@/lib/content/careers";
import PeriodDetail from "../_components/PeriodDetail";
import StageColumn from "../_components/StageColumn";

export function generateStaticParams() {
  return OUTFITS.map((outfit) => ({ era: outfit.era }));
}

export async function generateMetadata({ params }: PageProps<"/career/[era]">) {
  const { era } = await params;
  const outfit = OUTFITS.find((o) => o.era === era);
  const career = outfit && CAREERS[outfit.era];
  if (!career) return {};
  return {
    title: career.title,
    description: `${career.team} · ${career.period} — ${career.role}`,
  };
}

export default async function CareerPage({
  params,
}: PageProps<"/career/[era]">) {
  const { era } = await params;
  const outfit = OUTFITS.find((o) => o.era === era);
  const career = outfit && CAREERS[outfit.era];

  if (!career) notFound();
  return (
    <main
      data-era={era}
      className="flex min-h-dvh gap-14 bg-stage-bg px-12 pt-[calc(72px+40px)] pb-20 max-[900px]:flex-col max-[900px]:gap-8 max-[900px]:px-6 max-[900px]:pt-[calc(72px+24px)]"
    >
      <PeriodDetail career={career} />
      <StageColumn career={career} />
    </main>
  );
}
