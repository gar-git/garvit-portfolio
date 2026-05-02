import Link from "next/link";

import { site } from "@/lib/site";

import { cn } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/75 bg-[radial-gradient(circle_at_50%_-20%,oklch(0.5_0.14_174_/0.2),transparent_55%)] py-10 text-[13px] text-muted-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="max-w-md space-y-2 text-foreground/80">
          <p>
            {site.name}{" "}
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-teal-muted">
              / backend-focused
            </span>
          </p>
          <p className="text-[12px] leading-snug text-muted-foreground">{site.codeHostingNote}</p>
        </div>
        <div className="flex flex-wrap gap-5 font-mono text-[11px] uppercase tracking-[0.22em]">
          <Link
            href="#insights"
            className={cn(
              "rounded-full px-4 py-1.5 text-brand-cyan ring-1 ring-brand-teal/45 transition-colors hover:bg-brand-teal/15 hover:text-foreground hover:shadow-lg hover:shadow-teal-500/35",
            )}
          >
            Insights
          </Link>
          <Link
            href="#contact"
            className="rounded-full px-4 py-1.5 text-brand-emerald ring-1 ring-brand-emerald/40 transition-colors hover:bg-brand-emerald/15 hover:text-foreground hover:shadow-lg hover:shadow-emerald-500/35"
          >
            Ping me
          </Link>
          <Link
            className="rounded-full px-4 py-1.5 text-brand-emerald ring-1 ring-brand-emerald/45 transition-colors hover:bg-brand-emerald/15 hover:text-foreground hover:shadow-lg hover:shadow-emerald-500/30"
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            className="rounded-full px-4 py-1.5 text-brand-violet ring-1 ring-brand-violet/40 transition-colors hover:bg-brand-violet/15 hover:text-foreground hover:shadow-lg hover:shadow-violet-500/30"
            href={site.gitlab}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitLab
          </Link>
        </div>
      </div>

      <div className="mt-8 h-[2px] w-full bg-gradient-to-r from-brand-violet via-brand-teal to-brand-cyan opacity-95" />
    </footer>
  );
}
