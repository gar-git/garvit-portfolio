"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { showcaseConcepts } from "@/data/showcase-concepts";

import { cn } from "@/lib/utils";

const accents = [
  {
    accent:
      "border-brand-teal/45 hover:border-brand-teal hover:ring-2 hover:ring-brand-teal/40",
    bar: "from-brand-teal via-brand-emerald to-brand-cyan",
  },
  {
    accent:
      "border-brand-violet/45 hover:border-brand-violet hover:ring-2 hover:ring-brand-violet/40",
    bar: "from-brand-violet via-brand-cyan to-brand-teal",
  },
  {
    accent:
      "border-brand-emerald/45 hover:border-brand-emerald hover:ring-2 hover:ring-brand-emerald/40",
    bar: "from-brand-emerald via-brand-teal to-brand-violet",
  },
  {
    accent:
      "border-brand-cyan/45 hover:border-brand-cyan hover:ring-2 hover:ring-brand-cyan/38",
    bar: "from-brand-cyan via-brand-violet to-brand-amber",
  },
];

const labelTone: Record<string, string> = {
  "What it is": "text-brand-cyan",
  "Why it matters": "text-brand-amber",
  "How implemented": "text-brand-emerald",
};

export function ConceptCards() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {showcaseConcepts.map((item, index) => {
        const stripe = accents[index % accents.length];
        const open = expanded === item.title;

        return (
          <motion.article
            key={item.title}
            layout
            className={cn(
              "group relative overflow-hidden rounded-xl border bg-card/60 shadow-lg backdrop-blur-md transition-colors duration-300 hover:-translate-y-1 hover:shadow-2xl motion-reduce:transform-none motion-reduce:transition-none",
              stripe.accent,
            )}
          >
            <div
              className={cn(
                "pointer-events-none absolute inset-y-5 left-5 w-[3px] rounded-full bg-gradient-to-b opacity-95 shadow-[0_0_20px_-2px_rgba(94,234,212,0.55)] sm:left-6",
                stripe.bar,
              )}
            />

            <button
              type="button"
              aria-expanded={open}
              aria-controls={`concept-${index}`}
              id={`concept-btn-${index}`}
              className={cn(
                "relative flex w-full items-start gap-4 pl-[2.125rem] pr-5 pb-6 pt-6 text-left transition-colors sm:pl-10 sm:pr-8 sm:pt-8",
                "hover:bg-muted/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/55",
              )}
              onClick={() => setExpanded(open ? null : item.title)}
            >
              <div className="flex flex-1 flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                  Interactive · {open ? "collapse" : "expand"}
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
                className="rounded-lg border border-border/60 bg-background/65 p-1.5 text-brand-cyan shadow-inner ring-1 ring-brand-teal/30"
              >
                <ChevronDown className="size-4" aria-hidden />
              </motion.span>
            </button>

            {!open ? (
              <p className="border-t border-border/55 px-8 pb-6 text-[13px] text-muted-foreground/95 sm:pl-10 italic">
                {item.what.slice(0, 128)}…
              </p>
            ) : null}

            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  layout
                  id={`concept-${index}`}
                  role="region"
                  aria-labelledby={`concept-btn-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.29, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden border-t border-border/50 bg-gradient-to-br from-muted/55 via-transparent to-muted/35"
                >
                  <div className="relative space-y-6 p-8 text-[15px] leading-relaxed text-muted-foreground">
                    <div className="pointer-events-none absolute inset-0 opacity-90">
                      <div className="absolute right-[-20%] top-[-20%] h-48 w-48 rounded-full bg-brand-violet/15 blur-[60px]" />
                      <div className="absolute bottom-[-40%] left-[-10%] h-56 w-56 rounded-full bg-brand-teal/12 blur-[70px]" />
                    </div>
                    <div className="relative space-y-6">
                      {(
                        [
                          ["What it is", item.what],
                          ["Why it matters", item.why],
                          ["How implemented", item.how],
                        ] as const
                      ).map(([label, text]) => (
                        <div key={label}>
                          <p
                            className={cn(
                              "font-mono text-[11px] uppercase tracking-[0.28em]",
                              labelTone[label],
                            )}
                          >
                            {label}
                          </p>
                          <p className="mt-2 text-foreground/90">{text}</p>
                        </div>
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
