"use client";

import { useEffect, useRef } from "react";

function isButtonLikeTarget(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;
  const el = target.closest(
    [
      "button:not([disabled])",
      "[data-slot='button']:not([aria-disabled='true'])",
      "[role='button']:not([aria-disabled='true'])",
      "input[type='submit']:not(:disabled)",
      "input[type='button']:not(:disabled)",
      "input[type='reset']:not(:disabled)",
    ].join(", "),
  );
  return el !== null;
}

/** Short dual-impulse click (no external audio file; works after first user gesture). */
function playClick(ctx: AudioContext) {
  const t = ctx.currentTime;
  const hit = (offset: number, freq: number) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = freq * 1.4;
    bp.Q.value = 0.6;
    osc.type = "square";
    osc.frequency.setValueAtTime(freq, t + offset);
    g.gain.setValueAtTime(0, t + offset);
    g.gain.linearRampToValueAtTime(0.08, t + offset + 0.0005);
    g.gain.exponentialRampToValueAtTime(0.0008, t + offset + 0.028);
    osc.connect(bp);
    bp.connect(g);
    g.connect(ctx.destination);
    osc.start(t + offset);
    osc.stop(t + offset + 0.03);
  };
  hit(0, 2200);
  hit(0.014, 1400);
}

export function UiClickSound() {
  const ctxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      if (!isButtonLikeTarget(e.target)) return;

      const AC =
        window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!ctxRef.current) ctxRef.current = new AC();
      const ctx = ctxRef.current;
      if (ctx.state === "suspended") void ctx.resume();
      try {
        playClick(ctx);
      } catch {
        /* ignore playback errors */
      }
    };

    document.addEventListener("pointerdown", onPointerDown, true);
    return () => document.removeEventListener("pointerdown", onPointerDown, true);
  }, []);

  return null;
}
