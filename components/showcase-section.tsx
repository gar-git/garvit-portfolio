import { ConceptCards } from "@/components/concept-cards";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeader } from "@/components/section-header";

export function ShowcaseSection() {
  return (
    <MotionReveal>
      <section
        id="concepts"
        className="scroll-mt-32 border-y border-border/70 bg-gradient-to-b from-muted/35 via-muted/15 to-muted/35 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tint="cyan"
            eyebrow="Concepts showcase"
            title="Backend engineering primitives in practice"
            description="Tap any card—these unfold into what / why / how with color-coded framing. Naming this concepts (not vanity projects) because repeatability matters more than logo soup."
          />

          <ConceptCards />
        </div>
      </section>
    </MotionReveal>
  );
}
