"use client";

import { motion } from "framer-motion";

import { site } from "@/lib/site";

import { HeroPortrait } from "@/components/hero-portrait";
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

      <div className="mx-auto grid max-w-6xl gap-10 px-3 sm:gap-14 sm:px-4 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-14">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="shrink-0">
            <HeroPortrait />
          </motion.div>

          <div className="min-w-0 flex-1 space-y-6">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="max-w-xl font-mono text-xs uppercase leading-relaxed tracking-[0.22em] text-brand-cyan"
            >
              Backend-heavy full-stack engineer · Node.js · REST APIs · persistence · System Design
            </motion.p>

            <div className="space-y-3">
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={2}
                className={cn(
                  "font-heading text-4xl font-semibold tracking-tight sm:text-5xl",
                  "hero-gradient-text",
                )}
              >
                {site.name}
              </motion.h1>
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

            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4}>
              <a
                href={site.resumePath}
                download
                className={cn(
                  buttonVariants({ size: "default", variant: "secondary" }),
                  "border border-transparent bg-brand-violet/20 text-brand-cyan backdrop-blur-sm transition-all hover:bg-brand-violet/30 hover:shadow-md hover:shadow-brand-violet/20 active:translate-y-px",
                )}
              >
                Resume
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
