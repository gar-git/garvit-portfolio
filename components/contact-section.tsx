import { site } from "@/lib/site";

import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeader } from "@/components/section-header";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const toneStyles = {
  teal: "hover:border-brand-teal/65 hover:bg-brand-teal/12 hover:text-brand-cyan hover:shadow-xl hover:shadow-teal-500/15",
  violet:
    "hover:border-brand-violet/65 hover:bg-brand-violet/12 hover:text-brand-violet hover:shadow-xl hover:shadow-violet-500/15",
  cyan: "hover:border-brand-cyan/65 hover:bg-brand-cyan/12 hover:text-brand-cyan hover:shadow-xl hover:shadow-sky-500/12",
};

const links = [
  {
    subtitle: "GitLab",
    line: "gitlab.com/garvit-sharma",
    href: site.gitlab,
    external: true,
    tone: "teal" as const,
  },
  {
    subtitle: "LinkedIn",
    line: "linkedin.com/in/garvit-sharma26",
    href: site.linkedin,
    external: true,
    tone: "violet" as const,
  },
  {
    subtitle: "Email",
    line: "sharma7garvit@gmail.com",
    href: site.email,
    external: true,
    tone: "cyan" as const,
  },
  {
    subtitle: "Phone",
    line: site.phoneDisplay,
    href: site.phoneHref,
    external: false,
    tone: "teal" as const,
  },
];

export function ContactSection() {
  return (
    <MotionReveal>
      <section id="contact" className="scroll-mt-32 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader tint="emerald" eyebrow="Connect" title="Contact" />

          <div className="grid gap-8 overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-card/70 via-card/60 to-muted/70 p-px shadow-xl shadow-teal-500/14">
            <div className="grid gap-8 rounded-[inherit] bg-[radial-gradient(circle_at_10%_-20%,oklch(0.55_0.14_174_/0.2),transparent_45%),radial-gradient(circle_at_105%_-10%,oklch(0.45_0.16_294_/0.2),transparent_52%),rgba(17,21,41,0.85)] px-7 py-8 sm:grid-cols-[2fr_minmax(0,1fr)] sm:px-10 sm:py-10">
              <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p className="text-foreground/90">
                  Serious about APIs, transactional workflows, and keeping production databases
                  healthy? Reach out—the channels on the right match what is on my resume.
                </p>
                <p className="text-sm">
                  Expect concrete threads (logs, SQL, rollout notes). No fluff decks.
                </p>
                <Separator className="my-6 bg-gradient-to-r from-transparent via-brand-teal/55 to-transparent" />

                <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-cyan">
                  Resume PDF
                </p>
                <p className="text-sm text-muted-foreground">
                  Canonical file: <code className="font-mono text-brand-amber">{site.resumePath}</code>{" "}
                  under <code className="font-mono text-brand-amber">public/</code>.
                </p>
                <a
                  href={site.resumePath}
                  download
                  className={cn(
                    buttonVariants({ size: "sm", variant: "secondary" }),
                    "border border-transparent bg-brand-violet/20 text-brand-cyan backdrop-blur transition-all hover:-translate-y-[1px] hover:bg-brand-teal/20 hover:text-foreground hover:shadow-lg hover:shadow-teal-500/25 motion-reduce:transform-none",
                  )}
                >
                  Download resume.pdf
                </a>
              </div>

              <div className="relative space-y-4 rounded-xl border border-border/60 bg-background/65 p-5 shadow-inner shadow-black/50 backdrop-blur">
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-brand-teal/10 via-transparent to-brand-violet/15 opacity-95" />

                <p className="relative font-mono text-xs uppercase tracking-[0.26em] text-muted-foreground">
                  Links
                </p>
                <div className="relative flex flex-col gap-3">
                  {links.map((link) => (
                    <a
                      key={`${link.subtitle}-${link.href}`}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "justify-between gap-4 border-border/65 bg-muted/55 text-foreground transition-all hover:-translate-y-[2px]",
                        toneStyles[link.tone],
                      )}
                    >
                      <span className="flex flex-col gap-0.5 text-left">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          {link.subtitle}
                        </span>
                        <span className="font-mono text-sm text-foreground/95">{link.line}</span>
                      </span>
                      <span className="font-mono text-[11px] text-muted-foreground shrink-0">
                        {link.external ? "↗" : "⌗"}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionReveal>
  );
}
