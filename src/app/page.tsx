import ClosetBoard from "./_components/ClosetBoard";

export default function Home() {
  return (
    <main className="relative isolate flex h-dvh min-h-[770px] flex-col justify-between gap-[clamp(16px,2.5vh,34px)] px-10 pt-[calc(72px+30px)] pb-[104px] overflow-hidden">
      <div
        aria-hidden
        className="absolute top-[calc(72px+25px)] left-[78%] -z-10 h-[250px] w-[250px] rounded-full bg-brand-clay-tint"
      />
      <div
        aria-hidden
        className="absolute top-[calc(72px+255px)] left-[1%] -z-10 h-[120px] w-[120px] rounded-full bg-brand-sage-tint"
      />
      <div
        aria-hidden
        className="absolute top-[calc(72px+180px)] left-[90%] -z-10 h-[110px] w-[110px] rounded-full bg-brand-indigo-tint"
      />
      <div
        aria-hidden
        className="absolute top-[calc(72px+600px)] left-[700px] -z-10 h-[140px] w-[140px] rounded-full bg-gold-tint"
      />
      <ClosetBoard />
    </main>
  );
}
