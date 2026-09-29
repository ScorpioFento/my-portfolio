import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../libs/gsap-config";
import { GitBranch, Link, ArrowUpRight } from "lucide-react";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "2+", label: "Years building" },
  { value: "5+", label: "Shipped projects" },
  { value: "3", label: "Core stacks" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // One orchestrated page-load sequence, not per-element scroll triggers —
  // this is the first thing visitors see, so it should feel deliberate.
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", { opacity: 0, y: 12, duration: 0.5 })
        .from(".hero-headline", { opacity: 0, y: 16, duration: 0.6 }, "-=0.3")
        .from(".hero-copy", { opacity: 0, y: 14, duration: 0.5 }, "-=0.35")
        .from(".hero-cta > *", { opacity: 0, y: 10, duration: 0.4, stagger: 0.08 }, "-=0.25")
        .from(".hero-stats > div", { opacity: 0, y: 10, duration: 0.4, stagger: 0.08 }, "-=0.2")
        .from(".hero-terminal", { opacity: 0, x: 30, scale: 0.97, duration: 0.7 }, "-=0.6");
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="border-b border-border px-6 pb-24 pt-20 md:pt-28">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1.1fr,0.9fr] md:items-center">
        <div>
          <p className="hero-eyebrow font-mono text-sm text-primary">Yangon, Myanmar</p>
          <h1 className="hero-headline mt-4 font-display text-4xl font-semibold leading-[1.1] text-foreground md:text-5xl">
            I build the backend
            <br />
            your frontend can trust.
          </h1>
          <p className="hero-copy mt-5 max-w-md text-muted-foreground">
            Pyae Sone Tun — full stack developer. React, Next.js and NestJS on
            weekdays; PostgreSQL schemas and API contracts in between. I ship
            SaaS dashboards clients actually keep using.
          </p>

          <div className="hero-cta mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start a project
              <ArrowUpRight size={16} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="GitHub"
            >
              <GitBranch size={17} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="LinkedIn"
            >
              <Link size={17} />
            </a>
          </div>

          <div className="hero-stats mt-12 flex gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-semibold text-foreground">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal window */}
        <div className="hero-terminal overflow-hidden rounded-xl border border-border bg-card shadow-xl">
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">
              whoami.ts
            </span>
          </div>
          <div className="space-y-1.5 px-5 py-5 font-mono text-[13px] leading-relaxed">
            <p className="text-muted-foreground">
              <span className="text-primary">const</span> dev ={" "}
              <span className="text-primary">{"{"}</span>
            </p>
            <p className="pl-4 text-foreground">
              name: <span className="text-primary">"Pyae Sone Tun"</span>,
            </p>
            <p className="pl-4 text-foreground">
              role: <span className="text-primary">"Full Stack Developer"</span>,
            </p>
            <p className="pl-4 text-foreground">
              stack: [<span className="text-primary">"React"</span>,{" "}
              <span className="text-primary">"NestJS"</span>,{" "}
              <span className="text-primary">"PostgreSQL"</span>],
            </p>
            <p className="pl-4 text-foreground">
              status: <span className="text-primary">"open to work"</span>,
            </p>
            <p className="text-muted-foreground">{"}"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
