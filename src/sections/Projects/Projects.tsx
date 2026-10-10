import Container from "../../components/UI/Container";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-[var(--line)] py-24 text-[var(--ink)] sm:py-32"
    >
      <Container>
        <header className="mb-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-sm font-medium text-[var(--accent)]">
              Selected Work
            </p>
            <h2 className="font-display mt-4 max-w-xl text-4xl font-semibold leading-[1.1] text-[var(--ink)] sm:text-5xl">
              Projects that represent how I build.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[var(--ink-soft)] lg:justify-self-end">
            A mix of client work and products I'm building independently.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;