import Image from "next/image";

export function PortraitScene({ src, name }: { src: string; name: string }) {
  return (
    <div className="portrait-scene relative mx-auto aspect-[4/5] w-full max-w-[30rem]">
      <div
        className="portrait-layer absolute inset-5 border border-white/20 bg-[#191a15] p-3"
      >
        <div className="portrait-grid absolute inset-0 opacity-40" />
        <div className="relative h-full overflow-hidden bg-[#20211c]">
          <Image src={src} alt={`Portrait of ${name}`} fill priority unoptimized className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10110e]/55 via-transparent to-transparent" />
        </div>
        <div className="portrait-label absolute -left-5 top-8 bg-primary px-3 py-2 font-mono text-[.64rem] font-bold tracking-widest text-[#10110e] uppercase">Available / 2026</div>
      </div>
      <div className="slow-drift absolute -right-1 top-0 size-20 rounded-full border border-primary/40" />
      <div className="absolute bottom-0 left-0 h-24 w-24 border-b border-l border-white/30" />
    </div>
  );
}
