import type { Project } from "../types/project";
import erp from "../assets/images/erp.jpg"
import arstonellp from "../assets/images/arstonellp.png"
import admindasboard from "../assets/images/adminpanel.png"
import epay from "../assets/images/erp.jpg"
import taskflow from "../assets/images/task-flow.png"

export const projects: Project[] = [
  {
    title: "Barstone LLP",
    description:
      "A premium, responsive law firm website showcasing practice areas, people, industry sectors, insights, careers, and global presence, with a refined visual identity and responsive navigation.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "Framer Motion",
    ],
    category: "Client Project",
    status: "live",
    liveUrl: "https://www.barstonellp.com",
    featured: true,
    image: arstonellp,
  },

  {
    title: "Admin Panel",
    description:
      "A role-based administration dashboard built independently, featuring authentication, dashboard statistics, user and order management, API integration, loading and error states, and responsive layouts.",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Context API",
      "Tailwind CSS",
      "Chart.js",
    ],
    category: "Personal Project",
    status: "live",
    liveUrl:
      "https://react-admin-starter-sigma.vercel.app/dashboard",
    githubUrl:
      "https://github.com/rashmipanday06/react-admin-starter",

    featured: true,
        image: admindasboard,
  },

  {
    title: "ERP Finance & Operations",
    description:
      "An enterprise ERP frontend covering purchasing, sales, material management, finance, payroll, and reporting. Focused on reusable React components, complex data grids, shared state management, and performance optimization for data-intensive workflows.",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Context API",
      "DevExtreme DataGrid",
      "REST APIs",
    ],
    category: "Industry Project",
    status: "completed",
    featured: true,
    image: erp,
  },

  {
    title: "Sales Automation Platform",
    description:
      "An order and inventory tracking platform that monitors product orders, shipments, dispatch status, and delivery timelines. Developed frontend features and reusable components in a cross-functional Agile team.",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "REST APIs",
      "Agile",
    ],
    category: "Industry Project",
    status: "completed",
    image: '../assets/images/sales-automation-platform.png',
    featured: false,
  },

  {
    title: "Labor Management System",
    description:
      "An employee management application supporting attendance tracking, clock-in and clock-out workflows, leave requests, and overtime. Built reusable React components and integrated backend APIs across multiple modules.",
    technologies: [
      "React",
      "Redux",
      "JavaScript",
      "REST APIs",
    ],
    category: "Industry Project",
    status: "completed",
    featured: false,
    image: epay,
  },

  {
    title: "Analytics Dashboard",
    description:
      "An internal analytics dashboard presenting employee information, attendance exceptions, leave data, and operational metrics. Contributed to frontend development and centralized state management for reporting workflows.",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "REST APIs",
    ],
    category: "Industry Project",
    status: "completed",
    featured: false,
  },

  {
    title: "Ainovesa",
    description:"Developing a modern project management platform focused on task organization, project tracking, team collaboration, and workflow management. Designed with a responsive user interface, scalable frontend architecture, and a focus on performance and usability, Ainovesa aims to help teams organize projects and manage their workflows more efficiently.",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Axios",
      "React Router",
      "Tailwind CSS",
      "REST API Integration"
    ],
    category: "Personal SaaS",
    status: "in-development",
    githubUrl:
      "https://github.com/rashmipanday06/ainovesa-web",
    featured: true,
    image: taskflow,
  },
];
