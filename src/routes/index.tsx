import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav } from "@/components/portfolio/Nav";
import { Portal } from "@/components/portfolio/Portal";
import { Reveal } from "@/components/portfolio/Reveal";
import { CvButton } from "@/components/portfolio/CvButton";
import { beyond, exploring, journey, lookingFor, profile, projects, skillGroups, type Project } from "@/content/portfolio";

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
    <div className={`eyebrow mb-8 flex items-center gap-3 md:mb-12 ${light ? "text-paper-muted" : "text-muted-foreground"}`}>
      <span className={light ? "text-paper-foreground" : "text-foreground"}>{n}</span>
      <span className={`h-px w-10 ${light ? "bg-paper-border" : "bg-border"}`} />
      <span>{children}</span>
    </div>
  );
}

const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const section = "py-24 md:py-36";

function Index() {
  const [openProject, setOpenProject] = useState<number | null>(null);
  return (
    <>
      <Nav />
      <main>
        {/* HERO */}
        <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
          <div className="bg-hero pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
          <div className={`relative grid items-center gap-10 py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-6 ${container}`}>
            <div className="order-2 lg:order-1">
              <Reveal>
                <p className="eyebrow inline-flex items-center gap-2.5 rounded-full border border-border bg-card/40 px-3.5 py-2 text-muted-foreground backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
                  {profile.degree.replace("B.Tech ", "")} · {profile.institution}
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="display-hero mt-8">
                  Keshav<br /><span className="text-gradient">Rateria</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-8 font-mono text-sm text-foreground">Computer Science Student <span className="text-muted-foreground">/</span> Developer in Progress</p>
                <p className="mt-4 max-w-md text-[1.05rem] leading-relaxed text-muted-foreground">
                  Exploring software development, engineering, and emerging technologies. Learning by building, experimenting, and turning ideas into reality.
                </p>
              </Reveal>
              <Reveal delay={300} className="mt-10 flex flex-wrap gap-3">
                <a href="#projects" className="eyebrow rounded-full bg-foreground px-6 py-3.5 text-background transition-all hover:-translate-y-0.5 hover:shadow-glow">Explore my work</a>
                <a href="#about" className="eyebrow rounded-full border border-border px-6 py-3.5 text-foreground transition-colors hover:border-primary/60 hover:bg-card/60">About me</a>
                <CvButton />
              </Reveal>
            </div>
            <div className="order-1 flex justify-center lg:order-2"><Portal /></div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className={`sheet bg-paper text-paper-foreground ${section}`}>
          <div className={container}>
            <SectionLabel n="01" light>About</SectionLabel>
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
              <Reveal><h2 className="display-xl">Beyond<br />the code<span className="text-violet">.</span></h2></Reveal>
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
                <CvButton light className="mt-10" />
              </Reveal>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className={section}>
          <div className={container}>
            <SectionLabel n="02">Skills</SectionLabel>
            <Reveal><h2 className="display-lg max-w-3xl">Tools I'm <span className="text-gradient">exploring</span></h2></Reveal>
            <p className="eyebrow mb-5 mt-16 text-muted-foreground">Used so far</p>
            <div className="grid gap-4 md:grid-cols-3">
              {skillGroups.map((g, i) => (
                <Reveal key={g.title} delay={i * 100} className="h-full">
                  <div className="h-full rounded-2xl border border-border bg-card/50 p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card-hover">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-display text-xl font-bold tracking-tight">{g.title}</h3>
                      <span className="font-mono text-xs text-muted-foreground">{pad(i + 1)}</span>
                    </div>
                    <ul className="mt-10 flex flex-wrap gap-2">
                      {g.items.map((s) => <li key={s} className="rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 font-mono text-xs">{s}</li>)}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="eyebrow mb-5 mt-16 text-muted-foreground">CURRENTLY EXPLORING -</p>
            <Reveal>
              <ul className="divide-y divide-border border-y border-border">
                {exploring.map((e, i) => (
                  <li key={e} className="flex items-center justify-between gap-4 py-6 transition-colors">
                    <span className="flex items-baseline gap-5"><span className="font-mono text-xs text-violet">{pad(i + 1)}</span><span className="font-display text-xl font-semibold tracking-tight md:text-3xl">{e}</span></span>
                    <span className="eyebrow hidden shrink-0 rounded-full border border-dashed border-violet/50 px-3 py-1 text-muted-foreground sm:inline">Learning</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* LOOKING FOR */}
        <section id="looking" className={`sheet bg-paper text-paper-foreground ${section}`}>
          <div className={container}>
            <SectionLabel n="03" light>Looking for</SectionLabel>
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
              <Reveal><h2 className="display-lg">What I'm<br />looking for<span className="text-violet">.</span></h2></Reveal>
              <Reveal delay={150}><p className="text-lg leading-relaxed text-paper-muted">{lookingFor.intro}</p></Reveal>
            </div>
            <div className="mt-16 grid gap-10 border-t border-paper-border pt-10 md:grid-cols-2 md:gap-16">
              {([["Areas of interest", lookingFor.areas], ["Opportunities I'm interested in", lookingFor.opportunities]] as const).map(([title, items], gi) => (
                <Reveal key={title} delay={gi * 100}>
                  <h3 className="eyebrow text-paper-muted">{title}</h3>
                  <ul className="mt-5 divide-y divide-paper-border border-y border-paper-border">
                    {items.map((x, i) => (
                      <li key={x} className="flex items-baseline gap-4 py-4">
                        <span className="font-mono text-xs text-violet">{pad(i + 1)}</span>
                        <span className="font-display text-lg font-semibold tracking-tight md:text-xl">{x}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
            <Reveal><p className="mt-16 max-w-2xl font-display text-2xl font-semibold tracking-tight md:text-3xl">{lookingFor.closing}</p></Reveal>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className={`relative ${section}`}>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,color-mix(in_oklab,var(--primary)_10%,transparent),transparent)]" />
          <div className={`relative ${container}`}>
            <SectionLabel n="04">Projects</SectionLabel>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Reveal><h2 className="display-lg">Selected<br />projects</h2></Reveal>
              <p className="max-w-xs text-muted-foreground">Experiments, ideas, and things I've worked on.</p>
            </div>
            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              {projects.map((p, i) => (
                <Reveal key={p.title} delay={i * 120} className="h-full">
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-7 shadow-card transition-all duration-500 hover:border-primary/40 hover:shadow-card-hover sm:p-9">
                    <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-20" />
                    <div className="relative flex items-start justify-between gap-4">
                      <span className="font-display text-5xl font-extrabold leading-none tracking-tight text-foreground/15">{pad(i + 1)}</span>
                      <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-muted-foreground">
                        <span className={`h-1.5 w-1.5 rounded-full ${p.status.startsWith("Completed") ? "bg-primary" : "bg-violet animate-pulse"}`} />
                        {p.status}
                      </span>
                    </div>
                    <h3 className="relative mt-12 font-display text-2xl font-bold tracking-tight md:text-[2rem] md:leading-tight">{p.title}</h3>
                    <p className="relative mt-4 flex-1 leading-relaxed text-muted-foreground">{p.description}</p>
                    <div className="relative mt-8 flex flex-col gap-6 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <ul className="flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-full bg-secondary/70 px-3 py-1 font-mono text-xs text-secondary-foreground">{t}</li>)}</ul>
                      <button onClick={() => setOpenProject(i)} className="eyebrow inline-flex shrink-0 items-center gap-2 self-start text-foreground transition-colors hover:text-primary sm:self-auto">
                        Project details <span className="transition-transform group-hover:translate-x-1">→</span>
                      </button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section id="journey" className={`sheet bg-paper text-paper-foreground ${section}`}>
          <div className={container}>
            <SectionLabel n="05" light>Journey</SectionLabel>
            <Reveal><h2 className="display-lg">The journey<br />so far<span className="text-violet">.</span></h2></Reveal>
            <ol className="relative mt-16 border-l border-paper-border md:ml-24">
              {journey.map((j, i) => (
                <Reveal key={j.title} delay={i * 100}>
                  <li className="relative pb-14 pl-8 last:pb-0 md:pl-12">
                    <span className={`absolute -left-[6px] top-2.5 h-3 w-3 rounded-full ${i === journey.length - 1 ? "border-2 border-violet bg-paper" : "bg-gradient-brand"}`} />
                    <span className="font-mono text-xs text-paper-muted md:absolute md:-left-24 md:top-2">{pad(i + 1)} —</span>
                    <h3 className="mt-1 font-display text-2xl font-bold tracking-tight md:mt-0 md:text-4xl">{j.title}</h3>
                    <p className="mt-3 max-w-xl leading-relaxed text-paper-muted">{j.text}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* BEYOND */}
        <section className={section} aria-labelledby="beyond-h">
          <div className={container}>
            <SectionLabel n="06">Personal</SectionLabel>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <Reveal><h2 id="beyond-h" className="display-lg">Beyond the <span className="text-gradient">screen</span></h2></Reveal>
              <p className="text-muted-foreground">Tap a card to reveal.</p>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {beyond.map((b, i) => <RevealCard key={b.title} i={i} {...b} />)}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative overflow-hidden border-t border-border py-28 md:py-40">
          <div className="pointer-events-none absolute -bottom-48 left-1/2 h-96 w-[min(60rem,140vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--primary),var(--violet)_60%,transparent)] opacity-30 blur-3xl" />
          <div className={`relative ${container}`}>
            <SectionLabel n="07">Contact</SectionLabel>
            <Reveal><h2 className="display-hero">Let's<br /><span className="text-gradient">connect.</span></h2></Reveal>
            <p className="mt-8 max-w-md text-lg text-muted-foreground">Always open to learning, exchanging ideas, and exploring interesting projects.</p>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                ["Email", profile.email ? `mailto:${profile.email}` : "", profile.email],
                ["GitHub", profile.github, profile.github],
                ["LinkedIn", profile.linkedin, profile.linkedin],
              ].map(([label, href, value]) =>
                href ? (
                  <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel="noreferrer" className="group rounded-2xl border border-border bg-card/60 p-6 shadow-card backdrop-blur transition-all hover:border-primary/40 hover:shadow-card-hover">
                    <span className="eyebrow text-muted-foreground">{label}</span>
                    <span className="mt-3 block truncate font-display text-lg font-semibold">{value} ↗</span>
                  </a>
                ) : (
                  <div key={label} className="rounded-2xl border border-dashed border-border bg-card/30 p-6">
                    <span className="eyebrow text-muted-foreground">{label}</span>
                    <span className="mt-3 block font-mono text-sm text-muted-foreground">Link coming soon</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className={`flex flex-col gap-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between ${container}`}>
          <p><span className="text-foreground">{profile.name}</span> · Designed and built as an evolving personal portfolio. © {new Date().getFullYear()}</p>
          <a href="#home" className="eyebrow self-start rounded-full border border-border px-4 py-2 text-foreground transition-colors hover:border-primary/60 md:self-auto">↑ Back to top</a>
        </div>
      </footer>

      {openProject !== null && projects[openProject] && <ProjectModal p={projects[openProject]!} n={openProject + 1} onClose={() => setOpenProject(null)} />}
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
        className={`flex min-h-56 w-full flex-col justify-between rounded-2xl border p-6 sm:aspect-[4/5] text-left transition-all duration-500 ${open ? "border-primary/50 bg-card shadow-card-hover" : "border-border bg-card/40 shadow-card hover:border-primary/40"}`}
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
      <div role="dialog" aria-modal="true" aria-labelledby="pm-title" className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-popover p-6 shadow-card-hover sm:p-10 animate-in zoom-in-95" onClick={(e) => e.stopPropagation()}>
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
