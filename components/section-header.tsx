import { cn } from "@/lib/utils";

type Tint = "teal" | "violet" | "cyan" | "amber" | "emerald";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  tint?: Tint;
  plainTitle?: boolean;
};

const tintClasses: Record<
  Tint,
  { ping: string; dot: string; titleGradient: string }
> = {
  teal: {
    ping: "bg-brand-teal/40",
    dot: "bg-brand-teal",
    titleGradient:
      "bg-gradient-to-r from-brand-teal via-brand-cyan to-brand-violet bg-clip-text text-transparent",
  },
  violet: {
    ping: "bg-brand-violet/40",
    dot: "bg-brand-violet",
    titleGradient:
      "bg-gradient-to-r from-brand-violet via-brand-cyan to-brand-teal bg-clip-text text-transparent",
  },
  cyan: {
    ping: "bg-brand-cyan/40",
    dot: "bg-brand-cyan",
    titleGradient:
      "bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-emerald bg-clip-text text-transparent",
  },
  amber: {
    ping: "bg-brand-amber/40",
    dot: "bg-brand-amber",
    titleGradient:
      "bg-gradient-to-r from-brand-amber via-brand-teal to-brand-violet bg-clip-text text-transparent",
  },
  emerald: {
    ping: "bg-brand-emerald/40",
    dot: "bg-brand-emerald",
    titleGradient:
      "bg-gradient-to-r from-brand-emerald via-brand-cyan to-brand-violet bg-clip-text text-transparent",
  },
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  tint = "teal",
  plainTitle,
}: SectionHeaderProps) {
  const c = tintClasses[tint];

  return (
    <header className="mb-10 max-w-3xl space-y-2">
      {eyebrow ? (
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <span className="relative flex h-2.5 w-2.5">
            <span
              className={cn(
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-65 motion-reduce:animate-none",
                c.ping,
              )}
            />
            <span
              className={cn(
                "relative inline-flex h-2.5 w-2.5 rounded-full ring-2 ring-background",
                c.dot,
              )}
            />
          </span>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl",
          plainTitle ? "text-foreground" : c.titleGradient,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="text-[15px] leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </header>
  );
}
