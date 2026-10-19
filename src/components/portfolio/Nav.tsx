import { useEffect, useState } from "react";

const links = ["home", "about", "skills", "projects", "journey", "contact"];

export function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border bg-background/75 backdrop-blur-xl" : ""}`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6" aria-label="Primary">
        <a href="#home" className="font-mono text-sm font-semibold tracking-tight text-foreground">
          <span className="text-muted-foreground">&lt;</span>KR<span className="text-gradient">/&gt;</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l}`}
                aria-current={active === l ? "true" : undefined}
                className={`eyebrow rounded-full px-3 py-2 transition-colors ${active === l ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {active === l && <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gradient-brand align-middle" />}
                {l}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="eyebrow rounded-full border border-border px-4 py-2 text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l}`}
                onClick={() => setOpen(false)}
                className={`block py-3 font-display text-2xl capitalize ${active === l ? "text-gradient" : "text-foreground"}`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
