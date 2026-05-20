"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { projects, type ProjectSheet } from "@/data/projects";
import { site } from "@/lib/site";

import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

function ProjectDetail({ project }: { project: ProjectSheet }) {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <DialogHeader className="shrink-0 space-y-3 border-b border-border/60 bg-gradient-to-r from-brand-teal/10 via-muted/55 to-brand-violet/14 px-6 py-5 pr-14 text-left sm:px-8 sm:py-6 sm:pr-16">
        {project.period ? (
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-amber">
            {project.period}
          </p>
        ) : null}
        {project.codeVisibility ? (
          <Badge
            variant="outline"
            className="border-amber-500/45 bg-amber-500/10 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-200"
          >
            {project.codeVisibility}
          </Badge>
        ) : null}
        <DialogTitle className="text-left text-lg sm:text-xl">{project.title}</DialogTitle>
        <DialogDescription className="text-left text-[13px] leading-relaxed sm:text-[14px]">
          {project.summary}
        </DialogDescription>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tech.map((t) => (
            <Badge
              key={t}
              variant="outline"
              className="border-brand-teal/40 bg-brand-teal/10 font-mono text-[11px] uppercase tracking-[0.16em] text-brand-cyan"
            >
              {t}
            </Badge>
          ))}
        </div>
      </DialogHeader>

      <div
        role="document"
        className="scrollbar-themed min-h-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-contain [-webkit-overflow-scrolling:touch]"
      >
        <div className="space-y-8 px-6 py-6 text-[15px] leading-relaxed text-muted-foreground sm:px-8 sm:py-8">
          <div>
            <h3 className="font-heading text-[13px] font-medium uppercase tracking-[0.28em] text-brand-cyan">
              Problem
            </h3>
            <p className="mt-2 text-foreground/90">{project.problem}</p>
          </div>

          {project.responsibilities?.length ? (
            <div>
              <h3 className="font-heading text-[13px] font-medium uppercase tracking-[0.28em] text-brand-emerald">
                Responsibilities
              </h3>
              <ul className="mt-2 list-none space-y-2 border-l border-brand-teal/35 pl-4">
                {project.responsibilities.map((item) => (
                  <li key={item} className="relative pl-2">
                    <span className="absolute -left-2 top-[0.58em] h-2 w-2 rounded-full bg-brand-teal/80 shadow-[0_0_14px_oklch(0.55_0.14_174_/0.6)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {project.sections.map((section) => (
            <div key={section.heading}>
              <h3 className="font-heading text-[13px] font-medium uppercase tracking-[0.28em] text-brand-amber">
                {section.heading}
              </h3>
              {section.paragraphs?.map((p) => (
                <p key={p} className="mt-2 text-foreground/90">
                  {p}
                </p>
              ))}
              {section.bullets?.length ? (
                <ul className="mt-2 list-disc space-y-2 pl-5 marker:text-brand-violet">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<ProjectSheet | null>(null);

  function openProject(project: ProjectSheet) {
    setActive(project);
    setOpen(true);
  }

  return (
    <MotionReveal>
      <section
        id="projects"
        className="scroll-mt-32 border-b border-border/75 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader tint="violet" eyebrow="Projects" title="Production systems" />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => {
              const teal = idx % 2 === 0;

              return (
                <motion.button
                  key={project.id}
                  layout
                  type="button"
                  aria-haspopup="dialog"
                  aria-label={`Open system view for ${project.title}`}
                  className={cn(
                    "relative group flex cursor-pointer flex-col justify-between rounded-xl border border-border/60 bg-card/65 p-6 text-left shadow-lg backdrop-blur-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/50 sm:p-8",
                    "hover:border-brand-teal/45 hover:bg-muted/55",
                    teal ? "card-glow-teal" : "card-glow-violet",
                  )}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.995 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                  onClick={() => openProject(project)}
                >
                  <div
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute inset-x-12 top-[-35%] h-36 rounded-full opacity-40 blur-[88px]",
                      teal ? "bg-brand-teal/45" : "bg-brand-violet/45",
                    )}
                  />
                  <div className="relative space-y-3">
                    {project.period ? (
                      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-brand-amber">
                        {project.period}
                      </p>
                    ) : null}
                    {project.codeVisibility ? (
                      <p className="font-mono text-[10px] uppercase leading-snug tracking-[0.18em] text-amber-200/90">
                        {project.codeVisibility}
                      </p>
                    ) : null}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className={cn(
                            "font-mono text-[10px] uppercase tracking-[0.18em]",
                            i % 2 === 0
                              ? "border-brand-teal/45 text-brand-cyan bg-brand-teal/10"
                              : "border-brand-violet/45 text-muted-foreground bg-brand-violet/10",
                          )}
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/90">
                      {project.summary}
                    </p>
                  </div>

                  <div className="relative mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-border/60 pt-6">
                    <span
                      className={cn(
                        buttonVariants({ size: "sm", variant: "default" }),
                        teal &&
                          "bg-gradient-to-br from-brand-teal to-brand-emerald text-primary-foreground ring-2 ring-brand-cyan/30 shadow-lg shadow-brand-teal/35",
                      )}
                    >
                      Open system view
                    </span>
                    <span className="hidden font-mono text-[11px] uppercase tracking-[0.24em] text-brand-cyan sm:inline">
                      card click → modal
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        <Dialog
          open={open}
          onOpenChange={(next) => {
            setOpen(next);
            if (!next) {
              setActive(null);
            }
          }}
        >
          <DialogContent
            showCloseButton
            className={cn(
              "flex w-[min(100vw-1.5rem,42rem)] max-w-none flex-col gap-0 overflow-hidden p-0 sm:w-full sm:max-w-3xl",
              "max-h-[min(92vh,900px)] min-h-0",
              "border-border/80 bg-popover shadow-2xl ring-1 ring-brand-teal/25",
            )}
          >
            {active ? <ProjectDetail project={active} /> : null}
          </DialogContent>
        </Dialog>
      </section>
    </MotionReveal>
  );
}
