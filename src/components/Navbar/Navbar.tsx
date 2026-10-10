import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-5 pt-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between rounded-full border border-black/10 bg-white/80 px-4 py-3 shadow-[0_8px_30px_rgba(20,22,43,0.06)] backdrop-blur-xl sm:px-5">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="font-display text-base font-semibold tracking-tight text-zinc-900 sm:text-lg"
          >
            Rashmi<span className="text-violet-600">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-600 transition-colors duration-200 hover:text-violet-700"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/Rashmi-Pandey-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-600"
            >
              Resume
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="rounded-full p-2 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mt-2 rounded-3xl border border-black/10 bg-white/95 p-4 shadow-xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm text-zinc-700 transition-colors hover:bg-violet-50 hover:text-violet-700"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="/Rashmi-Pandey-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white"
              >
                View Resume
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;