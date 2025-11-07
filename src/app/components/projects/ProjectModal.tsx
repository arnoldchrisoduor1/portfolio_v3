"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, Github, AlertTriangle } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  activeImageIndex: number;
  setActiveImageIndex: (i: number) => void;
}

const groupByCategory = (technologies: any[]) => {
  const grouped: Record<string, any[]> = {};
  technologies.forEach((tech) => {
    if (!grouped[tech.category]) {
      grouped[tech.category] = [];
    }
    grouped[tech.category].push(tech);
  });
  return grouped;
};

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  onClose, 
  activeImageIndex, 
  setActiveImageIndex 
}) => {
  return (
    <div className="relative">
      {/* Header */}
      <div className="sticky top-0 bg-gray-900 border-b border-white/10 p-6 flex justify-between items-center z-10">
        <div>
          <h2 className="text-3xl font-bold text-white">{project.title}</h2>
          <p className="text-gray-400">{project.subtitle}</p>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <X size={24} className="text-gray-400" />
        </button>
      </div>

      <div className="p-6 space-y-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image 
              src={project.images[activeImageIndex]} 
              alt={project.title} 
              fill 
              className="object-cover" 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw" 
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {project.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`relative h-20 w-32 rounded-lg overflow-hidden flex-shrink-0 ${
                  activeImageIndex === index ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <Image 
                  src={image} 
                  alt={`${project.title} ${index + 1}`} 
                  fill 
                  className="object-cover" 
                  sizes="128px" 
                />
              </button>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Overview</h3>
          <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
        </div>

        {/* Key Metrics */}
        {project.metrics && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="bg-white/5 rounded-lg p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-2xl font-bold text-blue-400 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Technologies */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Technologies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(groupByCategory(project.technologies)).map(([category, techs]) => (
              <div key={category}>
                <h4 className="text-lg font-medium text-gray-300 mb-3">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span key={tech.name} className="px-3 py-2 bg-white/10 rounded-lg text-sm text-gray-300">
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        {project.challenges && (
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Challenges & Solutions</h3>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 rounded-lg p-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                    <div className="flex-1">
                      <h4 className="font-medium text-white mb-2">{challenge.problem}</h4>
                      <p className="text-gray-300 text-sm mb-2">
                        <strong>Solution:</strong> {challenge.solution}
                      </p>
                      <p className="text-green-400 text-sm">
                        <strong>Impact:</strong> {challenge.impact}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Development Process */}
        {project.process && (
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Development Process</h3>
            <div className="space-y-4">
              {project.process.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    {index < (project.process?.length ?? 0) - 1 && (
                      <div className="w-0.5 h-full bg-gray-600 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <h4 className="font-medium text-white mb-2">{phase.phase}</h4>
                    <p className="text-gray-300 text-sm mb-2">{phase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.tools.map((tool) => (
                        <span key={tool} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-400">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Project Links */}
        <div className="flex gap-4 pt-6 border-t border-white/10">
          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
            >
              <Github size={20} />
              View Code
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors text-white"
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};