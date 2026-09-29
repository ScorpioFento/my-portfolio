import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../libs/gsap-config";
import { Briefcase, Building2, type LucideIcon } from "lucide-react";

interface Preview {
  stat: string;
  label: string;
  tag: string;
  meta: string;
}

interface Role {
  icon: LucideIcon;
  period: string;
  role: string;
  company: string;
  bullets: string[];
  preview: Preview;
}

const roles: Role[] = [
  {
    icon: Briefcase,
    period: "Oct 2024 — Present",
    role: "Full Stack Developer",
    company: "Freelance / Contract",
    bullets: [
      "Built full-stack SaaS apps with React, Next.js, TypeScript, NestJS and PostgreSQL",
      "Designed REST APIs and relational schemas with TypeORM",
      "Shipped reusable UI with Tailwind, shadcn/ui, Ant Design and Material UI",
    ],
    preview: { stat: "5+", label: "Active projects", tag: "In progress", meta: "React · NestJS · PostgreSQL" },
  },
  {
    icon: Building2,
    period: "May 2024 — Aug 2024",
    role: "Frontend Developer (Intern)",
    company: "Innovix Solution Company",
    bullets: [
      "Built responsive pages for the Myanmar Tourism Bank site",
      "Shipped Deposits, Loans, Bancassurance and Payment Service pages",
      "Reused shared components to keep every service page consistent",
    ],
    preview: { stat: "4", label: "Service pages shipped", tag: "Completed", meta: "Pug · SCSS · Bootstrap" },
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const rows = gsap.utils.toArray<HTMLElement>(".experience-row");

      rows.forEach((row, i) => {
        const fromLeft = i % 2 === 0;

        gsap.from(row.querySelector(".experience-text"), {
          opacity: 0,
          x: fromLeft ? -40 : 40,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 75%" },
        });

        gsap.from(row.querySelector(".experience-preview"), {
          opacity: 0,
          x: fromLeft ? 40 : -40,
          scale: 0.95,
          duration: 0.7,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 75%" },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="experience" className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-sm text-primary">Experience</p>
        <h2 className="mt-3 max-w-md font-display text-3xl font-semibold text-foreground">
          What I've been shipping.
        </h2>

        <div className="mt-16 flex flex-col gap-16">
          {roles.map(({ icon: Icon, period, role, company, bullets, preview }) => (
            <div
              key={role}
              className="experience-row grid grid-cols-1 items-center gap-8 md:grid-cols-[1.2fr,1fr]"
            >
              <div className="experience-text">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card">
                  <Icon size={17} className="text-primary" strokeWidth={1.75} />
                </div>
                <p className="mt-4 font-mono text-xs text-muted-foreground">{period}</p>
                <p className="mt-1 font-display text-xl font-semibold text-foreground">
                  {role}
                </p>
                <p className="text-sm text-muted-foreground">{company}</p>
                <ul className="mt-4 space-y-1.5">
                  {bullets.map((b) => (
                    <li key={b} className="text-sm text-muted-foreground">
                      — {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* preview tile — same pattern as Features.tsx */}
              <div className="experience-preview rounded-xl border border-border bg-card p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] text-muted-foreground">
                    {preview.tag}
                  </span>
                  <Icon size={16} className="text-primary/50" strokeWidth={1.75} />
                </div>
                <p className="mt-6 font-display text-3xl font-semibold text-foreground">
                  {preview.stat}
                </p>
                <p className="text-sm text-muted-foreground">{preview.label}</p>
                <p className="mt-3 font-mono text-xs text-muted-foreground">{preview.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
