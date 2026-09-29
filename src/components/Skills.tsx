import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../libs/gsap-config";

interface SkillGroup {
  label: string;
  items: string[];
}

const groups: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Ant Design"],
  },
  {
    label: "Backend",
    items: ["NestJS", "Node.js", "REST APIs", "JWT Auth", "Firebase Auth"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "TypeORM", "Relational Design"],
  },
  {
    label: "State & Realtime",
    items: ["Redux Toolkit", "RTK Query", "Zustand", "Socket.io"],
  },
  {
    label: "Tools",
    items: ["Git", "Docker", "Nginx", "Linux", "GSAP"],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".skill-group", {
        opacity: 0,
        y: 16,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="skills" className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-sm text-primary">Skills</p>
        <h2 className="mt-3 max-w-md font-display text-3xl font-semibold text-foreground">
          The tools I reach for by default.
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.label} className="skill-group">
              <p className="text-xs text-muted-foreground">{g.label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-3 py-1.5 text-sm text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
