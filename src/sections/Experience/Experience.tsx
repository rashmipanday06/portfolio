import Container from "../../components/UI/Container";
import { experience } from "../../data/experience";

// Light-theme styles, using the tokens from index.css.
const card =
  "rounded-2xl border border-[var(--line)] bg-white p-8 transition-colors duration-300 hover:border-[var(--accent)]/40 sm:p-11";

const chip =
  "rounded-full border border-[var(--line)] bg-[var(--bg)] px-3 py-1 text-xs font-medium text-[var(--ink-soft)]";

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[var(--line)] py-24 text-[var(--ink)] sm:py-32"
    >
      <Container>
        <header className="mb-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-sm font-medium text-[var(--accent)]">
              Experience
            </p>
            <h2 className="font-display mt-4 max-w-xl text-4xl font-semibold leading-[1.1] text-[var(--ink)] sm:text-5xl">
              Building for real-world applications.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[var(--ink-soft)] lg:justify-self-end">
            Professional experience across enterprise software, frontend
            architecture, and performance-focused React development.
          </p>
        </header>

        <div className="space-y-6">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className={card}>
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                <div>
                  <p className="text-sm font-medium text-[var(--accent)]">
                    {item.period}
                  </p>

                  <h3 className="font-display mt-2 text-2xl font-semibold text-[var(--ink)]">
                    {item.role}
                  </h3>

                  <p className="mt-1 text-base text-[var(--ink-muted)]">
                    {item.company}
                  </p>
                </div>

                <ul className="flex flex-wrap gap-2 md:max-w-md md:justify-end">
                  {item.technologies.map((technology) => (
                    <li key={technology} className={chip}>
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 max-w-3xl text-base leading-8 text-[var(--ink-soft)]">
                {item.description}
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 rounded-xl border border-[var(--line)] bg-[var(--bg)] p-4"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                    />

                    <p className="text-sm leading-6 text-[var(--ink-soft)]">
                      {highlight}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experience;