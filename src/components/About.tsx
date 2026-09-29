import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../libs/gsap-config";
import { GraduationCap, MapPin, Mail, Phone, type LucideIcon } from "lucide-react";

interface Fact {
  icon: LucideIcon;
  label: string;
}

const facts: Fact[] = [
  { icon: GraduationCap, label: "B.Sc. Computer Science, University of Computer Studies (Thaton)" },
  { icon: MapPin, label: "Yangon, Myanmar" },
  { icon: Mail, label: "pyaesonetun.dev@gmail.com" },
  { icon: Phone, label: "+95 9754199668" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-col", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="about" className="border-b border-border px-6 py-24">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr,1fr]">
        <div className="about-col">
          <p className="font-mono text-sm text-primary">About</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">
            Two years in, still reading the docs.
          </h2>
        </div>
        <div className="about-col">
          <p className="text-muted-foreground">
            I work across the full stack — relational schemas and REST APIs
            in NestJS, responsive interfaces in React and Tailwind. Most of
            my recent work has been building Omega Flow, an open-source
            platform freelancers use to run their clients, projects,
            invoices and payments from one dashboard, alongside contract
            frontend work for banking and tourism clients.
          </p>
          <ul className="mt-8 space-y-3">
            {facts.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm text-foreground">
                <Icon size={15} className="text-primary" strokeWidth={1.75} />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
