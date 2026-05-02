"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { site } from "@/lib/site";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <div
      id="hero"
      className="relative scroll-mt-32 overflow-hidden border-b border-border/70 pb-14 pt-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-14"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-[20%] top-0 h-[380px] w-[380px] rounded-full bg-brand-violet/35 blur-[120px] orb-animate-a" />
        <div className="absolute -right-[10%] top-1/4 h-[320px] w-[320px] rounded-full bg-brand-teal/30 blur-[110px] orb-animate-b" />
        <div className="absolute bottom-0 left-1/3 h-[280px] w-[280px] rounded-full bg-brand-cyan/22 blur-[100px] orb-animate-c" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,oklch(0.11_0.035_268/0.92)_100%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-[minmax(0,3fr)_minmax(260px,1fr)] lg:items-end lg:px-8">
        <div className="space-y-6">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="font-mono text-xs uppercase tracking-[0.35em] text-brand-cyan"
          >
            Backend-heavy fullstack engineer
          </motion.p>
          <div className="space-y-3">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className={cn(
                "font-heading text-4xl font-semibold tracking-tight sm:text-5xl",
                "hero-gradient-text",
              )}
            >
              {site.name}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="font-mono text-sm text-brand-teal-muted"
            >
              {site.title}
            </motion.p>
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="max-w-2xl text-[16px] leading-relaxed text-muted-foreground"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="#projects"
              className={cn(
                buttonVariants({ size: "default", variant: "default" }),
                "shadow-lg shadow-brand-teal/25 ring-1 ring-brand-teal/30 transition-all hover:shadow-xl hover:shadow-brand-teal/35 hover:ring-brand-teal/50 active:translate-y-px",
              )}
            >
              View Projects
            </Link>
            <Link
              href={site.gitlab}
              target="_blank"
              rel="noreferrer noopener"
              className={cn(
                buttonVariants({ size: "default", variant: "outline" }),
                "border-brand-teal/35 bg-background/40 text-foreground backdrop-blur-sm transition-all hover:border-brand-violet/50 hover:bg-accent/80 hover:text-foreground active:translate-y-px",
              )}
            >
              GitLab
            </Link>
            <Link
              href={site.resumePath}
              download
              prefetch={false}
              className={cn(
                buttonVariants({ size: "default", variant: "secondary" }),
                "border border-transparent bg-brand-violet/20 text-brand-cyan backdrop-blur-sm transition-all hover:bg-brand-violet/30 hover:shadow-md hover:shadow-brand-violet/20 active:translate-y-px",
              )}
            >
              Resume
            </Link>
          </motion.div>
        </div>

        <motion.aside
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          whileHover={{ y: -3, transition: { type: "spring", stiffness: 320, damping: 22 } }}
          className="group relative border border-border/60 bg-card/55 p-5 font-mono text-[13px] text-muted-foreground shadow-lg shadow-brand-violet/5 ring-1 ring-brand-teal/15 backdrop-blur-md transition-colors hover:border-brand-teal/40 hover:shadow-brand-teal/10"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-brand-teal/10 via-transparent to-brand-violet/12 opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.25em] text-brand-cyan">
              Focus
            </p>
            <ul className="mt-3 space-y-3 border-t border-border/60 pt-3">
              {[
                "Reliable transactional APIs over cosmetic UI.",
                "Operational clarity — logs, audits, repeatable deploys.",
                "SQL you can defend in code review.",
              ].map((line) => (
                <li key={line} className="flex gap-2">
                  <span
                    aria-hidden
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal shadow-[0_0_12px_oklch(0.65_0.14_174_/0.7)]"
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </div>
    </div>
  );
}
