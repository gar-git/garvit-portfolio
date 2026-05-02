"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { navItems } from "@/data/nav";
import { site } from "@/lib/site";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sectionIds = [
  "projects",
  "concepts",
  "skills",
  "experience",
  "approach",
  "insights",
  "contact",
] as const;

function pickSection(scrollY: number) {
  const line = scrollY + 200;
  let currentId = "";

  sectionIds.forEach((id) => {
    const node = document.getElementById(id);
    if (!node) return;
    const top = scrollY + node.getBoundingClientRect().top;
    if (top <= line) {
      currentId = id;
    }
  });

  return currentId;
}

export function SiteNavbar() {
  const [activeId, setActiveId] = useState("");
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    let frame = 0;
    function onScroll() {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        setActiveId(pickSection(window.scrollY));
        setElevated(window.scrollY > 12);
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl">
      <div
        className={cn(
          "transition-[border-color,background-color,box-shadow] duration-300",
          elevated
            ? "border-border/55 bg-background/75 shadow-lg shadow-brand-teal/[0.07] ring-1 ring-brand-teal/15"
            : "border-border/40 bg-background/55 ring-1 ring-transparent",
        )}
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-teal/75 to-transparent" />
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-3 py-3.5 sm:gap-3 sm:px-4 lg:px-8">
          <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3 lg:gap-4">
            <Link
              href="#hero"
              className="-ml-0.5 shrink-0 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:text-brand-cyan sm:text-xs sm:tracking-[0.18em]"
            >
              <span className="text-brand-teal">{site.name.split(" ")[0]}</span>{" "}
              <span className="text-muted-foreground">/</span>{" "}
              <span className="font-normal lowercase tracking-normal text-muted-foreground">
                engineer
              </span>
            </Link>

            <nav
              aria-label="Sections"
              className="scrollbar-themed hidden min-w-0 flex-1 items-center gap-x-1.5 overflow-x-auto whitespace-nowrap py-0.5 text-[12px] text-muted-foreground md:flex lg:gap-x-2 lg:text-[13px]"
            >
              {navItems.map((item) => {
                const id = item.href.replace(/^#/, "");
                const selected = activeId === id;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative shrink-0 rounded-full px-2 py-1.5 transition-all duration-300 sm:px-2.5 lg:px-3",
                      selected
                        ? "bg-brand-teal/16 text-brand-cyan ring-1 ring-brand-teal/45 shadow-[0_0_24px_-6px_oklch(0.55_0.14_174_/0.45)]"
                        : "hover:bg-muted/65 hover:text-brand-cyan",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <Link
              href="#projects"
              className={cn(
                buttonVariants({ size: "sm", variant: "default" }),
                "shadow-md shadow-brand-teal/20 ring-1 ring-brand-teal/25 hover:shadow-lg hover:shadow-brand-teal/30",
              )}
            >
              Projects
            </Link>
            <Link
              href={site.github}
              target="_blank"
              rel="noreferrer noopener"
              title="GitHub — gar-git"
              className={cn(
                buttonVariants({ size: "sm", variant: "outline" }),
                "hidden border-brand-emerald/35 sm:inline-flex hover:border-brand-emerald/55 hover:bg-accent/75",
              )}
            >
              GitHub
            </Link>
            <Link
              href={site.gitlab}
              target="_blank"
              rel="noreferrer noopener"
              title="GitLab — primary delivery repos"
              className={cn(
                buttonVariants({ size: "sm", variant: "outline" }),
                "border-brand-teal/30 hover:border-brand-violet/40 hover:bg-accent/75",
              )}
            >
              GitLab
            </Link>
          </div>
        </div>

        <div className="border-t border-border/50 md:hidden">
          <div className="scrollbar-themed mx-auto flex max-w-6xl gap-x-3 overflow-x-auto px-3 py-3 text-[13px] text-muted-foreground sm:gap-x-4 sm:px-4 lg:px-8">
            {navItems.map((item) => {
              const id = item.href.replace(/^#/, "");
              const selected = activeId === id;
              return (
                <Link
                  key={`m-${item.href}`}
                  href={item.href}
                  className={cn(
                    "whitespace-nowrap rounded-full px-3 py-1 transition-all",
                    selected
                      ? "bg-brand-teal/16 text-brand-cyan ring-1 ring-brand-teal/40"
                      : "hover:text-brand-cyan",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
