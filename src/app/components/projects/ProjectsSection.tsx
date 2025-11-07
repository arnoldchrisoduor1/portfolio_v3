"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import useUIStore from "@/store/useStore";
import { projects } from "@/app/data/project";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Project } from "@/types/project";

export const ProjectsSection: React.FC = () => {
  const { activeProjectTab, setActiveProjectTab } = useUIStore() as {
    activeProjectTab: string;
    setActiveProjectTab: (tab: string) => void;
  };

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const categories = useMemo<string[]>(() => {
    const allCategories = new Set<string>(["all", "featured"]);
    projects.forEach((project) => {
      project.categories.forEach((category) => allCategories.add(category));
    });
    return Array.from(allCategories);
  }, []);

  const filteredProjects = useMemo<Project[]>(() => {
    if (activeProjectTab === "all") return projects;
    if (activeProjectTab === "featured") return projects.filter((p) => p.featured);
    return projects.filter((project) => project.categories.includes(activeProjectTab));
  }, [activeProjectTab]);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="inline-flex items-center gap-3 mb-6" whileHover={{ scale: 1.05 }}>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-blue-400 tracking-wide">PROJECT PORTFOLIO</span>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
            Building{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, each project represents a unique challenge and an opportunity to innovate. Here's a showcase of my technical journey.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveProjectTab(category)}
              className={`px-6 py-3 rounded-full border text-sm font-medium transition-all duration-300 capitalize ${
                activeProjectTab === category 
                  ? "bg-white text-black border-white" 
                  : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onProjectClick={openProjectModal}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectModal}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl max-w-6xl max-h-[90vh] overflow-y-auto w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ProjectModal
                project={selectedProject}
                onClose={closeProjectModal}
                activeImageIndex={activeImageIndex}
                setActiveImageIndex={setActiveImageIndex}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;