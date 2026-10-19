import { useEffect, useRef } from "react";

export function Portal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-[560px]" aria-hidden="true">
      <div ref={ref} className="absolute inset-0 transition-transform duration-700 ease-out">
        <div className="animate-pulse-glow absolute inset-[18%] rounded-full bg-gradient-brand opacity-60 blur-3xl" />
        <svg viewBox="0 0 400 400" className="animate-spin-slow absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="55%" stopColor="var(--violet)" />
              <stop offset="100%" stopColor="var(--magenta)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="150" fill="none" stroke="url(#ring)" strokeWidth="3" />
          <circle cx="200" cy="200" r="175" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="2 10" />
          <circle cx="350" cy="200" r="4" fill="var(--primary)" />
        </svg>
        <svg viewBox="0 0 400 400" className="animate-spin-slower absolute inset-0 h-full w-full">
          <ellipse cx="200" cy="200" rx="190" ry="60" fill="none" stroke="var(--violet)" strokeOpacity=".35" strokeWidth="1" />
          <ellipse cx="200" cy="200" rx="60" ry="190" fill="none" stroke="var(--primary)" strokeOpacity=".2" strokeWidth="1" />
        </svg>
        <div className="absolute inset-[30%] rounded-full bg-background shadow-glow ring-1 ring-primary/40" />
        <div className="absolute inset-[30%] flex items-center justify-center">
          <span className="eyebrow text-muted-foreground">v1.0 · learning</span>
        </div>
      </div>
    </div>
  );
}
