import { useEffect, useState } from "react";
import { cv } from "@/content/portfolio";

/** Downloads the CV PDF from /public; shows a disabled state if the file isn't there yet. */
export function CvButton({ className = "", light }: { className?: string; light?: boolean }) {
  const [available, setAvailable] = useState<boolean | null>(null);
  useEffect(() => {
    fetch(cv.url, { method: "HEAD" })
      .then((r) => setAvailable(r.ok && (r.headers.get("content-type") ?? "").includes("pdf")))
      .catch(() => setAvailable(false));
  }, []);
  const base = `eyebrow inline-flex items-center gap-2 rounded-full border px-6 py-3.5 transition-colors ${className}`;
  if (available === false) {
    return (
      <span aria-disabled="true" className={`${base} cursor-not-allowed border-dashed opacity-60 ${light ? "border-paper-border text-paper-muted" : "border-border text-muted-foreground"}`}>
        CV coming soon
      </span>
    );
  }
  return (
    <a
      href={cv.url}
      download={cv.filename}
      type="application/pdf"
      className={`${base} ${light ? "border-paper-border text-paper-foreground hover:border-violet" : "border-border text-foreground hover:border-primary/60 hover:bg-card/60"}`}
    >
      Download CV <span aria-hidden>↓</span>
    </a>
  );
}
