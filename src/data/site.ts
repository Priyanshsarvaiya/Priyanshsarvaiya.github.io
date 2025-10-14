// src/data/site.ts
import type { SiteData } from "../types";

export const site: SiteData = {
  name: "Priyansh Sarvaiya",
  title: "Computing Science @ SFU · AI · DevOps · Full-Stack",
  email: "priyanshsar96@gmail.com",
  socials: {
    github: "https://github.com/Priyanshsarvaiya",
    linkedin: "https://www.linkedin.com/in/priyanshsarvaiya/",
  },
  projects: [
    {
      title: "ProveIt - Project-Based Tech Hiring",
      summary:
        "Secure, job-like assessments with AI coding assist and code quality reports.",
      tags: ["React", "Node", "Docker", "RAG"],
      repo: "https://github.com/ProveItHQ/proveit-landing",
      live: "https://proveit.me",
      image: "/images/placeholder.png",
    },
    {
      title: "Movie Recommendation System",
      summary: "Content-based + collaborative filtering hybrid.",
      tags: ["Python", "Pandas", "Recommenders"],
      repo: "https://github.com/Priyanshsarvaiya/Movie-Recommendation-System",
      image: "/images/placeholder.png",
    },
    {
      title: "Electricity Grid Anomaly Detection",
      summary: "Markov models to detect grid irregularities.",
      tags: ["Python", "Markov", "Data"],
      repo: "https://github.com/Priyanshsarvaiya/Analyzing-Electricity-Grids-using-Markov-Models",
      image: "/images/placeholder.png",
    },
    {
      title: "Emergency Reporting System",
      summary: "Secure mobile-first reporting with real-time alerts.",
      tags: ["Android", "Firebase"],
      repo: "https://github.com/DaiwikMarrott/SecureThings_272_GP",
      image: "/images/placeholder.png",
    },
  ],
  skills: {
  Languages: [
    "TypeScript",
    "Python",
    "C",
    "C++",
    "SQL",
    "JavaScript",
    "Bash",
  ],
  Frameworks: [
    "React",
    "FastAPI",
    "LangChain",
    "Next.js",
    "Express",
    "Node.js",
    "Vite",
    "Tailwind CSS",
  ],
  DevOps: [
    "Docker",
    "GitHub Actions",
    "Linux Server Management",
    "Terraform",
    "CI/CD Pipelines",
    "Nginx",
    "AWS EC2 / S3",
    "ServiceNow",
  ],
  "Data/ML": [
    "Pandas",
    "NumPy",
    "scikit-learn",
    "Matplotlib",
    "Seaborn",
    "RAG",
    "OpenAI / Hugging Face APIs",
    "LangChain Agents",
  ],
  Tools: [
    "VS Code",
    "Postman",
    "Git / GitHub",
    "Jira",
    "Confluence",
    "Figma",
    "n8n",
    "VirtualBox / VMware",
  ],
},
  timeline: [
    {
      when: "2025",
      title: "Kochasoft - IT Ops Intern",
      details: ["Windows/Linux infra", "Patching", "Ticket triage"],
    },
    {
      when: "2024-2027",
      title: "Simon Fraser University",
      details: ["Computing Science (BSc)"],
    },
  ],
};