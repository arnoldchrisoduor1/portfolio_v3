export interface UIStore {
    showSocials: boolean;
    setShowSocials: (value: boolean) => void;

    activeNav: string;
    setActiveNav: (nav: string) => void;

    activeProjectTab: string;
    setActiveProjectTab: (tab: string) => void;
}

export interface Tool {
  id: number;
  item: string;
  color: string;
}

export interface Project {
  id: string;
  categories: string[]; // Changed from category to categories (array)
  title: string;
  description: string;
  tools: Tool[];
  codeLink: string | null; // Added code repository link
  liveLink: string | null; // Added live project link
  delay: number;
}

export type FilteredProjects = Project[];

export type LoadingState = boolean;
