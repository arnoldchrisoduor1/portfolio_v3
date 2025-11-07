"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/sections/Navigation";
import Footer from "../components/Footer";
import HeroSection from "../components/common/HeroSection";
import SectionToggle from "../components/research/SectionToggle";
import BlogSection from "../components/research/BlogSection";
import ResearchSection from "../components/research/ResearchSection";
import ResearchModal from "../components/research/ResearchModal";
// import { blogPosts, researchProjects } from "@/data/researchData";
import { blogPosts, researchProjects } from "@/app/data/researchData";
import { ActiveSection, ResearchProject } from "@/types/research";

const ResearchPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>("blog");
  const [selectedResearch, setSelectedResearch] = useState<ResearchProject | null>(null);

  const openResearchModal = (project: ResearchProject) => {
    setSelectedResearch(project);
    document.body.style.overflow = "hidden";
  };

  const closeResearchModal = () => {
    setSelectedResearch(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <Navigation />

      <main className="min-h-screen pt-20">
        <HeroSection />

        {/* Content Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionToggle 
              activeSection={activeSection} 
              onSectionChange={setActiveSection} 
            />

            <AnimatePresence mode="wait">
              {activeSection === "blog" && (
                <motion.div 
                  key="blog" 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -20 }} 
                  transition={{ duration: 0.5 }}
                >
                  <BlogSection posts={blogPosts} />
                </motion.div>
              )}

              {activeSection === "research" && (
                <motion.div 
                  key="research" 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -20 }} 
                  transition={{ duration: 0.5 }}
                >
                  <ResearchSection 
                    projects={researchProjects} 
                    onProjectSelect={openResearchModal} 
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

      {/* Research Project Modal */}
      <AnimatePresence>
        {selectedResearch && (
          <ResearchModal 
            project={selectedResearch} 
            onClose={closeResearchModal} 
          />
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default ResearchPage;