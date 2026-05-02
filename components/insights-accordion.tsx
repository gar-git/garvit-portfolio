"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import { useState } from "react";

import { articles } from "@/data/blog";

import { cn } from "@/lib/utils";

const accents = [
  "border-l-brand-teal hover:border-brand-teal hover:shadow-2xl hover:shadow-teal-500/14",
  "border-l-brand-violet hover:border-brand-violet hover:shadow-2xl hover:shadow-violet-500/14",
  "border-l-brand-emerald hover:border-brand-emerald hover:shadow-2xl hover:shadow-emerald-500/13",
];

export function InsightsAccordion() {
  const [active, setActive] = useState<string | null>(articles[0]?.slug ?? null);

  return (
    <div className="space-y-5">
      {articles.map((article, idx) => {
        const accent = accents[idx % accents.length];
        const open = active === article.slug;

        return (
          <motion.article
            key={article.slug}
            id={`insight-${article.slug}`}
            layout
            initial={false}
            className={cn(
              "overflow-hidden rounded-xl border border-border/60 bg-card/60 shadow-md backdrop-blur-sm transition-colors",
              "border-l-4",
              accent,
            )}
            whileHover={{
              translateY: -2,
              transition: { duration: 0.2 },
            }}
          >
            <button
              type="button"
              id={`btn-${article.slug}`}
              className={cn(
                "flex w-full items-start gap-4 p-5 text-left transition-colors sm:p-7",
                "hover:bg-muted/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet/50",
              )}
              aria-expanded={open}
              aria-controls={`panel-${article.slug}`}
              onClick={() => setActive(open ? null : article.slug)}
            >
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  <span className="rounded-full bg-brand-teal/15 px-2 py-1 text-brand-cyan ring-1 ring-brand-teal/40">
                    {article.readMinutes} min read
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {article.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {article.summary}
                </p>
              </div>
              <motion.span
                className="rounded-full bg-background/65 p-2 text-brand-teal shadow-inner ring-1 ring-border/60"
                animate={{ rotate: open ? -90 : 0 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                aria-hidden
              >
                <ArrowRightCircle className="size-6" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  id={`panel-${article.slug}`}
                  role="region"
                  aria-labelledby={`btn-${article.slug}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden border-t border-border/50"
                >
                  <div className="relative space-y-4 p-6 text-[15px] leading-relaxed text-muted-foreground sm:p-8">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_-10%,oklch(0.55_0.16_294_/0.12),transparent_55%)]" />
                    <div className="relative space-y-4 border-l-2 border-brand-teal/35 pl-4">
                      {article.body.map((paragraph, i) => (
                        <p key={`${article.slug}-${i}`}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.article>
        );
      })}
    </div>
  );
}
