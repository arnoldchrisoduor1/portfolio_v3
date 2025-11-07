"use client";
import { motion } from "framer-motion";
import { FileText, Brain, Network, Shield, ExternalLink, X } from "lucide-react";
import { ResearchProject } from "@/types/research";

interface ResearchModalProps {
  project: ResearchProject;
  onClose: () => void;
}

const ResearchModal: React.FC<ResearchModalProps> = ({ project, onClose }) => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-900 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full border border-green-500/20"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {/* Header */}
          <div className="sticky top-0 bg-gray-900 border-b border-green-500/20 p-6 flex justify-between items-start z-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <span className="text-gray-400 text-sm">{project.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              <p className="text-lg text-green-400 mt-1">{project.subtitle}</p>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 hover:bg-white/10 rounded-full transition-colors ml-4"
            >
              <X size={24} className="text-gray-400" />
            </button>
          </div>

          <div className="p-6 space-y-8">
            {/* Abstract */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <FileText className="text-green-400" size={20} />
                Abstract
              </h3>
              <p className="text-gray-300 leading-relaxed">{project.abstract}</p>
            </div>

            {/* Objectives */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Brain className="text-green-400" size={20} />
                Research Objectives
              </h3>
              <ul className="space-y-2">
                {(project.objectives ?? []).map((objective, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    {objective}
                  </li>
                ))}
              </ul>
            </div>

            {/* Methodology */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Network className="text-green-400" size={20} />
                Methodology
              </h3>
              <p className="text-gray-300 leading-relaxed">{project.methodology}</p>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Shield className="text-green-400" size={20} />
                Key Results
              </h3>
              <p className="text-gray-300 leading-relaxed">{project.results}</p>
            </div>

            {/* Publication & Links */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-green-500/20">
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg transition-colors text-white font-medium"
                >
                  <ExternalLink size={20} />
                  Read Full Paper
                </a>
              )}
              {project.publication && (
                <div className="flex-1">
                  <p className="text-sm text-gray-400">Published in</p>
                  <p className="text-green-400 font-medium">{project.publication}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ResearchModal;