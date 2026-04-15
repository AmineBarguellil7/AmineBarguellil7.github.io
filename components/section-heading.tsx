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
        "flex flex-col items-start gap-5",
        align === "center" && "items-center text-center",
      )}
    >
      <div className="eyebrow self-start">{eyebrow}</div>
      <div className="space-y-4">
        {title ? (
          <h2 className="font-display heading-gradient max-w-3xl text-3xl font-semibold tracking-[-0.05em] sm:text-4xl md:text-[2.8rem]">
            {title}
          </h2>
        ) : null}
        <p className="section-copy">{description}</p>
      </div>
    </div>
  );
}
