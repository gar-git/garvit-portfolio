import { approachBlocks, approachIntroBullets } from "@/data/engineering-approach";

import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeader } from "@/components/section-header";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const frames = [
  "hover:border-brand-teal/55 hover:bg-gradient-to-br hover:from-brand-teal/10 hover:via-transparent hover:to-muted/65",
  "hover:border-brand-violet/55 hover:bg-gradient-to-br hover:from-brand-violet/10 hover:via-transparent hover:to-muted/65",
  "hover:border-brand-emerald/55 hover:bg-gradient-to-br hover:from-brand-emerald/10 hover:via-transparent hover:to-muted/65",
  "hover:border-brand-cyan/55 hover:bg-gradient-to-br hover:from-brand-cyan/12 hover:via-transparent hover:to-muted/65",
];

export function EngineeringSection() {
  return (
    <MotionReveal>
      <section
        id="approach"
        className="scroll-mt-32 border-b border-border/75 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tint="teal"
            eyebrow="Practice"
            title="Engineering approach"
            description="Cards react on hover—the same layered thinking applies to repos: observable boundaries between HTTP, orchestration, and persistence."
          />

          <ul className="mb-10 max-w-2xl space-y-2 border-l-2 border-brand-teal/40 pl-4 text-[14px] leading-relaxed text-muted-foreground">
            {approachIntroBullets.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>

          <div className="grid gap-6 md:grid-cols-2">
            {approachBlocks.map((block, index) => (
              <Card
                key={block.title}
                className={cn(
                  "group relative overflow-hidden border border-border/60 bg-card/60 shadow-lg backdrop-blur-sm transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/55 motion-reduce:transform-none ring-1 ring-transparent hover:ring-brand-teal/25",
                  frames[index % frames.length],
                )}
              >
                <div className="pointer-events-none absolute inset-x-[15%] top-[-25%] h-32 rounded-full bg-brand-teal/12 opacity-80 blur-[60px] transition-opacity duration-300 group-hover:opacity-100" />

                <CardHeader className="relative space-y-5">
                  <CardTitle className="font-heading text-lg text-brand-cyan transition-colors duration-300 group-hover:text-foreground">
                    {block.title}
                  </CardTitle>
                  <CardDescription className="space-y-3 text-[15px] leading-relaxed text-muted-foreground">
                    {block.body.map((paragraph, pi) => (
                      <p
                        key={`${block.title}-${pi}`}
                        className="transition-colors duration-300 group-hover:text-foreground/90"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </MotionReveal>
  );
}
