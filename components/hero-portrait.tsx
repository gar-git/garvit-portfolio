"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

import { site } from "@/lib/site";

/** Add `public/portrait.jpg` (square photo). Until then shows initials fallback. */
export function HeroPortrait() {
  const [useFallback, setUseFallback] = useState(false);
  const onError = useCallback(() => setUseFallback(true), []);

  const ring =
    "relative mx-auto shrink-0 overflow-hidden rounded-full border border-brand-teal/45 bg-muted/35 shadow-xl ring-2 ring-brand-violet/25 sm:mx-0";

  if (useFallback) {
    return (
      <div className={`${ring} grid size-[7.25rem] place-items-center sm:size-[9rem]`} aria-hidden>
        <span className="font-heading text-3xl font-semibold tracking-tight text-brand-cyan sm:text-[2.1rem]">
          GS
        </span>
      </div>
    );
  }

  return (
    <div className={`${ring} size-[7.25rem] sm:size-[9rem]`}>
      <Image
        src="/Garvit-picture.png"
        alt={`${site.name} — portrait`}
        width={288}
        height={288}
        className="h-full w-full object-cover"
        sizes="144px"
        onError={onError}
        priority={false}
      />
    </div>
  );
}
