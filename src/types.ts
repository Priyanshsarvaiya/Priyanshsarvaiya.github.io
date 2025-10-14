// src/types.ts
export type Project = {
  title: string;
  summary: string;
  tags: string[];
  repo?: string;
  live?: string;
  image?: string;
};

export type SiteData = {
  name: string;
  title: string;
  email: string;
  socials: {
    github?: string;
    linkedin?: string;
  };
  projects: Project[];
  skills: Record<string, string[]>;
  timeline: { when: string; title: string; details: string[] }[];
};