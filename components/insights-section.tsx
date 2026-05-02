import { InsightsAccordion } from "@/components/insights-accordion";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeader } from "@/components/section-header";

export function InsightsSection() {
  return (
    <MotionReveal>
      <section
        id="insights"
        className="scroll-mt-32 border-b border-border/75 bg-gradient-to-b from-muted/40 via-muted/10 to-muted/45 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tint="cyan"
            eyebrow="Notes"
            title="Insights & writing"
            description="On-site drafts you can skim or expand deeply. When syndicated externally, rows link out; until then anchors like #insight-… work for bookmarking threads."
          />

          <InsightsAccordion />
        </div>
      </section>
    </MotionReveal>
  );
}
