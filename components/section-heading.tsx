import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title?: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      data-gsap-heading
      className={cn(
        "grid gap-5 border-t border-white/15 pt-5 md:grid-cols-[15rem_1fr]",
        align === "center" && "items-center text-center",
      )}
    >
      <div className="eyebrow self-start">{eyebrow}</div>
      <div className="space-y-4">
        {title ? (
          <h2 className="font-display max-w-4xl text-4xl font-medium tracking-[-.04em] text-[#f1f0e9] sm:text-5xl md:text-6xl">
            {title}
          </h2>
        ) : null}
        <p className="section-copy">{description}</p>
      </div>
    </div>
  );
}
