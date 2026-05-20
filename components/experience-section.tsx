import Image from "next/image";

import { education, experience } from "@/data/experience";

import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeader } from "@/components/section-header";

export function ExperienceSection() {
  return (
    <MotionReveal>
      <section
        id="experience"
        className="scroll-mt-32 border-b border-border/75 bg-gradient-to-br from-muted/45 via-muted/15 to-muted/55 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
          <div>
            <SectionHeader tint="violet" eyebrow="Work" title="Experience" />

            <details className="group relative overflow-hidden rounded-xl border border-border/70 bg-card/65 shadow-xl backdrop-blur-md transition-[border-color,box-shadow] duration-300 open:border-brand-teal/45 open:shadow-2xl open:shadow-teal-500/10 hover:border-brand-teal/45">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_-10%,oklch(0.55_0.16_294_/0.3),transparent_55%)] opacity-90 transition-opacity duration-500 group-open:opacity-100" />

              <summary className="relative cursor-pointer list-none p-6 marker:content-none sm:p-9 [&::-webkit-details-marker]:hidden">
                <div className="flex items-start gap-3 sm:items-center sm:gap-4">
                  <span className="relative mt-0.5 flex size-[3.25rem] shrink-0 items-center justify-center overflow-hidden rounded-[50%] bg-white p-1 shadow-sm ring-1 ring-border/50 sm:mt-0">
                    <Image
                      src={experience.companyLogoSrc}
                      alt={experience.companyLogoAlt}
                      width={48}
                      height={48}
                      className="h-9 w-9 object-contain sm:h-10 sm:w-10"
                      sizes="48px"
                      priority={false}
                    />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-heading text-xl font-semibold text-foreground transition-colors duration-300 group-open:text-brand-cyan">
                        {experience.company}
                      </h3>
                      <span
                        aria-hidden
                        className="mt-1 shrink-0 font-mono text-sm text-muted-foreground transition-transform duration-300 group-open:rotate-180"
                      >
                        ▾
                      </span>
                    </div>
                    <p className="mt-2 inline-flex rounded-full bg-brand-teal/12 px-3 py-1 font-mono text-sm text-brand-cyan ring-1 ring-brand-teal/40">
                      {experience.role}
                    </p>
                    <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
                      {experience.tenure} · {experience.location}
                    </p>
                    <ul className="mt-4 space-y-1.5 border-l-2 border-brand-teal/35 pl-3 text-[13px] leading-snug text-muted-foreground">
                      {experience.relatedProjects.map((name) => (
                        <li key={name} className="text-foreground/85">
                          {name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </summary>

              <ul className="relative space-y-4 border-t border-dashed border-border/60 px-6 pt-6 pb-6 text-[15px] leading-relaxed text-muted-foreground sm:px-9 sm:pb-9">
                {experience.highlights.map((item) => (
                  <li
                    key={item.label}
                    className="relative flex gap-3 rounded-lg border border-border/55 bg-muted/55 p-4 text-foreground/90 backdrop-blur transition-[border-color] duration-300 hover:border-brand-teal/45 hover:text-foreground"
                  >
                    <span className="mt-2 h-8 w-[3px] rounded-full bg-gradient-to-b from-brand-violet via-brand-teal to-brand-emerald" />
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-amber">
                        {item.label}
                      </p>
                      <p className="mt-1">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </details>
          </div>

          <div id="education" className="scroll-mt-32">
            <SectionHeader tint="emerald" eyebrow="Academic" title="Education" />

            <article className="group relative overflow-hidden rounded-xl border border-border/70 bg-card/65 p-6 shadow-lg backdrop-blur-md transition-colors duration-300 hover:border-brand-emerald/45 hover:shadow-xl hover:shadow-emerald-500/10 sm:p-9">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_-5%,oklch(0.5_0.14_164_/0.25),transparent_55%)] opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex flex-col gap-5 rounded-lg border border-border/55 bg-muted/45 p-6 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {education.degree}
                  </h3>
                  <div className="mt-3 flex items-start gap-3 sm:items-center sm:gap-4">
                    <span className="relative mt-0.5 flex size-[3.25rem] shrink-0 items-center justify-center overflow-hidden rounded-[50%] bg-white p-1 shadow-sm ring-1 ring-border/50 sm:mt-0">
                      <Image
                        src={education.schoolLogoSrc}
                        alt={education.schoolLogoAlt}
                        width={48}
                        height={48}
                        className="h-9 w-9 object-contain sm:h-10 sm:w-10"
                        sizes="52px"
                      />
                    </span>
                    <p className="min-w-0 flex-1 text-[15px] leading-snug text-muted-foreground sm:text-base sm:leading-normal">
                      {education.school}
                    </p>
                  </div>
                  <p className="mt-3 font-mono text-sm text-brand-cyan">
                    CGPA {education.cgpa}
                  </p>
                  <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                    {education.note}
                  </p>
                </div>
                <div className="shrink-0 font-mono text-[12px] uppercase tracking-[0.16em] text-muted-foreground sm:max-w-[12rem] sm:pt-0.5 sm:text-right">
                  <p className="text-brand-emerald">{education.tenure}</p>
                  <p className="mt-2 normal-case tracking-normal">{education.location}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </MotionReveal>
  );
}
