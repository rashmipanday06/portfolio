import Container from "../../components/UI/Container";
import { skills } from "../../data/skills";

const skillGroups = [
  {
    title: "Frontend",
    description: "Core technologies I use to build modern interfaces.",
    items: skills.frontend,
  },
  {
    title: "State Management",
    description: "Managing application state and predictable data flow.",
    items: skills.stateManagement,
  },
  {
    title: "Performance",
    description: "Techniques I use to keep applications fast and responsive.",
    items: skills.performance,
  },
  {
    title: "Tools & APIs",
    description: "Development tools and integration technologies.",
    items: skills.tools,
  },
  {
    title: "Cloud & Delivery",
    description: "Foundational cloud and deployment experience.",
    items: skills.cloud,
  },
];

// Light-theme card and chip styles, using the tokens from index.css.
const card =
  "rounded-2xl border border-[var(--line)] bg-white p-7 transition-colors duration-300 hover:border-[var(--accent)]/40";

const chip =
  "rounded-full border border-[var(--line)] bg-[var(--bg)] px-3 py-1 text-xs font-medium text-[var(--ink-soft)]";

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-[var(--line)] py-24 text-[var(--ink)] sm:py-32"
    >
      <Container>
        <header className="mb-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-sm font-medium text-[var(--accent)]">Skills</p>
            <h2 className="font-display mt-4 max-w-xl text-4xl font-semibold leading-[1.1] text-[var(--ink)] sm:text-5xl">
              The tools behind the work.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[var(--ink-soft)] lg:justify-self-end">
            A practical frontend stack focused on building, scaling, and
            delivering modern web applications.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className={`${card} ${
                index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <h3 className="font-display text-lg font-semibold text-[var(--ink)]">
                {group.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">
                {group.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li key={skill} className={chip}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;