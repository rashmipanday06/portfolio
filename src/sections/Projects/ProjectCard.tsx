
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
}

const chip =
  "rounded-full border border-[#E7E2D9] bg-[#F1EEE7] px-3 py-1.5 text-[11px] font-medium tracking-wide text-[#57534E] transition-colors duration-200 group-hover:border-[#D6CFC3]";

function ProjectCard({ project }: ProjectCardProps) {
  const isInDevelopment = project.status === "in-development";
  const isLive = project.status === "live";

  // Supports an optional image without requiring it in the Project type.
  const previewImage = "image" in project ? project.image : undefined;

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl
        border border-[#E7E2D9] bg-[#FBFAF7]
        transition-all duration-300
        hover:-translate-y-1 hover:border-[#D6CFC3]
        hover:shadow-[0_18px_45px_-25px_rgba(68,56,38,0.25)]"
    >
      {/* Project preview */}
      <div
        className="relative aspect-[16/10] overflow-hidden
          border-b border-[#E7E2D9] bg-[#F1EEE7]"
      >
        {previewImage ? (
          <img
            src={previewImage}
            alt={`${project.title} project preview`}
            loading="lazy"
            className="h-full w-full object-cover object-top
              transition-transform duration-700 ease-out
              group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            {/* Warm decorative background */}
            <div
              className="absolute inset-0
                bg-[radial-gradient(ellipse_at_top_left,rgba(180,151,105,0.16),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(148,163,184,0.12),transparent_50%)]"
            />

            <div
              className="absolute inset-0 opacity-50
                [background-image:linear-gradient(rgba(120,113,108,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(120,113,108,0.07)_1px,transparent_1px)]
                [background-size:28px_28px]"
            />

            {/* Minimal browser window */}
            <div
              className="relative w-[78%] max-w-sm overflow-hidden
                rounded-xl border border-[#DED8CD] bg-[#FBFAF7]/95
                shadow-xl transition-transform duration-500
                group-hover:-translate-y-1"
            >
              <div className="flex items-center gap-1.5 border-b border-[#E7E2D9] px-3 py-2.5">
                <span className="h-2 w-2 rounded-full bg-[#D99A91]" />
                <span className="h-2 w-2 rounded-full bg-[#D8B66C]" />
                <span className="h-2 w-2 rounded-full bg-[#92B49A]" />
                <span className="ml-2 h-1.5 w-20 rounded-full bg-[#E7E2D9]" />
              </div>

              <div className="space-y-3 p-5">
                <div className="h-2 w-1/3 rounded-full bg-[#B49A70]" />
                <div className="h-3 w-4/5 rounded-full bg-[#D6D0C6]" />
                <div className="h-2 w-3/5 rounded-full bg-[#E8E3DA]" />

                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="h-12 rounded-lg border border-[#E7E2D9] bg-[#F5F3EF]" />
                  <div className="h-12 rounded-lg border border-[#D8C8A9] bg-[#EEE5D5]" />
                  <div className="h-12 rounded-lg border border-[#E7E2D9] bg-[#F5F3EF]" />
                </div>

                <div className="space-y-2 pt-1">
                  <div className="h-1.5 w-full rounded-full bg-[#E7E2D9]" />
                  <div className="h-1.5 w-4/5 rounded-full bg-[#EAE5DC]" />
                  <div className="h-1.5 w-2/3 rounded-full bg-[#EAE5DC]" />
                </div>
              </div>
            </div>

            <span className="absolute bottom-4 right-4 font-mono text-[10px] tracking-[0.2em] text-[#A8A096]">
              PROJECT PREVIEW
            </span>
          </div>
        )}

        {/* Soft preview overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#29251F]/25 via-transparent to-transparent" />

        {/* Project status */}
        <div className="absolute left-4 top-4">
          <span
            className="inline-flex items-center gap-2 rounded-full
              border border-[#E7E2D9] bg-[#FBFAF7]/95
              px-3 py-1.5 text-[10px] font-medium tracking-wide
              text-[#57534E] shadow-sm backdrop-blur-md"
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isInDevelopment
                  ? "bg-amber-500"
                  : isLive
                    ? "bg-emerald-600"
                    : "bg-[#A8A096]"
              }`}
            />
            {isInDevelopment
              ? "In Development"
              : isLive
                ? "Live Project"
                : "Completed"}
          </span>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute right-4 top-4">
            <span
              className="inline-flex items-center gap-1.5 rounded-full
                border border-[#D8C8A9] bg-[#F5EEDF]/95
                px-3 py-1.5 text-[10px] font-medium tracking-wide
                text-[#80663E] backdrop-blur-md"
            >
              <Sparkles size={11} />
              Featured
            </span>
          </div>
        )}

        {/* Category */}
        <div className="absolute bottom-4 left-5 right-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white drop-shadow-sm">
            {project.category}
          </p>
        </div>
      </div>

      {/* Project information */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <h3
            className="font-display text-xl font-semibold tracking-tight
              text-[#292524] transition-colors duration-200
              group-hover:text-[#80663E] sm:text-2xl"
          >
            {project.title}
          </h3>

          <span
            className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center
              rounded-full border border-[#E7E2D9] text-[#78716C]
              transition-all duration-300
              group-hover:border-[#D8C8A9] group-hover:bg-[#F1EEE7]
              group-hover:text-[#80663E]"
          >
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5"
            />
          </span>
        </div>

        <p className="mt-3 text-sm leading-7 text-[#78716C]">
          {project.description}
        </p>

        {/* Technology stack */}
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li key={technology} className={chip}>
              {technology}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div
          className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3
            border-t border-[#E7E2D9] pt-5"
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live`}
              className="inline-flex items-center gap-2 text-sm font-medium
                text-[#57534E] transition-colors
                hover:text-[#80663E]"
            >
              <ExternalLink size={15} />
              Live Preview
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="inline-flex items-center gap-2 text-sm font-medium
                text-[#78716C] transition-colors
                hover:text-[#292524]"
            >
              Source Code
              <ArrowUpRight size={14} />
            </a>
          )}

          {isInDevelopment && (
            <span className="ml-auto text-xs font-medium text-[#997344]">
              In progress
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
