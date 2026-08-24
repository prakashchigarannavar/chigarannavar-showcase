export const profile = {
  name: "Prakash",
  fullName: "Prakash Chigarannavar",
  role: "Java Full Stack Developer",
  location: "Bengaluru, Karnataka, India",
  email: "prakashchigarannavar@gmail.com",
  phone: "+91 9535343925",
  github: "https://github.com/prakashchigarannavar",
  linkedin: "https://www.linkedin.com/in/prakash-chigarannavar-a6129037a",
  resume: "/resume.pdf",
  languages: ["English", "Hindi", "Kannada"],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  { title: "Programming", icon: "Code2", skills: ["Java", "JavaScript", "Data Structures & Algorithms"] },
  { title: "Frontend", icon: "Layout", skills: ["HTML5", "CSS3", "React.js", "Responsive UI"] },
  { title: "Backend", icon: "Server", skills: ["Spring Boot", "REST APIs", "Core Java", "JDBC"] },
  { title: "Database", icon: "Database", skills: ["SQL", "MySQL", "Schema Design"] },
  { title: "Tools", icon: "GitBranch", skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman"] },
  { title: "Other", icon: "Sparkles", skills: ["Problem Solving", "Prompt Engineering", "GitHub Copilot", "Agile Basics"] },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  demo: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "AI-Driven Financial Recovery & Debt Optimization",
    description:
      "A financial planning platform that analyses income, expenses and debt to generate personalised repayment strategies with AI-based insights.",
    tech: ["React.js", "FastAPI", "Python", "MySQL"],
    features: ["Personalised repayment plans", "Expense tracking & predictive analytics", "Real-time dashboards"],
    github: "https://github.com/prakashchigarannavar",
    demo: "https://example.com",
    accent: "from-primary/25",
  },
  {
    title: "Hospital Management System",
    description:
      "End-to-end hospital operations system covering patients, doctors, appointments and billing with a secure, database-driven backend.",
    tech: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
    features: ["Patient registration & records", "Appointment scheduling", "Doctor management & billing"],
    github: "https://github.com/prakashchigarannavar",
    demo: "https://example.com",
    accent: "from-accent/25",
  },
  {
    title: "Wedding Management System",
    description:
      "Event management application for planning weddings — vendors, guests, budgets and schedules in one organised workspace.",
    tech: ["Java", "Spring Boot", "MySQL", "Bootstrap"],
    features: ["Vendor & venue management", "Guest list and RSVP tracking", "Budget and timeline planner"],
    github: "https://github.com/prakashchigarannavar",
    demo: "https://example.com",
    accent: "from-primary/25",
  },
  {
    title: "AI Resume Builder",
    description:
      "Web app that helps candidates generate ATS-friendly resumes with AI-assisted content suggestions and instant PDF export.",
    tech: ["React.js", "JavaScript", "REST APIs", "Tailwind CSS"],
    features: ["AI content suggestions", "Multiple resume templates", "One-click PDF download"],
    github: "https://github.com/prakashchigarannavar",
    demo: "https://example.com",
    accent: "from-accent/25",
  },
  {
    title: "Netflix Frontend Clone",
    description:
      "Pixel-focused streaming UI clone built to practise component architecture, responsive layouts and API-driven rendering.",
    tech: ["React.js", "CSS3", "REST APIs"],
    features: ["Responsive rows & hero banner", "Dynamic content from API", "Hover previews and routing"],
    github: "https://github.com/prakashchigarannavar",
    demo: "https://example.com",
    accent: "from-primary/25",
  },
];

export const experience = {
  role: "Java Full Stack Development Intern",
  company: "KodNest Technologies",
  location: "Bengaluru, Karnataka",
  period: "16 weeks · Completed Feb 2026",
  responsibilities: [
    "Built full-stack modules using Java, Spring Boot and MySQL with REST API integration.",
    "Developed responsive frontends with HTML, CSS, JavaScript and React.js components.",
    "Practised daily DSA and debugging exercises alongside structured project work.",
  ],
  technologies: ["Java", "Spring Boot", "MySQL", "REST APIs", "HTML", "CSS", "JavaScript", "Git"],
  achievements: [
    "Delivered the Hospital Management System as the capstone full-stack project.",
    "Gained hands-on exposure to the complete software development lifecycle.",
    "Strengthened problem-solving through 300+ coding exercises and assessments.",
  ],
};

export const education = [
  {
    degree: "B.E. — Computer Science Engineering",
    institute: "Karavali Institute of Technology, Mangalore",
    period: "2022 – 2026",
    score: "CGPA: 7.5",
  },
  {
    degree: "Class XII — PCMB",
    institute: "SJ PU College, Bengaluru",
    period: "2020 – 2022",
    score: "63.4%",
  },
  {
    degree: "Class X",
    institute: "Aihole High School",
    period: "2019 – 2020",
    score: "81.2%",
  },
];

export const certifications = [
  {
    title: "Java Full Stack Internship",
    issuer: "KodNest Technologies",
    year: "2026",
    detail: "16-week industry-oriented program in Java, web technologies and databases.",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Self-paced practice",
    year: "2025",
    detail: "Consistent problem solving across arrays, strings, trees and graphs.",
  },
  {
    title: "AI & Productivity Tools",
    issuer: "ChatGPT · GitHub Copilot",
    year: "2025",
    detail: "Prompt engineering and AI-assisted development workflows.",
  },
];
