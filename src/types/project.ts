export type ProjectStatus = "live" | "in-development" | "completed" | "archived";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  status: ProjectStatus;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  image?: string;
}