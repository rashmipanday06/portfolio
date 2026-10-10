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
      "Improving frontend performance, responsiveness, rendering efficiency, and overall user experience.",
    technologies: [
      "Code Splitting",
      "Lazy Loading",
      "Memoization",
      "Virtualization",
    ],
  },
];