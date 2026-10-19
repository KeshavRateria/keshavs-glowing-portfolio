import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav } from "@/components/portfolio/Nav";
import { Portal } from "@/components/portfolio/Portal";
import { Reveal } from "@/components/portfolio/Reveal";
import { beyond, exploring, journey, profile, projects, skillGroups, type Project } from "@/content/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Keshav Rateria — CS Student & Developer in Progress" },
      { name: "description", content: "Portfolio of Keshav Rateria, a first-year Computer Science and Engineering student at VIT Vellore, learning by building." },
      { property: "og:title", content: "Keshav Rateria — Developer in Progress" },
      { property: "og:description", content: "Projects, skills and the learning journey of a CSE student at VIT Vellore." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pad = (n: number) => String(n).padStart(2, "0");

function SectionLabel({ n, children, light }: { n: string; children: string; light?: boolean }) {
  return (
    <div className={`eyebrow mb-10 flex items-center gap-4 ${light ? "text-paper-muted" : "text-muted-foreground"}`}>
      <span>{n}</span>
      <span className={`h-px w-12 ${light ? "bg-paper-border" : "bg-border"}`} />
      <span>{children}</span>
    </div>
  );
}

function Index() {
  const [openProject, setOpenProject] = useState<number | null>(null);
  return (
    <>
      <Nav />
      <main>
        {/* HERO */}
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,var(--navy),transparent_60%)]" />
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <Reveal><p className="eyebrow mb-6 text-muted-foreground">Hello, I'm</p></Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-[clamp(3.5rem,11vw,9rem)] font-extrabold leading-[0.88] tracking-tight">
                  KESHAV<br /><span className="text-gradient">RATERIA</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-8 font-mono text-sm text-foreground">Computer Science Student <span className="text-violet">|</span> Developer in Progress</p>
                <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                  Exploring software development, engineering, and emerging technologies. Learning by building, experimenting, and turning ideas into reality.
                </p>
              </Reveal>
              <Reveal delay={300} className="mt-10 flex flex-wrap gap-4">
                <a href="#projects" className="eyebrow rounded-full bg-gradient-brand px-7 py-4 text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">Explore my work</a>
                <a href="#about" className="eyebrow rounded-full border border-border px-7 py-4 text-foreground transition-colors hover:border-primary hover:bg-secondary">About me</a>
              </Reveal>
            </div>
            <div className="flex justify-center"><Portal /></div>
          </div>
          <a href="#about" className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-muted-foreground" aria-label="Scroll to About">
            <span className="flex h-9 w-5 justify-center rounded-full border border-border pt-2"><span className="animate-scroll-dot h-1.5 w-1 rounded-full bg-primary" /></span>
            <span className="eyebrow text-[0.6rem]">Scroll</span>
          </a>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-paper py-28 text-paper-foreground md:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <SectionLabel n="01" light>About</SectionLabel>
            <div className="grid gap-14 lg:grid-cols-2">
              <Reveal><h2 className="font-display text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.9] tracking-tight">BEYOND<br />THE CODE<span className="text-violet">.</span></h2></Reveal>
              <Reveal delay={150}>
                <div className="space-y-5 text-lg leading-relaxed text-paper-muted">
                  <p><span className="text-paper-foreground">I'm Keshav, a Computer Science and Engineering student at VIT Vellore.</span> I'm currently building my foundations in programming and exploring the many ways technology can solve real-world problems.</p>
                  <p>I'm interested in understanding how things work, experimenting with ideas, and developing practical projects as I learn.</p>
                  <p>This portfolio is a snapshot of my journey so far — what I'm learning, what I'm building, and what I hope to explore next.</p>
                </div>
                <dl className="mt-12 grid grid-cols-1 border-t border-paper-border sm:grid-cols-2">
                  {[["Name", profile.name], ["Degree", profile.degree], ["Institution", profile.institution], ["Current stage", profile.stage]].map(([k, v]) => (
                    <div key={k} className="border-b border-paper-border py-5 sm:odd:pr-6">
                      <dt className="eyebrow text-paper-muted">{k}</dt>
                      <dd className="mt-2 font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <SectionLabel n="02">Skills</SectionLabel>
            <Reveal><h2 className="max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">TOOLS I'M <span className="text-gradient">EXPLORING</span></h2></Reveal>
            <p className="eyebrow mt-14 mb-5 text-muted-foreground">Used so far</p>
            <div className="grid gap-4 md:grid-cols-3">
              {skillGroups.map((g, i) => (
                <Reveal key={g.title} delay={i * 100}>
                  <div className="group h-full rounded-xl border border-border bg-card/50 p-7 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-xl font-bold">{g.title}</h3>
                      <span className="font-mono text-xs text-primary">{g.icon}</span>
                    </div>
                    <ul className="mt-8 flex flex-wrap gap-2">
                      {g.items.map((s) => <li key={s} className="rounded-full border border-border bg-secondary px-4 py-1.5 font-mono text-sm">{s}</li>)}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="eyebrow mt-14 mb-5 text-muted-foreground">Currently exploring — not yet claimed as skills</p>
            <Reveal>
              <ul className="divide-y divide-border rounded-xl border border-dashed border-violet/50">
                {exploring.map((e, i) => (
                  <li key={e} className="flex items-center justify-between gap-4 px-7 py-5 transition-colors hover:bg-secondary/50">
                    <span className="flex items-center gap-5"><span className="font-mono text-xs text-violet">{pad(i + 1)}</span><span className="font-display text-lg font-semibold md:text-2xl">{e}</span></span>
                    <span className="eyebrow hidden text-muted-foreground sm:inline">Learning</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="border-t border-border bg-navy/40 py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <SectionLabel n="03">Projects</SectionLabel>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Reveal><h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">SELECTED<br />PROJECTS</h2></Reveal>
              <p className="max-w-xs text-muted-foreground">Experiments, ideas, and things I've worked on.</p>
            </div>
            <div className="mt-16 grid gap-6 lg:grid-cols-2">
              {projects.map((p, i) => (
                <Reveal key={p.title} delay={i * 120}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-glow">
                    <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-border bg-background">
                      <div className="absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:32px_32px] opacity-60" />
                      <div className="absolute h-40 w-40 rounded-full bg-gradient-brand opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-50" />
                      <span className="eyebrow relative text-muted-foreground">Screenshot / diagram placeholder</span>
                      <span className="absolute left-5 top-4 font-display text-6xl font-extrabold text-foreground/10">{pad(i + 1)}</span>
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <div className="eyebrow flex justify-between text-muted-foreground"><span>Project {pad(i + 1)}</span><span className="text-violet">{p.status}</span></div>
                      <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">{p.title}</h3>
                      <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{p.description}</p>
                      <ul className="mt-6 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-full border border-border px-3 py-1 font-mono text-xs">{t}</li>)}</ul>
                      <button onClick={() => setOpenProject(i)} className="eyebrow mt-8 self-start border-b border-primary pb-1 text-foreground transition-colors hover:text-primary">Project details →</button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section id="journey" className="bg-paper py-28 text-paper-foreground md:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <SectionLabel n="04" light>Journey</SectionLabel>
            <Reveal><h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">THE JOURNEY<br />SO FAR<span className="text-violet">.</span></h2></Reveal>
            <ol className="relative mt-16 border-l border-paper-border md:ml-24">
              {journey.map((j, i) => (
                <Reveal key={j.title} delay={i * 100}>
                  <li className="relative pb-14 pl-10 last:pb-0">
                    <span className={`absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full ${i === journey.length - 1 ? "border-2 border-violet bg-paper" : "bg-gradient-brand"}`} />
                    <span className="font-mono text-sm text-paper-muted md:absolute md:-left-24 md:top-1">{pad(i + 1)} —</span>
                    <h3 className="font-display text-2xl font-bold md:text-4xl">{j.title}</h3>
                    <p className="mt-3 max-w-xl text-paper-muted">{j.text}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* BEYOND */}
        <section className="py-28 md:py-36" aria-labelledby="beyond-h">
          <div className="mx-auto max-w-7xl px-6">
            <SectionLabel n="05">Personal</SectionLabel>
            <Reveal><h2 id="beyond-h" className="font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">BEYOND THE <span className="text-gradient">SCREEN</span></h2></Reveal>
            <p className="mt-4 text-muted-foreground">Tap a card to reveal.</p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {beyond.map((b, i) => <RevealCard key={b.title} i={i} {...b} />)}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative overflow-hidden border-t border-border py-32 md:py-44">
          <div className="animate-pulse-glow pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6">
            <SectionLabel n="06">Contact</SectionLabel>
            <Reveal><h2 className="font-display text-[clamp(3.5rem,12vw,10rem)] font-extrabold leading-[0.85] tracking-tight">LET'S<br /><span className="text-gradient">CONNECT.</span></h2></Reveal>
            <p className="mt-8 max-w-md text-lg text-muted-foreground">Always open to learning, exchanging ideas, and exploring interesting projects.</p>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                ["Email", profile.email ? `mailto:${profile.email}` : "", profile.email],
                ["GitHub", profile.github, profile.github],
                ["LinkedIn", profile.linkedin, profile.linkedin],
              ].map(([label, href, value]) =>
                href ? (
                  <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel="noreferrer" className="group rounded-xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:border-primary hover:shadow-glow">
                    <span className="eyebrow text-muted-foreground">{label}</span>
                    <span className="mt-3 block truncate font-display text-lg font-semibold">{value} ↗</span>
                  </a>
                ) : (
                  <div key={label} className="rounded-xl border border-dashed border-border bg-card/30 p-6">
                    <span className="eyebrow text-muted-foreground">{label}</span>
                    <span className="mt-3 block font-mono text-sm text-muted-foreground">[Link coming soon]</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p><span className="text-foreground">{profile.name}</span> · Designed and built as an evolving personal portfolio. © {new Date().getFullYear()}</p>
          <a href="#home" className="eyebrow self-start rounded-full border border-border px-4 py-2 text-foreground transition-colors hover:border-primary">↑ Back to top</a>
        </div>
      </footer>

      {openProject !== null && <ProjectModal p={projects[openProject]} n={openProject + 1} onClose={() => setOpenProject(null)} />}
    </>
  );
}

function RevealCard({ title, text, i }: { title: string; text: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={i * 80}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={`flex aspect-[4/5] w-full flex-col justify-between rounded-xl border p-6 text-left transition-all duration-500 ${open ? "border-primary bg-card shadow-glow" : "border-border bg-card/40 hover:border-violet/60"}`}
      >
        <span className="flex w-full justify-between font-mono text-xs text-muted-foreground"><span>{pad(i + 1)}</span><span>{open ? "−" : "+"}</span></span>
        <span>
          <span className="block font-display text-2xl font-bold">{title}</span>
          <span className={`mt-3 block text-sm leading-relaxed text-muted-foreground transition-all duration-500 ${open ? "max-h-40 opacity-100" : "max-h-0 overflow-hidden opacity-0"}`}>{text}</span>
        </span>
      </button>
    </Reveal>
  );
}

function ProjectModal({ p, n, onClose }: { p: Project; n: number; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md animate-in fade-in" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-labelledby="pm-title" className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-popover p-8 shadow-glow animate-in zoom-in-95" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <span className="eyebrow text-muted-foreground">Project {pad(n)}</span>
          <button onClick={onClose} autoFocus className="eyebrow rounded-full border border-border px-3 py-1.5 hover:border-primary" aria-label="Close project details">Close ✕</button>
        </div>
        <h3 id="pm-title" className="mt-4 font-display text-3xl font-bold">{p.title}</h3>
        <p className="eyebrow mt-2 text-violet">{p.status}</p>
        <p className="mt-6 leading-relaxed text-muted-foreground">{p.description}</p>
        <h4 className="eyebrow mt-8 text-muted-foreground">Technologies</h4>
        <ul className="mt-3 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-full border border-border px-3 py-1 font-mono text-xs">{t}</li>)}</ul>
        {p.planned && (
          <>
            <h4 className="eyebrow mt-8 text-muted-foreground">Planned / in development</h4>
            <ul className="mt-3 space-y-2">{p.planned.map((x) => <li key={x} className="flex items-center gap-3"><span className="eyebrow rounded border border-dashed border-violet px-2 py-0.5 text-[0.6rem] text-violet">Planned</span>{x}</li>)}</ul>
          </>
        )}
        <h4 className="eyebrow mt-8 text-muted-foreground">My contribution</h4>
        <p className="mt-3 text-muted-foreground">{p.contribution}</p>
      </div>
    </div>
  );
}
