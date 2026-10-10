
export interface Service {
  title: string;
  description: string;
  technologies: string[];
}

export const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, scalable, and maintainable web applications using React and modern frontend technologies.",
    technologies: ["React", "TypeScript", "JavaScript"],
  },
  {
    title: "Business Websites",
    description:
      "Creating premium, responsive websites for businesses, startups, and professional services.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "UI Development",
    description:
      "Turning designs and ideas into polished, responsive interfaces with reusable and accessible components.",
    technologies: ["React", "CSS", "Tailwind CSS"],
  },
  {
    title: "Website Optimization",
    description:
      "Improving frontend performance, rendering efficiency, responsiveness, and overall user experience.",
    technologies: [
      "Code Splitting",
      "Lazy Loading",
      "Memoization",
      "Virtualization",
    ],
  },
  {
    title: "Bug Fixing & Maintenance",
    description:
      "Diagnosing and resolving frontend issues, fixing responsive layout problems, debugging React components, and maintaining existing websites.",
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "Browser DevTools",
    ],
  },
];
