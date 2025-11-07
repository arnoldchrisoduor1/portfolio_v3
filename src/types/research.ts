export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
  date: string;
  category: string;
  link?: string;
  tags: string[];
}

export interface ResearchProject {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  category?: string;
  date?: string;
  abstract?: string;
  objectives?: string[];
  methodology?: string;
  results?: string;
  technologies?: string[];
  link?: string;
  publication?: string;
  status?: string;
}

export type ActiveSection = "blog" | "research";