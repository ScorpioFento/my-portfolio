import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../libs/gsap-config";
import { Workflow, Wrench, Landmark, ArrowUpRight, type LucideIcon } from "lucide-react";

interface Project {
  icon: LucideIcon;
  name: string;
  tag: string;
  description: string;
  stack: string[];
  href: string;
}

const projects: Project[] = [
  {
    icon: Workflow,
    name: "Omega Flow",
    tag: "SaaS",
    description:
      "Client, project, invoice and payment management for freelancers, with real-time updates over WebSockets.",
    stack: ["React", "NestJS", "PostgreSQL", "Socket.io"],
    href: "#",
  },
  {
    icon: Wrench,
    name: "Omega Toolkit",
    tag: "Open source",
    description:
      "A modular set of developer utilities for file, image and data conversion in one animated dashboard.",
    stack: ["React", "TypeScript", "GSAP"],
    href: "#",
  },
  {
    icon: Landmark,
    name: "MTB Banking Site",
    tag: "Client work",
    description:
      "Responsive product pages for Myanmar Tourism Bank — deposits, loans and payment services.",
    stack: ["Pug", "SCSS", "Bootstrap"],
    href: "#",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".project-tile", {
        opacity: 0,
        y: 24,
        scale: 0.96,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".project-grid", start: "top 80%" },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="projects" className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-sm text-primary">Selected work</p>
        <h2 className="mt-3 max-w-md font-display text-3xl font-semibold text-foreground">
          Three things worth clicking into.
        </h2>

        <div className="project-grid mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {projects.map(({ icon: Icon, name, tag, description, stack, href }) => (
            <a
              key={name}
              href={href}
              className="project-tile group flex aspect-square flex-col justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border">
                  <Icon size={17} className="text-primary" strokeWidth={1.75} />
                </div>
                <ArrowUpRight
                  size={17}
                  className="text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                />
              </div>

              <div>
                <p className="font-mono text-[10px] text-primary">{tag}</p>
                <p className="mt-1 font-display text-lg font-semibold text-foreground">
                  {name}
                </p>
                <p className="mt-2 text-sm leading-snug text-muted-foreground">
                  {description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
