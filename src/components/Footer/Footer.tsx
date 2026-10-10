import { ArrowUpRight  } from "lucide-react";
import Container from "../UI/Container";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="border-t border-white/5">
      <Container>
        <div className="grid gap-12 py-14 md:grid-cols-[1.2fr_0.8fr] md:py-16">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-xl font-semibold tracking-tight text-white"
            >
              Rashmi<span className="text-violet-400">.</span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-500">
              Frontend developer building scalable, responsive, and
              performance-focused web experiences with React and TypeScript.
            </p>

            <a
              href="mailto:hello@rashmipanday.com"
              className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-violet-400"
            >
              hello@rashmipanday.com
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Navigation */}
          <div className="md:ml-auto md:w-full md:max-w-sm">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-600">
              Navigation
            </p>

            <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 md:grid-cols-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-zinc-500 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                {/* <Linkedin size={17} /> */}
              </a>

              <a
                href="https://github.com/rashmipanday06"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                {/* <Github size={17} /> */}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-white/5 py-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Rashmi Pandey. All rights reserved.</p>

          <p>Built with React & TypeScript.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;