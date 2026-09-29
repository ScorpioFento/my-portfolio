import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../libs/gsap-config";
import { Mail, GitBranch, Link, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".contact-content", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    },
    { scope: sectionRef },
  );

  return (
    <>
      <section ref={sectionRef} id="contact" className="px-6 py-28 text-center">
        <div className="contact-content mx-auto max-w-xl">
          <p className="font-mono text-sm text-primary">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
            Have something to build? Let's talk.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Open to freelance contracts and full-time roles. Usually reply
            within a day.
          </p>
          <a
            href="mailto:pyaesonetun.dev@gmail.com"
            className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail size={16} />
            pyaesonetun.dev@gmail.com
          </a>

          <div className="mt-8 flex items-center justify-center gap-4">
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
        </div>
      </section>

      <footer className="border-t border-border px-6 py-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Pyae Sone Tun. Yangon, Myanmar.</p>
          <a href="#" className="inline-flex items-center gap-1 hover:text-foreground">
            Back to top <ArrowUpRight size={12} />
          </a>
        </div>
      </footer>
    </>
  );
}
