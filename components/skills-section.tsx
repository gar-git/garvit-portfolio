import { skillGroups } from "@/data/skills";

import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeader } from "@/components/section-header";
import { cn } from "@/lib/utils";

const groupAccents = [
  {
    border: "border-l-brand-teal/90 hover:border-l-brand-cyan hover:shadow-[0_0_42px_-16px_oklch(0.55_0.14_174_/0.7)]",
    chip: "text-brand-cyan",
  },
  {
    border: "border-l-brand-violet/90 hover:border-l-brand-teal hover:shadow-[0_0_42px_-16px_oklch(0.48_0.16_294_/0.7)]",
    chip: "text-brand-violet",
  },
  {
    border:
      "border-l-brand-emerald/90 hover:border-l-brand-teal hover:shadow-[0_0_42px_-16px_oklch(0.5_0.14_164_/0.65)]",
    chip: "text-brand-emerald",
  },
  {
    border:
      "border-l-brand-amber/90 hover:border-l-brand-cyan hover:shadow-[0_0_42px_-16px_oklch(0.55_0.12_210_/0.55)]",
    chip: "text-brand-amber",
  },
  {
    border: "border-l-brand-cyan/90 hover:border-l-brand-emerald hover:shadow-[0_0_42px_-14px_oklch(0.55_0.12_210_/0.55)]",
    chip: "text-brand-cyan",
  },
];

export function SkillsSection() {
  return (
    <MotionReveal>
      <section
        id="skills"
        className="scroll-mt-32 border-b border-border/75 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tint="amber"
            eyebrow="Stack"
            title="Skills grouped for clarity—now with tactile panels"
            description="Aligned with résumé groupings plus how they show up operationally—hover cues only, never vanity ratings."
          />

          <dl className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group, index) => {
              const accent = groupAccents[index % groupAccents.length];

              return (
                <div
                  key={group.group}
                  className={cn(
                    "group relative overflow-hidden border border-border/60 bg-card/60 p-6 shadow-md backdrop-blur-md transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:bg-muted/65 motion-reduce:transform-none motion-reduce:transition-none rounded-xl border-l-[5px]",
                    accent.border,
                  )}
                >
                  <div className="pointer-events-none absolute -right-[30%] top-[-30%] h-40 w-40 rounded-full bg-brand-teal/10 opacity-65 blur-[70px] transition-opacity duration-300 group-hover:opacity-95" />

                  <dt
                    className={cn(
                      "font-mono text-[11px] uppercase tracking-[0.34em]",
                      accent.chip,
                    )}
                  >
                    {group.group}
                  </dt>
                  <dd className="relative mt-4">
                    <ul className="list-none space-y-2 text-[15px] leading-relaxed text-foreground">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span
                            aria-hidden
                            className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-brand-teal to-brand-violet shadow-[0_0_12px_oklch(0.55_0.14_174_/0.6)] ring-2 ring-background"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </section>
    </MotionReveal>
  );
}
