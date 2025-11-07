"use client";
import { motion } from "framer-motion";
import { BookOpen, FileText } from "lucide-react";
import { ActiveSection } from "@/types/research";

interface SectionToggleProps {
  activeSection: ActiveSection;
  onSectionChange: (section: ActiveSection) => void;
}

const SectionToggle: React.FC<SectionToggleProps> = ({ activeSection, onSectionChange }) => {
  return (
    <motion.div 
      className="flex justify-center gap-4 mb-12" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <button
        onClick={() => onSectionChange("blog")}
        className={`px-8 py-4 rounded-full border text-lg font-medium transition-all duration-300 flex items-center gap-3 ${
          activeSection === "blog" 
            ? "bg-green-500 text-white border-green-500" 
            : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
        }`}
      >
        <BookOpen size={20} />
        Technical Blog
      </button>
      <button
        onClick={() => onSectionChange("research")}
        className={`px-8 py-4 rounded-full border text-lg font-medium transition-all duration-300 flex items-center gap-3 ${
          activeSection === "research" 
            ? "bg-green-500 text-white border-green-500" 
            : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
        }`}
      >
        <FileText size={20} />
        Research Projects
      </button>
    </motion.div>
  );
};

export default SectionToggle;