
import { ArrowUpRight } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
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
    <footer className="border-t border-zinc-900/10">
      <Container>
        <div className="grid gap-12 py-14 md:grid-cols-[1.2fr_0.8fr] md:py-16">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-xl font-semibold tracking-tight text-zinc-900"
            >
              Rashmi<span className="text-orange-700">.</span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-600">
              Frontend developer building scalable, responsive, and
              performance-focused web experiences with React and TypeScript.
            </p>

            <a
              href="mailto:hello@rashmipanday.com"
              className="mt-5 inline-flex items-center gap-2 break-all text-sm font-medium text-zinc-800 transition-colors hover:text-orange-700"
            >
              hello@rashmipanday.com
              <ArrowUpRight size={15} className="shrink-0" />
            </a>
          </div>

          {/* Navigation */}
          <div className="md:ml-auto md:w-full md:max-w-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700">
              Navigation
            </p>

            <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 md:grid-cols-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-zinc-600 transition-colors hover:text-orange-700"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-900/15 text-zinc-700 transition-all hover:border-orange-700 hover:bg-orange-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
              >
                <FaLinkedinIn size={17} aria-hidden="true" />
              </a>

              <a
                href="https://github.com/rashmipanday06"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-900/15 text-zinc-700 transition-all hover:border-orange-700 hover:bg-orange-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
              >
                <FaGithub size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-zinc-900/10 py-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Rashmi Pandey. All rights reserved.
          </p>

          <p>Built with React &amp; TypeScript.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
