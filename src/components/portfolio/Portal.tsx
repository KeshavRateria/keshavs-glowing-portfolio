import { useEffect, useRef } from "react";

export function Portal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 14;
        const y = (e.clientY / window.innerHeight - 0.5) * 14;
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-[300px] sm:max-w-[420px] lg:max-w-[520px]" aria-hidden="true">
      <div ref={ref} className="absolute inset-0 transition-transform duration-700 ease-out">
        <div className="animate-pulse-glow absolute inset-[22%] rounded-full bg-[radial-gradient(circle,var(--primary),var(--violet)_55%,transparent_72%)] opacity-70 blur-3xl" />
        <svg viewBox="0 0 400 400" className="animate-spin-slow absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="60%" stopColor="var(--violet)" />
              <stop offset="100%" stopColor="var(--violet)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="150" fill="none" stroke="url(#ring)" strokeWidth="1.5" />
          <circle cx="350" cy="200" r="3" fill="var(--primary)" />
        </svg>
        <svg viewBox="0 0 400 400" className="animate-spin-slower absolute inset-0 h-full w-full">
          <circle cx="200" cy="200" r="182" fill="none" stroke="var(--border)" strokeWidth="1" />
          <ellipse cx="200" cy="200" rx="182" ry="54" fill="none" stroke="var(--violet)" strokeOpacity=".25" strokeWidth="1" />
        </svg>
        <div className="absolute inset-[31%] rounded-full bg-background ring-1 ring-primary/30 shadow-[inset_0_0_60px_-10px_var(--primary)]" />
      </div>
    </div>
  );
}
