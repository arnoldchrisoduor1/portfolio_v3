export interface UIStore {
    showSocials: boolean;
    setShowSocials: (value: boolean) => void;

    activeNav: string;
    setActiveNav: (nav: string) => void;

    activeProjectTab: string;
    setActiveProjectTab: (project: string) => void;
}

export interface Tool {
    id: number;
    item: string;
    color: string;
  }
  
  export interface Project {
    id: string;
    category: string;
    title: string;
    description: string;
    tools: Tool[];
    delay: number;
  }
  
  export interface UIStore {
    activeProjectTab: string;
    setActiveProjectTab: (tab: string) => void;
  }
  
  // For the loading state
  export type LoadingState = boolean;
  
  // For the filtered projects
  export type FilteredProjects = Project[];