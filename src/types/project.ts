export interface Technology {
  name: string;
  category: string;
}

export interface Challenge {
  problem: string;
  solution: string;
  impact: string;
}

export interface ProcessPhase {
  phase: string;
  description: string;
  tools: string[];
}

export interface Testing {
  approach: string;
  tools: string[];
  coverage?: string;
}

export interface Deployment {
  infrastructure?: string;
  monitoring?: string;
  cicd?: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  fullDescription?: string;
  categories: string[];
  technologies: Technology[];
  images: string[];
  challenges?: Challenge[];
  process?: ProcessPhase[];
  testing?: Testing;
  deployment?: Deployment;
  metrics?: Metric[];
  codeLink?: string | null;
  liveLink?: string | null;
  featured?: boolean;
  delay?: number;
}