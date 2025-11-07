import { UIStore } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUIStore = create<UIStore>()(
  persist(
    (set) => ({
      showSocials: false,
      setShowSocials: (value) => set({ showSocials: value }),

      activeNav: "about",
      setActiveNav: (nav) => set({ activeNav: nav }),

      activeProjectTab: "all",
      setActiveProjectTab: (project) => set({ activeProjectTab: project }),

      selectedProject: null,
setSelectedProject: (project) => set({ selectedProject: project }),
    }),
    {
      name: "ui-store",
      partialize: (state) => ({ activeNav: state.activeNav }), 
    }
  )
);

export default useUIStore;
