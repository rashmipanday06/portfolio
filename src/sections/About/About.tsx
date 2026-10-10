import type { CSSProperties } from "react";
import {
  Accessibility,
  ArrowUpRight,
  Gauge,
  GitBranch,
  Layers,
  Mail,
} from "lucide-react";
import Container from "../../components/UI/Container";

/* ---------- Theme (change colors here) ---------- */
// Accent: muted olive. For deep navy use --accent: #263B53; --accent-hover: #1B2B3E
// Font: load Inter in index.html (Google Fonts) or via @fontsource/inter.
const theme = {
  "--bg": "#FAF9F6", // warm white
  "--ink": "#202124", // charcoal text
  "--ink-soft": "#4A4D52", // body text
  "--ink-muted": "#6B6E73", // labels
  "--line": "#E7E4DD", // subtle warm border
  "--accent": "#68745C", // muted olive
  "--accent-hover": "#566149",
  "--accent-tint": "#EEF0EA",
  fontFamily: "Inter, 'Geist', ui-sans-serif, system-ui, sans-serif",
} as CSSProperties;

/* ---------- Content (edit these) ---------- */

// TODO: replace with your real numbers
const stats = [
  { value: "3+", label: "Years building for the web" },
  { value: "15+", label: "Projects shipped" },
  { value: "4", label: "Enterprise & client products" },
];

const principles = [
  {
    icon: Layers,
    title: "Component architecture",
    text: "Small, typed, reusable pieces with clear boundaries, so features grow without the codebase turning brittle.",
  },
  {
    icon: Gauge,
    title: "Performance by default",
    text: "Code splitting, lean renders, and optimized assets treated as part of the build, not a cleanup task.",
  },
  {
    icon: Accessibility,
    title: "Accessible interfaces",
    text: "Semantic markup, keyboard support, and sensible contrast, so the product works for everyone who uses it.",
  },
  {
    icon: GitBranch,
    title: "Maintainable delivery",
    text: "Readable code, consistent conventions, and clean Git history that teammates can pick up quickly.",
  },
];

const stack = [
  { group: "Core", items: ["React", "TypeScript", "JavaScript (ES6+)"] },
  { group: "Styling", items: ["Tailwind CSS", "CSS Modules", "Responsive design"] },
  { group: "Data & state", items: ["REST APIs", "React Query", "Redux Toolkit"] },
  { group: "Tooling", items: ["Vite", "Git & GitHub", "Jest / Testing Library"] },
];

// Shared card look: white, subtle border, no heavy shadow.
const card =
  "rounded-2xl border border-[var(--line)] bg-white transition-colors duration-300 hover:border-[var(--accent)]/40";

/* ---------- Component ---------- */

function About() {
  return (
    <section
      id="about"
      style={theme}
      className="border-t border-[var(--line)] bg-[var(--bg)] py-24 text-[var(--ink)] sm:py-32"
    >
      <Container>
        {/* Heading */}
        <header className="mb-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-sm font-medium text-[var(--accent)]">About me</p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--ink)] sm:text-5xl">
              Frontend engineering with a product mindset.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[var(--ink-soft)] lg:justify-self-end">
            I enjoy turning complex requirements into clean, responsive, and
            maintainable interfaces.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Main story */}
          <div className={`flex flex-col p-8 sm:p-11 ${card}`}>
            <div className="max-w-prose space-y-6 text-base leading-8 text-[var(--ink-soft)]">
              <p>
                I'm a frontend developer specializing in React and TypeScript,
                with experience building enterprise applications, client
                websites, and independent products.
              </p>

              <p>
                My work focuses on reusable component architecture, state
                management, API integration, responsive interfaces, and
                frontend performance.
              </p>

              <p>
                I care about more than making an interface look good. I focus
                on how the application is structured, how components behave,
                and how the experience performs as the product grows.
              </p>
            </div>

            {/* Stats */}
            <dl className="mt-12 grid grid-cols-3 divide-x divide-[var(--line)] border-y border-[var(--line)]">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col-reverse px-4 py-7 first:pl-0 sm:px-6"
                >
                  <dt className="mt-2 text-xs leading-5 text-[var(--ink-muted)]">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[var(--accent-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Explore my work
                <ArrowUpRight size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--ink)] transition-colors duration-200 hover:text-[var(--accent)] focus:outline-none focus-visible:underline"
              >
                <Mail size={16} />
                Get in touch
              </a>
            </div>
          </div>

          {/* Side column */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <div className={`p-8 ${card}`}>
              <p className="text-sm text-[var(--ink-muted)]">Specialization</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--ink)]">
                React & TypeScript
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                Building scalable interfaces with modern React patterns,
                reusable components, and strongly typed frontend architecture.
              </p>
            </div>

            <div className={`p-8 ${card}`}>
              <p className="text-sm text-[var(--ink-muted)]">Approach</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--ink)]">
                Performance & UX
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                Thinking about rendering, loading, responsiveness, accessibility,
                and the overall user experience, not just the visual layer.
              </p>
            </div>

            {/* Availability */}
            <div className={`p-8 sm:col-span-2 lg:col-span-1 ${card}`}>
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent)]/50 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                </span>
                <p className="text-sm font-medium text-[var(--ink)]">
                  Open to new opportunities
                </p>
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                Available for full-time roles and select freelance projects.
              </p>
            </div>
          </div>
        </div>

        {/* How I work */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ icon: Icon, title, text }) => (
            <div key={title} className={`p-8 ${card}`}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-tint)] text-[var(--accent)]">
                <Icon size={18} aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-base font-semibold tracking-tight text-[var(--ink)]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className={`mt-6 p-8 sm:p-11 ${card}`}>
          <h3 className="text-xl font-semibold tracking-tight text-[var(--ink)]">
            Tools I work with
          </h3>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stack.map(({ group, items }) => (
              <div key={group}>
                <p className="text-sm text-[var(--ink-muted)]">{group}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[var(--line)] bg-[var(--bg)] px-3 py-1 text-xs text-[var(--ink-soft)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;